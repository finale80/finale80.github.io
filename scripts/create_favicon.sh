#reference link https://graphicdesign.stackexchange.com/questions/77359/how-to-convert-a-square-svg-to-all-size-ico
INKSCAPE=/Applications/Inkscape.app/Contents/MacOS/inkscape

$INKSCAPE -w 16 -h 16 -e favicon16.png favicon.svg
$INKSCAPE -w 32 -h 32 -e favicon32.png favicon.svg
$INKSCAPE -w 48 -h 48 -e favicon48.png favicon.svg

convert favicon16.png favicon32.png favicon48.png favicon.ico
