Project 1, Antony Benjamin (2005923)

A simple shopping list, which asks the user to input new items, and adds them to the existing list. Application uses mainly DOM, with the basic HTML-structure being rather simple. I guess I could have created even more elements with JavaScript and DOM, but I think my understanding of the topic is conveyed sufficiently as it is. the CSS-file contains styling, but some styling is also done with DOM.

All files are checked for errors and thus validated, using the https://validator.w3.org/ for the index.html file, https://jigsaw.w3.org/css-validator/ for the styles.css file, and https://javascriptvalidator.net/ for the script.js file.

Below is a list of required functionalities, following the evaluation criteria:
    - user input items are added from a form to a ul-list on the page by either enter-key or the "add item" button
    - form is validated by checking the input
        - incorrect input results in an alert, and a change of the input field's background to further inform the user
    - clicking on an item marks it to be checked. Clicking on the added X-button removes the item from the list
    - CSS is found in styles.css and JavaScript is found on script.js
    - information is stored to localStorage

Additional functionality:
    - it is also possible to retrieve items already stored. If a specified key exists in the localStorage, the application iterates through it and lists the items.
        - new items will be added to the same list
    - Drop-down menu which gives the user options on what to do
    - checked items functionality is done by implementing dynamic event (eventListener) through Javascript


Link to Github: https://github.com/abenja/project1
Link to Netlify: https://abenja1.netlify.app
