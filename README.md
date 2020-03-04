# Web Portfolio

My website portfolio currently hosted on GitHub Pages. It is a landing page for my information, resume, and projects. Each project is planned to link to its own project page (also a GitHub Page) for a more detailed description of what it does and how it was built.

# Pages

## Home

Landing page with a navigation menu to the other pages.

## Projects

A list of projects I've built or worked on. Each project is represented by a custom designed and coded (no bootstrap) card with a short project description. Each card also contains links to project pages and GitHub repositories. Framework/language pills are at the bottom of each card for quick reference.

## Resume

This page contains all the information on my resume (except private information). Also has links to download a personal copy (.docx and .pdf) for future use.

## GitHub

A link to my standard GitHub profile.

# About

## Building The Portfolio

The portfolio site itself is built using React, Sass, Bootstrap, and Webpack. I designed this [template](https://github.com/dbowden713/webpack-react-template) to work from (like a customizable [create-react-app](https://github.com/facebook/create-react-app)) and built everything on top of that. Setting things up this way gives a lot more control over features and deployment. The layout of the project list page and each project page uses bootstrap as well.

## Challenges

The page design is fairly straightforward and built mobile-first with bootstrap. Implementing a mobile-first design well alongside some custom components (such as the project cards) took some time.

### React and Webpack

Dynamic image loading (i.e. via a react prop from a parent component) doesn't work as expected because Webpack doesn't know which image you need to load when bundling. Images loaded in this way must be required inline (like [here](https://github.com/dbowden713/web-portfolio/blob/master/src/components/project.component.js#L52)) because writting an explicit import/require statement at the top of your code is impossible.

### React and Bootstrap

Using Bootstrap and React together out of the box is impossible. This is because Bootstrap's jQuery attempts to take control of the DOM while it is in use by React, which causes a conflict. It's still possible to use the styling and layout components of Bootstrap with React, but using animations (like collapsible menus) causes immediate errors. Fortunately, workarounds such as [reactstrap](https://reactstrap.github.io/) exist.

Despite these issues, I do enjoy coding with React and think it turned out well for this project.

### Authors

[Timothy Daniel Bowden](https://github.com/dbowden713)
