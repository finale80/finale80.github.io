
Build reworking the theme [https://themes.gohugo.io/hugo-resume/#setup--use](https://themes.gohugo.io/hugo-resume/#setup--use)

## to compile the website
Run `hugo` to create the static content, but note that as from [instruction](https://gohugo.io/hosting-and-deployment/hosting-on-github/) the content is saved into `/docs` rather than `/public`

## to handle new publications
Still a bit messy as requires to manually edit the JSON `/data/academic_publications.json`, and include the related bibtex info. If a `bibtex` is available, use `python scripts/process_bibtex.py <bibtex.bib>` to rework it
