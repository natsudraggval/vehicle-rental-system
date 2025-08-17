import { toast } from 'react-toastify';

const SignUpService = async (username, email, phonenumber, password, confirmPassword, navigate) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
  
  }

  const newUser = {
    username,
    email,
    phonenumber,
    password,
    user_id: Date.now(),
  };

  localStorage.setItem('user', JSON.stringify(newUser));
  toast.success("Registration successful!");
  navigate('/Login');
};

export default SignUpService;
