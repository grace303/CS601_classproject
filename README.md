# CS601_Assignment1
## *Week 1*
## Intro
This is a biography website of Yanru (Grace) Zhu that includes a description about me, my work, and my life. 
Welcome!

## How I go beyond
1. 2 more pages are added to show more details about myself.
2. 1 video, 1 embeded youtube video, and 1 audio are added to diversify the types of media, though I need to make the audio being able to automatically play consistently in the whole website in the future.
3. Lots of images that can be turned into a gallery in the future.
4. Two tables are used.

## How to run
Open the CS601_HW1_Zhu folder, click on "index.html" to open it on in your browser, then you can click on the nav bar items to browse around the website.

## *Week 2*
## Intro
This week I mainly work on adding a css stylesheet to style the whole website. 

## The main difference regarding responsiveness
1. Almost every page (home, about, work, life, contact) is using a flex box to display layout differently on the desktop and mobile (smaller device). For example, if you go the life page and check the gallery, the 2-column gallery is changed to a 1-column gallery on mobile. Other pages except the index/welcome page, all have this feature if you re-size the browser.
2. The navigation bar is changed to a hamburger style on mobile. JS is needed in the future to hide the navigation items under the bar and show it when clicking the bar.
3. Font size is becoming smaller on mobile.
4. In the work page, some content of the sidebar is hidden on mobile and the sidebar moved to the bottom on mobile to save space for smaller devices.

## How I go beyond
1. Add one more page - a welcome page (currently index.html).
2. Make sure all pages are responsive and look good on mobile.
3. Add in CSS animations in the welcome page, the home page's headline & image, and the quote in the life page.
4. Try to use different CSS features for layout, for example margin auto, float, position, flex...
5. CSS and assets are in different folders.


## How to run
Open the CS601_HW1_Zhu folder, click on "index.html" to open it on in your browser(better to use Chrome for now). Click on the "LET'S GO!" button to go to the website. Then you can click on the nav bar items to browse around the website.

## *FINAL PROJECT*
## Intro
This is the final project of my personal website.

## What I changed after the presentation
1. I added an API call using fetch and await in the "about" page - if you refresh the page, you will get different images & figcaptions of "Chengdu". I am using API of Flickr to dynamically get those page. If the fetch fails, it will change back to the local default images.
2. Changed the format of data in vue.js to "return".

## How I go beyond
1. Try to use ES6, for example arrow functions and literal templates.
2. Use an external API.
3. Use Flexbox to make the whole site responsive.

## How to run
Open the folder, click on "index.html" to open it on in your browser. Click on the "LET'S GO!" button to go to the website. Then you can click on the nav bar items to browse around the website. Or you can go to the hosted website https://grace303.github.io/CS601_classproject/