import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
// import { User } from '@prisma/client';
import db from '@/lib/db';

export async function POST(request: Request) {
  const { name, email, password, passwordConfirm } = await request.json();
  console.log(name, email, password, passwordConfirm);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!name || !email || !password || !passwordConfirm) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  if (passwordConfirm !== password) {
    return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 });
  }
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'User created successfully', user: newUser },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
