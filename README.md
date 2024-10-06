# Invent Analytics Case

## Overview

This repository contains a React application for **Invent Analytics Case**, designed to search for and display movie or series information using the OMDb API. The application allows users to filter content by title, release year, and type (movie or series).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API](#api)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for movies and series by title.
- Filter results by release year and content type (movie/series).
- Display search results in a responsive data table.
- Handle loading and error states during API requests.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation within the application.
- **React Query**: For data fetching and state management.
- **SCSS**: For styling the components.
- **Jest**: For testing the application.
- **Tailwind CSS**: As CSS Framework.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AlperErkol/invent-analytics-case.git
   cd invent-analytics-case
   ```

2. Navigate to the project directory:

   ```bash
   cd invent-analytics-case
   ```

3. Get your APIKEY from [OMDB API KEY](https://www.omdbapi.com/apikey.aspx) and update .env.example REACT_APP_OMDB_API_KEY value.

   ```bash
   REACT_APP_OMDB_API_KEY={YOUR_API_KEY}
   ```

4. Copy .env.example to .env:

   ```bash
   cp .env.example .env
   ```

5. Install the dependencies
   ```bash
   npm run install
   ```

### Running the Application

To start the development server, execute the following command:

```bash
npm run start
```

### Running the tests

To run all test cases, execute the following command:

```bash
npm run test
```
