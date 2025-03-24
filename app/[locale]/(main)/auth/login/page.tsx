import { LibServer } from "@/lib/server";
import LoginView from "@/presentation/views/auth/login.view";

const LoginPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  const messageDictionary = await LibServer.translator.getMessage(
    locale as LocaleType
  );
  return (
    <LoginView
      dictionary={{
        message: messageDictionary,
      }}
    />
  );
};

export default LoginPage;
