# 13 Object Relational Mapping (ORM): E-commerce Back End
This app is the back end for an e-commerce site. It is using Express.js API and configures it to use Sequelize to interact with a MySQL database.
Because this application is not  deployed, I am providing a walkthrough video that demonstrates its functionality. 

## Walkthrough videos URL
 First vidoe URl: https://watch.screencastify.com/v/FxsaUbmCku8euso0NKul 
 Second Vidoe URL: https://watch.screencastify.com/v/EtXvKPW1jXFV2XEFLWV8 
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

<img width="960" alt="12" src="https://user-images.githubusercontent.com/91281668/148672872-c0326a49-e57a-4673-8d60-94dce477a751.png">

<img width="956" alt="13" src="https://user-images.githubusercontent.com/91281668/148672876-0c401fd0-9da9-455d-b6bb-1243722fd02d.png">

<img width="953" alt="14" src="https://user-images.githubusercontent.com/91281668/148672881-9b78921c-f145-4a22-8539-d95b8c91b97f.png">

<img width="956" alt="15" src="https://user-images.githubusercontent.com/91281668/148672891-e16c990d-0e8a-43cd-9117-498d3d8cde95.png">
