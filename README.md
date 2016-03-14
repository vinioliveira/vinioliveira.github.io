# HE:labs site
[![Build Status][travis_badge]][travis]

This is the HE:labs site, you can see the live site on http://helabs.com.br

## Dependencies

To run this project you need to have:

- Ruby 2.3.0 - You can use [RVM](http://rvm.io)
- Node - You can get Node via `$ brew install node` or on the [website](http://nodejs.org)
- grunt-cli - You can get this via `$ npm install -g grunt-cli` or the [Getting Started guide](http://gruntjs.com/getting-started)

## Setup the project

1. Install the depedencies above
1. Clone the project

        $ git clone git@github.com:Helabs/helabs.github.io.git

1. Go into the project folder

        $ cd helabs.github.io

1. Install the gem dependencies

        $ bundle install

1. Install the grunt dependencies

        $ npm install

If everything goes OK, you can now run the project!

## Running the project

1. Start the server, this will start the jekyll server, will compile your sass files and compile your javascripts.

        $ bundle exec foreman start

1. Open [http://localhost:4000](http://localhost:4000).

## Staging

If you want to test and browse website before you push it to public, use staging.

```sh
$ rake staging
```

Staging version of the website is available at [http://staging.helabs.com.br](http://staging.helabs.com.br).

## Adding images

Save in images/src directory, then run:

```sh
grunt images
```

## Scss

Use the stylesheets/sass directory to save the .scss files

## Made with love by HE:labs

![HE:labs](http://helabs.com.br/images/logo.png)

This app was created and is maintained by [HE:labs](https://github.com/Helabs).

[travis]: https://travis-ci.org/Helabs/helabs.github.com
[travis_badge]: http://img.shields.io/travis/Helabs/helabs.github.com/master.svg?style=flat
