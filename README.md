[Link to Deployed Website](https://pramcistudent.github.io/Marvel-vs-DC-dashboard/)

# Code Institute Milestone Project

Are you a Marvel fan or are you a DC fan?

The Marvel vs DC Hero data dashboard contains information on over 500 super heroes and super villains from both comics. The purpose of this dashboard is to give the user away to easily analyse data from both comics. 

The data dashboard was built using DC, D3, Crossfilter and Queue libraries to present data in varies charts such as row/bar charts, line charts and pie charts. 

## UX

The dashboard is designed for new and existing fans of Marvel and DC. Users can manipulate and analyse large amounts of data across both comics on all the charts. To further enhance the user experience there is a dropdown menu were the user can select their favourite hero.

## User stories

* As a fan of Marvel or DC I want to be able to view data across both comics so I can compare which heroes are the strongest. 

* As a fan of super heroes and super villains I want to be able to view data on heroes and see information such as comic, gender, alignment, eye color, hair color and hero stats.

* As a fan I want to be able to view data on individual heroes such as their hair color, eye color, hero stats and comic publisher.
 
* As a fan I want to be able to view who is the strongest heroes by gender and alignment.

* As a fan I want to be able to easily reset data on all charts so I can quickly start a new search without the need to reload the page to reset all the charts.

## Wireframes

<!-- ![Desktop](/wireframes/home.jpg/)
![Tablet](/wireframes/home.jpg/)
![Mobile](/wireframes/home.jpg/) -->

## Current Features

* The Navbar is fixed to the top of the page and contains the name of the site. The navbar has been styled using red to represent [Marvel](https://www.marvel.com/movies) and blue to represent [DC](https://www.dcuniverse.com/coming-soon/).

* Just below the navbar on the right-hand side is a fixed scrolling reset button to allow the user to quickly and easily reset all filters at any point. This avoids the user having to scroll and find the reset button.

* The 'filter by hero' dropdown allows the user to see all the heroes in the list, dependent upon applied filters. It also allows the user to select a specific hero to view data in isolation.

* The bar chart is used to show the breakdown of heroes by publisher and can be filtered so all charts so data on a individual publisher.

* The 2 pie charts display data on hero gender and the second pie chart displays hero alignment. The text is displayed as a percentage for easy readability, the user can also hover over a section of the pie chart to view the number of heroes that make up the percentage of the pie chart. 

* The row chart is used to display hero hair color and hero eye color. I originally tried to display the data in a pie chart and a line chart, but I found that the best visual display to the user was to use the row chart.
 
* The line chart comprises of 6 different data point sources, each one relating to an attribute of the hero. These are Intelligence, Strength, Speed, Durability, Power, and Combat. This chart allows the user to see the spread of these attributes across the dataset. The user can hover over the data-point to see the exact values and can also hover over the legend to view just that attribute in isolation.

* The footer contains links to [Github](https://github.com/pramcistudent), [LinkedIn](https://www.linkedin.com) pages and a link to [Kaggle](https://www.kaggle.com/) were the [original dataset](https://www.kaggle.com/thec03u5/complete-superhero-dataset) was sourced from.

### Features still to be implemented

* Originally, I wanted to add [Intro.js](https://introjs.com/) which provides the user with a step-by-step walk through of the features the website has to offer and how to use buttons and filter charts on the data dashboard. Unfortunately implementing this is currently out of my scope so I tried to find an alternative intro helper function which I was able to implement.

* The ability to incorporate images of each hero so the user can view these when selecting individual heroes. Not only can the user view hero images but they can also view information on when the hero first appeared in comics.

## Technologies Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5) was used to create the layout of the site.
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) used for styling and formatting of site.
* [Bootstrap](https://getbootstrap.com) framework & components used for website layout.
* [Font Awesome](https://fontawesome.com/) was used to provide the icon for the GitHub logo in the footer.
* [AWS Cloud9](https://aws.amazon.com/cloud9/) code editor used to write the HTML, CSS and JavaScript.
* [Compress JPEG](https://compressjpeg.com/) was used to compress the background image to allow for quicker and smoother loading time.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) primary function of the site for all user interaction.
* [D3.js](https://d3js.org/) [DC.js](https://dc-js.github.io/dc.js/) [Crossfilter.js](http://square.github.io/crossfilter/) [D3-Queue.js](https://github.com/d3/d3-queue) used for the creation and manipulation of the data-visualization elements, and queue.js used to load the dataset fully before running any other files.
* [jQuery](https://jquery.com/) used to assist with DOM manipulation when resetting filters, showing or hiding selected sections.

## Testing
Testing was carried out and documented using Excel to ensure the site renders consistently across different platforms. An image of the testing results can be found [here](static/images/testing.jpg).

#### Validation Testing
* [HTML](https://validator.w3.org/) the following error was found: Bad value https:///www.linkedin.com for attribute href on element a: Unexpected slash or backslash.
* [CSS](https://jigsaw.w3.org/css-validator/) no errors found.
* [JavaScript](http://beautifytools.com/javascript-validator.php) no errors found.
* [JSHint](https://jshint.com/) results can be found [here](static/images/jshint.jpg)

#### Responsive Testing
Chrome dev tools was used to simulate multiple devices and widths, and no issues were found for the following devices:
* Laptop with touch
* iPad pro
* iPad
* Galaxy Tab 10
* Kindle Fire HD
* iPhone 6/7/8
* iPhone 6+/7+/8+
* Galaxy S7/edge
* Galaxy S9/S9+

#### Browser Compatibility
To ensure a broad range of users can successfully use the site, I tested the site across 5 major browsers in both desktop and mobile configuration.
* Chrome
* Edge
* Firefox
* Opera
* IE

## Deployment
The following steps were made to deploy the project

#### Github Deployment
* The git repository was initiated via the `git init` command into the terminal
* I added the files that I was working on to the staging area by using `git add` I then ran the commit command with the first commit `git commit -m "Initial commit"`
* The repository was linked to a .git file on github via
    `git remote add origin http://github.com/pramcistudent/Marvel-vs-DC-dashboard.git/`
    `git push -u origin master`

* After each change, the following commands were used to push the changes to the git repository
    `git add *` - This adds all changed files to staging area
    `git commit -m "Add message here"` - Commits the work with a brief message as to what has changed
    `git push` - This pushes the work to the git repository, after entering your github username and password

## Content
* The original dataset was sourced from [kaggle](https://www.kaggle.com) and can be found [here](https://www.kaggle.com/thec03u5/complete-superhero-dataset).
* I choose to filter the data since the site was only going to view and analysis data from comic publisher Marvel & DC.
* The navbar gradient was sourced from this [site](https://cssgradient.io/), and I used the official website of [Marvel](https://www.marvel.com/movies) & [DC](https://www.dcuniverse.com/coming-soon/) to decide which colors to use for the gradient and which color to assign to each comic.

## Media
* The background image was created by sourcing the [Marvel logo](https://www.google.com/search?hl=en&biw=1366&bih=625&tbm=isch&sa=1&ei=GQnCXOzIJOXRgwe2iqGwCQ&q=marvel+logo&oq=marvel+logo&gs_l=img.3..35i39j0l9.4728.7436..8450...2.0..0.280.858.4j2j1......1....1..gws-wiz-img.......0i67.dre8h9ibh08) & [DC logo](https://www.google.com/search?hl=en&biw=1366&bih=625&tbm=isch&sa=1&ei=IwnCXJP1JdzTgwf3jJvIDg&q=dc+logo&oq=dc+logo&gs_l=img.3..35i39j0l3j0i67l2j0j0i67l2j0.147018.148569..148791...0.0..1.447.1391.3j3j1j0j1......1....1..gws-wiz-img.......0i7i30.Pxw_W-IdX3c) from google search/images. I then merged both images together using windows snipping tools to create an image with both logos. The image was changed using grey color scaling and use to create the tiled background.

## Acknowledgements
* A big thank you to my mentor [Guido Cecilio](https://github.com/guidocecilio) for his time, suggestions, and constructive feedback for the project!
* The [Tutorialspoint](https://www.tutorialspoint.com/java/) for making such a well-structured and easy to follow tutorials to help further aid with understanding of Java programming.
* My son for his input and ideas on the layout of the site as well as helping to choose the typography site.
* My wife & daughter for helping with responsive testing on multiple browsers and devices. A huge thank you to both for testing and clicking charts and ensuring the correct information renders across all charts.
