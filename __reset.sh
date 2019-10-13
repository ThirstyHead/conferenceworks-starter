# copies target website into current directory
# NOTE: this is destructive!!! Be careful!
rm -v index.html
cp -v $1/index.html .
rm -rfv css
cp -rv $1/css .
rm -rfv components
cp -rv $1/components .
