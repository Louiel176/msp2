# Milestone Project 2
## ux:
### Project goals:
The goal for this project is to make an easy to use child friendly game to entertain users. This project has a target audience of children, teenagers and adults, this is because it is a simple memory game that would benefit children and teenagers with their memory development. The reason for adults being apart of the target audience is because the original Simon game came out in 1978 so for some users it will be nostalgic. All target audiences should find the game entertaining and challenging.

Simon is a great game for users to test their memory. The game should meet the users requirements by following the player goals that are set below.
#### Player goals:
- A game that is fun for all ages
- Child friendly
- Large colourful buttons that are easy to recognise
- Clickable areas
- Instruction page with all controls and how to play
- All game controls laid out clear and easy to understand on the 'How to play' page
- Clear easy to recognise button flashes
- The planning and design process took all the users needs into account
- popup boxes for incorrect answers
## Structure:
The structure for this project is going to be appealing and easy to use by the users. The website is going to be comprised of 3 pages, the landing page, the how to play page and the game page. All three pages will have a navigation bar and links to social media. The social links once clicked will open on a new page so that the website can still be up and running on the users device without them having to reload the website. 

The Landing page will consist of the navigation bar, the name of the game with a brief description of what the game is and finally there will be social links in the footer element. The landing page will be consisting of the original Simon colours.

The How to play page will consist of the navigation bar, the page will also have a box describing how to play with the controls and an explaination of how the levels work and how to change them. The page will also have the social links in the footer element. 

The final page which will be the game page will consist of the the navigation bar and the socail links in the footer like the landing and the how to play page. The page will also have the simon game with different levels on the page, along with the simon game the page will also have a drop down menu for the users to select different levels form 1 to 5 this will add new coloured buttons to the game with each level adding a new button and colour.
## Design:
### Desktop:
#### Landing page:
![Landing Page wireframe](https://share.balsamiq.com/c/cCF1jMWPU3tpg1wx3ZqPZt.png)
#### How to play page:
![How to play page wireframe](https://share.balsamiq.com/c/hjVUqueW6GV8qtePDjpueu.png)
#### Game page:
##### Level 1:
![Game page level 1 wireframe](https://share.balsamiq.com/c/o7NkdPagWCeVDi81xTXKrC.png)
##### Level 2:
![Game page level 2 wireframe](https://share.balsamiq.com/c/hA4jnEG4Yyxjay8zYFqnQJ.png)
##### Level 3:
![Game page level 3 wireframe](https://share.balsamiq.com/c/abokuUUBLc9SR9o766mMo7.png)
##### Level 4:
![Game page level 4 wireframe](https://share.balsamiq.com/c/nQvVve4ENfNHwFVH4g6rGR.png)
##### Level 5:
![Game page level 5 wireframe](https://share.balsamiq.com/c/kERM9YhZcWeN9BHQufpEFX.png)
### Mobile:
#### Landing page:
![Landing page mobile wireframe](https://share.balsamiq.com/c/72s5TSvPRpoSskzvcMfkVN.png)
#### How to play page:
![How to play mobile wireframe](https://share.balsamiq.com/c/4EJjR7fAT8M8YGQb4rSQjs.png)
#### Game page:
##### Level 1:
![Game page level 1 mobile wireframe](https://share.balsamiq.com/c/dH22nYEGpPsCcMHmPbQrVn.png)
##### Level 2:
![Game page level 2 mobile wireframe](https://share.balsamiq.com/c/9s1mwRpBwfDBBYeJzcWzDP.png)
##### Level 3:
![Game page level 3 mobile wireframe](https://share.balsamiq.com/c/hhfC2fxeV8zQHJ4biAZzMT.png)
##### Level 4:
![Game page level 4 mobile wireframe](https://share.balsamiq.com/c/9XLhHC8DxehFgpyAQFk8j9.png)
##### Level 5:
![Game page level 5 mobile wireframe](https://share.balsamiq.com/c/mdNBYGGD81E4BrjW33PU9e.png)

### Colour:

The colours that have been used are contrasting colours, this meets the users requirements as it allows for easier reading and visuals on the website. This also allows the user to easily recognise different elements in the website. The colours that are being used are dark greys and lighter colours to create a contrasting colour scheme, the colours that have been used are as followed:

- #2D232E this is a dark grey colour used for the background of most elements it has been used in the navigation bar and footer. The colour has also been used as backgrounds for different elements throughout the website. 

- #5fad56 this is a green colour that has been used to add more detail to the website to enhance the visuals of the website and break up different sections.

- 

## References:
### Coding:
 https://getbootstrap.com/docs/4.2/components/dropdowns/
 dropdown menu and links
 MSP1
 jswithjest

### Images:


## Testing:
To test the website for this project I will be using jest to help with testing to show that the code is working as intended and it will also show if a test fails, using jest to test the code helps with predetermining what different errors may occur due to the use of JavaScript.
### Tests with Jest:
![button_test_fail](/assets/images/btnfail.PNG)

The test above shows that the test failed as the testing page didn't have quotation marks around each of the choices.

![button_test_pass](/assets/images/btnpass.PNG)

Error found when running an npm test.

![export_fail](/assets/images/moduleloads.PNG)

The test above shows that the userturn has been inputted twice which is causing an error, making the test fail. 

![export_pass](/assets/images/moduleloadspass.PNG)

The screenshot below shows a failure in the test caused by incorrect variable names

![turn_update_fail](/assets/images/turnUpdatefail.PNG)

The code should have been game.tNumber instead of game.turn as the test is testing for an update in the turn number

![turn_update_pass](/assets/images/turnUpdatepass.PNG)

This failed test also alerted me that the JS code was wrong as the object game contained the variable turn.

![turn_variable](/assets/images/turn_variable.PNG)

The variable was being called in the code as tNumber so the variable had to be changed so that the names matched up and was correct.

![turn_variable_update](/assets/images/turn_variable_update.PNG)


### Bugs:
Over the course of developing this website I have encountered a few bugs, some of the bugs that I have encountered are from the html pages. 
The bugs that have been encountered are as such:

- The footer element not sitting correctly on the game pages, the footer element crosses paths with the game and with the extra levels this creates extra bugs as adding code to change where the footer elements sits only works for one of the levels but not the rest or creates too much white space. 

- The new game button and the game title also created some issues while in the same div element as the game to fix this bug I have rearranged the layout of the website so that both the button and the title are both visable. 

Some off the bugs encountered have also been due to jest and incorrect variable names being used in functions, the bugs have been listed in tests with jest.

Other bugs that have been encountered is when deciding how to code the different levels into the JavaScript when executing the code that was written to take the level selected and converted it into the a variable to send to the addTurn function so that the code that selects the random button will be able to select any of the buttons that are on screen for that specific level.

![randomisation_code](/assets/images/randomisationCode.PNG)

Another bug that has been encountered was that the mobile responsiveness didn't fully work properly as the buttons didn't fall into place when screen size was reduced.  




## Limitations:

The fifth level has had to be taken out of the game as the game takes up too much space when there are eight buttons, the buttons overlaps the navigation bar and doesn't fit on the screen. The footer element also didn't fit on the game pages as it didn't position correctly even when repositioning it using CSS. 

## Features:
### Existing features:

- Drop down menu - this has been used on the game pages as it allows the user to select different levels.

- Interactive game - the game has been developed to meet the users needs, the game uses buttons as the an interactive element that the user can click on to play the game. The other interactive elements are that the buttons flash to show the user the sequence to follow during the game. The game also uses a score counter that increments by one every time the user is correct, if the user is incorrect the code uses this counter to tell the user what their score was for that round. 

### Future features to implement:

Future features that I would like to implement are adding different memory games to the website, as well as adding new levels which will change the colours of the buttons on each level of the sequence, so this means once one button is selected for the sequence it will then change the colours of the buttons and add another button to the sequence this will continue until the user makes a mistake or starts a new game. Another feature that I would like to impliment will be a score board page where the users can see the highest scores of other users as well as there own high scores.

Another feature to impliment will be a back end one that will allow the website to load faster, this will be done by reducing the amount of code as well as pages, instead of using multiple JS pages the project will only use one. 

## Technologies:

- HTML - This is the main language used to build the base website, the HTML technologies being used is HTML/HTML5

- CSS - This is the language used to style the whole website, the CSS technologies being used is CSS/CSS3

- JavaScript - This language is used to create the interactivity element to the website, this has been used mainly for the game side of the website

- Jest - This is the JavaScript testing framework that has been used to test whether the JavaScript element are working as they are intended to do so

- Balsamiq - This is a framework software that has been used to design the website before the website was built

- Bootstrap - This is a technology that allows for preprogrammed code to be used

- Font awesome - This technology allows for the use of icons on the website it is being used for social icons such as the Facebook icon

- pngwing.com - This is a website that has been used to get stock images

- Coolors - This technology being used is to select different colours with their hex code provided

- Gitpod - This is the technology being used to develop the code for the project

- Github - This is the technology being used to store the code developed on Gitpod

- Developers tools - This technology is being used to update the website live when it has been previewed 

## Testing:

### Developer tests:
The testing being used is a JavaScript framework Jest this has been used to test the JavaScript code, the tests are in the test file which is in the Scripts file all the tests that have been checked are runnable through the code using "npm test" to run them in the command terminal. 

![Tests](/assets/images/testsPass.PNG)

Other tests that have been done are to test the reponsiveness of the website by reducing the screen size both with the use of developer tools and with just general resizing of the website page itself. 

With the use of a HTML validator the project has been updated so that the HTML is valid, the errors that have occured are ones that don't affect the code in any major way and will not create more errors such as some extra syntax that didn't need to be there. The HTML validator that has been used is ![HTML validator](https://validator.w3.org)

With the use of a CSS validator the project has been confirmed that the CSS was valid, the CSS validator that has been used is ![CSS validator](https://jigsaw.w3.org/css-validator/)



### User tests:

With user testing the feedback that was returned is the level 5 didn't fit on the page correctly, due to this level 5 wasn't as enjoyable as the rest of the levels, not only this but the website was abit basic and that the website should include other memory games to entise users to come back and play the different games. The users that have tested the project also thought that a score board would be a great feature to add to add another competitive aspect to the game. One of the users said that the buttons could be more vibrant colours to attract more users and to make it easier to differentiate between the buttons that are flashing. 


## Deployment:

