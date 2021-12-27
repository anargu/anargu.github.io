#! /bin/bash

# yarn build
git add _site
git commit -m "new dist update"
git subtree push --prefix _site origin dist
