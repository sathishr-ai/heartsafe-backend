<div align="center">

  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge&logo=netlify" alt="Status">
  
  <h1>❤️ HeartSafe: AI-Powered CHD Risk Assessor</h1>
  
  <p><strong>A fast, cross-platform healthcare application prioritizing early Coronary Heart Disease detection.</strong></p>

  <a href="https://heartsafechdpred.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-Access_Web_App-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Mobile_App-Download_APK-green?style=for-the-badge&logo=android&logoColor=white" alt="Download APK">
  </a>

</div>

<br />

## 🌟 Project Overview
**HeartSafe** is an end-to-end intelligent predictive healthcare solution. Built to analyze clinical metrics and patient history through an **XGBoost** machine learning model, it serves real-time Coronary Heart Disease (CHD) risk assessments and automated preventive advisories. The application features a premium cross-platform interface supporting both individual patient profiles and bulk dataset processing for clinical environments.

---

## 🛠️ Technical Arsenal

<div align="center">
  <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" alt="Flutter">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/XGBoost-%23F37626.svg?style=for-the-badge&logoColor=white" alt="XGBoost">
</div>

* **Frontend Layer:** Flutter (Android & Web), Vanilla HTML/JS
* **Backend Architecture:** Node.js, Express.js (REST APIs)
* **Machine Learning Engine:** Python, Scikit-learn, XGBoost 
* **Database & Cloud:** MongoDB Atlas Cloud
* **Deployment:** Netlify (Web UI), Render.com (Backend API)

---

## 🚀 Key Features
* 🏥 **Real-Time Risk Analysis:** Secure, rapid communication with the XGBoost AI model to predict CHD 10-year risk.
* 📊 **Batch Processing:** Clinical data upload feature supporting CSV format for processing hundreds of patients at once.
* 📱 **Cross-Platform:** Available as a standalone Android APK and a public Web Application.
* 🔒 **Encrypted Architecture:** Secure JWT authentication and protected connection routing.
* 📄 **PDF Reporting:** Automated generation of detailed patient medical review reports and dietary advisories.

---

## ⚙️ Local Development Setup

<details>
<summary><b>Click to expand local installation instructions</b></summary>

### 1. Prerequisites
- Node.js (v16+)
- Flutter SDK
- MongoDB Compass (for local testing) or Atlas Cloud Cluster

### 2. Backend Setup
```bash
# Clone the repository
git clone https://github.com/sathishr-ai/heartsafe-backend.git
cd heartsafe-backend

# Install Dependencies
npm install

# Create a .env file and add your variables
MONGO_URI=mongodb+srv://<your_credentials>@cluster0.net/heartsafe
JWT_SECRET=your_jwt_secret_key
PORT=5000

# Start the development server
npm start
```

### 3. Frontend Setup (Flutter)
```bash
# Build for Web
flutter build web

# Build for Android
flutter build apk --release
```

</details>

<br />

<div align="center">
  <sub>Built with ❤️ by a Full-Stack AI/ML Engineer</sub>
</div>
