Welcome to the Warrior Project!

Setup Instructions:

1) Launch local mysql server 
   - Mac book users, ensure mysql is installed, you can use (brew install mysql)
   - To run server, mysql.server start
   - To stop server, mysql.server stop
2) cd /server
3) npm install
4) nodemon
  - Ensure nodemon is installed as well (sudo(if necessary) npm install -g nodemon)
  - To run server, nodemon server.js
5) cd ../client
6) npm install
7) npm run dev

Launch is currently very buggy:

http://localhost:3000/home?username=rushimanche is the url for the user page
http://localhost:3000/ is base url
