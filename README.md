# alessiosantocs.github.io
Personal website and portfolio on github.

### Architecture
This is a weekend project so the architecture goes along with the fact that the timing was strict and some things may have been done in a hurry.

I used a boilerplate/framework I've developed a couple of months ago, based on bootstrap. The content is instead fetched from github (for the repos you see in homepage) and from the folders api/projects/\*.json files and pages/projects/\*.md files.

### Usage
Clone the repo locally. Open the terminal, cd to the folder that has just been created and type:

```
sass -wc sass/:stylesheets/
```

This will compile sass files into one single main.css file used by this website.

To make a quick example just open 'index.html' in your browser and sass/\_variables.scss at the same time.
Make a quick change:

```sass
// Turn this
$primary_color: $green;

// into this
$primary_color: $test_red;
```

You will turn your tasty green website into a red one in a heartbeat.

Next, you will need to change the github user profile that we are now fetching data from (alessiosantocs).
Edit the file js/cinnamon.js:

```javascript
  // Change alessiosantocs into whatever your username on github is!
  ...
  repositories: function(callback){
    $.ajax({
      url: "http://api.github.com/users/alessiosantocs/repos?sort=pushed",
      crossDomain: true
    }).done(callback);
  }
  ...
```
