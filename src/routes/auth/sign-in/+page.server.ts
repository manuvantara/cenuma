import { redirect } from '@sveltejs/kit';
import { signIn } from '../../../auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
  const { session } = await parent();

  if (session) {
    redirect(307, '/');
  }
};

export const actions = { default: signIn } satisfies Actions;
