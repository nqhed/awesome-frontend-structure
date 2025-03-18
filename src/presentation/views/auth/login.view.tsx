import LoginForm from "./components/login-form";

const LoginView = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="pb-5 text-2xl font-bold data" data-testid="login-form-title">Login Form</div>
      <LoginForm />
    </div>
  );
};

export default LoginView;
