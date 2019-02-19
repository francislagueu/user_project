import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  public url = 'http://localhost:3000';
  constructor(public http: HttpClient) {}

  async getAllUsers() {
    return this.http.get(this.url + '/users');
  }

  async getUser(id) {
    return this.http.get(this.url + '/users/' + id);
  }

  async createUser(body) {
    return this.http.post(this.url + '/users', body);
  }

  async updateUser(body, id) {
    return this.http.put(this.url + '/users/' + id, body);
  }

  async deleteUser(id) {
    return this.http.delete(this.url + '/users/' + id);
  }

  async getAllProjects() {
    return this.http.get(this.url + '/projects');
  }

  async getProject(id) {
    return this.http.get(this.url + '/projects/' + id);
  }

  async createProject(body) {
    return this.http.post(this.url + '/projects', body);
  }
  async updateProject(id, body) {
    return this.http.put(this.url + '/projects/' + id, body);
  }
  async deleteProject(id) {
    return this.http.delete(this.url + '/projects/' + id);
  }

  async getUserProject(userId) {
    return this.http.get(this.url + '/user-projects/' + userId);
  }
}
