# Tournament
Tournament management system meant to streamline signups, brackets, and individual match-up information into one location.

Screenshots will be added here as the database schema/front end design progresses.

# Local Configuration

To run this application on your local machine,

1. Install Docker. 
2. Run **`docker-compose up -d --build`** at the project's root to build and run the docker image. By default, the API will run on port 8080, and the MySQL database will run on port 3306.
    - The configuration in place is only for the sake of development, and should be reconsidered for any production deployment in the interest of security.  These can be adjusted if necessary within **`docker-compose.yml`**.

# Tech Stack
- Node.js
- React.js
- TypeScript
- MySQL
- Docker