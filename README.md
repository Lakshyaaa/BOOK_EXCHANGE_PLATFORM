<h1 align="center">
    <br>
    BOOK EXCHANGE PLATFORM
    <br>
</h1>

## Description

<h4><strong>The BOOK EXCHANGE PLATFORM is a one stop book trading platform, allowing users to not only search for their favorite books by ISBN, but also intereact with other users to trade books with each other.</strong></h4>

## Features

### Login & Register Functionality

The Book Exchange platform leverages the relational power of PostgreSQL to create a system where users can build profiles and connect with their corresponding books. Supabase, an open-source BaaS alternative to Firebase, provides the backend infrastructure for this platform, including a hosted Postgres database, user authentication, and other functionalities.

### Add Favorite Books By ISBN

Want to add your favorite book? Simply find your favorite reading material's ISBN and add it to the Book Exchange to have a customized platform to note the books you currently own!

## Stack

### FRONTEND - React

This JavaScript library is the foundation for building the user interface. React excels at creating Single-Page Applications (SPAs), which provide a seamless user experience by minimizing full page reloads. Additionally, React components are reusable and modular, making them ideal for complex applications and collaboration between developers. React also supports server-side rendering, allowing for fast initial page loads and SEO benefits.

### Backend - PostgreSQL

This powerful open-source relational database management system (RDBMS) was chosen for its ability to efficiently manage the application's data. PostgreSQL's strong relational capabilities offer a clear structure for complex data models with multiple interconnected entities. This structure simplifies data manipulation and retrieval, streamlining development.

### Security - Bcrypt

Bcrypt was an ideal choice to encrypt the passwords for our users, as we felt its unique salt hashing system would add increased security, and also an easy framework for hashing passwords exponentially more if warranted.

### Server and API - Node / Express

This combination provides a robust foundation for the application's backend. Node.js, a JavaScript runtime environment, enables server-side development using JavaScript, promoting consistency across the application. Built on top of Node.js, Express.js is a web framework that simplifies building APIs and web applications. Express leverages Node.js's event-driven, non-blocking I/O model, resulting in excellent performance and scalability.

## Getting Started

### Close this repository

```bash
git clone https://github.com/Lakshyaaa/BOOK_EXCHANGE_PLATFORM.git
```

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Start an instance

```bash
npm start
```
