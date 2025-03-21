import { useMutation } from "@/presentation/hooks/use-mutation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Services from "@/services";
import { Button } from "@/presentation/components/ui/button";

const LoginForm = () => {
  const form = useForm<Services.authDto.LoginInput>({
    resolver: zodResolver(Services.auth.loginInputSchema),
  });

  const loginMutation = useMutation({
    mutationFn: Services.auth.login,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.error(error);
    },
  });

  const onLogin = (data: Services.authDto.LoginInput) => {
    loginMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onLogin)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  {...field}
                  data-testid="login-form-input-username"
                />
              </FormControl>
              <FormMessage data-testid="login-form-helper-text-username" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter password"
                  {...field}
                  type="password"
                  data-testid="login-form-input-username"
                />
              </FormControl>
              <FormMessage data-testid="login-form-helper-text-password" />
            </FormItem>
          )}
        />
        <Button type="submit" data-testid="login-form-button-submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
