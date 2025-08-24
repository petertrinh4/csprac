import React from 'react';

const Auth = () => {
  const GITHUB_OAUTH_URL =
    'https://github.com/login/oauth/authorize?client_id=Ov23lir5KA9TDEFvlOK9&redirect_uri=https://cs1-ucf.vercel.app/auth/callback';

  return (
    <div className="with-navbar p-8 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Login with GitHub</h2>
        <a
          href={GITHUB_OAUTH_URL}
          className="w-full flex items-center justify-center bg-black text-white py-2 rounded hover:bg-gray-800 font-semibold text-lg"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.813 1.096.813 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Sign in with GitHub
        </a>
        <p className="mt-6 text-gray-600 text-center text-sm">
          We use GitHub for secure authentication. You will be redirected to GitHub to sign in.
        </p>
      </div>
    </div>
  );
};
export default Auth;
