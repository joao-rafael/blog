import type { NextApiRequest, NextApiResponse } from 'next';

type HelloResponse = {
  name: string;
};

const handler = (_req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: 'John Doe' });
};

export default handler;
