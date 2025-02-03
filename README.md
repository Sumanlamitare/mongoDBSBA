# Video Game Hub API

## Overview

The **Video Game Hub API** allows users to manage and interact with data related to users, games, and reviews. It supports standard **CRUD** operations for creating, reading, updating, and deleting users, games, and reviews. The API is designed to help you track and review video games, along with user interactions like favorite games.

This API also includes predefined sample data for testing when the app is first started.

---

## Base URL

(http://localhost:3000)

---

## API Endpoints

### Users Routes

- **GET `/user`**

  - **Description**: Retrieve all user data.
  - **Response**: Returns an array of all users with details like name, email, and favorite games.

- **GET `/user/:id`**

  - **Description**: Retrieve a specific user by their ID.
  - **Response**: Returns a user object with the requested ID.

- **POST `/user`**

  - **Description**: Create a new user.
  - **Request Body**:
    ```json
    {
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "fav_games": ["FIFA", "NBA"]
    }
    ```
  - **Response**: Returns the created user.

- **PUT `/user/:id`**

  - **Description**: Update an existing user by their ID.
  - **Request Body**:
    ```json
    {
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "fav_games": ["NBA", "Golf"]
    }
    ```

- **DELETE `/user/:id`**
  - **Description**: Delete a user by their ID.
  - **Response**: Returns a message confirming the deletion.

---

### Games Routes

- **GET `/games`**

  - **Description**: Retrieve all games.
  - **Response**: Returns an array of all games with their titles, genres, and users who have played them.

- **GET `/games/:id`**

  - **Description**: Retrieve a specific game by its ID.
  - **Response**: Returns a game object with the requested ID.

- **POST `/games`**

  - **Description**: Create a new game.
  - **Request Body**:
    ```json
    {
      "title": "Golf",
      "genre": "Sports"
    }
    ```
  - **Response**: Returns the created game.

- **PUT `/games/:id`**

  - **Description**: Update an existing game by its ID.
  - **Request Body**:
    ```json
    {
      "title": "Golf",
      "genre": "Sports",
      "playedBy": ["John Doe"]
    }
    ```

- **DELETE `/games/:id`**
  - **Description**: Delete a game by its ID.
  - **Response**: Returns a message confirming the deletion.

---

### Reviews Routes

- **GET `/reviews`**

  - **Description**: Retrieve all reviews.
  - **Response**: Returns an array of all reviews with their game title and rating.

- **GET `/reviews/:id`**

  - **Description**: Retrieve a specific review by its ID.
  - **Response**: Returns a review object with the requested ID.

- **POST `/reviews`**

  - **Description**: Create a new review.
  - **Request Body**:
    ```json
    {
      "game": "NFL",
      "rating": 4
    }
    ```
  - **Response**: Returns the created review.

- **PUT `/reviews/:id`**

  - **Description**: Update an existing review by its ID.
  - **Request Body**:
    ```json
    {
      "game": "FIFA",
      "rating": 4
    }
    ```

- **DELETE `/reviews/:id`**
  - **Description**: Delete a review by its ID.
  - **Response**: Returns a message confirming the deletion.

---

## Sample Data

The application generates 5 sample data entries for **users**, **games**, and **reviews** when it is first started:

### Sample Users

```json
[
  {
    "user_id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "fav_games": ["FIFA", "NBA"],
    "date_joined": "2022-12-01T10:00:00.000Z"
  },
  {
    "user_id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "fav_games": ["NFL", "Golf"],
    "date_joined": "2022-12-05T15:30:00.000Z"
  },
  {
    "user_id": 3,
    "name": "Mark Lee",
    "email": "mark@example.com",
    "fav_games": ["FIFA", "NFL"],
    "date_joined": "2022-11-10T12:20:00.000Z"
  },
  {
    "user_id": 4,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "fav_games": ["NBA", "Golf"],
    "date_joined": "2022-12-10T11:10:00.000Z"
  },
  {
    "user_id": 5,
    "name": "Sara Williams",
    "email": "sara@example.com",
    "fav_games": ["FIFA", "NBA"],
    "date_joined": "2022-12-15T09:45:00.000Z"
  }
]
```
