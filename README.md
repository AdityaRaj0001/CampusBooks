

```markdown
# CampusBooks Project

![image](https://github.com/AdityaRaj0001/CampusBooks/assets/92699283/8e53dc22-cc03-41c6-82fa-bc10b0d347cb)
![image](https://github.com/AdityaRaj0001/CampusBooks/assets/92699283/42603d17-8a89-449e-a62d-0925095b5147)


## Overview
CampusBooks is a CRUD-based application built using the MERN stack. It allows users to manage books within a campus environment. This project utilizes an API to communicate with the database and the useContext hook of React to reflect changes to the state across different components.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/CampusBooks.git
```

2. Navigate to the project directory:

```bash
cd CampusBooks
```

3. Install dependencies for both the frontend and backend:

```bash
cd frontend
npm install
cd ../backend
npm install
```

4. Create a `.env` file in the `backend` directory and add the following configurations:

```
PORT=1001
MONGO_URI=your_mongodb_uri
```

Replace `your_mongodb_uri` with the connection URI of your MongoDB Atlas database.

## Usage
To start the development servers, run the following commands in separate terminals:

1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

Access the application in your web browser at `http://localhost:3000`.

## Features
- CRUD operations for managing books, CREATE,READ,UPDATE,DELETE books.
- Integration with MongoDB Atlas for database management.
- useContext hook for managing global state across React components.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
```

Feel free to customize it further to fit your project's specifics!
