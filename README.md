# CS1 Prep Web App

![Demo of Homepage Scrolling](./public/demo-homepage.gif)

An interactive web application for UCF CS1 students to learn and practice core computer science concepts. Features modules, quizzes, flashcards, and resources for self-study.

## Features
- Interactive modules covering topics like Dynamic Memory Allocation, Algorithm Analysis, Recursion, Linked Lists, Stacks, Trees, Sorting, HashTables, Bitwise Operators, and Summations
- Practice quizzes and flashcards for each module
- GitHub authentication for secure login
- User data stored in Supabase
- Responsive design with Tailwind CSS and DaisyUI

## Technologies Used
- React
- Vite
- TypeScript
- Supabase (database & authentication)
- GitHub OAuth
- Tailwind CSS & DaisyUI

## Authentication
Users sign in with GitHub. On successful login, user info is stored in Supabase. Only authenticated users can access certain features.

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/petertrinh4/cs1-ucf.git
   cd cs1-ucf
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables for Supabase and GitHub OAuth (see `src/supabaseClient.ts` and API docs).
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- Visit the app in your browser
- Click "Login" to sign in with GitHub
- Explore modules, take quizzes, and use resources

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT