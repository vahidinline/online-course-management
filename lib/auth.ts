import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/db/mongodb';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: true,
});

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: transporter,
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // 24 hours
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const { host } = new URL(url);
        await transporter.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: `Sign in to ${host}\n${url}\n\n`,
          html: `
            <body style="background: #f9fafb; padding: 30px;">
              <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #111827; font-size: 24px; margin-bottom: 20px;">Sign in to LearnHub</h1>
                <p style="color: #4b5563; margin-bottom: 20px;">Click the button below to sign in to your account.</p>
                <a href="${url}" style="display: inline-block; background: #000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-bottom: 20px;">Sign in</a>
                <p style="color: #6b7280; font-size: 14px;">If you didn't request this email, you can safely ignore it.</p>
              </div>
            </body>
          `,
        });
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  session: {
    strategy: 'jwt',
  },
};