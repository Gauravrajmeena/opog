import OpenAI from "openai";

const openai = new OpenAI({ baseURL: 'https://api.deepseek.com', apiKey: 'sk-a3c8caff0cb14fb6ade7d886b5eac27c' });

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { messages } = req.body;

        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You are a helpful assistant." }, ...messages],
                model: "deepseek-chat",
            });

            res.status(200).json({ content: completion.choices[0].message.content });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
