build () {
  rm -rf ./packages/$1/dist && ./node_modules/.bin/babel ./packages/$1/ --out-dir ./packages/$1/dist --ignore spec.js,package.json,node_modules && ./node_modules/.bin/uglifyjs ./packages/$1/dist/index.js -o ./packages/$1/dist/index.js
}