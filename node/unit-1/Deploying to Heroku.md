# Deploying Node.js apps to Heroku

## Objectives

- Deploy a Node.js HTTP server to Heroku.

## How do you deploy a Node.js HTTP server to Heroku?

**Heroku** is a cloud platform that lets you deploy, monitor, and scale HTTP servers. Getting HTTP servers onto the Internet easily and being able to iterate on them quickly can make or break a product. Heroku focuses on providing an excellent developer experience around managing HTTP servers on a production environment. That way, developers can focus on writing server-side applications without having to build and maintain the production environment themselves.

First, configure NPM to use your name and email address when creating a `package.json` file.

**NOTE:** Replace `YOUR NAME` and `YOUR EMAIL ADDRESS` with your real name and public email address.

```shell
npm config set init-author-name 'YOUR NAME'
npm config set init-author-email 'YOUR EMAIL ADDRESS'
```

Next, create a `package.json` file for your project using NPM. This lets Heroku know that this project uses Node.js.

```shell
npm init
```

Then, in the `package.json` file, specify the version of Node.js for Heroku to use in production. It's a good idea to use the same version as your development environment. To find out what version is on your development environment, run the `node -v` command.

```text
"engines": {
  "node": "YOUR DEV ENV NODE VERSION"
}
```

After you complete the short wizard, create a `Procfile` for your project. This lets Heroku know how to start your HTTP server.

```
echo 'web: node server.js' > Procfile
```

To see how Heroku will run your HTTP server, you can install the `foreman` package using NPM.

```shell
npm install -g foreman
```

Then use the `nf` command to start the HTTP server using by running the command inside the `Procfile`.

```shell
nf start
```

Finally, commit these changes to your repository

```shell
git add .
git commit -m 'Prepare for deployment to Heroku'
```

To merge, the commits from the `heroku` branch to the `master` branch, run the following commands.

```shell
git checkout master
git merge heroku
```

With the commits merged in, it's safe to delete the `heroku` branch.

```shell
git branch -d heroku
```

After you've signed up for [Heroku](https://signup.heroku.com/), install the `heroku` package with Homebrew.

```shell
brew install heroku
```

Then use the `heroku` command to login to your account.

```shell
heroku login
```

After logging in, you can use the `heroku` command the create an empty application on Heroku.

**NOTE:** Replace `USERNAME` with your GitHub username.

```shell
heroku apps:create USERNAME-party
```

This will automatically create a new remote called `heroku`.

```shell
git remote -v
```

Now, you can deploy your server by pushing the `master` branch to the `heroku` remote.

```shell
git push heroku master
```

Finally, you can send a request to the server running on the production environment.

**NOTE:** Replace `USERNAME` with your GitHub username.

```shell
http GET USERNAME-party.herokuapp.com/guests
```

## Resources

- [Heroku Dev Center- Deploy from GitHub](https://devcenter.heroku.com/articles/github-integration)
- [Heroku Dev Center - Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
