# Scenario And Vehicle CRUD Application
## Project Description
In this project directory, there is an end-to-end CRUD application made with ReactJS. Users can add scenarios and vehicles, and each scenario can have multiple vehicles. Users can read, create, update, and delete scenarios and vehicles. When a scenario is deleted, all vehicles under it will also be deleted.

The application can create, display, update, and delete scenarios and vehicles. A scenario can have multiple vehicles, and vehicles will move when the user clicks a button based on the scenario and vehicle parameters.

On the Home page, users can select the scenarios they have created and start the simulation. When the user clicks the play button, vehicles starts moving based on the direction and speed until the scenario time is over.

The scenario have following fields:

* Scenario id

* Scenario name

* Time

The Vehicle have following fields:

* Vehicle id

* Vehicle name

* Initial Position X

* Initial Position Y

* Speed

* Direction (can have only Towards, Backwards, Upwards and Downwards).

node-server is used for storing data use.

For animation I have used Framer motion library.
