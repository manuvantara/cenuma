import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '$lib/mongodb';

export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google]
});
