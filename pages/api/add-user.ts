import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const FirstName = request.query.FirstName as string;
    const LastName = request.query.LastName as string;
    const address = request.query.address as string;
    
    if (!FirstName || !LastName) throw new Error('Both Names are Required');
    await sql`INSERT INTO Members (FirstName, LastName, address) VALUES (${FirstName}, ${LastName}, ${address});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const user = await sql`SELECT * FROM Members;`;
  return response.status(200).json({ user });
}