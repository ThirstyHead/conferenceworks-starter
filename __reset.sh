# copies target website into current directory
# NOTE: this is destructive!!! Be careful!
if [[ $# -eq 0 ]] ; then
  echo USAGE: $(basename "$0") dir-to-cp-from
  exit 1
fi

# index.html
echo $'\nDeleting:'
echo '---------'
rm -v index.html
echo $'\nCopying:'
echo '---------'
cp -v $1/index.html .

# css
echo $'\nDeleting:'
echo '---------'
rm -rfv css
echo $'\nCopying:'
echo '---------'
cp -rv $1/css .

# components
echo $'\nDeleting:'
echo '---------'
rm -rfv components
echo $'\nCopying:'
echo '---------'
cp -rv $1/components .

# speakers
echo $'\nDeleting:'
echo '---------'
rm -rfv speakers
echo $'\nCopying:'
echo '---------'
cp -rv $1/speakers .

# schedule
echo $'\nDeleting:'
echo '---------'
rm -rfv schedule
echo $'\nCopying:'
echo '---------'
cp -rv $1/schedule .

# register
echo $'\nDeleting:'
echo '---------'
rm -rfv register
echo $'\nCopying:'
echo '---------'
cp -rv $1/register .

