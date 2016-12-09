 
# Starting from Scratch 

#### Introduction 

write your folder setup here


#### Quick Start 
------
##### 1. Init your repository  

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

##### 2. Init your package.json  and install important packages

Fill out info for package.json
``` npm init ```
 
Install Gulp globally and as a developer dependency
``` 
	npm install gulp -g
	npm install gulp --save-dev
```


