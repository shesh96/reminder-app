# ⏰ Angular Reminder App (RxJS)

A simple and elegant **Reminder Application** built using **Angular (Standalone Components)** and **RxJS**, developed as part of a Front End Developer assignment.

The app displays a live running clock, allows users to create reminders with a specific time, and automatically marks reminders as completed when their time is crossed.

---

## 🚀 Live Demo

👉 https://reminder-app-tau.vercel.app/

---

## 📂 GitHub Repository

👉 https://github.com/shesh96/reminder-app

---

## ✨ Features

- ⏰ **Live Running Time** displayed at the top
- ⏩ **Fast Time Mode**  
  - Clicking the red clock speeds up time  
  - 1 minute runs in 1 second
- ➕ **Add Reminders** using the blue button
- 🕒 **Set Reminder Time** using datetime picker
- ❌ **Auto Strike-through** when reminder time is crossed
- 🎨 Clean and minimal UI inspired by provided reference
- ⚡ Built using **Angular Standalone Components**
- 🔁 Reactive time handling using **RxJS**

---

## 🛠️ Tech Stack

- **Angular** (Standalone Components)
- **RxJS**
- **TypeScript**
- **HTML5 / CSS3**
- **Vercel** (Deployment)

---

## 📸 Reference Design

The UI design is inspired by the provided illustrative image in the assignment.  
As mentioned in the task instructions, the design is original while maintaining the same functionality.

---

## 🧠 Implementation Details

- **RxJS `interval()`** is used to manage the live running clock
- Fast-time mode increments time by **1 minute per second**
- Reminder completion is determined by comparing reminder time with current time
- Standalone components are used for a modern and clean Angular architecture
- Routing fallback is handled via `vercel.json` for smooth refresh behavior

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/shesh96/reminder-app.git

# Navigate to project folder
cd reminder-app

# Install dependencies
npm install

# Run the app
ng serve
