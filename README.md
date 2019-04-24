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

* The Navbar is fixed to the top of the page and contains the name of the site. The navbar has been styled using red to represent [Marvel] and blue to represent [DC].

* Just below the navbar on the right-hand side is a fixed scrolling reset button to allow the user to quickly and easily reset all filters at any point. This avoids the user having to scroll and find the reset button.

* The 'filter by hero' dropdown allows the user to see all the heroes in the list, dependent upon applied filters. It also allows the user to select a specific hero to view data in isolation.

* The bar chart is used to show the breakdown of heroes by publisher and can be filtered so all charts so data on a individual publisher.

* The 2 pie charts display data on hero gender and the second pie chart displays hero alignment. The text is displayed as a percentage for easy readability, the user can also hover over a section of the pie chart to view the number of heroes that make up the percentage of the pie chart. 

* The row chart is used to display hero hair color and hero eye color. I originally tried to display the data in a pie chart and a line chart, but I found that the best visual display to the user was to use the row chart.
 
* The line chart comprises of 6 different data point sources, each one relating to an attribute of the hero. These are Intelligence, Strength, Speed, Durability, Power, and Combat. This chart allows the user to see the spread of these attributes across the dataset. The user can hover over the data-point to see the exact values and can also hover over the legend to view just that attribute in isolation.

* The footer contains links to my [Github] page and a link to [Kaggle] were the [original dataset] was sourced from.

### Features to be implemented

* Originally, I wanted to add [Intro.js] which provides the user with a step-by-step walk through of the features the website has to offer and how to use buttons and filter charts on the data dashboard. Unfortunately implementing this is currently out of my scope so I tried to find an alternative intro helper function which I was able to implement.

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
* [jQuery]() used to assist with DOM manipulation when resetting filters, showing or hiding selected sections.

## Testing
Testing was carried out and documented on Excel 

## Deployment



## Content


## Media


## Acknowledgements




