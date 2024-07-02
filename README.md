<h1 align="center">Collaborative Study Platform (Full Stack): Brain Bond</h1>

<h3 align="justify">
    Admin Email: mdsuzanskh@gmail.com
</h3>
<h3 align="justify">    
    Admin Password: 123456
</h3>


# Description
<p align="justify">
    Welcome to [Brain Bond] - This project is an advanced educational platform that allows students to book sessions, create and manage their notes, and access various learning materials. It incorporates Firebase for secure email-password registration, and Google and GitHub login options. MongoDB is utilized for backend data management through APIs."
</p>

# <a href="https://brainbond-e920d.web.app" target="_blank">Live App Demo</a>
 
# Features:
- Students can book sessions, create their own notes, and manage created notes.
- User Register to email and password feature with firebase.
- User Login with Google and github feature with firebase.
- MongoDB Database use for API.
- Private Route.
- Role-based access control with dashboard for secure and organized user management.
- A tutor can create, conduct and present sessions to students.
- Tutors can create multiple materials for the sessions they conduct.
- Use Firebase Authentication with JWT for secure login and registration.
- Admins have full rights to all sessions and materials within the application.

# Technology:

- Tailwind CSS
- React.js
- Node.js
- Express.js
- MongoDB
- JWT and Firebase.

## Setup

To setup the project you have to execute the command below:

1. At first you have to install all package. For this you Have to execute the command:

```sh
npm i
```

2. After install all package you need to run your project. But you can't run your project directly. Because I use environment variabel for security purpose. You have to add a `.env` file in your root directory and the a sample code of `.env` file are given below:

```.env
VITE_apiKey=*******************
VITE_authDomain=***************
VITE_projectId=***************
VITE_storageBucket=***************
VITE_messagingSenderId=***************
VITE_appId=***************
```

The six api key you will get form firebase.

3. After setting environment variable you can run or build your project.

For run your preject you have to execute the commad below:

```sh
npm run dev
```

4. For build your project you can execute the command below:

```sh
npm run build
```

#### Note: Must have installed Git and Nodejs in your system to do it!
