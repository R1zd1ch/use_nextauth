import Github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import db from '@/lib/db';

const provider = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = (await db.user.findUnique({
            where: {
              email: credentials?.email,
            },
          })) as any;
          if (!user) {
            throw new Error('');
          }
          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? '',
            user.password as string,
          );
          if (!isValidPassword) {
            throw new Error('');
          }
          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
};

export default provider;
