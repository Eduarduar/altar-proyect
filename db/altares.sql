-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2022 a las 15:26:44
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
(15, 'Diego Rivera', 1),
(16, 'Benito juarez', 1);

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
(21, './img/imagenes/519f9463897a969.jpg', 15, 0),
(22, './img/imagenes/64b2295b75938fa.jpg', 15, 1),
(23, './img/imagenes/c869550a15d15ed.jpg', 15, 2),
(24, './img/imagenes/646766124fc9217.jpg', 15, 3),
(25, './img/imagenes/41abbe1b596b536.jpg', 16, 0),
(26, './img/imagenes/2de164408e5e887.webp', 16, 1),
(27, './img/imagenes/b44c966f10fc28e.jpg', 16, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `text`
--

CREATE TABLE `text` (
  `ID` int(11) NOT NULL,
  `text` varchar(500) NOT NULL,
  `altar` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `height` varchar(10) NOT NULL,
  `width` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `text`
--

INSERT INTO `text` (`ID`, `text`, `altar`, `position`, `height`, `width`) VALUES
(21, 'Diego Rivera  fue un pintor realista, cubista y muralista mexicano, famoso por plasmar obras de alto contenido político y social en edificios públicos. La obra de Diego y de su esposa, la pintora Frida Kahlo, se influyeron mutuamente. ', 15, 0, '194px', '465px'),
(22, 'Uno de sus poemas más populares ha sido\\n \\nHas de saber, Mi niña\\nHas de saber,\\nmi niña,\\nque en mi acumulador de amor\\nhay energía suficiente,\\nsin que deje de parecerme\\nque hace apenas cinco minutos que \\n te encontré\\ny comencé a quererte.', 15, 1, '314px', '414px'),
(23, 'Rivera se convirtió en un importante actor de la vida política y cultural de México: fue co – fundador de la Unión de Pintores, Escultores y Artistas Gráficos Revolucionarios, integrante del Partido Comunista Mexicano.', 15, 2, '242px', '328px'),
(24, 'Actualmente puedes encontrar su retrato en los billetes de 500 pesos mexicanos los cuales están empezando a dejar de circular poco a poco.', 15, 3, '146px', '383px'),
(25, 'Benito Pablo Juárez García nació el 21 de marzo de 1806 en el poblado de San Pablo Guelatao, Margarita Maza fue su esposa. tubo un título de abogado expedido por la Corte de Justicia del estado. Falleció a la edad de 66 en el año de 1872.', 16, 0, '164px', '500px'),
(26, 'Es el primer y único presidente de origen indígena de México: su mandato duró 5 periodos: de 1857 a 1872[5]. También conocido como Benemérito de las Américas por su lucha contra la invasión francesa, Benito Juárez estableció las bases sobre las que se funda el Estado laico y la República federal en México.', 16, 1, '210px', '485px'),
(27, 'Según algunas investigaciones sus comidas favoritas era la carne de venado, helados y vinos figuran entre las comidas predilectas del expresidente y su familia.', 16, 2, '256px', '250px');

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
(1, 'admin', 'admin@mail.com', '$2y$10$u91OQ7gPEWCY9cjtmcKOMe2VuU5ZVGO6CRwSLUQIbIogTGlal6wKa');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `text`
--
ALTER TABLE `text`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

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
  ADD CONSTRAINT `altar_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`altar`) REFERENCES `altar` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `text`
--
ALTER TABLE `text`
  ADD CONSTRAINT `text_ibfk_1` FOREIGN KEY (`altar`) REFERENCES `altar` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
