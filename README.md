# React + Vite

# Online Library System

The **Online Library System** is a React-based web application that allows users to browse books, view book details, and add new books. It includes features like dynamic routing, state management using Redux, and book data persistence with local storage.

## Table of Contents
- [Project Setup](#project-setup)
- [Features](#features)
- [Components](#components)
  - [HomePage](#homepage)
  - [BooksList](#bookslist)
  - [BookDetails](#bookdetails)
  - [AddBook](#addbook)
  - [ErrorPage](#errorpage)
  - [Layout](#layout)
  - [NotFound](#notfound)
- [Redux Store](#redux-store)
- [Routing](#routing)
- [CSS Styling](#css-styling)
- [Running the Project](#running-the-project)

## Project Setup
This project is built using **React** and **Redux**. It also uses **React Router** for page navigation.

### Prerequisites
- Node.js
- npm 

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/online-library.git
    cd online-library
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
 

3. Run the project:
    ```bash
    npm run dev
    ```

    The app will start and you can enjoy it .

## Features
- **Book Management**: Users can browse books, view individual book details, and add new books to the list.
- **Search & Filter**: Books can be searched by title or author, and filtered by categories.
- **Redux for State Management**: The application uses Redux for global state management.
- **Routing**: React Router is used for page navigation between home, book list, book details, and add book pages.
- **Error Handling**: Custom 404 pages for handling invalid routes.
- **Book Data Persistence**: Books added by users persist through browser refresh using local storage.