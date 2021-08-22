The repo of my personal website [afinamore.io](https://afinamore.io)

It is powered by Hugo and Github pages, and its structure is a work in progress.

Specifically, I took the [resume](https://themes.gohugo.io/themes/hugo-resume/) theme, which I extended/altered as it follows:
- The navigation bar is completely re-designed from scratch, taking inspiration from [Nina Zakharenko website](https://www.nnja.io) which uses [Beautiful Hugo](https://github.com/halogenica/beautifulhugo)
- Added a new section to display my academic publications with (i) expand/collapse elements and (ii) some parameters in `config.toml`

## :pushpin: Todo
- Add light/dark theme switch
- Complete integration of blog posts
- Related to the previous, extend the research section with detail on research areas of interest (adding some blog posts about it might also be beneficial)
- Extend support of navbar to dropdown menus
- Better integration of academic publications from a raw bibtex file

## Folder structure

The key layout files are:
- `layout/_default/baseof.html` : the raw skeleton of each page
- `layout/index.html` : master hugo template of the home page (sections are shown/hidden based on `config.toml` setup)
- `layout/partials/nav.html` : the navbar template
- `layout/partials/portfolio/academic_publications.html` : the research papers template
- `layouts/single_page/academic_publications.html` : separate page for details on research (only full research paper list)
The other files are either `layout/partials` or `layout/partials/portfolio`

The key files for content are:
- `content/_index.md` : the personal info for the "home" section in the home page
- `content/research/_index.md` : research separate page
- `data/experience.json` : personal detail about work experience
- `data/academic_publications.json` : raw details on research papers

CSS and Javascripts:
- `assets/sass/main.scss` : all styling rules (coloring variables at the top)
- `static/js/navbar.js` : controls navbar item style wrt scrolling
- `static/js/pubs.js` : expand/collapse control for research paper details

## Development

- To spawn a local server, run `bash ./run.sh` which is simply triggering `hugo server -D --disableFastRender`
- To compile locally, run `hugo` which generate the content under `/docs` as from [these instructions]([instruction](https://gohugo.io/hosting-and-deployment/hosting-on-github/)) __Note:__ Still unclear to me why locally the SCSS gets a hash as URL, and this breaks the layout
- To deploy, create a script with the following
```
#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd docs

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push # origin main
```

## Reference links

Hugo:
- Hugo-resume theme [link](https://themes.gohugo.io/hugo-resume/#setup--use)
- Organize content [link](https://discourse.gohugo.io/t/creating-static-content-that-uses-partials/265/19)

Styling:
- Color selector [https://coolors.co](https://coolors.co)
- Navbar shrink [link](https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp)
- Navbar scroll [link](https://academind.com/tutorials/scroll-aware-navigation/) 
- Javascript intersection APIs [link](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#thresholds)
- Navbar collapse [link](https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp)
- Navbar bootstrap [link](https://getbootstrap.com/docs/4.0/components/navbar/)


Deployment:
- How to register into google search engine [link](https://victor2code.github.io/blog/2019/07/04/jekyll-github-pages-appear-on-Google.html)
- How to configure godaddy domains: [link](https://medium.com/theagilemanager/development-github-pages-and-godaddy-dns-domain-configuration-a38e80aabeaf)
