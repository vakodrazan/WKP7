# WKP7 - Library

### Hey team!

Hope you are ready for a new challenge. I have a nice one for you this week. We're going to build a library management application. The application will consist on a form to add a book, and a table listing all the books. After submitting the form, the new book will appear on the book table.

### Here is the mockup of our library app.

![assets/wkp7-library.png](assets/wkp7-library.png)

[You can also access the design through figma.](https://www.figma.com/file/FoD2jZb5oOGZvTUMop0nbA/WKP7?node-id=1%3A2)

### A book needs those attributes :

-   A title
-   An author
-   A genre (Mystery, Thriller, Fiction, Non-fiction, Fantasy, Design, Memoirs...)
-   A number of pages
-   A status (Read or not)

### Requirements :

-   When users load the app for the first time, a list of 3 books minimum should already be present on the list. The list will always be generated dynamically with some state in the javascript.
-   Users should be able to change the read attribute status by clicking the checkbox (and the changes will be reflected in the app state)
-   Users should be able to delete a book from the list by clicking the trash icon (and reflect that in the app state as well)
-   When a user come back to the app with the same browser, they should see the same book list as it was, before they left the app. Save the current book list to your browser's _Local Storage_.

### Tips :

-   Focus on the features first, and if you have some time left, try to replicate this design.
-   Start by choosing the book data structure, and create a few of them in the code.
-   Focus on your basic app functionality first, and then try to save the state of your app to _Local Storage_.
-   I suggest you to look back to the Shopping List exercise we did together (Video 57). There is a lot of similarities between the exercise and this project 😉

### Good luck team 🙌
