# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The module containing this event listener is the kids module. The event listener may be put in any other module, and will only be executed when the target of the click meets a certain condition. I kept the event listener in the kids module for easier reference from the state data generated in the HTML to the conditions needed in the event listener. For example, the state data, type, is used as a condition on the click event to localize the click event to the list items with the matching state data. Another piece of state data used in the event listener is the data-id. The event listener is meant to display a message to the user when a certain list item is clicked. For our purposes, we want the message to display the name of the child and their wish. In order to achieve this, we must compare the clicked item's state data-id to the array of children object's primary keys with a for of loop in the event listener. Whenever the corresponding primary key of the child object to the list item's state, data-id, is found, the window alert is executed.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The responsibility of the pairings module is to display a list of the kids with their stars, and the kids' wishes. The findCelebrity() function must be run for every iteration of the children array of objects in order to generate a complete list that includes all of the data from the array of children objects with the data of the celebrity objects. The two arguments that are passed into the function is the current iterating child object, and the entire array of celebrities objects, simply one object and an array of objects are the arguments passed into this function. The single child object will be compared against the array of celebrity objects to find the match, matching the child object to their corresponding celebrity object, through a foreign key found in the single child object. Notice the return of the findCelebrityMatch() function is a single object. This return will be the value set in the kidsStar variable for generating the list of pairs.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > In order to receive this window alert, we have a new event listener created in the celebrity list module. Whenvever the target of a click is equal to the generated state data for the celebrity list items, we give each list item a unique identifier, data-id. When a celebrity list item is clicked, our event listener runs and contains a for of loop, iterating through the same data that generated our list items. The target of our click event can only contain one list item element, along with it's state data. In the for of loop, we compare this unique state data with the array of celebrity objects and their primary key, id. Once the match is found, we can access the matches keys because of the for of loop, and display the object's keys as we need. It should be noted that we are displaying data retrieved from the celebrity object itself, not from the generated state data in the HTML. 
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > In our main module, we are linking our generating HTML to a target in the DOM. That target has a corresponding class targeted with the querySelector method. The selected target is a class, and will be where the HTML generated in Javascript will be injected. After this target, we have a variable storing some HTML that we have created in the main module. This variable is storing a large terminal string that includes invoked functions. The string begins by created a header for our page wrapped in <h1>. After the header is generated, we begin to wrap all of the following generated HTML in an <article> tag. This can be used to style the page, as it wraps the following HTML. This seems to be the intention since our <article> tag as an associated class, notice that the header does not. The <article> HTML is dividing into two sections, ergo they are denoted with the <section> tags. Each section tag also contains multiple classes for styling later, but the section tag only wraps a specific bit of generated HTML. In our first section wrapped HTML we see our first function invocation, Kids(). Since this function is called in the main module and as been imported from another, the module from which this function has been invoked will run and generate some new, specific HTML that will be return to this larger HTML string. In the Kids module, where the Kids() function is invoked we see a variable storing the HTML tags, <ol> wrapping a for of loop that is generating HTML text further wrapped in <li> tags. The <ol> tags when returned to the main module and injected into the DOM is what generated the list items as numbered. The <li> tags are wrapping each iteration of the objects in the for of loop to create a large string of list items, as long as the array of objects is. Inside of the <li> tags we notice some specific data that will be generated with the keys of each object, but is not displayed on the browser for the user to see. This is state data. It is data that we can use later to allow the client to have more interactivity with our page. The only displayed data in the Kids module, and is listed, will be the name keys found in their objects. Once this for of loop has completed iteration, it is returned to the main module where it was invoked and our HTML in the main module continues to render. There are two more <sections> following this generation, and their returns and intents are similar enough to the Kids module that we can understand the invocations to come, Celebrities() and Pairings() as a pattern. There is a little happening in the pairings module than the other two, but concerning HTML, it is doing the same. The main differences in the pairings module is that generated HTML string is wrapped in <ul> tags. This generates a list of items with bullet points instead of a numbered list as we saw in the Kids module. There is also no state data being generated for the pairings list. Nevertheless, the responsibility of the pairings module is the same, to return a generated HTML string containing the name of the kids, the name of their respective celebrity, and the wish that the child has. When the string is returned to the main module, we find that it is implemented in a new <article> tag. This article will contains its own unique styling. The section tags are omitted in this new article, it may be unnecessary as this article only contains the one section of the HTML. After all of the invoked functions have evaluated, and are stored in our variable, application HTML, we dynamically generated the HTML in the DOM by modifying our selected target with the .innerHTML property. Thus, we see all of our generated HTML displayed. 