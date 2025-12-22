const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const User = require('./models/userModel');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Security headers to prevent mixed content and script injection
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Content-Security-Policy', "upgrade-insecure-requests; default-src 'self' https:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:;");
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 3000;

// Seed Admin User
const seedAdmin = async () => {
  try {
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    const adminExists = await User.findOne({ username: adminUsername });
    if (!adminExists) {
      await User.create({
        username: adminUsername,
        password: adminPassword, // In production, hash this!
        isAdmin: true,
      });
      console.log('Admin user seeded');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};

seedAdmin();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});