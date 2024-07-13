import OpenAI from "openai";

module.exports = class openai {
    static configuration() {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return openai;
    }

    static textCompletion({ prompt }) {
        return {
            model: "gpt-3.5-turbo-1106",
            messages: [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": `${prompt}`
                        }
                    ]
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}

