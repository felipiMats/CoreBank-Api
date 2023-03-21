# CoreBank-Api
 This project is an API that uses business rules, SOLID, tests, database and other tools in order to access routes that can create users, authenticate them and make deposits, withdrawals and transfers

  First connect to the database;

  routes and their functions from the API in question:

  POST ```localhost:333/api/v1/users``` to create an user;
  
  POST ```localhost:333/api/v1/sessions``` to authenticate the user;
  
  GET ```localhost:333/api/v1/profile``` to show user profile;
  
  GET ```localhost:333/api/v1/stamentes/balance``` to see all user transactions;
  
  POST ```localhost:333/api/v1/deposit``` to deposit money into the account;
  
  POST ```localhost:333/api/v1/transfer/:user_id``` to transfer money from one account to another;
  
  POST ```localhost:333/api/v1/withdraw``` to "withdraw" money from the account;
  
  GET ```localhost:333/api/v1/:statement_id``` to view specific transaction;
  


