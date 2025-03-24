import LoginForm from "./components/login-form";

type LoginViewProps = {
  dictionary?: any;
};

const LoginView = ({ dictionary }: LoginViewProps) => {
  return (
    <div className="container mx-auto py-8">
      <div
        className="pb-5 text-2xl font-bold data"
        data-testid="login-form-title"
      >
        Login Form
      </div>
      <LoginForm dictionary={dictionary} />
    </div>
  );
};

export default LoginView;
