
Reference links
- hugo theme [https://themes.gohugo.io/hugo-resume/#setup--use](https://themes.gohugo.io/hugo-resume/#setup--use)
- colors [https://themes.gohugo.io//theme/hugo-theme-color-your-world/about/](https://themes.gohugo.io//theme/hugo-theme-color-your-world/about/)
- register into google search engine [https://victor2code.github.io/blog/2019/07/04/jekyll-github-pages-appear-on-Google.html](https://victor2code.github.io/blog/2019/07/04/jekyll-github-pages-appear-on-Google.html)
- godaddy config: [https://medium.com/theagilemanager/development-github-pages-and-godaddy-dns-domain-configuration-a38e80aabeaf](https://medium.com/theagilemanager/development-github-pages-and-godaddy-dns-domain-configuration-a38e80aabeaf)

## to run the server locally
`hugo server -D`

## to compile the website
Run `hugo` to create the static content, but note that as from [instruction](https://gohugo.io/hosting-and-deployment/hosting-on-github/) the content is saved into `/docs` rather than `/public`

## update content
- __add publications__ : Still a bit messy as requires to manually edit the JSON `/data/academic_publications.json`, and include the related bibtex info. If a `bibtex` is available, use `python scripts/process_bibtex.py <bibtex.bib>` to rework it
- __experience__ : edit `/data/experience.json`
- __education__ : edit `/data/education.json`
- __about__ : edit `/content/_about.md`
- __baseof__ : `themes/hugo-resume/layouts/_default/baseof.html`

