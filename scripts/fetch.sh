# clean
rm -rf content src/episodes

pnpx degit https://github.com/opensource-f2f/episode content

mkdir -p src/episodes
cp content/shownotes/* src/episodes
rm -rf src/episodes/README.md
