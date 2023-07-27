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

## Limitations:


## Features:
### Existing features:


### Future features to implement:


## Technologies:

## Testing:

### Developer tests:


### User tests:


## Deployment:

