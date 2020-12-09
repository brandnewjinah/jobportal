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
    name: "goal",
    header: "What is your goal",
    sub: "Select all that apply",
    type: "selection",
    selections: [
      {
        id: 1,
        title: "Lose Weight",
      },
      {
        id: 2,
        title: "Get Healthier",
        options: [
          {
            id: 1,
            title: "Lower Cholestrol",
          },
          {
            id: 2,
            title: "Better Sleep",
          },
          {
            id: 3,
            title: "Improve Hydration",
          },
          {
            id: 4,
            title: "Better Bowel Movement",
          },
        ],
      },
    ],
  },
  {
    page: 2,
    name: "measurement",
    header: "Your Measurement",
    sub: "Please enter details",
    type: "input",
    selections: [
      {
        id: 1,
        name: "height",
        label: "Enter your height",
        options: [
          { id: 1, label: "cm" },
          { id: 2, label: "ft" },
        ],
      },
      {
        id: 2,
        name: "weight",
        label: "Enter your weight",
        options: [
          { id: 1, label: "kg" },
          { id: 2, label: "lbs" },
        ],
      },
      {
        id: 3,
        name: "goal_weight",
        label: "Enter your goal weight",
        options: [
          { id: 1, label: "kg" },
          { id: 2, label: "lbs" },
        ],
      },
    ],
  },
];
