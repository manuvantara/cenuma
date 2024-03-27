import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '$lib/mongodb';

// const prisma = new PrismaClient();

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google],
  pages: {
    signIn: '/auth/sign-in'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  }
});
