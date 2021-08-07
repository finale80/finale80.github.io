#reference link https://graphicdesign.stackexchange.com/questions/77359/how-to-convert-a-square-svg-to-all-size-ico
INKSCAPE=/Applications/Inkscape.app/Contents/MacOS/inkscape

if [ -x $1 ]; then
    echo "missing input file: $0 <favicon.svg>"
    exit 1
fi

$INKSCAPE -w 16 -h 16 -o favicon16.png $1
$INKSCAPE -w 32 -h 32 -o favicon32.png $1
$INKSCAPE -w 48 -h 48 -o favicon48.png $1

convert favicon16.png favicon32.png favicon48.png favicon.ico
