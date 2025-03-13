-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2025 at 04:32 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `echoblog_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `bio` varchar(200) DEFAULT NULL,
  `qualification` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'reader',
  `profile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `profile`, `createdAt`, `updatedAt`) VALUES
('37454170-feeb-11ef-b630-93e851a3eb9f', 'Noman', 'User@gmail.com', '$2b$10$Vi0bAM55A9ptW1e1kZjd3Ow.oGM3fjLhHCcCt6HgVYb.lRseK1UNu', 'reader', 'profile-1742239666768.jpeg', '2025-03-12 02:39:26', '2025-03-12 03:06:57'),
('add71720-ffb6-11ef-b85c-15271efd4039', 'Noman', 'Noman123@gmail.com', '$2b$10$y7xYPBBVGLd2EysZU/Crb.Fk0qT4iHnSyxfQWjm/M4rJIAVTwNAEy', 'reader', NULL, '2025-03-13 02:55:53', '2025-03-13 02:55:53'),
('f77814f0-ff85-11ef-bbdc-39780555b6d9', 'Admin', 'Admin@echoblog.com', '$2b$10$2X8K8ooe/IaC5Kc4iFIbjePhtpWNlMdQnCINesRCrKJ7PV0OlZzWe', 'admin', NULL, '2025-03-12 21:07:11', '2025-03-12 21:07:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
