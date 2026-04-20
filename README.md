# 📌 Project Setup Guide

This project contains both **frontend** and **backend** parts. Follow the instructions below to run the project.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Start the Frontend

```bash
npm run dev
```

---

### 3. Create `db.json` File

Create a file named `db.json` in the root directory of the project.

Add the following structure:

```json
{
  "users": [],
  "transaction": [],
  "edit-profile": []
}
```

---

### 4. Start JSON Server

Run the following command to start the mock backend server:

```bash
npm run server
```

---

## 📌 Important Instructions

- Make sure both the frontend and JSON server are running at the same time.
- The `db.json` file acts as a mock database.

---

## ✅ Commands Summary

| Purpose              | Command          |
| -------------------- | ---------------- |
| Install dependencies | `npm install`    |
| Start frontend       | `npm run dev`    |
| Start backend        | `npm run server` |

---
