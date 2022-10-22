-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2022 a las 05:07:23
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `altares`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `altar`
--

CREATE TABLE `altar` (
  `ID` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `altar`
--

INSERT INTO `altar` (`ID`, `name`, `user`) VALUES
(1, 'Prueva', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `ID` int(11) NOT NULL,
  `location` varchar(50) NOT NULL,
  `altar` int(11) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`ID`, `location`, `altar`, `position`) VALUES
(1, './img/imagenes/17011.jpg', 1, 1),
(2, './img/imagenes/17016.jpg', 1, 2),
(3, './img/imagenes/59181.jpg', 1, 3),
(4, './img/imagenes/2932774_full-fondo.jpg', 1, 4),
(5, './img/imagenes/20200603195958.jpg', 1, 5),
(6, './img/imagenes/amanecer.jpg', 1, 6),
(7, './img/imagenes/Astronauta.jpg', 1, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `text`
--

CREATE TABLE `text` (
  `ID` int(11) NOT NULL,
  `text` varchar(300) NOT NULL,
  `altar` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `height` varchar(10) NOT NULL,
  `width` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `text`
--

INSERT INTO `text` (`ID`, `text`, `altar`, `position`, `height`, `width`) VALUES
(1, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 1, '30px', '250px'),
(2, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 2, '50px', '270px'),
(3, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 3, '100px', '290px'),
(4, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 4, '150px', '220px'),
(5, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 5, '200px', '240px'),
(6, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 6, '250px', '260px'),
(7, 'askdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalksaskdnvlkasdnvklasvnalks', 1, 7, '300px', '280px');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `user` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID`, `user`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', '$2y$10$MV.7EsandcRpoC2DP8TBg.BncB/rQOBXwMAzWHLHyiodlB02Bj7yC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `altar`
--
ALTER TABLE `altar`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user` (`user`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `altar` (`altar`);

--
-- Indices de la tabla `text`
--
ALTER TABLE `text`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `altar` (`altar`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `altar`
--
ALTER TABLE `altar`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `text`
--
ALTER TABLE `text`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `altar`
--
ALTER TABLE `altar`
  ADD CONSTRAINT `altar_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`altar`) REFERENCES `altar` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `text`
--
ALTER TABLE `text`
  ADD CONSTRAINT `text_ibfk_1` FOREIGN KEY (`altar`) REFERENCES `altar` (`ID`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
