# Web Portfolio #

My website portfolio currently planned to be hosted on GitHub Pages. It is a landing page for my information, resume, and projects. Each project links to its own project page (also a github page) for a more detailed description of what it does and how it was built.

## Building The Portfolio ##
The portfolio site itself is built using React, Sass, and Webpack. I designed a template to work from (like a customizable [create-react-app](https://github.com/facebook/create-react-app)) and built everything on top of that. The project list page and each project page is also built with bootstrap, but I coded the project list cards myself.

## Challenges ##
The page design is fairly simple, and can be easily outfitted for smaller viewports (future goal). There are, however, a few quirks with React and Webpack that can be difficult to work with. For example, dynamic image loading (such as with a react prop from a parent component) can be difficult as Webpack doesn't know which image you'll need to load. You have to require that specific image inline (like [here]()) because you can't plan an import/require statement at the top of your code. Overall though, I enjoy coding with React and think it turned out well for this project.


### Authors ###
[Timothy Daniel Bowden](https://github.com/dbowden713)