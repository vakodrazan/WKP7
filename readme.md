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


///===============================///

## Tips for my WKP7: 
 
### the structure of my project.
 
 - We need to create a book list library: 
 
    - I create a form element in the html file to allow us to add our own book.
    - I create an array object inside the `Javascript` file
    - Add the each object, I loop through them and I create an Html element and nest it in the `dom` so that I can nest it in an existing element.
    - To allow the users to store their new book that's been added, I create a local storage so when the user uses the same browser, they still can see their book list.
 
 
### What area of my project need to improve if you had more time
 
 - In this project we need to allow the user to check the checkbox when they have read the book and it will store there even if they refresh the page. If I had more I would try to work on that.
 - Also, I would like to finish the delete button. At first, when I clicked the delete button and it added the list at the end of the page so I deleted it. I would like to have a go on it.
 
### New things while working on this project?
 
 - Before, it wasn't clear for me how to use the `dispatchEvent` but in this project we have to use it so I know how to use it.
 - Also, I learnt how to store the list by using the local storage,
 
### The most challenging part Ii faced 
 
 - I tried to work on the delete button but I couldn't get it works till now.
 
 
### A new explanation I would like to have
 
 - We have to delete the list and will never be able to see it again. To make that we need to use the local storage, how can we delete the element that already exists in there.
 
## 6. Any other comments?
 
 - I really like doing this weekend project because I always face some difficulties, and I can learn from that.
 - Also, I like that we received feedback from you on every project.

