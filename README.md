
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started


Setting up firebase:<br>
```bash
npm install firebase
```
Go to .env.local file, if it is not located then create a new .env.local file in your project root:<br>

Add your respective credentials in .env.local file from Firebase website after enabling Google and Email/Password Authentication in the Authentication part.

NEXT_PUBLIC_FIREBASE_API_KEY="Add_YOUR_FIREBASE_API_KEY"<br>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="ADD_YOUR_FIREBASE_AUTH_DOMAIN"<br>
NEXT_PUBLIC_FIREBASE_PROJECT_ID="Add_YOUR_FIREBASE_PROJECT_ID"<br>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="ADD_YOUR_FIREBASE_STORAGE_BUCKET"<br>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="ADD_YOUR_FIREBASE_MESSAGING_SENDER_ID"<br>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="ADD_YOUR_FIREBASE_MESSAGING_SENDER_ID"<br>
NEXT_PUBLIC_FIREBASE_APP_ID="ADD_YOUR_FIREBASE_APP_ID"


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

