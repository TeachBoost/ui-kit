# TeachBoost UI Kit

Offical TeachBoost front-end user interface assets.

## Installation

Run the following on a new install:

    npm install
    bower install

If you don't have bower, run:

    sudo npm install -g bower

## Compiling the HTML

To create the demo HTML page, run:

    php compile.phtml

This will generate an untracked index.html file that you can open in your browser.

## Watching Changes

There's a gulp file to handle LESS watching. Just run `gulp` from the
command line and it will start. Any time you save a .less file in the less/
directory, it will recompile the css/build.css file.
