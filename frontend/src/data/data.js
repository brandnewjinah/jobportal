export const colourOptions = [
  { value: "Front-end", label: "Front-end", color: "#00B8D9", isFixed: true },
  { value: "Back-end", label: "Back-end", color: "#5243AA" },
  { value: "UX/UI", label: "UX/UI", color: "#FF5630", isFixed: true },
  {
    value: "Product Management",
    label: "Product Management",
    color: "#FF8B00",
  },
  { value: "Marketing", label: "Marketing", color: "#FFC400" },
  { value: "HR", label: "HR", color: "#36B37E" },
];

export const quizContents = [
  {
    page: 1,
    name: "measurement",
    header: "Your Measurement",
    sub: "Please enter details",
    type: "input",
    selections: [
      {
        id: 1,
        name: "height",
        label: "Current height",
        options: [
          { id: 1, label: "cm" },
          { id: 2, label: "ft" },
        ],
      },
      {
        id: 2,
        name: "weight",
        label: "Current weight",
        options: [
          { id: 1, label: "kg" },
          { id: 2, label: "lbs" },
        ],
      },
      {
        id: 3,
        name: "goal_weight",
        label: "Goal weight (optional)",
        options: [
          { id: 1, label: "kg" },
          { id: 2, label: "lbs" },
        ],
      },
    ],
  },
  {
    page: 2,
    name: "health_goal",
    header: "What is your goal",
    sub: "Select all that apply",
    type: "selection",
    selections: [
      {
        id: 1,
        title: "Lower Cholestrol",
      },
      {
        id: 2,
        title: "Improve Digestion",
      },
      {
        id: 3,
        title: "Boost Immunie System",
      },
      {
        id: 4,
        title: "Stay Hydrated",
      },
      {
        id: 5,
        title: "Improve Bowel Movement",
      },
    ],
  },
];
