-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 21-02-2021 a las 18:26:37
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `offer` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `createdAt`, `deletedAt`, `updatedAt`, `offer`) VALUES
(1, 'Reloj Casio Deportivo Ae-1300wh', '5829', 'https://http2.mlstatic.com/D_NQ_NP_2X_707768-MLA31063055001_062019-F.webp', NULL, NULL, NULL, 1),
(2, 'Casio Hombre Dw-291h', '7220', 'https://http2.mlstatic.com/D_NQ_NP_2X_844321-MLA41110736091_032020-F.webp', NULL, NULL, NULL, 0),
(3, 'Casio W-59 W 59 W59', '2770', 'https://http2.mlstatic.com/D_NQ_NP_2X_809757-MLA31581657680_072019-F.webp', NULL, NULL, NULL, 0),
(4, 'Casio A168wg Retro Vintage Gold', '8920', 'https://http2.mlstatic.com/D_NQ_NP_2X_989145-MLA41109772086_032020-F.webp', NULL, NULL, NULL, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
