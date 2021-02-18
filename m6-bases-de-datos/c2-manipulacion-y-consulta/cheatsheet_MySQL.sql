-- << CREATE DATABASE >>
-- Crear la base de datos
	-- CREATE DATABASE movies_db;

-- Seleccionar la base de datos con la que vamos a trabajar
	-- USE movies_db; 

-- << CREATE >>
	/* CREATE TABLE directors 
	(id INT NOT NULL AUTO_INCREMENT, 
	name VARCHAR(100) NOT NULL, 
	comment LONGTEXT,
	birthday DATE,
	PRIMARY KEY (id)); */

-- << ALTER >>
	-- ALTER TABLE directors ADD COLUMN last_name VARCHAR(100) 
	-- ALTER TABLE directors DROP COLUMN last_name
	/* 
	ALTER TABLE movies
	ADD COLUMN director_id INT NULL

	ALTER TABLE movies
	ADD CONSTRAINT fk_movies_directors
	FOREIGN KEY (director_id)
	REFERENCES directors(id)
	*/

-- << DROP >>
-- Si tenemos claves foraneas no nos va a dejar borrar
	-- CREATE TABLE paraborrar (id INT NOT NULL);
	-- DROP TABLE paraborrar


-- << INSERT INTO >>
	-- INSERT INTO movies VALUES (DEFAULT, NOW(), NOW(), "Her", 9.5, 3, "2020-01-01 00:00:00", 120, 5);
	-- INSERT INTO movies (id, title, rating, awards, release_date, length) VALUES (DEFAULT, "Her", 9.5, 3, "2020-01-01 00:00:00", 120);

-- << DELETE >>
	-- DELETE FROM movies WHERE TITLE = "her"

-- << UPDATE >>
	-- UPDATE movies SET rating = 1 WHERE RATING < 1

-- << SELECT >>
	-- SELECT * FROM movies 
	-- SELECT title, rating, awards FROM movies 
	-- SELECT title, rating * 10, awards FROM movies 
	-- SELECT * FROM genres

-- << SELECT WHERE / ORDER BY>>
	-- SELECT * FROM movies WHERE awards > 3
	-- SELECT * FROM movies WHERE awards != 3
	-- SELECT * FROM movies WHERE awards = 3
	-- SELECT * FROM movies WHERE title != "Titanic"
	-- SELECT * FROM movies WHERE release_date > "2010-01-01"
	-- SELECT * FROM movies WHERE release_date > "2010-01-01" AND awards > 2
	-- SELECT * FROM movies WHERE release_date > "2010-01-01" OR awards > 2
	-- SELECT first_name, last_name, rating FROM actors WHERE rating > 5
	-- SELECT first_name, last_name, rating FROM actors WHERE rating > 2 ORDER BY first_name
	-- SELECT first_name, last_name, rating FROM actors WHERE rating > 2 ORDER BY first_name DESC
	-- SELECT first_name, last_name, rating FROM actors WHERE rating > 2 ORDER BY first_name DESC, rating DESC

-- << SELECT LIMIT / OFFSET>>
	-- SELECT * FROM movies LIMIT 5
	-- SELECT * FROM movies LIMIT 5 OFFSET 5
	-- SELECT * FROM movies LIMIT 5 OFFSET 10

-- << SELECT BETWEEN / LIKE>>
	-- SELECT * FROM movies WHERE rating BETWEEN 7 AND 10
	-- SELECT * FROM movies WHERE title LIKE "a%"
	-- SELECT * FROM movies WHERE title LIKE "%a"
	-- SELECT * FROM movies WHERE title LIKE "%t%"
	-- SELECT * FROM movies WHERE title LIKE "%a%t%"
	-- SELECT * FROM movies WHERE title LIKE "%toy%"

-- << SELECT ALIAS (AS)>>
	-- SELECT title AS titulo, rating FROM movies
	-- SELECT title AS titulo, rating * 10 AS "rating hasta 100" FROM movies

-- << TABLE REFERENCE >>
-- EER diagram: go to database > reverse engineer para ver las relaciones entre tablas

	-- 1:1
	/*
	SELECT movies.id, title, genre_id, genres.id, name FROM movies, genres
	WHERE  genre_id = genres.id
	*/

	-- M:M
	/*
	SELECT title, first_name, last_name FROM movies, actor_movie, actors
	WHERE  movie_id = movies.id
	AND actor_id = actors.id
	*/

-- << JOINS >>
	/*
	SELECT movies.id, title, genre_id, genres.id, name FROM movies
	INNER JOIN genres ON  genre_id = genres.id
	*/
-- muestra todas las pelis, incluso las que no tienen género. Ver "Alicia en el pais de las maravillas"
	/*
	SELECT movies.id, title, genre_id, genres.id, name FROM movies
	LEFT JOIN genres ON  genre_id = genres.id
	*/
-- muestra todas los géneros, incluso los que no tienen películas. Ver "terror, accion"
	/*
	SELECT movies.id, title, genre_id, genres.id, name FROM movies
	RIGHT JOIN genres ON  genre_id = genres.id
	*/

-- M:M (INNER JOIN)
	/*
	SELECT title, first_name, last_name FROM movies
	INNER JOIN actor_movie ON movie_id = movies.id
	INNER JOIN actors ON  actor_id = actors.id
	*/

-- << DISTINCT >>
-- Elimina duplicados que sean exactamente iguales. Si agregáramos title, ya nos mostraría mas registros
	/*
	SELECT DISTINCT first_name, last_name FROM movies
	INNER JOIN actor_movie ON movie_id = movies.id
	INNER JOIN actors ON  actor_id = actors.id
	WHERE title LIKE "Harry%"
	*/

-- << CONCAT >>
	-- SELECT CONCAT(first_name," ", last_name) FROM actors
	-- SELECT CONCAT(first_name," ", last_name) AS nombre_completo FROM actors

-- << COALESCE >>
	/*
	SELECT title, COALESCE( name, "No tiene género") FROM movies
	LEFT JOIN genres ON genre_id = genres.id
	*/

-- << DATEDIFF >>
	-- SELECT title, DATEDIFF(NOW(), release_date) FROM movies

-- << EXTRACT >>
	-- SELECT title, EXTRACT(year FROM release_date) FROM movies

-- << DATE_FORMAT >>
-- "%d" solo el numero del dia "1" , "%D" muestra el numero como "1st"
-- "%m" muestra el número del mes "9", "%M" muestra el mes en letras "Septiembre"
-- "%y" muestra los dos últimos digitos del año "10", "%Y" muestra el año completo "2010"

	-- SELECT title, DATE_FORMAT(release_date, "%d/%m/%Y") FROM movies

-- << REPLACE >>
	-- SELECT REPLACE(title, "Harry", "Juanito") FROM movies

-- << LENGTH >>
	-- SELECT LENGTH(title) FROM movies
	-- SELECT title FROM movies WHERE LENGTH(title) > 20

-- << CASE >>
	/*
	SELECT title, rating,
	CASE
		WHEN rating < 5 THEN "Mala"
		WHEN rating < 7 THEN "Buena"
		ELSE "Muy Buena"
	END  AS Calificación
	FROM movies
	*/

-- ***** FUNCIONES DE AGREGACION ***** 

-- << COUNT >>
	-- SELECT COUNT(*) FROM movies

-- << MAX >>
	-- SELECT MAX(rating) FROM movies WHERE title LIKE "La guerra%"
	-- SELECT MAX(rating), COUNT(*) FROM movies WHERE title LIKE "La guerra%"

-- << MIN >>
	 -- SELECT MIN(rating) FROM movies
 
 -- << SUM >>
	-- SELECT SUM(length) FROM movies
 
-- << AVG >>
	-- SELECT AVG(length) FROM movies

 -- << GROUP BY >>
	 /*
	SELECT name, COUNT(*), MAX(rating), AVG(length) FROM movies
	INNER JOIN genres ON genre_id = genres.id
	GROUP BY name
	*/

 -- << HAVING >>
	 /*
	SELECT name, COUNT(*), MAX(rating), AVG(length) FROM movies
	INNER JOIN genres ON genre_id = genres.id
	GROUP BY name
	HAVING COUNT(*) >= 3
	*/

