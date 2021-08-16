# simpleMVC
SimpleMVC app to demonstrate model-view-controller concepts.

SimpleMVC app to demonstrate model-view-controller concepts.

This simple MVC app demonstrates the concepts of working with a database to retrieve, update, delete and insert new information into the database which will then be retrieved and displayed on the browser. Error messages are logged onto the console for debugging purposes.

The application consists of simple CRUD functionality. Users of the app are able to:

- Create new users and save their user name and passwords. The server-side logic will generate a unique ID for each user created and check to see if there are any matching usernames before saving the user into the database.
- Read. Upon entering a valid set of username and password, the information will be displayed on the browser along with 2 other options: editing the user fields and deleting the fields.
- Update. Users are able to update the fields only for the given user and the new information will be saved into the database as long as the fields passes the validations.
- Delete. Users will be able to delete their own users.

Other files include: Mock_data.sql - This file creates the table "mock_data" and seeds the database with a set of user information in this format: { userId: 'fcd1806a-bb72-485a-b18d-85ff2bfeac90', username: 'bflacknell0' , password: 'mMYO8rFmCdyz'}

To test the functionality: Create a user with a username and password of your choice. Upon filling the fields with the aforementioned username and password, the details of the newly created user will be displayed in the browser.
