 
# Starting from Scratch 

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

** Send changes to your remote repository **
```
git push -u origin master
``` 

##### 2. Init your package.json  
Name your package.json
``` npm init ```