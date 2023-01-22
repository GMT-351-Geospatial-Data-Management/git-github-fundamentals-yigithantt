create table communities (id SERIAL PRIMARY KEY, name varchar(100));
create table events (id SERIAL PRIMARY KEY, commID integer, description varchar(140), eventTime TIMESTAMP);

insert into communities (name) VALUES ('IEEE');
insert into communities (name) VALUES ('ACM');