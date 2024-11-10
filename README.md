# Fun Web Projects Collection 🌐

This repository contains a collection of simple yet fun web-based projects built using HTML, CSS, and JavaScript. Each project is designed to demonstrate basic programming concepts and provide an engaging user experience.

---

## Table of Contents
- [Overview](#overview)
- [Projects](#projects)
  - [Emoji Fighter](#emoji-fighter)
  - [Blackjack Game](#blackjack-game)
  - [Order Summary](#order-summary)
  - [Reading Tracker](#reading-tracker)
  - [Birthday Wisher](#birthday-wisher)
- [Technologies Used](#technologies-used)

---

## Overview
This collection includes various mini-projects, each showcasing different interactive features and user interface designs. The projects are beginner-friendly and perfect for learning and experimenting with web development.

---

## Projects

### 1. Emoji Fighter
**Description**: Emoji Fighter is a fun and simple game where two random emoji fighters are selected to compete. Click the "Pick Fighters!" button to generate a match and see who comes out victorious!

**Features**:
- Random selection of emoji fighters
- Unique outcomes displayed on each click
- Reset functionality to start fresh

![Emoji Fighter](Screenshots/EmojiFighter2.png)

**How to Play**:
- Click **"Pick Fighters!"** to generate two random emoji fighters.

---

### 2. Blackjack Game
**Description**: A simplified version of the classic casino game Blackjack. The goal is to get a card sum as close to 21 as possible without exceeding it.

**Features**:
- Draw random cards and calculate the sum
- Intuitive UI with clear game messages
- Start a new game or draw more cards

![Blackjack Game](Screenshots/BlackJacks1.png)
![Blackjack Game](Screenshots/BlackJacks2.png)

**How to Play**:
- Click **"Start Game"** to draw two initial cards.
- Draw more cards until you either hit Blackjack or go bust.

---

### 3. Order Summary
**Description**: A responsive web application that displays an order summary card with plan details, price, and options to proceed or cancel.

**Features**:
- Clean and modern UI
- Action buttons and a change link for plan modification

- **Laptop View**:
  ![Order Summary Laptop View](Screenshots/OrderSummary1.png)

---

### 4. Reading Tracker
**Description**: A simple web app to track the number of pages read. Users can increment the page count, save their progress, and view previous entries.

**Features**:
- Track and save your reading progress
- Total count of pages read across all sessions
- Display previous entries

![Reading Tracker](Screenshots/PageCounter.png)

**Usage**:
- Click **"ADD PAGE"** to increment the count.
- Click **"SAVE"** to update your total pages read and display your entries.

---

### 5. Birthday Date Collector
**Description**: This project allows users to input their birthdays and save them to Firebase Realtime Database. It provides a simple user interface where users can add their birthdays, and it stores the data in Firebase for retrieval and future use.

**Features**:
- Users can input their birthday and submit it using the "Submit" button.
- The birthday information is stored in Firebase Realtime Database.
- The input field is cleared after each submission.

![Birthday Wisher Output](Screenshots/BirthdayDateCollector1.png)
![Firebase Database](Screenshots/BirthdayDateCollector2.png)

**How to Use**:
1. Enter your birthday in the input field.
2. Click **"Submit"** to save your birthday to the Firebase Realtime Database.
3. The input field will be cleared after the birthday is submitted.
4. View the submitted birthdays in Firebase Console.

**Firebase Setup**:
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Set up Firebase Realtime Database and get the URL for the `databaseURL` field in the `firebaseConfig` object.

---

## Technologies Used
- **HTML5**: For structure and layout
- **CSS3**: For styling and responsive design
- **JavaScript**: For interactivity and game logic
- **Firebase Realtime Database**: For storing and retrieving user data
