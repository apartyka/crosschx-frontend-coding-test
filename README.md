# crosschx-frontend-coding-test
The home for files submitted to CrossChx's front-end coding challenge

###Steps to get up and running:
* clone this repo
* using terminal or other command line tool, cd to project directory
* `gulp` will start a local webserver
* if the `gulp` command fails you may need to run `npm install` or `sudo npm install` (depending on your user profile) for dependencies
* the project can also be viewed as a static file by opening the /build/app/index.html file in a browser
* any other problems, just ask me!


####Findings
* I'm one that prefers global elements for interface rules. That is to say, an `h1` tag for the most prominent text on the screen.
* Added gulp-sass midway through the project. Probably should have started out with that dependency from the beginning.
* I initially attempted to re-create the top right icons as svgs in Sketch. That worked well for the 9 dots icon, not so well for the bell (alert) icon...in the end to save time I exported the bell as a small png from the provided mockup. I don't think it looks great, but in most cases it would be considered FPO until a better source file is provided.
