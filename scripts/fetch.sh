#!/bin/sh

# clean
rm -rf content src/episodes

# See also https://www.npmjs.com/package/degit
pnpx degit https://github.com/opensource-f2f/episode content

mkdir -p src/episodes
cp content/shownotes/* src/episodes
rm -rf src/episodes/README.md

mkdir -p src/contributors
cp content/archives/* src/contributors
rm -rf src/contributors/README.md

rm -rf content
