-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 23, 2022 at 09:19 AM
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
  `business_area` varchar(100) DEFAULT NULL,
  `user_id` int(100) NOT NULL,
  `website` varchar(250) NOT NULL,
  `social_media` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `juniors`
--

CREATE TABLE `juniors` (
  `junior_id` int(11) NOT NULL,
  `user_id` int(100) NOT NULL,
  `phone` int(100) NOT NULL,
  `degree` varchar(100) DEFAULT NULL,
  `academy` varchar(100) DEFAULT NULL,
  `linkedin` varchar(250) NOT NULL,
  `skill1` int(11) NOT NULL,
  `skill2` int(11) DEFAULT NULL,
  `skill3` int(11) DEFAULT NULL,
  `personalNote` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `description` varchar(500) DEFAULT NULL,
  `publisher_id` int(100) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `name`, `business_area`, `experation_date`, `remote`, `description`, `publisher_id`, `status`) VALUES
(1, 'דו״ח שנתי', 'חשבונאות', '2022-05-31', 0, 'צריך להגיש דו״ח שנתי לדוגמא או משהו כזה', 2, 0),
(2, 'דו״ח קבעוני', 'כלכלה', '2022-05-31', 0, 'צריך להגיש דו״ח כלשהו לדוגמא או משהו כזה', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `serviceCategories`
--

CREATE TABLE `serviceCategories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `serviceCategories`
--

INSERT INTO `serviceCategories` (`id`, `name`) VALUES
(1, 'Tech');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `skill_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skill_id`, `name`, `category`) VALUES
(1, 'JAVA', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `mail` varchar(200) NOT NULL,
  `password` varchar(64) NOT NULL,
  `isJunior` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `mail`, `password`, `isJunior`) VALUES
(2, 'TEST', 'Business', 'mail1@mail.com', '$2a$10$fUDeCc6xe9h1iEVLQ16gGO5TdjJupsAMoguL0EVsIr7LoPkxbzMjO', 0),
(4, 'TEST3', 'junior', 'email2@mail.com', '$2a$10$s7jXeAT3B9l4IQ6td2n/4e88XjdQrMWnXNrq/nwAjqRcz6hHbxSd2', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`business_id`);

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
-- Indexes for table `serviceCategories`
--
ALTER TABLE `serviceCategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
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
-- AUTO_INCREMENT for table `juniors`
--
ALTER TABLE `juniors`
  MODIFY `junior_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `serviceCategories`
--
ALTER TABLE `serviceCategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
