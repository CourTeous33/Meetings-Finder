Use schedule;
CREATE TABLE IF NOT EXISTS Users (
    Uid VARCHAR(256) NOT NULL PRIMARY KEY,
    Password VARCHAR(16),
    Email VARCHAR(256)
)  ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS times (
    Uid VARCHAR(256) NOT NULL,
    StartTime BIGINT,
    foreign key (Uid) references Users(Uid)
)  ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS Events (
  Uid VARCHAR(256) NOT NULL,
  Weekday INT,
  StartTime INT,
  foreign key (Uid) references Users(Uid)
) ENGINE=INNODB;