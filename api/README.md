# API Backend Server Documentation

# To run the server:

`npm start`

# Requirements for the backend server (Ubuntu 20.04)

`sudo apt-get update`

`sudo apt-get install postgresql nodejs npm`

`sudo service postgresql start`

`sudo -i -u postgres`

`createuser -P --interactive plantist`
**Enter password and allow superuser

`psql`

`create database plants;`

`grant all privileges on database plants to plantist;`

`sudo npm install -g sequelize-cli`

`sequelize db:migrate`

`npm install`

