import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ MONGODB_URI: process.env.MONGODB_URI || "Not Found" });
  }
  