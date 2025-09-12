import { useEffect } from 'react';
import { signInWithGitHubProfile } from '../utils/githubSupabaseAuth';

const AuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      fetch('https://cs1-ucf.vercel.app/api/github-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include',
      })
        .then(res => res.json())
        .then(async data => {
          if (data.success && data.user) {
            
            await signInWithGitHubProfile(data.user);
            
            localStorage.setItem('githubUser', JSON.stringify(data.user));
            window.location.href = '/';
          } else {
            alert('GitHub login failed');
          }
        });
    }
  }, []);

  return <div>Authenticating with GitHub...</div>;
};
export default AuthCallback;
