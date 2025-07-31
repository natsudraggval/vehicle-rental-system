import { toast } from 'react-toastify';

const login = async (email, password, navigate) => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
    toast.error("Invalid email or password");
    throw new Error("Invalid email or password");
  }

  localStorage.setItem('email', savedUser.email);
  localStorage.setItem('user_id', savedUser.user_id);

  toast.success("Login successful!");
  navigate('/');
};

export default login;