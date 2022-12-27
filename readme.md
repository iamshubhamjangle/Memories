# Deployment

Website is Live [click here to visit](https://memories-1n53.onrender.com)

**Running locally**

**Client**

```
npm install
npm run dev
```

**Server**

```
npm install
npm start
```

# Setting up Environment variables

**Client**

To use in React-Vite app: `import.meta.env.VITE_BACKEND_ENDPOINT`
Environment variable must be starting with `VITE_`

```
VITE_GOOGLE_CLIENT_ID=<your-google-clientid>
VITE_GOOGLE_CLIENT_SECRET=<your-google-client-secret>
VITE_BACKEND_ENDPOINT=http://localhost:5000
```

**Server**

To use in Node.js env: `process.env.DB_CONNECTION_URL`

```
DB_CONNECTION_URL="mongodb+srv://<id>:<password>@cluster0.xxxxxxxx.mongodb.net/?retryWrites=true&w=majority"
JWT_SECRET="your-jwt-secret"
```
