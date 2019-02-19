const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');
const sql = require('mysql');

const app = express();

const port = 3000;

const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user_project',
  port: 3308
}

const pool = sql.createPool(config);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(volleyball);

app.get('/', (req, res) => {
  res.send("Hello world!!");
});

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM user', (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM user WHERE Id = ?', id, (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

app.post('/users', (req, res) => {
  pool.query('INSERT INTO user SET ?', req.body, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(201).send("Successfully Created");

  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  pool.query('UPDATE user SET ? WHERE Id = ?', [req.body, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Successfully Updated");
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM user WHERE Id = ?', id, (error, result) => {
    if (error) {
      throw error;
    }
    res.send("User Deleted");
  });
});

app.get('/projects', (req, res) => {
  pool.query('SELECT * FROM project', (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

app.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM project WHERE Id = ?', id, (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

app.post('/projects', (req, res) => {
  pool.query('INSERT INTO project SET ?', req.body, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(201).send("Successfully Created");

  });
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  pool.query('UPDATE project SET ? WHERE Id = ?', [req.body, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Successfully Updated");
  });
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM project WHERE Id = ?', id, (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Project Deleted");
  });
});

app.get('/user-projects', (req, res) => {
  pool.query('SELECT * FROM userproject', (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

app.get('/user-projects/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM userproject WHERE UserId = ?', id, (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result);
  });
});

app.post('/user-projects', (req, res) => {
  pool.query('INSERT INTO userproject SET ?', req.body, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(201).send("Successfully Created");

  });
});

app.put('/user-projects/:id', (req, res) => {
  const { id } = req.params;
  pool.query('UPDATE userproject SET ? WHERE UserId = ?', [req.body, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.send("Successfully Updated");
  });
});

app.delete('/user-projects/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM userproject WHERE UserId = ?', id, (error, result) => {
    if (error) {
      throw error;
    }
    res.send("User's Project deleted Deleted");
  });
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
})
