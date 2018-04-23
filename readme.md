# Microposts Project

This is the final project of Brad Traversy's "Modern JavaScript From The Beginning" course on Udemy. I incorporated a more organized CSS architecture than was provided in the course, including SASS, modular CSS files, BEM methodology (I did not want to use Bootstrap, which is what Brad used for the project). Aside from this, I mostly replicated the project exactly as instructed, though I opted to use Gulp for various tasks rather than rely entirely on the package.json scripts.

Because the project functions with a fake REST API using JSON Server, I decided not to finalize the project with the usual build task and docs folder upload, as it needs to run from the user's localhost port. To run the app as intended, clone the repository to your local machine and run the following commands in your command line interface of choice (after installing all of the npm packages with `npm install`):

**Run the JSON Server**

```
$ npm run json:server
```

**Run the Gulp watch task**

```
$ gulp watch
```

## Authors

* **Brad Traversy** - *Project template + materials* - [bradtraversy](https://github.com/bradtraversy)
* **Trevor Habermeyer** - *Repository build + updates* - [thabermeyer](https://github.com/thabermeyer)

## Acknowledgments

Grateful to Brad for putting together a great course!

