-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 10, 2022 at 09:37 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackathon2022`
--

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `business_id` int(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `phone` int(100) NOT NULL,
  `business_area` varchar(100) DEFAULT NULL,
  `password` varchar(65) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `message_id` int(11) NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `reciever_id` int(11) DEFAULT NULL,
  `attachments` varchar(200) NOT NULL,
  `text` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `juniors`
--

CREATE TABLE `juniors` (
  `junior_id` int(100) NOT NULL,
  `name` varchar(65) DEFAULT NULL,
  `password` varchar(65) DEFAULT NULL,
  `mail` varchar(65) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `juniors`
--

INSERT INTO `juniors` (`junior_id`, `name`, `password`, `mail`) VALUES
(1, 'david', '$2a$10$i.yiGorC62/QBTMCz1bZQeeKHLlqvjp9KAlCN1GU.qsa7fBmIcDUu', 'mail@mail.com'),
(2, 'david', '$2a$10$Ek.fi55F0SNjGkerjH37FeMrnmFsg6LjnmsL9eMPWigAXs9zMkL/i', 'mail1@mail.com'),
(3, 'david23', '$2a$10$jHh3R6iwJd9ULISFbKHonut6HjpcjD7lV0Z7I/aJ.ffMX9WLCAs8q', 'mail1234@mail.com'),
(4, 'TEST', 'qertwefgdfawefadsfa', 'ert@erty.com'),
(5, 'TEST', '$2a$10$NqqQWLueOfup6taTSNEElOUL.qWN0M461.q2GNVhbEZ00IShpvZrG', 'emailqwer@mail.com'),
(6, 'TEST', '$2a$10$.E8SOeFadLRZhlmNkWyUge9NtYefjs/CXr88aL/0dchHhBc3kh3ya', 'emailqwe12r@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `business_area` varchar(100) DEFAULT NULL,
  `experation_date` date DEFAULT NULL,
  `remote` tinyint(1) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`business_id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `juniors`
--
ALTER TABLE `juniors`
  ADD PRIMARY KEY (`junior_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business`
--
ALTER TABLE `business`
  MODIFY `business_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `juniors`
--
ALTER TABLE `juniors`
  MODIFY `junior_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
