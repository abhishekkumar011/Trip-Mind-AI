# Trip Mind AI 🤖

An **AI-powered trip planning app** that helps users create personalized travel itineraries with hotels, activities, and costs.  
Built with **Next.js, Convex, Clerk, TailwindCSS, and OpenAI (via OpenRouter)**.


## 🚀 Features
- **AI-powered Chat Assistant**
    - Step-by-step trip planning (origin, destination, group size, budget, duration).
  - Final travel plan with hotels & day-wise itinerary.

- **Hotels & Activities**
  - Hotel details with name, address, price, rating, and images.
  - Day-wise itinerary with activities, ticket prices, locations, and best visiting times.
  - Interactive **timeline view** for itinerary.

- **User Accounts**
  - Authentication with **Clerk** (Google, Email).
  - Each user has their own trip history. 
  - See all your hotels and places on **map**. 

- **Trip Management**
  - **Create Trip Page** → Start planning a new trip with AI.
  - **My Trips Page** → View all saved trips.
  - **View Trip Page** → Open specific trips with full details. 

- **Modern UI/UX**
  - Built with **TailwindCSS**, Shadcn UI.
  - Responsive for all **screens**.
  - Hotel & activity cards with images.
  - Smooth timeline for day-wise plans.

- **Backend & Storage**
  - **Convex Database** for storing users and trips.
  - Context API for managing user or trip state across pages.
  - Deployed on **Vercel**.

## 🛠️ Tech Stack
- **Frontend:** Next.js 15, TypeScript, Tailwind.CSS, Shadcn UI  
- **Backend:** Convex, Next.js API Routes 
- **Auth:** Clerk
- **AI:** OpenAI GPT model
- **Hosting:** Vercel  

## 📸 Screenshots
<img width="1881" height="872" alt="picture 1" src="https://github.com/user-attachments/assets/7ebf2316-a991-40c1-acbe-3987916668bd" />
<img width="1900" height="872" alt="picture 2" src="https://github.com/user-attachments/assets/e50344b2-81b5-4ebc-8de2-3a1ecbeebbf6" />
<img width="1918" height="872" alt="picture 3" src="https://github.com/user-attachments/assets/f721b538-0107-4d30-b09f-a28ae23b737b" />

## ⚙️ Installation & Setup

#### 1. Clone the repository:

```bash
git clone https://github.com/abhishekkumar011/Trip-Mind-AI.git
cd trip-mind-ai

```
#### 2. Install dependencies:

```bash
npm install

```

#### 3. Create a .env file:
```bash
CONVEX_DEPLOYMENT = your_deployment
NEXT_PUBLIC_CONVEX_URL = convex_URL
OPENROUTER_API_KEY = your_openrouter_key
NEXT_PUBLIC_CONVEX_URL = your_convex_deployment_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your_clerk_publishable_key
CLERK_SECRET_KEY = your_clerk_secret_key
NEXT_PUBLIC_UNSPLASH_API_KEY = your_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

#### 4. Run the convex development server
```bash
npx convex dev
```

#### 5. Run the development server
```bash
npm run dev
```
