# ROBOTECH – Intelligent Robotics Platform

ROBOTECH manufactures and provides advanced intelligent service, humanoid, and quadruped robots for **Sales** and **Rental**.

## Reference Robots Included:
1. **Nila – Interactive Photo Robot** (Buy & Rent)
2. **Aurra – AI Event Robot** (Buy & Rent)
3. **Nexus A1 – Humanoid Reception Robot** (Buy & Rent)
4. **Nova A1 – Educational Research Robot** (Buy)
5. **Unitree G1 Humanoid Robot** (Buy & Rent)
6. **Unitree Go2 Pro – Quadruped Robot** (Buy & Rent)
7. **Go2 Air – Lightweight Quadruped Robot** (Buy & Rent)
8. **Recepto – AI Receptionist Robot** (Buy & Rent)

## Features & System Architecture
- **Full-Stack Express + Vite React App**: Powered by TypeScript and Tailwind CSS v4.
- **Automated Enquiry & Quotation System**: Form entries post to `/api/enquire`, log to local JSON database (`data/enquiries.json`), and automatically dispatch emails via Nodemailer to the host Gmail (`stephenbabu211@gmail.com`).
- **Interactive Robot Comparison Matrix**: Allows comparing up to 3 selected models side-by-side.
- **Rental Cost Estimator**: Interactive calculator estimating package rates based on duration and unit quantities.
- **Admin Dashboard**: Secured with key (`robotech2026`). Features CSV download, status filtering, and PDF printing.
- **AI Chatbot Assistant**: Server-side Gemini API route `/api/chat` for instant Q&A.
- **Dark & Neon Aesthetics**: Modern glassmorphism, responsive navigation, particles canvas, and animated metrics.

## Environment Variables (.env)
```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="stephenbabu211@gmail.com"
SMTP_PASS="your-app-password"
NOTIFICATION_EMAIL="stephenbabu211@gmail.com"
ADMIN_SECRET_KEY="robotech2026"
```

## Running the Project
```bash
npm run dev
```
Runs Express + Vite on http://0.0.0.0:3000.
