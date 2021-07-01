# Anime List App

This is an application where I practiced some concepts of React (components and functions) by doing a CRUD app with the theme of animes. 

The aplication has a Backend made in **NodeJS+Express+MongoDB** and a Frontend made in **React**. 

It uses Environment variables to handle certain variables used by the system. Some are optionals (have default values), such as the PORTs of the aplication. Others are required, such as "REACT\_APP\_API\_URL" variable.


## Features

* Create animes (You can create other things such as movies or books if you provide the data).

* Delete animes

* Search animes (and see them updating in **real time** as you change your 'search query', A.K.A "The text that you search in the searchbar").

* Show the current ammount of displayed animes (look at the right corner of the header/navbar)


## Installation

You must run two servers to use this app (one for the backend, one for the frontend/client), and you also need access to a MongoDB server.

Note that the symbol '$' will be used to denote the command prompt of your terminal emulator.

### Frontend/Client

1. Install the dependencies

> $ cd client
> $ npm i

2. Set the environment variables by copying .env\_sample file to a file called .env, and then editing it with the correct values

> $ cp .env\_sample .env

Then set the value of the variable "REACT\_APP\_API\_URL" to the URL of the server, for example:

REACT\_APP\_API\_URL=http://localhost:4550

3. Run the app.

> $ npm start

4. Have fun!

### Backend

1. Install the dependencies

> $ cd client
> $ npm i

2. Set the environment variables by copying .env\_sample file to a file called .env, and then editing it with the correct values

> $ cp .env\_sample .env

Do the same thing as before, set the environment variables correctly in the ".env" file, for example:

PORT=4450
DATABASE\_URI=mongodb://localhost/animes-db

3. Run the app.

> $ npm start

4. Have fun!

## What you could do with it.

* Use it to organize your own list of animes _If you know how to run it_ (or whatever you want: Books, Series, Cook Ingredients?)

* Use it as a base to make a CRUD APP in React (you should change some names according to your app domain but you don't have to).

* Use localhost or remote MongoDB database (MongoDB running in another server, MongoDBAtlas, any other Mongo SaaS such as the solutions provided by cloud providers).

* **You are free to use/modify this code** as much as you want in any way you desire.
