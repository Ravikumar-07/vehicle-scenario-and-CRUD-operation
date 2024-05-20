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

## Live project 

https://vehicle-scenario.netlify.app

## Preview

![Screenshot 2024-05-16 212810](https://github.com/Ravikumar-07/vehicle-scenario-and-CRUD-operation/assets/140155480/06296852-8d2b-48d8-9e71-24361f197fdb)

                                              
                                            Figure 1: Add Scenarios Page
                                              

![Screenshot 2024-05-16 212824](https://github.com/Ravikumar-07/vehicle-scenario-and-CRUD-operation/assets/140155480/7e8bf93a-81f2-46d6-88ea-c03643dea0fe)

                                            Figure 2: All Scenarios Page

![Screenshot 2024-05-16 212839](https://github.com/Ravikumar-07/vehicle-scenario-and-CRUD-operation/assets/140155480/5c13d866-65d3-4307-a4fb-1a1fa57d4993)

                                            Figure 3: Add Vehicle Page

![Screenshot 2024-05-16 212904](https://github.com/Ravikumar-07/vehicle-scenario-and-CRUD-operation/assets/140155480/df800fd7-903b-440b-bdcc-d3d595fa5771)

                                            Figure 4: Home Page
