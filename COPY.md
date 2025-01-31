# HNG12 Stage 0 Backend Task - Public API

## **Project Description**

This is a simple public API for the **HNG12 Stage 0 Backend Task**. It returns basic information in JSON format:

- Your registered email address on HNG12 Slack workspace
- The current datetime in **ISO 8601 format (UTC)**
- The GitHub repository URL of this project

This API follows all the **acceptance criteria** outlined in the task.

---

## **Technology Stack**

- **Node.js** (Runtime environment)
- **Express.js** (Web framework)
- **CORS** (Cross-Origin Resource Sharing support)
- **Render.com** (Deployment)

---

## **Setup Instructions**

### **1. Clone the Repository**

```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Create a `.env` File**

Create a `.env` file in the root directory and add:

```ini
EMAIL=your-email@example.com
GITHUB_URL=https://github.com/yourusername/your-repo
```

### **4. Run Locally**

```sh
npm start
```

The API will be available at: `http://localhost:3000/`

---

## **API Documentation**

### **Endpoint:**

```plaintext
GET /
```

### **Response Format:**

#### **Success Response (200 OK)**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### **Error Response (500 Internal Server Error)**

If there is a server issue, you will receive:

```json
{
  "error": "Something went wrong"
}
```

---

## **Deployment**

This API is deployed on **Render.com** and can be accessed via:

```
https://your-deployed-url.com/
```

---

## **Backlink to Node.js Hiring Page**

[Hire Node.js Developers - HNG](https://hng.tech/hire/nodejs-developers)

---

## **License**

This project is open-source and available under the MIT License.
