import { QuestionEntity } from "@/typing/Question";

export const mockQuestion = [
    {
        "id": "019c4d5f-aab3-716a-a66e-dc1db71cefd6",
        "difficulty": "easy",
        "inputCategory": "phone",
        "trainingCategory": "contact",
        "audio": {
            "script": "You can contact the reception on 0412 678 905 if you have any questions.",
            "audioUrl": "019c4d5f-aab3-716a-a66e-dc1db71cefd6.wav"
        },
        "question": {
            "prompt": "You can contact the reception on {} if you have any questions."
        },
        "answer": {
            "raw": "0412 678 905",
            "value": "0412678905",
            "commonMistakes": ["412678905", "0412-678-905"]
        }
    },
    {
        "id": "019c4d6e-1783-724b-a3f3-f36ba4d1daed",
        "difficulty": "easy",
        "inputCategory": "date",
        "trainingCategory": "date_time",
        "audio": {
            "script": "The course begins on the 14th of September.",
            "audioUrl": "019c4d6e-1783-724b-a3f3-f36ba4d1daed.wav"
        },
        "question": {
            "prompt": "The course begins on the {}."
        },
        "answer": {
            "raw": "14 September",
            "value": "2026-09-14",
            "commonMistakes": ["September 14", "14th September"]
        }
    },
    {
        "id": "019c4d70-ce3c-756f-99b5-a24b8ed173b6",
        "difficulty": "easy",
        "inputCategory": "time",
        "trainingCategory": "date_time",
        "audio": {
            "script": "The meeting will start at 9:45 a.m.",
            "audioUrl": "019c4d70-ce3c-756f-99b5-a24b8ed173b6.wav"
        },
        "question": {
            "prompt": "The meeting will start at {}."
        },
        "answer": {
            "raw": "9:45 a.m.",
            "value": 585
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-5c84d7525615",
        "difficulty": "medium",
        "inputCategory": "price",
        "trainingCategory": "money",
        "audio": {
            "script": "The total cost of the trip is 1250 dollars per person.",
            "audioUrl": "019c4d71-370f-743d-b946-5c84d7525615.wav"
        },
        "question": {
            "prompt": "The total cost of the trip is {} per person."
        },
        "answer": {
            "raw": "$1,250",
            "value": 1250,
            "unit": "$",
            "commonMistakes": ["125", "1500"]
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-63006ce13570",
        "difficulty": "medium",
        "inputCategory": "decimal",
        "trainingCategory": "number",
        "audio": {
            "script": "The temperature dropped to minus 3.7 degrees overnight.",
            "audioUrl": "019c4d71-370f-743d-b946-63006ce13570.wav"
        },
        "question": {
            "prompt": "The temperature dropped to minus {} degrees overnight."
        },
        "answer": {
            "raw": "-3.7",
            "value": -3.7,
            "unit": "degrees",
            "commonMistakes": ["3.7", "-37"]
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-676ccd8b71d2",
        "difficulty": "medium",
        "inputCategory": "percentage",
        "trainingCategory": "percentage",
        "audio": {
            "script": "Approximately 68 percent of students passed the exam.",
            "audioUrl": "019c4d71-370f-743d-b946-676ccd8b71d2.wav"
        },
        "question": {
            "prompt": "Approximately {} percent of students passed the exam."
        },
        "answer": {
            "raw": "68%",
            "value": 68,
            "unit": "%"
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-6b833ae99e91",
        "difficulty": "hard",
        "inputCategory": "large_number",
        "trainingCategory": "number",
        "audio": {
            "script": "The city has a population of 3 million 750 thousand people.",
            "audioUrl": "019c4d71-370f-743d-b946-6b833ae99e91.wav"
        },
        "question": {
            "prompt": "The city has a population of {} people."
        },
        "answer": {
            "raw": "3,750,000",
            "value": 3750000,
            "commonMistakes": ["300750000", "375000"]
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-6c6a811372c0",
        "difficulty": "hard",
        "inputCategory": "measurement",
        "trainingCategory": "measurement",
        "audio": {
            "script": "The farm covers an area of 245 hectares.",
            "audioUrl": "019c4d71-370f-743d-b946-6c6a811372c0.wav"
        },
        "question": {
            "prompt": "The farm covers an area of {} hectares."
        },
        "answer": {
            "raw": "245",
            "value": 245,
            "unit": "hectares"
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-724f2e0521e6",
        "difficulty": "hard",
        "inputCategory": "mixed",
        "trainingCategory": "address",
        "audio": {
            "script": "Please deliver the package to 27B King Street.",
            "audioUrl": "019c4d71-370f-743d-b946-724f2e0521e6.wav"
        },
        "question": {
            "prompt": "Please deliver the package to {}."
        },
        "answer": {
            "raw": "27B King Street",
            "value": "27b king street",
            "commonMistakes": ["27 King Street", "27B Kings Street"]
        }
    },
    {
        "id": "019c4d71-370f-743d-b946-7718744dcc37",
        "difficulty": "medium",
        "inputCategory": "measurement",
        "trainingCategory": "measurement",
        "audio": {
            "script": "The bridge is 1.8 kilometres long.",
            "audioUrl": "019c4d71-370f-743d-b946-7718744dcc37.wav"
        },
        "question": {
            "prompt": "The bridge is {} long."
        },
        "answer": {
            "raw": "1.8",
            "value": 1.8,
            "unit": "kilometres",
            "commonMistakes": ["18", "1,8"]
        }
    }
] as QuestionEntity[];