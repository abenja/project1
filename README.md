Project 1, A. Benjamin (id 2005923)

A simple shopping list, which asks the user to input new items, and adds them to the existing list. Application uses mainly DOM, with the basic HTML-structure being rather simple. I guess I could have created even more elements with JavaScript and DOM, but I think my understanding of the topic is conveyed sufficiently as it is. the CSS-file contains styling, but some styling is also done with DOM. I also think I could have made the js-code a bit tidier had I made different choices in the beginning of my project, but the program works as intended and at this point I am happy with it.



Below is a list of required functionalities, following the evaluation criteria:
    - user input items are added from a form to a ul-list on the page by either enter-key or the "add item" button
    - form is validated by checking the input
        - incorrect input results in an alert, and a change of the input field's background to further inform the user
    - clicking on an item marks it to be checked. Clicking on the added X-button removes the item from the list
    - CSS is found in styles.css and JavaScript is found on script.js
    - information is stored to localStorage
    - all files are checked for errors and thus validated, using the https://validator.w3.org/ for the index.html file, https://jigsaw.w3.org/css-validator/ for the styles.css file, and https://javascriptvalidator.net/ for the script.js file
    - comments are present mainly in the js-file, since it is the subject of this course and purpose of this project
    - the CSS-file has two comments which came from the copied code. I got some external styling code to improve the UI.

Additional functionality:
    - it is also possible to retrieve items already stored. If a specified key exists in the localStorage, the application iterates through it and lists the items.
        - new items will be added to the same list
    - Drop-down menu which gives the user options on what to do
    - checked items functionality is done by implementing dynamic event (eventListener) through Javascript


Some additional features I have not implemented, such as counters or a drag-and-drop functionality. All in all, I feel that my work deserves 25 points out of the possible 30 (+ another additional 5 points for the presentation!).


Link to Github: https://github.com/abenja/project1/tree/master
Link to Netlify: https://abenja-project1.netlify.app/