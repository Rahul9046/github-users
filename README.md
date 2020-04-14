# Github users
A single page application that uses github endpoints to fetch list of users  and their data

## Installation

Open your terminal and run the following commands :

````
cd <path-to-the-project-directory>

npm install
````

## Running the project

Enter the following command to start your dev server :
````
npm start
````
Browse to  [http://localhost:3000](http://localhost:3000) to view the app.

## How to use

Enter your search query in the search box and then click on the `Search` button. ( For more details on how to use `github search queries`, please visit this [link](https://help.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax) )

On a successful search, you will get a list of users that matches the provided search query.

Click on any user card to get the following details of the user:
* List of public repositories
* List of other github users who are following the user
* List of other github users whom the user is following
* Profile creation time
* Flag indicating whether the user is admin
