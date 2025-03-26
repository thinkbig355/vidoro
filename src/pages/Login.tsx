// Login.tsx
import React, { useState, useCallback, useEffect } from 'react'; // Added useEffect
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { saveUserToFirestore } from '../lib/saveUser';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

    // Redirect if already logged in (handled by PublicOnlyRoute in App.tsx now)
    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       navigate('/dashboard', { replace: true }); // Redirect if user is found
    //     }
    //   });
    //   return () => unsubscribe();
    // }, [navigate]);


  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container);
  }, []);

  const handleSuccess = async (user: any) => {
     setIsLoading(true);
     try {
        await saveUserToFirestore(user);
        navigate('/dashboard', { replace: true }); // Redirect to dashboard
     } catch (saveError) {
        console.error("Error saving user:", saveError);
        setError("Failed to save user data. Please try again.");
        // Optionally sign the user out if saving fails critically
        // await signOut(auth);
     } finally {
       setIsLoading(false);
     }
  }

  const handleGoogleSignIn = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleSuccess(result.user);
    } catch (error: any) {
      console.error('Google Sign-in error:', error);
       setError(error.message || "Google Sign-in failed.");
       setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      let userCredential;
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      await handleSuccess(userCredential.user);
    } catch (error: any) {
      setError(error.message || "Sign in/up failed.");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0F] flex items-center justify-center p-4"> {/* Added padding */}
      {/* Particle Background */}
      <Particles
        // ... (particles options remain the same) ...
         id="tsparticles"
         init={particlesInit}
         loaded={particlesLoaded}
         options={{ /* ... keep existing options ... */ }}
         className="absolute inset-0 z-0" // Ensure z-index is lower than form
      />

      {/* Login Form Box */}
      <div className="relative z-10 bg-[#12121A]/80 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-800/50">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          {/* Close button - Navigates to home page */}
           <button
             onClick={() => navigate('/')} // Go to home page on close
             className="text-gray-500 hover:text-gray-300 focus:outline-none p-1 rounded-full hover:bg-gray-700/50" // Added padding/bg
             aria-label="Close"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading} // Disable when loading
          className="w-full mb-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-3 transition-colors shadow-md disabled:opacity-60"
        >
          {/* ... (google icon svg) ... */}
          <svg className="w-5 h-5" viewBox="0 0 48 48"> <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/> <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/> <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6"/> <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/> </svg>
          <span className="font-medium">Sign in with Google</span>
        </button>

        {/* OR Separator */}
        <div className="flex items-center justify-center mb-6">
          {/* ... (separator) ... */}
           <div className="border-t border-gray-700 w-full"></div> <span className="mx-4 text-gray-400 text-sm font-medium">OR</span> <div className="border-t border-gray-700 w-full"></div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 text-sm">
            {error}
          </div>
        )}

         {/* Loading Indicator */}
         {isLoading && (
           <div className="mb-4 text-center text-gray-400">Processing...</div>
         )}

        {/* Email/Password Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full p-3 bg-[#1a1a25] border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all disabled:opacity-50"
              required
              disabled={isLoading}
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 bg-[#1a1a25] border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all disabled:opacity-50"
              required
              disabled={isLoading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
             {isLoading ? (isSignUp ? 'Creating...' : 'Signing In...') : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        {/* Toggle Sign Up/Sign In */}
        <div className="mt-6 text-center">
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(null); }} // Clear error on toggle
            disabled={isLoading}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors disabled:opacity-60"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;