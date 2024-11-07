# Typing Speed Test

A simple web application to test typing speed and accuracy. This app generates a random sentence and measures your typing speed in words per minute (WPM) and accuracy percentage.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)

## Features

- Generates a random sentence with a specified number of words (10, 20, or 30).
- Calculates typing speed in words per minute (WPM).
- Calculates typing accuracy percentage.
- Real-time feedback and UI updates.
- Error handling and toast notifications for API errors.
- Optimized with a custom hook to fetch random words.

## Demo

[Live Demo](https://typespeed-sobuj.netlify.app/).

## Technologies

- **React**: JavaScript library for building the user interface.
- **Toastify**: Library for customizable toast notifications.
- **CSS**: Basic styling.

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sorbopriyo/typing-speed.git
   cd typing-speed
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be running on `http://localhost:3000`.

## Usage

1. **Select Word Count**: Choose the number of words (10, 20, or 30) using the buttons at the top.
2. **Start Typing**: Type in the sentence displayed in the typing box.
3. **View Results**: Once you've finished typing, check your typing speed (WPM) and accuracy.

## Project Structure

```
/src
├── components
│   ├── TypingText.js     # Displays the sentence to type
│   ├── Label.js          # Label component for displaying results
│   └── Loader.js         # Loader component for loading state
├── App.js                # Main component
├── App.css               # Styling for the app
└── index.js              # Entry point
```

## Customization

You can easily customize this app:

- **Change Number of Words**: Modify the default or selectable word count options in `App.js`.
- **Styling**: Update `App.css` to adjust the design.
- **Random Words API**: This app uses the [Random Word API](https://random-word-api.herokuapp.com). Feel free to replace this with another API or dataset if desired.

## License

This project is open-source and available under the MIT License.
