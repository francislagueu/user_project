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
-- Table structure for table `userproject`
--

CREATE TABLE IF NOT EXISTS `userproject` (
  `UserId` int(11) NOT NULL,
  `ProjectId` int(11) NOT NULL,
  `IsActive` bit(1) NOT NULL,
  `AssignedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userproject`
--

INSERT INTO `userproject` (`UserId`, `ProjectId`, `IsActive`, `AssignedDate`) VALUES
(145, 357, b'1', '2019-02-15 00:00:00'),
(145, 951, b'0', '2019-02-19 00:00:00'),
(145, 372, b'1', '2019-03-19 00:00:00'),
(145, 235, b'0', '2019-01-15 00:00:00'),
(145, 158, b'1', '2019-03-05 00:00:00'),
(123, 258, b'1', '2019-05-05 00:00:00'),
(123, 369, b'0', '2019-02-10 00:00:00'),
(123, 427, b'1', '2019-03-07 00:00:00'),
(123, 457, b'0', '2019-06-07 00:00:00'),
(123, 756, b'1', '2019-04-20 00:00:00'),
(231, 965, b'0', '2019-04-06 00:00:00'),
(231, 801, b'0', '2019-05-24 00:00:00'),
(231, 921, b'1', '2019-05-01 00:00:00'),
(231, 653, b'0', '2019-03-11 00:00:00'),
(231, 233, b'1', '2019-04-28 00:00:00'),
(978, 345, b'0', '2019-06-01 00:00:00'),
(978, 671, b'0', '2019-06-06 00:00:00'),
(978, 869, b'1', '2019-06-15 00:00:00'),
(978, 853, b'0', '2019-05-20 00:00:00'),
(978, 195, b'1', '2019-05-02 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userproject`
--
ALTER TABLE `userproject`
  ADD KEY `UserId` (`UserId`),
  ADD KEY `ProjectId` (`ProjectId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `userproject`
--
ALTER TABLE `userproject`
  ADD CONSTRAINT `userproject_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `user` (`Id`),
  ADD CONSTRAINT `userproject_ibfk_2` FOREIGN KEY (`ProjectId`) REFERENCES `project` (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
