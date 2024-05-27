CREATE TABLE Franchises(
    id INT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Product(
    id INT,
    Name VARCHAR(50) NOT NULL,
    Price DECIMAL(5,2) NOT NULL,
    Quantity INT NOT NULL,
    Type VARCHAR(50) NOT NULL,
    Promo INT,
    Description VARCHAR(255),
    id_1 INT NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(Name),
    FOREIGN KEY(id_1) REFERENCES Franchises(id)
);

CREATE TABLE Images(
    id INT,
    path VARCHAR(50) NOT NULL,
    id_1 INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_1) REFERENCES Product(id)
);
