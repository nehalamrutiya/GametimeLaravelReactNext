import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import axios from 'axios';
import { decrypt } from '../../lib/session';

export async function GET(req: Request) {
  try {

    // Retrieve the session token from the cookies
    const cookies = req.headers.get('cookie') || '';
    const parsedCookies = parse(cookies);
    const token = parsedCookies['session'] ?? ''; // Fetch token from session cookie
    const decryptedToken = decrypt(token); // 🔹 Encrypt the token
   
    if (!decryptedToken) {
      return NextResponse.json({ error: 'Authentication token not found' }, { status: 401 });
    }

    // Fetch user data from Laravel API
    const userResponse = await axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${decryptedToken}`,
      },
    });

    if (userResponse.status === 200) {
      return NextResponse.json(userResponse.data);
    } else {
      return NextResponse.json({ error: 'Failed to fetch user details' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
