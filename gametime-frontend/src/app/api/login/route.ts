import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { encrypt } from '../../lib/session'; // You should have an encrypt function
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    // 🔹 Send login credentials to Laravel API
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      username,
      password,
    });

    if (response.status !== 200) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = response.data.token; // 🔹 Get token from Laravel
    const encryptedToken = encrypt(token); // 🔹 Encrypt the token

    // 🔹 Set HTTP-only cookie
    const cookie = serialize('session', encryptedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    const res = NextResponse.json({ message: 'Login successful' });
    res.headers.set('Set-Cookie', cookie);

    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
