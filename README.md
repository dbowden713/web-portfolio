# Web Portfolio #

My website portfolio currently planned to be hosted on GitHub Pages. It is a landing page for my information, resume, and projects. Each project links to its own project page (also a github page) for a more detailed description of what it does and how it was built.

## Building The Portfolio ##
The portfolio site itself is built using React, Sass, and Webpack. I designed this [template](https://github.com/dbowden713/webpack-react-template) to work from (like a customizable [create-react-app](https://github.com/facebook/create-react-app)) and built everything on top of that. The layout of the project list page and each project page uses bootstrap as well.

## Challenges ##
The page design is fairly straightforward and built mobile-first due to bootstrap. There are a few pages (such as the home page) that do not use it so will need to be outfitted for smaller viewports in the future. 

While building this site I came across a few quirks with React and Webpack that were initially challenging. For example, dynamic image loading (such as with a react prop from a parent component) doesn't work as expected because Webpack doesn't know which image you need to load when bundling. Images loaded in this way must be required inline (like [here](https://github.com/dbowden713/web-portfolio/blob/master/src/components/project.component.js#L52)) because writting an import/require statement at the top of your code is impossible. 

Overall though, I enjoy coding with React and think it turned out well for this project.


# Pages #
## Home ##
Landing page with a navigation menu to the other pages
## Projects ##
A list of projects I've built or worked on. Each project is represented by a custom designed and coded card with a short project description. Each card also contains links to project pages and github repos. Framework/language flags are at the bottom of each card for quick reference.
## Resume ##
This page contains all the information on my resume (except private information). Also has links to download a personal copy (.docx and .pdf) for future use.
## GitHub ##
Most pages also link to my GitHub profile.
### Authors ###
[Timothy Daniel Bowden](https://github.com/dbowden713)