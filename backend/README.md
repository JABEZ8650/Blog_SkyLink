# Blog_SkyLink Backend

This is the backend service for Blog_SkyLink, built using [NestJS](https://nestjs.com/). It provides REST APIs for user authentication and blog management using MySQL.

## 🛠️ Setup Instructions

1. **Navigate to the backend directory:**

```bash
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Create a `.env` file with the following content:

```env
PORT=5000
DATABASE_URL=mysql://root:@Yabets1234@localhost:3306/blog_skylink_db
JWT_SECRET=supersecretkey
```

4. **Run the development server:**

```bash
npm run start:dev
```

5. **Run in production:**

```bash
npm run start:prod
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```
