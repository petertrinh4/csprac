import { useEffect } from 'react';

const AuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      fetch('http://localhost:4000/api/github/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
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
