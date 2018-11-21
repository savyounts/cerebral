# Cerebral

Cerebral is a React app with a Rails API backend. Users can log on and go through any quizzes that other users have created, once they answer all of the questions it will let them know how many questions they got correct and list their score if it is one of the top three listed for that specific quiz. Users can also create their own quiz that they can give a name, description and create as many cards/questions as they want. They can also provide hints for questions that can be revealed by clicking the hint button.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

###Installing
First fork and clone a copy of the repository

```
git clone (link)
```
Once cloned, cd into the cerebral repo

```
git cd cerebral
```
Then bundle install to install any gems and/or dependencies


```
bundle install
```
Run the rails server and head to http://localhost:3001 in the browser

```
rake db:migrate && db:seed
```
next open a separate tab in your terminal and cd into the client directory within Cerebral

```
npm install and npm start
```
to run the react virtual deployment -- this will be running at http://localhost:3000

## Built With

* [Ruby on Rails](https://rubyonrails.org/) - Used for the backend API
* [React](https://reactjs.org/) - Used for the frontend/UI
* [postgresql](https://www.postgresql.org/) - Database management

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Savannah Younts** - *Initial work* - [Sav Younts](https://github.com/savyounts)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
