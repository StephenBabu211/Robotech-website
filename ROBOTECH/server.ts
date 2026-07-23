import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

app.use(express.json());

// Ensure data folder exists for saving enquiries
const DATA_DIR = path.join(process.cwd(), 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(ENQUIRIES_FILE)) {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2));
}

// Helper functions for enquiries persistence
function getEnquiries(): any[] {
  try {
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function saveEnquiries(data: any[]): void {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(data, null, 2));
}

// Nodemailer helper
function createSmtpTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  }
  return null;
}

// Lazy Gemini AI instance
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

// ================= API ROUTES =================

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'ROBOTECH API', timestamp: new Date().toISOString() });
});

// Enquiry Submission
app.post('/api/enquire', async (req: Request, res: Response) => {
  try {
    const { name, company, email, phone, country, robotName, intent, purpose, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Name, email, and phone number are required.' });
    }

    const timestamp = new Date().toISOString();
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

    const newEnquiry = {
      id: 'ENQ-' + Date.now().toString(36).toUpperCase(),
      name,
      company: company || 'N/A',
      email,
      phone,
      country: country || 'India',
      robotName: robotName || 'General Enquiry / All Robots',
      intent: intent || 'Buy or Rent',
      purpose: purpose || 'General Enquiry',
      message: message || 'Requesting quotation and product brochure.',
      status: 'New',
      createdAt: timestamp,
      ip: String(clientIp)
    };

    // Save locally
    const enquiries = getEnquiries();
    enquiries.unshift(newEnquiry);
    saveEnquiries(enquiries);

    // Attempt email sending
    const transporter = createSmtpTransporter();
    const recipient = process.env.NOTIFICATION_EMAIL || 'stephenbabu211@gmail.com';

    if (transporter) {
      try {
        // 1. Email to ROBOTECH Host
        await transporter.sendMail({
          from: `"ROBOTECH Enquiry System" <${process.env.SMTP_USER}>`,
          to: recipient,
          subject: `New Robot Enquiry from ROBOTECH Website - ${newEnquiry.robotName}`,
          html: `
            <div style="font-family: Arial, sans-serif; background-color: #0B1020; color: #FFFFFF; padding: 30px; borderRadius: 12px;">
              <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 10px;">🤖 ROBOTECH - New Customer Enquiry</h2>
              <table style="width: 100%; border-collapse: collapse; color: #E2E8F0; margin-top: 15px;">
                <tr><td style="padding: 8px; font-weight: bold; width: 180px;">Customer Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Company Name:</td><td>${company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email Address:</td><td>${email}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Phone Number:</td><td>${phone}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Country:</td><td>${country || 'India'}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; color: #00FFA3;">Robot Selected:</td><td style="color: #00FFA3; font-weight: bold;">${robotName}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; color: #8B5CF6;">Intent:</td><td style="color: #8B5CF6;">${intent}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Purpose:</td><td>${purpose}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td>${message}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Timestamp:</td><td>${timestamp}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">IP Address:</td><td>${clientIp}</td></tr>
              </table>
              <div style="margin-top: 25px; font-size: 12px; color: #94A3B8;">Sent automatically from ROBOTECH Web Portal</div>
            </div>
          `
        });

        // 2. Automated Confirmation Email to Customer
        await transporter.sendMail({
          from: `"ROBOTECH Support" <${process.env.SMTP_USER}>`,
          to: email,
          subject: `Thank you for your enquiry with ROBOTECH!`,
          html: `
            <div style="font-family: Arial, sans-serif; background-color: #0B1020; color: #FFFFFF; padding: 25px;">
              <h2 style="color: #00E5FF;">Hello ${name},</h2>
              <p style="color: #E2E8F0;">Thank you for contacting <strong>ROBOTECH</strong> regarding <strong>${robotName}</strong>.</p>
              <p style="color: #94A3B8;">Our technical engineering and sales team has received your request and will provide you with a custom quotation and brochure within 2 to 4 business hours.</p>
              <br/>
              <p style="color: #00FFA3;">Best regards,<br/><strong>ROBOTECH Customer Relations Team</strong><br/>https://robotech.ai</p>
            </div>
          `
        });
      } catch (mailError) {
        console.error('Nodemailer send error (will still save enquiry locally):', mailError);
      }
    } else {
      console.log('Nodemailer credentials not configured in .env. Enquiry successfully saved to local database:', newEnquiry.id);
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! Our team will contact you shortly.',
      enquiryId: newEnquiry.id
    });
  } catch (error: any) {
    console.error('Enquiry error:', error);
    return res.status(500).json({ error: 'Internal server error processing enquiry.' });
  }
});

// Admin Enquiries API
app.get('/api/admin/enquiries', (req: Request, res: Response) => {
  const secret = req.headers['x-admin-key'] || req.query.key;
  const expected = process.env.ADMIN_SECRET_KEY || 'robotech2026';

  if (secret !== expected) {
    return res.status(401).json({ error: 'Unauthorized admin access.' });
  }

  const enquiries = getEnquiries();
  return res.json({ success: true, count: enquiries.length, enquiries });
});

app.delete('/api/admin/enquiries/:id', (req: Request, res: Response) => {
  const secret = req.headers['x-admin-key'] || req.query.key;
  const expected = process.env.ADMIN_SECRET_KEY || 'robotech2026';

  if (secret !== expected) {
    return res.status(401).json({ error: 'Unauthorized admin access.' });
  }

  const { id } = req.params;
  let enquiries = getEnquiries();
  enquiries = enquiries.filter((item: any) => item.id !== id);
  saveEnquiries(enquiries);

  return res.json({ success: true, message: `Enquiry ${id} deleted.` });
});

// AI Chatbot Widget Server Route
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        reply: "Hello! Welcome to ROBOTECH. We manufacture and provide 8 advanced AI robots for Sales and Rental: Nila (Photo Robot), Aurra (AI Event Robot), Nexus A1 (Humanoid Reception Robot), Nova A1 (Educational Research Robot), Unitree G1 (Humanoid Robot), Unitree Go2 Pro (4D LiDAR Quadruped), Go2 Air (Lightweight Quadruped), and Recepto (AI Receptionist Robot). How may I assist your business today?"
      });
    }

    const systemInstruction = `
You are RoboAssistant, the intelligent AI representative for ROBOTECH — a premier robotics manufacturer offering Sales and Rental of advanced intelligent service, humanoid, and quadruped robots.

ROBOTECH Catalog (8 Exact Models):
1. Nila – Interactive Photo Robot (Interactive photo capture, printing, autonomous roaming. Buy & Rent)
2. Aurra – AI Event Robot (AI event hosting, brand activation, multi-lingual dialogue. Buy & Rent)
3. Nexus A1 – Humanoid Reception Robot (Full humanoid receptionist, facial check-in, guest escort. Buy & Rent)
4. Nova A1 – Educational Research Robot (ROS2 STEM humanoid research platform for colleges & labs. Buy Only)
5. Unitree G1 Humanoid Robot (Advanced bipedal humanoid with 120N.m motors & 3D LiDAR. Buy & Rent)
6. Unitree Go2 Pro (4D LiDAR quadruped security & inspection robot dog. Buy & Rent)
7. Go2 Air (Lightweight agile quadruped for STEM, events, and live demos. Buy & Rent)
8. Recepto – AI Receptionist Robot (Tabletop dual-screen receptionist console. Buy & Rent)

Services Offered:
- Sales (Consultation -> Customization -> Manufacturing -> Delivery -> Installation -> 2-3 Yr Warranty)
- Rental Packages (Daily, Weekly, Monthly, Yearly, Corporate Plans, Event Packages)

Keep answers polite, professional, futuristic, and helpful. Guide users to submit an enquiry or request a demo!
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || "Thank you for reaching out to ROBOTECH. How can I assist you with buying or renting our intelligent robots?";
    return res.json({ reply });
  } catch (error: any) {
    console.error('Chat AI error:', error);
    return res.json({
      reply: "Welcome to ROBOTECH! We manufacture and provide intelligent robots for Hotels, Hospitals, Malls, Education, and Industries. You can explore our catalog or request a live demonstration directly using the Enquiry Form!"
    });
  }
});

// ================= VITE / PRODUCTION SERVING =================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (!process.env.VERCEL) {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`ROBOTECH Server running on http://0.0.0.0:${PORT}`);
    });
  }
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;

