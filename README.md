# fullstack-homework
## build instructions:
* Clone repo, `npm init`, and `npm install` to install all dependencies
* `npm start` to start server
* `npm run build` to run webpack and bulid bundle.js
* Create a new PostgreSQL database called bonobos, set db.sync({force:true}) and
  run app to set DB up with correct columns and validations
* Remove the "{force: true}" and populate the database with CSVs - I used psql
  commands:  `\copy inventories(product_id, waist, length, style, count) FROM '/home/rachael/Desktop/fullstack_homework-master/inventory.csv' DELIMITER ',' CSV;`

  ` \copy products(product_id, product_name, product_image, product_description
    FROM '/home/rachael/Desktop/fullstack_homework-master/inventory.csv'
    DELIMITER ',' CSV;`

* view at `http://localhost:3001/`

## approach:

For this project, I used a stack that I'm already familiar with - Node, Express,
React, and a PostgreSQL (with Seqelize as an ORM). I chose not to use Redux as
it seemed overly complicated for the task at hand. Users are required to select
a specific size and style in order to see the available stock of an item.

I began setting up Mocha tests, but in the interest of time did not write a full
test suite.

## improvements:

The functionality of the app could definitely be improved. Instead of showing '0'
when the page loads, it could show all of the product available, and that could
be narrowed further as a user makes selections.

The test suite could also be significantly more thorough.

Deployed to Heroku: https://lit-fjord-57582.herokuapp.com/
