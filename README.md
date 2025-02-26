# Team Up!

A web-based application for generating and managing teams.\
Currently still in development.

For more information on the structure of the project and specific to dos, please read the [About section](#about).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# IMPORTANT

**Note:** Keys and values used within src/app/data/firebase/config.js are not provided. Future developers must create and use their own keys and store in their own .env.local file
or create a public shared account.

For detailed information on how the project's URLs are structured, please read [`Routing Fundamentals`](https://nextjs.org/docs/app/building-your-application/routing),
in particular [`Route Groups`](https://nextjs.org/docs/app/building-your-application/routing/route-groups).\

# RUNNING THE PROJECT

After downloading or cloning the repository, open your terminal and within the project directory, run:

```
npm install
```

This step only needs to be performed once.\

Afterwards, the project can be run in development mode by doing the following command within the project directory:

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

# ABOUT

## Next.js vs React

While most of the app is used on the client side, Next.js was chosen for its other features. This project can be downgraded to React if preferred.

## Database Structure

This project relies on [Firebase](https://firebase.google.com/) for authentication and data storage.
Any changes to authentication methods and data storage in other NoSQL databases must be changed manually.

Ideally, this project would communicate with a seperate backend server that contains the machine learning algorithm as well as user data stored in a NoSQL database.\
User data would be stored in a collection of students with each document named by individual user IDs/tokens given by the authentication service. Creating the project's own
authentication service is not reccomended to avoid security risks with user data.

Within each document, user data should be contained as a JSON object including:

- firstname: string
- lastname: string
- isteacher: bool
- schoolid: string/number
- classes: list
  - (classid: string/number)
- archive: list
  - (classid: string/number)
- profile: JSON object
  - (relevant information)

Another collection of each school utilizing Team Up! would contain documents named respectively by their respective school IDs.

Within each document representing a school will contain relevant information such as:

- name: string
- courses: collection

and other information as needed.

This collection of courses will contain documents representing courses with randomly generated IDs as their names.

Each course document will contain:

- name: string
- students: list
  - (studentid: string)
- teachers: list
  - (teacherid: string)
- teams: list
  - (team: list)
    - (studentid: string)

and other information as needed. Note that studentid and teacherid refer to individual user IDs/tokens given by the authentication service.

The machine learning algorithm requires all of the data within a class as well as the profile information of students and instructors.

**Note:** Information relating to calendar events, goals, notifications, and direct messages need to be stored somewhere and be associated with respective users.
As of now, where to store this information is not planned.

## To Do

(This list is tenative and does not contain all tasks necessary to create a fully functioning website.)

- Check if user is student or teacher
  - Seperate student and teacher views
    - Different functionality for add classes (students) and creating classes (teacher); Must check database and push course to appropriate school
    - Different inner sidebar layouts when teams are not finalized and finalized (4 layouts total)
- Dynamic pages for courses
  - Must grab information from database
    - Add new information within database

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
