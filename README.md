# STALGIA

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## DESCRIPTION

A Full-stack MERN application with basic CRUD operations. A simple social media app to share interesting events from your lives in the form of posts.
- Authentication
  - Login with Google (Google OAuth)
  - Login with Email (JWT, bcrypt)
  - Token expiry
- User Roles
  - Login to create posts.
  - Like other's posts.
  - Delete your posts.
  - Edit your posts.
- Feature like search posts based on title and tags.
- Pagination:- Limited number of posts per page.

## SCREENSHOTS
- Homepage

![image](https://user-images.githubusercontent.com/75828760/147906775-0969f953-733e-494e-9f45-b75d690e9253.png)

- Sign In Page

![image](https://user-images.githubusercontent.com/75828760/147906907-f0a55dc2-1229-4ad1-a3b7-6b86dddc13ac.png)

- Homepage after signing in

![image](https://user-images.githubusercontent.com/75828760/147906987-58a85b40-da0a-4745-ac6f-c6981b26973d.png)

- Search Posts by Title

![image](https://user-images.githubusercontent.com/75828760/147907214-9aa7a143-3677-44a2-bab0-6bb8f67f47e2.png)

- Search Posts by Tags

![image](https://user-images.githubusercontent.com/75828760/147907337-7912b1b0-33ad-4e18-94b8-44be285c23e7.png)

- Pagination

![image](https://user-images.githubusercontent.com/75828760/147907510-ea38aa74-cc8b-431a-9924-815c274c1bcc.png)

## CLIENT-SIDE DEPENDENCIES

```js
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/lab": "^4.0.0-alpha.60",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.24.0",
    "jwt-decode": "^3.1.2",
    "material-ui-chip-input": "^2.0.0-beta.2",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-file-base64": "^1.0.3",
    "react-google-login": "^5.2.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.1",
    "react-scripts": "4.0.3",
    "redux": "^4.1.2",
    "redux-thunk": "^2.4.1",
```

## SERVER-SIDE DEPENDENCIES

```js
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.1.1"
```

