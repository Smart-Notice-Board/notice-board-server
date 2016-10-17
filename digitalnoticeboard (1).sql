-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Oct 17, 2016 at 05:22 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digitalnoticeboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `COLLEGE_DET`
--

CREATE TABLE `COLLEGE_DET` (
  `college_name` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `id` int(100) NOT NULL,
  `board_name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `COLLEGE_DET`
--

INSERT INTO `COLLEGE_DET` (`college_name`, `department`, `id`, `board_name`) VALUES
('rvce', 'cse', 1, 'higher studies'),
('pesit', 'ise', 2, 'machine learning'),
('rvce', 'mech', 3, 'nlp'),
('rvce', 'cse', 4, 'compiler'),
('RV', 'Computer Science', 6, 'Demo');

-- --------------------------------------------------------

--
-- Table structure for table `NOTICE`
--

CREATE TABLE `NOTICE` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `type` text NOT NULL,
  `notice_priority` int(11) NOT NULL,
  `username` text NOT NULL,
  `path` varchar(200) NOT NULL,
  `college_name` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `startTime` varchar(200) NOT NULL,
  `endTime` varchar(200) NOT NULL,
  `notice_content` varchar(100) NOT NULL,
  `board_name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `NOTICE`
--

INSERT INTO `NOTICE` (`id`, `description`, `type`, `notice_priority`, `username`, `path`, `college_name`, `department`, `startTime`, `endTime`, `notice_content`, `board_name`) VALUES
(3, 'ejfaljekljlFK', 'IMP', 4, 'yanky', '', 'rvce', 'cse', '10/07/2015 20:20', '10/07/2015 23:20', '', ''),
(4, 'Hello', 'Important', 1, 'rag', '', 'rvce', 'cse', '10/07/2015 23:20', '10/07/2015 00:20', '', ''),
(5, 'Hello pesit', 'very Important', 2, 'abcd', '', 'pesit', 'mech', '10/07/2015 18:20', '10/07/2015 20:20', '', ''),
(6, 's3w', 'image', 2, 'rag', 'DSC_0416.JPG', 'RV', 'Computer Science', '14/10/2016 01:44', '15/10/2016 02:18', '', 'higher studies'),
(7, 'raghav', 'text', 2, 'rag', 'no file', 'RV', 'Computer Science', '14/10/2016 01:44', '15/10/2016 02:18', 'import', 'higher studies'),
(8, 'ra video', 'video', 2, 'rag', '100_0101.mp4', 'RV', 'Computer Science', '14/10/2016 01:44', '15/10/2016 02:50', '', 'higher studies'),
(9, 'jyh gtfdesa', 'text', 1, 'rag', 'no file', 'RV', 'Computer Science', '14/10/2016 02:34', '15/10/2016 02:50', 'DESCRip', 'higher studies'),
(10, 'All in one multipurpose interfacing card', 'image', 1, 'rag', 'abhisystems-activator.jpg', 'RV', 'Computer Science', '14/10/2016 10:16', '15/10/2016 11:15', '', 'higher studies'),
(11, 'Multipurpose interfacing card', 'image', 1, 'rag', 'Slide1.JPG', 'RV', 'Computer Science', '14/10/2016 10:16', '15/10/2016 11:15', '', 'higher studies'),
(12, 'All in one multipurpose interfacing card', 'image', 1, 'rag', 'Slide1.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(13, 'Software Licensor', 'image', 1, 'rag', 'abhisystems-activator.jpg', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(14, 'Digital notice board 1', 'image', 1, 'rag', 'Slide1.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(15, 'Digital notice board 2', 'image', 1, 'rag', 'Slide2.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(16, 'Digital notice board 3', 'image', 1, 'rag', 'Slide3.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(17, 'Digital notice board 4', 'image', 1, 'rag', 'Slide4.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(18, 'Digital notice board 5', 'image', 1, 'rag', 'Slide5.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(19, 'Digital notice board 6', 'image', 1, 'rag', 'Slide6.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(20, 'Digital notice board 7', 'image', 1, 'rag', 'Slide7.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(21, 'Digital notice board 8', 'image', 1, 'rag', 'Slide8.JPG', 'RV', 'Computer Science', '14/10/2016 10:29', '15/10/2016 18:27', '', 'Demo'),
(22, 'He', 'image', 1, 'rag', 'image.jpg', 'RV', 'Computer Science', '14/10/2016 10:56', '15/11/2016 00:55', '', 'higher studies');

-- --------------------------------------------------------

--
-- Table structure for table `USER`
--

CREATE TABLE `USER` (
  `Uid` int(11) NOT NULL,
  `CollegeName` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `department` text NOT NULL,
  `user_priority` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `USER`
--

INSERT INTO `USER` (`Uid`, `CollegeName`, `username`, `password`, `department`, `user_priority`) VALUES
(1, 'RV', 'rag', '83c63dd4fe7a6717fe7e667e4361dbc3dde06c3d98c0fa12bfdd2c6f64e8', 'Computer Science', 1),
(2, 'Pesit', 'abcd', '83c63dd4fe7a6717fe7e667e4361dbc3dde06c3d98c0fa12bfdd2c6f64e8', 'Computer Science', 1),
(3, 'BIT', 'qwer', 'xcdf', 'Computer Science', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `COLLEGE_DET`
--
ALTER TABLE `COLLEGE_DET`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `NOTICE`
--
ALTER TABLE `NOTICE`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`Uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `COLLEGE_DET`
--
ALTER TABLE `COLLEGE_DET`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `NOTICE`
--
ALTER TABLE `NOTICE`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
