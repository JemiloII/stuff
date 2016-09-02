# Knex Example, A Blog

This folder is an example of how to use Knex. In order to get started, run the bootstrap.sh shell script in your terminal:

```
$ ./bootstrap.sh
```

Alternately, you can run the commands individually:

```
npm install knex, pg
dropdb knex_blog
createdb knex_blog
knex migrate:latest
knex seed:run
```

Now you should have a database called knex_blog. You can use `psql` to explore the tables if you'd like. 

To run the knex examples, envoke exampleQueries.js with the name of the example you want to run.

```
node exampleQueries.js selectUserNames
node exampleQueries.js joinUsersToPosts
node exampleQueries.js joinPostsWithTags
node exampleQueries.js joinPostsUsersAndTags
```

Sample output:

```
Tylers-MacBook-Pro-2:knex_blog Tyler$ node exampleQueries.js joinPostsUsersAndTags
{ method: 'select',
  options: {},
  bindings: [],
  sql: 'select "posts"."id", "posts"."post_text", "users"."username", "tags"."name" from "tags_posts" inner join "posts" on "tags_posts"."post_id" = "posts"."id" inner join "tags" on "tags_posts"."tag_id" = "tags"."id" inner join "users" on "users"."id" = "posts"."user_id" order by "posts"."id" asc' }

===== results ======
{"id":1,"post_text":"JavaScript is sweet","username":"Tyler","name":"programming"}
{"id":1,"post_text":"JavaScript is sweet","username":"Tyler","name":"motivational"}
{"id":2,"post_text":"I like sushi","username":"Tyler","name":"food"}
{"id":3,"post_text":"Eggs are delicious","username":"Liz","name":"food"}
{"id":4,"post_text":"BURN IT ALL DOWN","username":"Liz","name":"random"}
{"id":5,"post_text":"Teamwork makes that dream work","username":"Liz","name":"motivational"}
{"id":5,"post_text":"Teamwork makes that dream work","username":"Liz","name":"random"}
{"id":7,"post_text":"programming is fun","username":"Elie","name":"programming"}
{"id":8,"post_text":"last week I found ten bucks on the ground","username":"Foxworthington","name":"random"}
{"id":9,"post_text":"dancing in the rain was a bad idea","username":"Foxworthington","name":"motivational"}
{"id":9,"post_text":"dancing in the rain was a bad idea","username":"Foxworthington","name":"random"}
```

