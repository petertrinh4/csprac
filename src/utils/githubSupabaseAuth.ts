import { supabase } from '../supabaseClient';

export async function signInWithGitHubProfile(githubUser: {
  id: number;
  login: string;
  email?: string;
}) {
  const { data, error } = await supabase.from('users').upsert(
    [
      {
        github_id: githubUser.id,
        username: githubUser.login,
        email: githubUser.email || null,
      },
    ],
    { onConflict: 'github_id' }
  );
  return { data, error };
}
