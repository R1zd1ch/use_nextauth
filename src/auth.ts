import NextAuth from 'next-auth';
import db from '@/lib/db';
import providers from './auth.config';

export const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  ...providers,
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account?.provider === 'github') {
        const existingUser = await db.user.findUnique({
          where: {
            email: profile?.email,
          },
        });

        // Создаем нового пользователя или связываем аккаунт с существующим
        if (!existingUser) {
          await db.user.create({
            data: {
              name: profile?.name || '',
              email: profile?.email as string,
              image: profile?.avatar_url as string,
              password: '', // Пустой пароль для OAuth-пользователей
            },
          });
        } else {
          // Обновляем связь с аккаунтом, если он уже существует
          await db.account.upsert({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
            update: {
              userId: existingUser.id,
            },
            create: {
              userId: existingUser.id,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              type: account.type,
              access_token: account.access_token,
              expires_at: account.expires_at,
              refresh_token: account.refresh_token,
              token_type: account.token_type,
              scope: account.scope,
              id_token: account.id_token,
              session_state: account.session_state,
            },
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
          image: token.picture,
        };
        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
