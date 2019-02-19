-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3308
-- Generation Time: Feb 19, 2019 at 04:37 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `Id` int(10) NOT NULL,
  `StartDate` datetime NOT NULL,
  `EndDate` datetime NOT NULL,
  `Credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`Id`, `StartDate`, `EndDate`, `Credits`) VALUES
(158, '2019-02-28 00:00:00', '2019-03-31 00:00:00', 10),
(195, '2019-04-21 00:00:00', '2019-06-08 00:00:00', 10),
(233, '2019-04-28 00:00:00', '2019-05-25 00:00:00', 21),
(235, '2019-01-22 00:00:00', '2019-04-30 00:00:00', 27),
(258, '2019-05-05 00:00:00', '2019-06-02 00:00:00', 11),
(345, '2019-06-01 00:00:00', '2019-07-10 00:00:00', 14),
(357, '2019-01-15 00:00:00', '2019-03-25 00:00:00', 21),
(369, '2019-02-10 00:00:00', '2019-03-25 00:00:00', 18),
(372, '2019-04-26 00:00:00', '2019-05-31 00:00:00', 15),
(427, '2019-03-07 00:00:00', '2019-03-31 00:00:00', 15),
(457, '2019-06-07 00:00:00', '2019-07-29 00:00:00', 9),
(653, '2019-03-11 00:00:00', '2019-05-30 00:00:00', 19),
(671, '2019-06-06 00:00:00', '2019-08-30 00:00:00', 32),
(756, '2019-04-20 00:00:00', '2019-05-31 00:00:00', 8),
(801, '2019-05-24 00:00:00', '2019-06-30 00:00:00', 12),
(853, '2019-05-23 00:00:00', '2019-07-10 00:00:00', 25),
(869, '2019-07-22 00:00:00', '2019-08-30 00:00:00', 16),
(921, '2019-05-01 00:00:00', '2019-06-15 00:00:00', 17),
(951, '2019-02-25 00:00:00', '2019-05-03 00:00:00', 31),
(965, '2019-04-06 00:00:00', '2019-06-01 00:00:00', 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
