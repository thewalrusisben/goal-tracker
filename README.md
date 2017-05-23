### What is This?
This is a basic Todo application, built with React. Scaffolding provided by React-Cli. Routing provided by React-Router. Material Design components lifted from Material-UI. 

To get started locally:

1. `yarn install`
2. `npm start`
3. `enjoy!`


### What should I look out for?
This application has all major state elements handled inside of the main App.js file, to provide a simple location to transfer data between two two views, and three major components. 

The '/' route is our basic entrypoint into the application, and displays two components by default:

1. The Header / Drawer components which allows the user to toggle between filtered sets of Todos, depending on whether the user would like to see 'Incomplete' or 'Complete' todos. The visibility of the filtered list is controlled in virtue of a visibility setting set in State in conjunction with the individual status of each given todo.
2. The List component which contains the set of individual Todos. Each todo can be toggled 'complete' or 'incomplete' from inside of the list, which results in a call to the Parent component's `updateTodos` method by calling the function passed via props, `updateParentTodos`.

The '/add' route allows us to perform additions to the Todo list via a similar method of calling a Parent function's method. This organization keeps the application's State orderly and predictable, as all of the application data is handled through the main component that these two functions (Update and Create, respectively) depend upon. This basic structure could easily be extended to a more complex version of the application in which each List was one amongst many, as these basic CRUD operations are handled at the lowest component level, and only simple alterations to designate a List would need to be made in order to continue developing the application. 

### What's next for this app?
In future iterations of this app, I'd like to:

- Create a multiple-list structure
- Add Repeatability Display Goals / Todos based on a schedule (i.e., certain tasks should repeat on Weekends, not Weekdays)
- Persist Todo's to a database to store data beyond the limits of a session or a particular browser's cookies
- Enable Google Single Sign-On so I don't have to manage sensitive user data, and can associate todo's with individual users

All of this to come, as soon as I'm done working on my other projects!
