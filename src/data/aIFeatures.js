import diabetes from "../assets/img/Eating healthy food-bro.svg";
// import stress from "../assets/img/Stress-rafiki.svg";
// // import nutrition from "../assets/img/Choice-pana.svg";
import pregWoman from "../assets/img/preg.svg";
import calories from "../assets/img/Eating healthy food-cuate.svg";
import insomania from "../assets/img/Insomnia-bro(3).svg";
export const aiFeatures = {
  Nutriscore: {
    details: {
      title: "Nutriscore",
      description: "Instant Food Analysis",
      mainLink: "/ai-page/nutri-score/0",
      img: calories,
      link: "/ai-page/calorie-level",
      positionRight: 0,
      positionBottom: 0,
      width: 450,
      type: "calorie-level",
      colspan: 1,
    },
    features: {
      calorieLevel: {
        title: "Calorie Level ",
        about:
          "Effortlessly optimize your nutrition with calorie level analysis, gaining precise insights into your daily energy intake and overall balance.",
        link: "/ai-page/ai-query/nutri-score/calorie-level/0",
        queries: [
          {
            id: 0,
            name: "calories",
            question: "How many calories does your meal contain?",
            unit: "kcal",
            type: "input",
          },
          {
            id: 1,
            name: "cal_fat",
            question: "How many calories come from fat?",
            unit: "kcal",
            type: "input",
          },
          {
            id: 2,
            name: "total_fat",
            question: "What is the total fat content?",
            unit: "g",
            type: "input",
          },
          {
            id: 3,
            name: "sat_fat",
            question: "How much saturated fat is present?",
            unit: "g",
            type: "input",
          },
          {
            id: 4,
            name: "trans_fat",
            question: "How much trans fat does it contain?",
            unit: "g",
            type: "input",
          },
          {
            id: 5,
            name: "cholesterol",
            question: "What is the cholesterol content?",
            unit: "mg",
            type: "input",
          },
          {
            id: 6,
            name: "sodium",
            question: "What is the sodium level?",
            unit: "mg",
            type: "input",
          },
          {
            id: 7,
            name: "total_carb",
            question: "How many total carbohydrates are present?",
            unit: "g",
            type: "input",
          },
          {
            id: 8,
            name: "fiber",
            question: "How much fiber does it contain?",
            unit: "g",
            type: "input",
          },
          {
            id: 9,
            name: "sugar",
            question: "What is the sugar content?",
            unit: "g",
            type: "input",
          },
          {
            id: 10,
            name: "protein",
            question: "How much protein is in the meal?",
            unit: "g",
            type: "input",
          },
        ],
      },
      nutriScan: {
        title: "Nutriscan",
        about:
          "Track, optimize, and improve your nutrition effortlessly with instant food analysis, providing quick insights into your meals and calorie intake.",
        link: "/ai-page/ai-query/nutri-score/nutri-scan/1",
        queries: [
          {
            id: 0,
            name: "calories",
            question: "How many calories does your meal contain?",
            unit: "kcal",
            type: "input",
          },
          {
            id: 1,
            name: "cal_fat",
            question: "How many calories come from fat?",
            unit: "kcal",
            type: "input",
          },
          {
            id: 2,
            name: "total_fat",
            question: "What is the total fat content?",
            unit: "g",
            type: "input",
          },
          {
            id: 3,
            name: "sat_fat",
            question: "How much saturated fat is present?",
            unit: "g",
            type: "input",
          },
          {
            id: 4,
            name: "trans_fat",
            question: "How much trans fat does it contain?",
            unit: "g",
            type: "input",
          },
          {
            id: 5,
            name: "cholesterol",
            question: "What is the cholesterol content?",
            unit: "mg",
            type: "input",
          },
          {
            id: 6,
            name: "sodium",
            question: "What is the sodium level?",
            unit: "mg",
            type: "input",
          },
          {
            id: 7,
            name: "total_carb",
            question: "How many total carbohydrates are present?",
            unit: "g",
            type: "input",
          },
          {
            id: 8,
            name: "fiber",
            question: "How much fiber does it contain?",
            unit: "g",
            type: "input",
          },
          {
            id: 9,
            name: "sugar",
            question: "What is the sugar content?",
            unit: "g",
            type: "input",
          },
          {
            id: 10,
            name: "protein",
            question: "How much protein is in the meal?",
            unit: "g",
            type: "input",
          },
        ],
      },
    },
  },

  Neurorest: {
    details: {
      description: "Sleep and  Stress Analysis",
      title: "Neurorest",
      mainLink: "/ai-page/neuro-rest/1",
      img: insomania,
      positionRight: 1,
      positionBottom: 1,
      right: "-15px",
      width: 180,
      type: "dream-guard",
      colspan: 2,
    },
    features: {
      sleepCheck: {
        title: "Sleep Check",
        about:
          "Take control of your sleep. Answer a few questions to evaluate your sleep patterns and uncover strategies to boost your rest.",
        link: "/ai-page/ai-query/neuro-rest/sleep-check/0",
        queries: [
          {
            id: 0,
            question: "What's your gender?",
            options: ["Male", "Female"],
            values: ["Male", "Female"],
            type: "option",
          },
          {
            id: 1,
            name: "age",
            question: "How old are you?",
            type: "select",
            options: [
              "select age",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
              "53",
              "54",
              "55",
              "56",
              "57",
              "58",
              "59",
              "60",
              "61",
              "62",
              "63",
              "64",
              "65",
              "66",
              "67",
              "68",
              "69",
              "70",
              "71",
              "72",
              "73",
              "74",
              "75",
              "76",
              "77",
              "78",
              "79",
              "80",
              "81",
              "82",
              "83",
              "84",
              "85",
              "86",
              "87",
              "88",
              "89",
              "90",
              "91",
              "92",
              "93",
              "94",
              "95",
              "96",
              "97",
              "98",
              "99",
              "100",
            ],
            values: [
              "select age",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
              "53",
              "54",
              "55",
              "56",
              "57",
              "58",
              "59",
              "60",
              "61",
              "62",
              "63",
              "64",
              "65",
              "66",
              "67",
              "68",
              "69",
              "70",
              "71",
              "72",
              "73",
              "74",
              "75",
              "76",
              "77",
              "78",
              "79",
              "80",
              "81",
              "82",
              "83",
              "84",
              "85",
              "86",
              "87",
              "88",
              "89",
              "90",
              "91",
              "92",
              "93",
              "94",
              "95",
              "96",
              "97",
              "98",
              "99",
              "100",
            ],
          },
          {
            id: 2,
            name: "sleepDuration",
            question: "How many Hours do you Sleep?",
            type: "select",
            options: [
              "select number of hours",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
            ],
            values: [
              "select number of hours",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
            ],
          },
          {
            id: 3,
            name: "qualityOfSleep",
            question: "Rate your sleep from 1-10?",
            type: "select",
            options: [
              "select rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
            values: [
              "select rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
          },
          {
            id: 4,
            question: "What is your Occupation?",
            type: "select",
            name: "occupation",
            options: [
              "select occupation",
              "Accountant",
              "Doctor",
              "Engineer",
              "Lawyer",
              "Manager",
              "Nurse",
              "Scientist",
              "Software Engineer",
              "Teacher",
            ],
            values: [
              "select occupation",
              "Accountant",
              "Doctor",
              "Engineer",
              "Lawyer",
              "Manager",
              "Nurse",
              "Scientist",
              "Software Engineer",
              "Teacher",
            ],
          },
          {
            id: 5,
            name: "weight",
            question: "What is your Weight?",
            unit: "kg",
            type: "input",
            min: 30,
            max: 200,
          },
          {
            id: 6,
            name: "height",
            question: "What is your Height?",
            unit: "cm",
            type: "input",
            min: "50",
            max: "250",
          },
          {
            id: 7,
            name: "physicalActivity",
            question: "Rate your physical activity from 1-10?",
            type: "select",
            options: [
              "select sleep rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
            values: [
              "select sleep rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
          },
          {
            id: 8,
            name: "dailySteps",
            question: "How many steps do you take today?",
            unit: "steps",
            type: "input",
          },
          {
            id: 9,
            name: "heartRate",
            question: "What is your heart rate?",
            unit: "bpm",
            type: "input",
          },
          {
            id: 10,
            name: "systolicBP",
            question: "What is your Systolic BP?",
            unit: "mmHg",
            type: "input",
          },
          {
            id: 11,
            name: "diastolicBP",
            question: "What is your Diastolic BP?",
            unit: "mmHg",
            type: "input",
          },
        ],
      },
      stressCheck: {
        title: "Stress Check",
        link: "/ai-page/ai-query/neuro-rest/stress-check/1",
        about:
          "Take control of your well-being. Answer a few questions to assess your stress levels and find ways to manage them.",
        queries: [
          {
            id: 0,
            question: "What's your gender?",
            options: ["Male", "Female"],
            values: ["Male", "Female"],
            type: "option",
          },
          {
            id: 1,
            name: "age",
            question: "How old are you?",
            unit: "year old",
            type: "input",
            options: [
              "select age",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
              "53",
              "54",
              "55",
              "56",
              "57",
              "58",
              "59",
              "60",
              "61",
              "62",
              "63",
              "64",
              "65",
              "66",
              "67",
              "68",
              "69",
              "70",
              "71",
              "72",
              "73",
              "74",
              "75",
              "76",
              "77",
              "78",
              "79",
              "80",
              "81",
              "82",
              "83",
              "84",
              "85",
              "86",
              "87",
              "88",
              "89",
              "90",
              "91",
              "92",
              "93",
              "94",
              "95",
              "96",
              "97",
              "98",
              "99",
              "100",
            ],
            values: [
              "select age",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
              "53",
              "54",
              "55",
              "56",
              "57",
              "58",
              "59",
              "60",
              "61",
              "62",
              "63",
              "64",
              "65",
              "66",
              "67",
              "68",
              "69",
              "70",
              "71",
              "72",
              "73",
              "74",
              "75",
              "76",
              "77",
              "78",
              "79",
              "80",
              "81",
              "82",
              "83",
              "84",
              "85",
              "86",
              "87",
              "88",
              "89",
              "90",
              "91",
              "92",
              "93",
              "94",
              "95",
              "96",
              "97",
              "98",
              "99",
              "100",
            ],
          },
          {
            id: 2,
            name: "sleepDuration",
            question: "How many Hours do you Sleep?",
            unit: "hours",
            type: "select",
            options: [
              "select number of hours",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
            ],
            values: [
              "select number of hours",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
            ],
          },
          {
            id: 3,
            name: "qualityOfSleep",
            question: "Rate your sleep from 1-10?",
            type: "select",
            options: [
              "select stress rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
            values: [
              "select stress rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
          },
          {
            id: 4,
            question: "What is your Occupation?",
            name: "occupation",
            type: "select",
            options: [
              "select occupation",
              "Accountant",
              "Doctor",
              "Engineer",
              "Lawyer",
              "Manager",
              "Nurse",
              "Scientist",
              "Software Engineer",
              "Teacher",
            ],
            values: [
              "select occupation",
              "Accountant",
              "Doctor",
              "Engineer",
              "Lawyer",
              "Manager",
              "Nurse",
              "Scientist",
              "Software Engineer",
              "Teacher",
            ],
          },
          {
            id: 5,
            name: "weight",
            question: "What is your Weight?",
            unit: "kg",
            type: "input",
            min: "30",
            max: "200",
          },
          {
            id: 6,
            name: "height",
            question: "What is your Height?",
            unit: "cm",
            type: "input",
            min: "50",
            max: "250",
          },
          {
            id: 7,
            name: "physicalActivity",
            question: "Rate your physical activity from 1-10?",
            type: "select",
            options: [
              "select rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
            values: [
              "select rate",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
            ],
          },
          {
            id: 8,
            name: "dailySteps",
            question: "How many steps do you take today?",
            unit: "steps",
            type: "input",
          },
          {
            id: 9,
            name: "heartRate",
            question: "What is your heart rate?",
            unit: "bpm",
            type: "input",
          },
          {
            id: 10,
            name: "systolicBP",
            question: "What is your Systolic BP?",
            unit: "mmHg",
            type: "input",
          },
          {
            id: 11,
            name: "diastolicBP",
            question: "What is your Diastolic BP?",
            unit: "mmHg",
            type: "input",
          },
        ],
      },
    },
  },

  Glucosense: {
    details: {
      title: "Glucosense",
      description: "AI-Powered Diabetes Management",
      mainLink: "/ai-page/gluco-sense/2",
      img: diabetes,
      positionRight: 2,
      positionBottom: 2,
      right: "-20px",
      bottom: "-320px",
      width: 180,
      colspan: 2,
    },
    type: "gluco-sense",
    features: {
      diabetes: {
        about: "AI-Powered Diabetes Management",
        link: "/ai-page/ai-query/gluco-sense-/diabetes/2",
        queries: [
          {
            id: 0,
            name: "pregnancies",
            question: "How many times have you been pregnant?",
            unit: "times",
            type: "input",
          },
          {
            id: 1,
            name: "glucose",
            question: "What is your glucose level?",
            unit: "mg/dL",
            type: "input",
          },
          {
            id: 2,
            name: "bloodPressure",
            question: "What is your blood pressure?",
            unit: "mmHg",
            type: "input",
          },
          {
            id: 3,
            name: "skinThickness",
            question: "What is your skin thickness (triceps)?",
            unit: "mm",
            type: "input",
          },
          {
            id: 4,
            name: "insulin",
            question: "What is your insulin level?",
            unit: "µU/mL",
            type: "input",
          },
          {
            id: 5,
            name: "weight",
            question: "What is your Weight?",
            unit: "kg",
            type: "input",
            min: "30",
            max: "200",
          },
          {
            id: 6,
            name: "height",
            question: "What is your Height?",
            unit: "cm",
            type: "input",
            min: "50",
            max: "250",
          },
          {
            id: 6,
            name: "diabetesPedigreeFunction",
            question: "What is your Diabetes Pedigree Function score?",
            unit: "",
            type: "input",
          },
          {
            id: 7,
            name: "age",
            question: "How old are you?",
            unit: "years",
            type: "input",
          },
        ],
      },
    },
  },
  BumpBalance: {
    details: {
      title: "Bump Balance",
      description: "Pregnancy Wellness Guide",
      mainLink: "/ai-page/bumpBalance/3",
      img: pregWoman,
      positionBottom: 3,
      positionRight: 3,
      both: 320,
      type: "pregnancy-ai",
      colspantom: "-35px",
      widt: 1,
    },
    features: {
      bumpBalance: {
        about: "Pregnancy Wellness Guide",
        link: "/ai-page/ai-query/bump-balance-/bump-balance/3",
        queries: [
          {
            id: 0,
            name: "age",
            question: "How old are you?",
            type: "select",
            options: [
              "select age",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
              "53",
              "54",
              "55",
              "56",
              "57",
              "58",
              "59",
              "60",
              "61",
              "62",
              "63",
              "64",
              "65",
              "66",
              "67",
              "68",
              "69",
              "70",
              "71",
              "72",
              "73",
              "74",
              "75",
              "76",
              "77",
              "78",
              "79",
              "80",
              "81",
              "82",
              "83",
              "84",
              "85",
              "86",
              "87",
              "88",
              "89",
              "90",
              "91",
              "92",
              "93",
              "94",
              "95",
              "96",
              "97",
              "98",
              "99",
              "100",
            ],
            values: [
              "select age",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "32",
              "33",
              "34",
              "35",
              "36",
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
              "48",
              "49",
              "50",
              "51",
              "52",
              "53",
              "54",
              "55",
              "56",
              "57",
              "58",
              "59",
              "60",
              "61",
              "62",
              "63",
              "64",
              "65",
              "66",
              "67",
              "68",
              "69",
              "70",
              "71",
              "72",
              "73",
              "74",
              "75",
              "76",
              "77",
              "78",
              "79",
              "80",
              "81",
              "82",
              "83",
              "84",
              "85",
              "86",
              "87",
              "88",
              "89",
              "90",
              "91",
              "92",
              "93",
              "94",
              "95",
              "96",
              "97",
              "98",
              "99",
              "100",
            ],
          },
          {
            id: 1,
            name: "height",
            question: "What is your height?",
            unit: "cm",
            type: "input",
            min: "50",
            max: "250",
          },
          {
            id: 2,
            name: "weight",
            question: "What is your weight?",
            unit: "kg",
            type: "input",
            min: 30,
            max: 200,
          },
          {
            id: 3,
            name: "pregStage",
            question: "Which stage of pregnancy are you currently in?",

            type: "select",
            options: ["select", "First trimester", "Second trimester"],
            values: ["select", "firsttrimester", "secondtrimester"],
          },
          {
            id: 4,
            name: "active",
            question: "How would you describe your current activity level?",
            type: "select",
            options: [
              "select",
              "sedentary",

              "lightly active",

              "moderately active",

              "very active",
            ],
            values: [
              "select",
              "sedentary",

              "light active",

              "moderately active",

              "very active",
            ],
          },
        ],
      },
    },
  },
};
