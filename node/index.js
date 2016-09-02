module.exports = {

  path: './README.md',

  sections: [
    {
      title: 'Intro to Node and Express',
      links: [
        {text: 'Node.js', url: './Node/README.md'},
        {text: 'NPM', url: './Node/npm.md'},
        {text: 'Writing your Own Modules', url: './Node/Modules.md'},
        {text: 'HTTP and Node.js', url: './Node/HTTP Server.md'},
        {text: 'Intro to Express', url: './Express/README.md'},
        {text: 'Middleware', url: './Express/Middleware.md'},
        {text: 'Express Router', url: './Express/Router.md'},
        {text: 'Express Templating', url: './Express/Templates.md'},
        {text: 'CORS', url: './Express/CORS.md'},
        {text: 'Deploying to Heroku', url: './Deployment/Heroku.md'},
      ]
    },
    {
      title: 'Persistence',
      links: [
        {text: 'SQL Curriculum', url: 'https://github.com/gSchool/sql-curriculum'},
        {text: 'Introduction to Knex', url: './Knex/README.md'},
        {text: 'Knex Migrations', url: './Knex/Migrations.md'},
        {text: 'Knex Associations', url: './Knex/Associations.md'},
        {
          text: 'Promises',
          links: [
            {text: 'Introduction', url: './Promises/README.md'},
            {text: 'Promises w/ Knex', url: './Knex/Promises.md'},
            {text: 'Associations with Promises Part 1', url: './Knex/Associations with Promises Part 1.md'},
            {text: 'Associations with Promises Part 2', url: './Knex/Associations with Promises Part 2.md'},
          ]
        },
        {text: 'Building CRUD Applications', url: './Knex/CRUD.md'},
        {
          text: 'Validation', url: './Express/Validation.md',
          links: [
            {text: 'Validation w/ Templates', url: './Express/Validation with Templates.md'},
          ]
        },
        {
          text: 'Misc',
          links: [
            {text: 'Hooking up Express with pg', url: './Express/PG.md'},
            {text: 'Seeding data with pg', url: './Express/Seed with PG.md'},
          ]
        },
      ]
    },
    {
      title: 'Authentication and Authorization',
      links: [
        {
          text: 'User Authentication', url: './Express/User Authentication.md',
          links: [
            {text: 'with Passport Local Strategy', url: './Express/Authentication with Passport Local Strategy.md'},
          ]
        },
        {text: 'Cookies', url: './Express/Cookies.md'},
        {text: 'Sessions', url: './Express/Sessions.md'},
        {text: 'Authorization', url: './Express/Authorization.md'},
        {text: 'Authentication and Authorization with Passport.js', url: './unit-3/05-express-auth-with-passport.md'},
        {text: 'OAuth with Passport.js', url: './Express/OAuth with passport.md'},
      ]
    },
    {
      title: 'Advanced Express / Knex',
      links: [
        {text: 'Error Handling', url: './Express/Error Handling.md'},
        {text: 'Database Transactions', url: './Knex/Transactions.md'},
        {text: 'Server Side Requests', url: './Node/HTTP Requests.md'},
        {text: 'Building JSON APIs with Express', url: './unit-3/02-JSON-APIs.md'},
        {text: 'Testing with Mocha, Chai and Supertest', url: './unit-3/03-testing-with-mocha-chai-supertest.md'},
        {text: 'Express Middleware', url: './unit-3/04-express-custom-middleware-and-form-validation.md'},
      ]
    },
    {
      title: 'Misc Topics',
      links: [
        {text: 'Introduction to Sequelize', url: './unit-4/01-intro-to-sequelize.md'},
        {text: 'Associations with Sequelize', url: './unit-4/02-associations-with-sequelize.md'},
        {text: 'Socket.io', url: './unit-4/04-socket-io.md'},
        {text: 'Express Server Best Practices', url: './unit-4/05-express-best-practices.md'},
      ]
    }
  ]

};
