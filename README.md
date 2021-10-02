<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![license-shield]][license-url]
[![html-shield]][html-url]
[![css-shield]][css-url]
[![mongodb-shield]][mongodb-url]
[![express-shield]][express-url]
[![react-shield]][react-url]
[![nodejs-shield]][nodejs-url]
[![graphql-shield]][graphql-url]
[![apollo-shield]][apollo-url]
[![heroku-shield]][heroku-url]
[![netlify-shield]][netlify-url]
[![git-shield]][git-url]
[![github-shield]][github-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/felmez/play-store-clone">
    <img src="https://i.giphy.com/media/7NJlWDt3lh5dGdXrS3/giphy.gif" width="450" height="350"/>
  </a>

  <h3 align="center">Google Play Store Semi-Clone</h3>

  <p align="center">
    MERN Stack and GraphQL Based Google Play Store
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/felmez/play-store-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/felmez/play-store-clone/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#demo">Demo Links</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is google play store like app where you can register/login with a user account that holds a authentication token (see: <a href="https://swagger.io/docs/specification/authentication/bearer-authentication/" target="_blank">Bearer Authentication</a>
) to keep the session alive even when you close the browser or refresh the pages.
With your account, you can submit apps, movies and books or review your or other user's submitted work. You can also delete only the posts and reviews that you logged with the same user who submitted them.
There is also validation on register/login forms where you can't keep input fields empty, can't use a username that already exists, or an email that is already used in another account and your passwords must match each other.

<p align="center">
    <img src="https://github.com/felmez/play-store-clone/blob/main/readme_assets/00.gif" />
    <br />
    <img src="https://github.com/felmez/play-store-clone/blob/main/readme_assets/11.gif" />
    <br />
    <img src="https://github.com/felmez/play-store-clone/blob/main/readme_assets/22.gif" />
    <br />
    <img src="https://github.com/felmez/play-store-clone/blob/main/readme_assets/33.gif" />
    <br />
    <img src="https://github.com/felmez/play-store-clone/blob/main/readme_assets/44.gif" />
</p>


### Built With

* [![mongodb-shield]][mongodb-url]
* [![express-shield]][express-url]
* [![react-shield]][react-url]
* [![nodejs-shield]][nodejs-url]
* [![graphql-shield]][graphql-url]

### Demo

* Client (frontend) link: [![netlify-shield]]()
* Server (backend) link: [![heroku-shield]]()

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* git
  ```sh
  if (you have brew installed ) {
    use this command => 'brew install git'
  } else {
    download the installer from the official website => https://git-scm.com/downloads
  }
  ```

* node
  ```sh
  if (you have brew installed) {
    use this command => 'brew install node'
  } else {
    download the installer from the official website => https://nodejs.org/en/
  }
  ```
What is brew ?? (See: <a href="https://en.wikipedia.org/wiki/Homebrew_(package_manager)" target="_blank">Homebrew Package Manager</a>)

### Installation

This repo has two different branches for different use 
```
main branch for server side (graphql)
client branch for client side (react)
```
1. Clone the repo
   ```sh
   git clone https://github.com/felmez/play-store-clone.git
   ```
2. Install npm packages on both branches 
   ```sh
   cd play-store-clone
   ```
   ```sh
   on main branch
   npm install

   on client branch
   git checkout client
   npm install
   ```
3. Create environement variables
  ```sh
  if (you will serve on localhost) {
    on main directory create config.js file 
    paste the follow code 
    then change the URI to your own MongoDB string you can keep secret key empty
    ```
    module.exports = {
    MONGODB: 'mongodb+srv://<username>:<password>@<clustername>.<linkprefix>.mongodb.net/<dbname>?retryWrites=true&w=majority',
    SECRET_KEY: 'some very secret key'
    } 
    ```
  } else if (you will use some SaaS hosting services like heroku, netlify etc){
    use process.ENV configuration depends on your server
  }
  ```
4. You are good to go
  ```sh
  on main directory => 
  if (you need to watch changes) {
    'npm run serve'
  } else {
    'npm run start'
  }
  on client directory => 
  'npm start'
  ```



<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->



<!-- ROADMAP -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Souhaib Felmez
* Email: sofelmez{at}gmail{dot}com
* [![linkedin-shield]][linkedin-url]



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [![google-shield]][google-url]
* [![stackoverflow-shield]][stackoverflow-url]





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/felmez/play-store-clone.svg?style=flat-square
[license-url]: https://github.com/felmez/play-store-clone/blob/master/LICENSE.txt
[freecodecamp-shield]: https://img.shields.io/badge/-freecodecamp-black?style=flat-square&logo=freecodecamp
[freecodecamp-url]: https://www.freecodecamp.org/
[google-shield]: https://img.shields.io/badge/-google-E34F26?style=flat-square&logo=google
[google-url]: https://www.google.com/
[stackoverflow-shield]: https://img.shields.io/badge/-stackoverflow-E34F26?style=flat-square&logo=stackoverflow&logoColor=white
[stackoverflow-url]: https://www.stackoverflow.com/
[html-shield]: https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white
[html-url]: https://en.wikipedia.org/wiki/HTML
[css-shield]: https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3
[css-url]: https://en.wikipedia.org/wiki/CSS
[nodejs-shield]: https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js
[nodejs-url]: https://nodejs.org/en/
[react-shield]: https://img.shields.io/badge/-React-black?style=flat-square&logo=react
[react-url]: https://reactjs.org/
[mongodb-shield]: https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb
[mongodb-url]: https://www.mongodb.com/
[express-shield]: https://img.shields.io/badge/-express-black.svg?style=flat-square&logo=express
[express-url]: https://expressjs.com/
[graphql-shield]: https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql
[graphql-url]: https://graphql.org/
[apollo-shield]: https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=flat-square&logo=apollo-graphql
[apollo-url]: https://www.apollographql.com/
[heroku-shield]: https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku
[heroku-url]: https://dashboard.heroku.com/
[netlify-shield]: https://img.shields.io/badge/-netlify-black?style=flat-square&logo=netlify
[netlify-url]: https://www.netlify.com/
[git-shield]: https://img.shields.io/badge/-Git-black?style=flat-square&logo=git
[git-url]: https://git-scm.com/
[github-shield]: https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github
[github-url]: https://github.com/
[linkedin-shield]: https://img.shields.io/badge/-felmez-blue?style=flat-square&logo=Linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/felmez