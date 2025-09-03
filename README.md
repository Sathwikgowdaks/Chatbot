# ChatBot Application

## 📌 Overview

A simple real-time chatbot web application built with **React.js, Hasura, and Nhost**. Users can create chat sessions, send messages, and get AI-powered responses. The app ensures security with **Row-Level Security (RLS)** and user-specific permissions.

---

## 🚀 Features

* User authentication with Nhost
* Create chats and send messages
* Real-time updates with GraphQL Subscriptions
* AI responses integrated via Hasura Actions → n8n → OpenRouter
* Secure: each user only sees their own chats/messages

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Apollo Client
* **Backend:** Hasura GraphQL, PostgreSQL (via Nhost)
* **Auth:** Nhost JWT
* **Integration:** n8n, OpenRouter API

---

## ▶️ How to Run

```bash
# Clone repo
 git clone <repo-url>
 cd chatbot

# Install dependencies
 npm install

# Start app
 npm run dev
```

Backend (Hasura + Nhost) is pre-configured with chats/messages schema and RLS policies.

---

## 👨‍💻 Author

Developed by Sathwik
