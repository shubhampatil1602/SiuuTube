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

// n level nested comments data
export const commentsData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROyxOmbRVxRw6NxmEzS9fzTWl-5qhElKZOQw&s",
    name: "SiuuTube",
    text: "In a Live video: If the number of live chats exceeds 30, the top 10 chats are removed from the Redux store and DOM to prevent page freeze and improve performance.",
    replies: [],
  },

  {
    image:
      "https://c.ndtvimg.com/2024-10/l50qk0ko_mohammed-siraj_625x300_12_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    name: "DSP Siraj",
    text: "I am only believe on Jassi bhai becoz Game Changer player he is, only 1 guy Jasprit Bumrah.",
    replies: [],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-msiVgbXrIAm5X9jv8t2NnRIRT4awSkSOwURqZ2y97jhPalX8qelAd8&s=10",
    name: "Chaudhary Baldev",
    text: "Jaa Simran jaa, jee le apni zindagi.",
    replies: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqc9xIHHqCleeA3IafJ1L66V8MQTLSWcL1g&s",
        name: "Jethalal Gada",
        text: "Bhen topi pehenti hai aur bhai topi pehnata hai 😆😆",
        replies: [
          {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdh2xEl_S4FRQE7pcFRTjSg3YHK6tI9Yq4w&s",
            name: "Munna bhaiyaa",
            text: "Ye bhadiya tha guruu 🤣🤣",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCfHtY65KNFUfwYvpixpEu27dyTy3pFlGzw&s",
    name: "Raju",
    text: "Paisa Laya 😎💸??",
    replies: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sKQL3Xxi1uropCetamdu9V9Pfy9tHyra0w&s",
        name: "Pappu",
        text: "Laya na bhaii!!!",
        replies: [
          {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3yLfzEhSdyRQWVaRKIIpe6NWEkyigMAq6gBaOTyAYE7bfC0eMN9cpyoZTCkHKbsnFg&usqp=CAU",
            name: "Totla Seth",
            text: "Mela Taalis Laath mudhe dedo abhi te abhi 😡!!",
            replies: [
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1pAHyIb5lzWEu2O9EP2UbqX3VsL6KW_vNMUhsaox8ugdZKHjwp0WrMfeNiBa7Eb7hmA&usqp=CAU",
                name: "Kachra Seth",
                text: "Dedsau rupiya dega!!",
                replies: [
                  {
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdh2xEl_S4FRQE7pcFRTjSg3YHK6tI9Yq4w&s",
                    name: "Munna Bhaiyaa",
                    text: "Ye bhadiya tha guruu 🤣🤣",
                    replies: [
                      {
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcYSppyAihlktR0YRMGjr3FNPMtJfNPQhGR01rbRsGiWrGanko02laNS3zVnsvLiqV63dnZ0zRWUUmbX7IdE2ewWHSbiST99w_ft8k5Ctfg",
                        name: "Baburao Ganpatrao Apte",
                        text: "Kya gunda banega re tu?? CHeee!!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ErONmG44D1g0yle46tny4aBgB9HKJa2luw&s",
                name: "Munna Bhai (MBBS)",
                text: "Naii!!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULGBnsGH-eGg2TATFvO4OXQ5Fz6UlWiwcXw&s",
    name: "Chotuu",
    text: "Khelgaa fedee fayarr khelega???",
    replies: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsifLT8Zv1to3enoVnrPPxYposSfYKX_MkLQ&s",
        name: "Vakil",
        text: "Kaun hai ye log? Kaha se aate hai??",
        replies: [],
      },
    ],
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
