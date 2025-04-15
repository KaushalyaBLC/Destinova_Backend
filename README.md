# Destinova Backend

Welcome to the **Destinova Backend** repository! This project powers the backend services for the [Destinova platform](https://www.destinova.live), an AI-driven career guidance tool designed to provide personalized career and educational insights based on users' backgrounds and interests.

---

## Key Features

- **AI-Powered Career Guidance**  
  Uses **Google Generative AI** to provide personalized career and educational recommendations.

- **Dynamic Data Management**  
  MongoDB integration for storing user data, career clusters, and industry-specific insights.

- **RESTful API**  
  Well-structured endpoints for seamless communication with the frontend.

- **Scalable Deployment**  
  Configured for deployment on **Fly.io** with Docker support.

---

## Tech Stack

| Category            | Technology            |
|---------------------|-----------------------|
| Backend Framework   | Node.js + Express.js  |
| Database            | MongoDB               |
| AI Integration      | Google Generative AI  |
| Deployment          | Fly.io + Docker       |
| Environment Config  | dotenv                |

---

## Project Structure

```bash
Destinova_Backend/
├── Controllers/         # API controllers for handling requests
├── Models/              # Mongoose schemas for MongoDB
├── Routes/              # API route definitions
├── Services/            # Core business logic and AI integrations
├── Util/                # Utility functions (e.g., database connection)
├── .github/workflows/   # CI/CD workflows for Fly.io deployment
├── Dockerfile           # Docker configuration for containerization
├── fly.toml             # Fly.io deployment configuration
└── index.js             # Entry point for the application
```

##API Endpoints
**Nova Route (/nova)**
- POST /nova: Processes user data, generates AI-driven career guidance, and saves data to the database.

**Crystal Route (/crystal)**
- GET /industry/:industry_name: Fetches industry details by name.
- GET /cluster/:cluster_name: Retrieves cluster details by name.
- GET /career/:career_name: Provides career-specific insights using AI.

## Setup and Installation

### Prerequisites

- Node.js (v18.16.0 or higher)
- MongoDB
- Fly.io account (for deployment)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KaushalyaBLC/destinova-backend.git
   ```
2. **Install dependencies:**
    ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a .env file in the root directory and add the following:
    ```bash
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   ```
4. **Start the server:**
    ```bash
   npm start
   ```
   Access the server at http://localhost:3000.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push to your branch.
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact:

- **Email**: chamathkausshalyack@gmail.com  
- **Website**: [Destinova](https://www.destinova.live)
