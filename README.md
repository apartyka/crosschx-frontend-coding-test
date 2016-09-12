# crosschx-frontend-coding-test
The home for files submitted to CrossChx's front-end coding challenge

###Steps to get up and running:
* clone this repo
* using terminal or other command line tool, `cd` to your chosen project directory
* run `npm install` or `sudo npm install` (depending on your user profile) for dependencies
* `gulp` will start a local webserver and the project will run on `http://localhost:8000/`
* the project can also be viewed as a static file by opening the /build/app/index.html file in a browser
* any other problems just ask me!


####Write up of Findings
* I'm one that prefers global elements for interface rules. That is to say, an `h1` tag for the most prominent text on the screen.
* Added gulp-sass midway through the project. Probably should have started out with that dependency from the beginning.
* I initially attempted to re-create the top right icons as svgs in Sketch. That worked well for the 9 dots icon, not so well for the bell (alert) icon...in the end to save time I exported the bell as a small png from the provided mockup. I don't think it looks great, but in most cases it would be considered FPO until a better source file is provided.
* Please note the responsiveness of the layout. Given a flat "desktop" mockup, a lot of time was taken into determining the best approach to convey the same UI for a small screen.
* Given more time, I would have liked to have broken down the MainNav further into at least one more subcomponent with the items of the nav fed through a `.map()` call from a source object. I also would have liked to take a stab at making the Visits and Insurance charts with svg fills in a scss partial. 
