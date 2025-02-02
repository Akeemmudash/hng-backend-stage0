# hng-backend-stage0

This is a simple Node.js API that returns the following information in JSON format:

- Your registered email address (used to register on the HNG12 Slack workspace).
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

## **Setup Instructions**

### **1. Clone the Repository**

```sh
git clone https://github.com/Akeemmudash/hng-backend-stage0.git
cd hng-backend-stage0
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Run Locally**

```sh
npm start
```

The API will be available at: `http://localhost:3000/`

---

## API Documentation

### Endpoint

- **URL**: `https://x-line-api-stage0.onrender.com`
- **Method**: `GET`

### Response Format

```json
{
  "email": "akeemmudash@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Akeemmudash/hng-backend-stage0.git"
}
```

If there is a server issue, you will receive:

```json
{
  "error": "Something went wrong"
}
```

---

## **Example Usage**

### **Using `JavaScript` (Fetch API)**

```js
fetch("https://x-line-api-stage0.onrender.com")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### **Using `curl` (Command Line)**

```sh
curl -X GET https://x-line-api-stage0.onrender.com

```

## **Deployment**

This API is deployed on **<https://x-line-api-stage0.onrender.com>** and can be accessed via:

```text
https://x-line-api-stage0.onrender.com
```

---

## **Backlink to Node.js Hiring Page**

[Hire Node.js Developers - HNG](https://hng.tech/hire/nodejs-developers)
