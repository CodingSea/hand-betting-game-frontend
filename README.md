# Hand Betting Game (Frontend)

A web-based **Mahjong-inspired betting game** built with **Angular**.  
Players draw Mahjong tiles one at a time and bet whether the **next tile's value will be higher or lower** than the current tile.

This project was developed as part of a **technical assessment** focusing on:

- **Complex state management**
- **UI polish and animations**
- **scalable and extendable architecture**
- **clean and maintainable code**

---

# Tech Stack

- Angular 20
- TypeScript
- CSS

---

# Features

## Landing Page

- **New Game** button to start a session
- **Leaderboard** displaying the **Top 5 scores**

---

# Mahjong Tile System

The game uses three Mahjong tile categories.

| Tile Type | Value |
|-----------|-------|
| Number Tiles | Value equals the tile number |
| Dragons | Base value = 5 |
| Winds | Base value = 5 |

---

# Dynamic Tile Value Scaling

Non-number tiles dynamically change value depending on the game outcome.

| Result | Value Change |
|------|------|
| Winning Hand | +1 |
| Losing Hand | -1 |

Each non-number tile keeps track of its **own dynamic value** throughout the game.

---

# Deck Management

The game maintains two tile piles:

- **Draw Pile**
- **Discard Pile**

The interface shows the **remaining tile count** for both piles.

### Reshuffling

When the **Draw Pile becomes empty**:

1. A **new deck of Mahjong tiles** is created
2. The new deck is **combined with the discard pile**
3. The tiles are **shuffled to form a new draw pile**

The number of times the draw pile is emptied is tracked.

---

# Game Flow

1. The player starts a **New Game** from the landing page.

2. The game draws **one tile** from the draw pile and displays it.

3. The player places a bet on the **next tile**:

   - **Bet Higher**
   - **Bet Lower**

4. A **new tile is drawn** from the draw pile.

5. The previous tile is **moved to the discard pile**, and the new tile becomes the **current tile**.

6. The game keeps track of the **last two drawn tiles**.

7. The tile values are compared:

   - If the player's prediction (**Higher / Lower**) is correct → **Winning Hand**
   - Otherwise → **Losing Hand**

8. If a **Dragon or Wind tile** was part of the hand:

   - Winning hand → tile value **increases by 1**
   - Losing hand → tile value **decreases by 1**

9. The played tiles are saved to the **History panel**, allowing the player to see previous hands.

10. The game continues until a **Game Over condition** is reached.

---

# Game Over Conditions

The game ends if any of the following occurs:

- A hand value reaches a value of **0**
- A hand value reaches a value of **10**
- The **draw pile runs out for the third time**

When the game ends, a **Score Summary screen** is displayed with the player's final score.

---

# User Interface Features

- Visual **Mahjong tile components**
- **Animated tile drawing**
- **Hand history display**
- **Draw pile / discard pile counters**
- Responsive layout

---

# Installation

Clone the repository:

``` bash
git clone https://github.com/CodingSea/hand-betting-game-frontend.git
```

Install dependencies:

``` bash
npm install
```

Run the development server:

``` bash
ng serve
```

Open the application at:

    http://localhost:4200

------------------------------------------------------------------------

# Build

To build the project for production:

``` bash
ng build
```

Build artifacts will be stored in:

    dist/

------------------------------------------------------------------------

# AI Usage Disclosure

AI tools were used during development to assist with several supporting tasks:

- Clarifying and understanding the **game rules and sequence of the betting mechanics** during the initial design phase.
- Improving and refining **CSS styling across multiple pages** to enhance the overall visual presentation.
- Helping implement the **animation for the drawn tile** to improve the user experience.
- Assisting in **writing and refining the project documentation**, including this README file.

All **core application logic, architecture decisions, and final implementations** were developed and verified manually.
