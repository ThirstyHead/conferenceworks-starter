# copies current website into target directory
# NOTE: this is destructive!!! Be careful!
if [[ $# -eq 0 ]] ; then
  echo USAGE: $(basename "$0") dir-to-cp-to
  exit 1
fi

# index.html
echo $'\nDeleting:'
echo '---------'
rm -v $1/index.html
echo $'\nCopying:'
echo '---------'
cp -v index.html $1

# css
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/css
echo $'\nCopying:'
echo '---------'
cp -rv css $1

# components
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/components
echo $'\nCopying:'
echo '---------'
cp -rv components $1

# speakers
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/speakers
echo $'\nCopying:'
echo '---------'
cp -rv speakers $1

# schedule 
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/schedule
echo $'\nCopying:'
echo '---------'
cp -rv schedule $1

# register 
echo $'\nDeleting:'
echo '---------'
rm -rfv $1/register
echo $'\nCopying:'
echo '---------'
cp -rv register $1



