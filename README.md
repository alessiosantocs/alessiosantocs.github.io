# alessiosantocs.github.io
Personal website and portfolio on github.

### Architecture
This is a weekend project so the architecture goes along with the fact that the timing was strict and some things may have been done in a hurry.

I used a boilerplate/framework I've developed a couple of months ago, based on bootstrap. The content is instead fetched from github (for the repos you see in homepage) and from the folders api/projects/\*.json files and pages/projects/\*.md files.

### Usage
Clone the repo locally. Open the terminal and type:

  sass -wc sass/:stylesheets/

This will compile sass files into one single main.css file used by this website.

To make a quick example just open 'index.html' in your browser and sass/\_variables.scss at the same time.
Make a quick change:

  // Turn
  $primary_color: $green;

  // into
  $primary_color: $test_red;
