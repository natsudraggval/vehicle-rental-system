import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp({ onClose }) {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, seterror] = useState();

  const navigate = useNavigate();

  const backendURL = import.meta.env.VITE_API_URL;

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      seterror("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${backendURL}/api/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          email,
          phonenumber,
          password,
          confirmPassword,
          role: "user", // auto assign role
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        navigate("/login"); // redirect after success
      } else {
        seterror(data.message || "Signup failed");
      }
    } catch (err) {
      seterror("Server error: " + err.message);
      console.error(err);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close on outside click
  const handleBackdropClick = (e) => {
    if (e.target.id === "signup-backdrop") onClose();
  };

  return (
    <div
      id="signup-backdrop"
      className="fixed inset-0 bg-white/10 backdrop-blur-xs flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative w-96 rounded-lg border border-gray-300 bg-white px-5 py-10 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 text-3xl font-extrabold focus:outline-none"
        >
          &times;
        </button>

        <div className="mx-auto mb-5 text-center">
          <h1 className="text-3xl font-bold text-gray-700">Sign up</h1>
          <p className="text-gray-500">Create an account to enjoy rentals.</p>
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-500 text-center">{error}</div>
        )}

        <form className="space-y-5" onSubmit={handleSignUp}>
          <InputField id="full-name" label="Full Name" type="text" value={fullname} setValue={setfullname} />
          <InputField id="email" label="Email" type="email" value={email} setValue={setemail} />
          <InputField id="phone-number" label="Phone Number" type="tel" value={phonenumber} setValue={setphonenumber} />
          <InputField id="password" label="Password" type="password" value={password} setValue={setpassword} />
          <InputField id="confirm-password" label="Confirm Password" type="password" value={confirmPassword} setValue={setconfirmPassword} />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 hover:bg-cyan-700 py-3 font-bold text-white"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

// Input field component
function InputField({ id, label, type, value, setValue }) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
        placeholder=" "
        required
        minLength={type === "password" ? 6 : undefined}
      />
      <label
        htmlFor={id}
        className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4
        peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
      >
        {label}
      </label>
    </div>
  );
}

export default SignUp;
