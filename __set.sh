# copies current website into target directory
# NOTE: this is destructive!!! Be careful!
if [[ $# -eq 0 ]] ; then
  echo USAGE: $(basename "$0") dir-to-cp-to
  exit 1
fi

echo $'\nDeleting:'
echo '---------'
rm -v $1/index.html
echo $'\nCopying:'
echo '---------'
cp -v index.html $1
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/css
echo $'\nCopying:'
echo '---------'
cp -rv css $1
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/components
echo $'\nCopying:'
echo '---------'
cp -rv components $1
