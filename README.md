# Ajax-app--Jquery
App made using Ajax and Jquery 
THe purpose of this app was to design a app that will generate random cat pictures and assign a quote to each image.
I wanted to create something simple and easy to use. Also somehting that can bring happiness or calmness to someone who is not feeling happy or motivated.
I wanted to inlcude a link for the user to seek help if they are still very depressed or struggling with there mental health.
I created a modal text to the image that will redirect the user to a national directory for mental health in the usa.
The modal briefly describes what the function of the image button will do and what it is for.
first i had to check if the data from the catapi was still valid and check using a console.log(data) to see what would come out on the console.
when i saw the console produced a bunch of information but what i needed was the url link i decided to console.log(data[0.url) and that produce just the link i needed to assign to a button later in my html.
second i had to set up the html part of the page. Play with the css and then move to the functionality of the site.
Once that was done i moved into the html and started planning how i wanted everything to look.
Originally i had the idea of instead of the button generating images when you scroll down it will prouce images. 
The problem with that is the user would have to scroll all the way back up to use the mental health image button 
i thought about putting that button and image as a footer but the images overlap the footer and that was another big issue i ran into.
then i had the idea to just prepend the image to the top and push everything else to bottom. So the user never has to scroll all they have to do is click. simple and easy to use 
To get the quotes i copied and pasted a bunch of different motivational quotes that i like and put them into an array. i then created a variable with math.floor math.random function and multiplied it by the array.length
Another issue i ran was trying to make the buytton functional within a button function but what i did to make it work was created a function for what i wanted the button to do and call that function within the click 
