export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const axios = require("axios");
      const response = await axios.post(process.env.ZAPIER_URL, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: "Error sending data to Zapier", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
