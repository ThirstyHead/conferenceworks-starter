# copies target website into current directory
# NOTE: this is destructive!!! Be careful!
if [[ $# -eq 0 ]] ; then
  echo USAGE: $(basename "$0") dir-to-cp
  exit 1
fi

rm -v index.html
cp -v $1/index.html .
rm -rfv css
cp -rv $1/css .
rm -rfv components
cp -rv $1/components .
