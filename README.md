# 13 Object Relational Mapping (ORM): E-commerce Back End
This app is the back end for an e-commerce site. It is using Express.js API and configures it to use Sequelize to interact with a MySQL database.
Because this application is not  deployed, I am providing a walkthrough video that demonstrates its functionality. 

## How to run
Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.
Add a .env file to the root folder to store sensitive data, like your MySQL username, password, and database name.
After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.
Install all the dependencies by running `npm i` and then start the app with `npm start` and mysql db from command line

### Database Models
The database contains the following four models, including the requirements listed for each model:

* `Category`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validates that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validates that the value is numeric

  * `category_id`
    * Integer
    * References the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_id`
    * Integer
    * References the `product` model's `id`

  * `tag_id`
    * Integer
    * References the `tag` model's `id`

## Screenshots
