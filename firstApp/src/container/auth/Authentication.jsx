import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/Image";

const Authentication = () => {
  // State to toggle between login and sign-up forms
  const [isLogged, setIsLogged] = useState(false);

  // State to store user input for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State to manage loading indicator during form submission
  const [loading, setLoading] = useState(false);

  // State to store validation errors
  const [error, setError] = useState("");

  // Hook for programmatic navigation to another route
  const navigate = useNavigate();

  // Function to validate the email and password inputs
  const validateForm = () => {
    if (!email || !password) {
      setError("Both email and password are required");
      return false;
    }
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    // Minimum password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    // Clear any existing errors if validation passes
    setError("");
    return true;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) return; // Validate form inputs

    setLoading(true); // Set loading state to true while processing

    try {
      // Simulate an API call for login or registration
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // After successful login or registration, navigate back to the home page
      navigate("/home");
    } catch (err) {
      // Handle any errors (e.g., network issues)
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after processing
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      {/* Background video */}
      <div className="absolute inset-0 bg-gray-300">
        <video
          src={Images.landingVid}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Form container */}
      <form
        className="container px-5 py-24 mx-auto flex"
        onSubmit={handleSubmit}
      >
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            {!isLogged ? "Login" : "Sign up"}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>

          {/* Email input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Password input */}
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Error message display */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit button with loading state */}
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            disabled={loading}
          >
            {loading ? "Processing..." : !isLogged ? "Login" : "Register"}
          </button>

          {/* Toggle between login and sign-up forms */}
          <p
            onClick={() => setIsLogged(!isLogged)}
            className="text-xs text-gray-500 mt-3 cursor-pointer"
          >
            {isLogged ? (
              <span>
                Have an account? <span className="text-indigo-500">Log in</span>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <span className="text-indigo-500">Sign Up</span>
              </span>
            )}
          </p>
        </div>
      </form>
    </section>
  );
};

export default Authentication;
