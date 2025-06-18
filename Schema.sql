

create database notes_app;

use notes_app;

create table notes(
    id integer primary key auto_increment,
    title varchar(255) not null,
    contents text not null,
    created timestamp not null default now()
);


insert into notes(title,contents)values
('My First Name','A Note is About Something'),
('My Second Name','A Note is Contact Something');