// Tabs data
export const items = [
  "All",
  "Live",
  "Dwarka",
  "Music",
  "Namaste JavaScript",
  "100xDevs",
  "Cricket",
];

// Simple comments data
export const commentsData = [
  {
    image: "/better-blur-placeholder.jpg",
    name: "Alice",
    text: "Nice video!",
    replies: [],
  },
  {
    image: "/better-blur-placeholder.jpg",
    name: "Bob",
    text: "Loved it!",
    replies: [],
  },
  {
    image: "/better-blur-placeholder.jpg",
    name: "Charlie",
    text: "So cool!",
    replies: [
      {
        image: "/better-blur-placeholder.jpg",
        name: "Daisy",
        text: "Agreed!",
        replies: [
          {
            image: "/better-blur-placeholder.jpg",
            name: "Eve",
            text: "Me too!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    image: "/better-blur-placeholder.jpg",
    name: "Frank",
    text: "Awesome!",
    replies: [
      {
        image: "/better-blur-placeholder.jpg",
        name: "Grace",
        text: "Yes!",
        replies: [
          {
            image: "/better-blur-placeholder.jpg",
            name: "Heidi",
            text: "Totally!",
            replies: [
              {
                image: "/better-blur-placeholder.jpg",
                name: "Ivan",
                text: "Absolutely!",
                replies: [
                  {
                    image: "/better-blur-placeholder.jpg",
                    name: "Judy",
                    text: "For sure!",
                    replies: [
                      {
                        image: "/better-blur-placeholder.jpg",
                        name: "Karl",
                        text: "Haha!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                image: "/better-blur-placeholder.jpg",
                name: "Leo",
                text: "Nope!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    image: "/better-blur-placeholder.jpg",
    name: "Mallory",
    text: "Great job!",
    replies: [
      {
        image: "/better-blur-placeholder.jpg",
        name: "Nina",
        text: "Who else liked it?",
        replies: [],
      },
    ],
  },
  {
    image: "/better-blur-placeholder.jpg",
    name: "Oscar",
    text: "Keep it up!",
    replies: [],
  },
];

// Random names and comments for live chats
export const generateRandomDataForLiveChats = () => {
  const dummyData = [
    {
      name: "DSP SIraj",
      message: "I am only believe on Jassi bhai...",
    },
    {
      name: "ReactJS",
      message: "I use Virtual DOM for performance..",
    },
    {
      name: "RTK",
      message: "I centralize state in one store 😎.",
    },
    {
      name: "RTK",
      message: "I define actions, reducers, and dispatch.",
    },
    {
      name: "ReactJS",
      message: "I use hooks for state management.",
    },
    {
      name: "DSP SIraj",
      message: "I am only believe on Jassi bhai...",
    },
    {
      name: "ReactJS",
      message: "I use React Router for navigation.",
    },
    {
      name: "Tailwind",
      message: "I am a utility-first CSS framework.",
    },
    {
      name: "Tailwind",
      message: "I avoid pre-designed components.",
    },
    {
      name: "SiuuTube",
      message: "I am built with live YT API 😎.",
    },
    {
      name: "SiuuTube",
      message: "I am using RTK for state management.",
    },
    {
      name: "API Polling",
      message: "I am using setInterval for live chat polling.",
    },
    {
      name: "API Polling",
      message: "I fetch data periodically.",
    },
    {
      name: "DSP SIraj",
      message: "I am only believe on Jassi bhai...",
    },
    {
      name: "SiuuTube",
      message: "I am using debouncing in search inputs.",
    },
    {
      name: "SiuuTube",
      message: "I support dark and light themes.",
    },
    {
      name: "Debouncing",
      message: "I reduce unnecessary API calls.",
    },
    {
      name: "Tailwind",
      message: "All are rely on my easy-to-use class names 😎.",
    },
    {
      name: "DSP SIraj",
      message: "I am only believe on Jassi bhai...",
    },
  ];

  return {
    ...dummyData[Math.floor(Math.random() * dummyData.length)],
  };
};
