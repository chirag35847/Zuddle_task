# Deployed At : https://chirag35847.github.io/Zuddle_task/

# Questions

## First of all using a NoSQL DB makes a lot more sense in this case, because data schema might change very quickly.

## How would your tables and apis change for the following scenarios. What tables and api endpoints would you add? Which tables and api endpoints would need to be updated?

## If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed
- Table needed : Stage (`userId`,`stageName`,`order`,`isLast`,`listofTaskId's`) -> We need this table to know the stages, order of stages and knowing if a stage is to be taken as done, the key will be stageName here.
- API : /allData -> `GET` method : We can map through all the stages and join this table with task table and present the data to user
- API : /allData -> `POST` method : We can create a new task with this for a particular stage
- API : /stage -> `POST` method : creating a new stage and updating the frontend with response of the API
- Here user has some stages which they can create in any number and also tasks
- Frontend changes like presenting forms for creating new stage or creating new task will always be there

## If users can comment on tasks
- We would need to to add another field in the DB `comment`, this will be an array which may have fields like `comment`, `createdAt`,`commentedby` etc... depending on the user case
- We can either all everybody to comment or only the assigned user, depending on the use case
- API's needed
- - /addComment -> This will have a `POST` method, that would take comment values like `comment` and `commentedBy`,`createdAt` will be `Date.now()`
- - We can add middleware to check for assignedUser or not and also do validation for same on frontend.

## How will you do error handling
- So we will have eror handling in 2 places
- - the frontend : using `try catch` blocks for any `async code`, sanitizing and validating data for any potential `XSS` attacks. sending sensitive information like passwords in hashed format using libraries like `bcryptjs`
- - the backend : using `try catch` blocks, using hashed values, using middlewares to ensure data correctness.
