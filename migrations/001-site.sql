CREATE TABLE faq (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT,
  answer TEXT,
  created DATE
);

INSERT INTO faq (question, answer, created) values('Is it safe to buy a car online?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2019-11-01'));
INSERT INTO faq (question, answer, created) values('Does my new car come with any guarantee?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2020-11-01'));
INSERT INTO faq (question, answer, created) values('What is the best month to buy a car?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));
INSERT INTO faq (question, answer, created) values('How to know the car history?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));
INSERT INTO faq (question, answer, created) values('How much do I pay a month to use the service?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo', DATE('2018-11-01'));

-- CAR
CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT,
    model TEXT,
    year INTEGER,
    fuelType TEXT,
    kilometers INTEGER,
    details TEXT,
    price INTEGER,
    photoUrl TEXT
);

INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Lamborghini', 'Aventador Roadster', 2016 ,1900, 'Gasoline' ,415434, '/assets/photos/2016-lamborghini.jpeg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Lamborghini', '116', 2013 ,1231231, 'Gasoline' ,12999, '/assets/photos/Bugatti-La-Voiture-black.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Saleen', 's7', 2012 ,655656, 'Gasoline' ,18999, '/assets/photos/c8-corvette.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('BMW', 'x1', 2012 ,565656, 'Gasoline' ,24000, '/assets/photos/saleen-s7.webp', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Vulcan', 'Fiesta', 2008 ,433444, 'Gasoline' ,5590, '/assets/photos/Vulcan-1-644x375.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Ford', 'Fiesta', 2014 ,343434, 'Gasoline' ,9950, '/assets/photos/ford-fiesta-2014-9950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Mazda', '6', 2015 ,343411, 'Gasoline' ,21000, '/photos/a/mazda-6-2015.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Merces-Benz', '200', 2015 ,111111, 'Gasoline' ,24999, '/photos/cars/mercedes-benz-200-2015-24999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Merces-Benz', 'e250', 2011 ,123443, 'Gasoline' ,29800, '/photos/cars/mercedes-benz-e250-2011-29800.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Peugeot', '3008', 2014 ,77000, 'Gasoline' ,18999, '/photos/cars/peugeot-3008-2014-17999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Renault', 'Clio', 2017 ,123133, 'Gasoline' ,13485, '/photos/cars/renault-clio-2017-13485.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Renault', 'Espace', 2004 ,123123, 'Gasoline' ,9800, '/photos/cars/renault-espace-2004.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Renault', 'Megane IV', 2016 ,123123, 'Gasoline' ,15890, '/photos/cars/renault-megane-2016-15890.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Seat', 'Leon', 2010 ,44444, 'Gasoline' ,13650, '/photos/cars/seat-leon-2010-13650.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Smart', 'for two', 2008 ,5534, 'Gasoline' ,5800, '/photos/cars/smart-fortwo-2008-5800.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Smart', 'for two', 2012 ,43434, 'Gasoline' ,7950, '/photos/cars/smart-fortwo-2012-7950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Smart', 'for two', 2003 ,343434, 'Gasoline' ,8850, '/photos/cars/smart-fortwo-passion-2003-8888.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Smart', 'for two', 2015 ,343434, 'Gasoline' ,11500, '/photos/cars/smart-fortwo-passion-2015-11500.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Volkswagen', 'EOS', 2008 ,343434, 'Gasoline' ,14700, '/photos/cars/volkswagen-eos-2008-14700.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Volkswagen', 'Golf', 2013 ,123123, 'Gasoline' ,18300, '/photos/cars/volkswagen-golf-2013-18300.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO cars (make, model, year, kilometers, fuelType, price, photoUrl, details) values('Volkswagen', 'Tiguan', 2007 ,1231234, 'Gasoline' ,14299, '/photos/cars/volkswagen-tiguan-2007-14299.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- Down
DROP TABLE cars;
DROP TABLE faq;