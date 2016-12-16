 
# Starting from Scratch 

### Introduction 
------

write your folder setup here


### Quick Start 
------
#### 1. Init your repository  

Init Repository
```
echo # MEAN >> README.md 
git init
git add README.md or git add .
```

Files are committed to the HEAD but not in your remote repository yet    
```
git commit -m "first commit" 
```

Add your selected remote server to push changes 
```
git remote add origin https://github.com/akodevs/MEAN.git
```

Send changes to your remote repository **
```
git push -u origin master
``` 

Add your **.gitignore** file
``` 	
echo "node_modules 
.idea 
__MACOSX 
.DS_Store 
client/bower_components 
client/.DS_Store  
dist" > .gitignore
```

#### 2. Init your package.json  and install important packages

Install pacakge.json and fill out information

``` 
npm init 
```
 
**Install Gulp** globally and as a developer dependency
``` 
	npm install gulp -g
	npm install gulp --save-dev
```

**Install browserify**
``` 
	npm install --save-dev browserify 
```

**Install vinyl-source-stream**
a package which takes the browserify stream and converts it into something that gulp understands.
``` 
	npm install vinyl-source-stream --save-dev
```


#### 3. create gulfile.js
* gulp-jshint (Looks up for errors in your js code and reports the same)
* gulp-sass (Compiles your sass into css)
* gulp-uglify (Minifies js files)
* browser-sync (For synchronized browser testing)

```
	npm install fs path --save-dev
	npm install gulp-jshint --save-dev
	npm install gulp-uglify --save-dev
	npm install browser-sync --save-dev 
	npm install gulp-notify --save-dev
	npm install gulp-sass --save-dev
```
  

#### 4. Modules Use
* oc.lazyLoad 
- package for angular that can load angular modules in a lazy way
- lazy laoding is  a design pattern or a technique for loading content when it's needed rather than all at once

* ngResource
- An angular module provides interaction support with RESTful services via the $resource service.

* Angular UI Router
- is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine. Unlike the $route service in the Angular ngRoute module, which is organized around URL routes, UI-Router is organized around states, which may optionally have routes, as well as other behavior, attached.
- States are bound to named, nested and parallel views, allowing you to powerfully manage your application's interface.
