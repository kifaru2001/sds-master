import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const Country = request.query.Country as string;
    const Phone = request.query.Phone as string;
    const address = request.query.address as string;

    if (!Country || !Phone) throw new Error('Error');
    await sql`INSERT INTO Docs1 (Country, Phone, address) VALUES (${Country}, ${Phone}, ${address});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const user = await sql`SELECT * FROM Docs1;`;
  return response.status(200).json({ user });
}