"use client";

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

type LoginFormProps = {
  dictionary?: any;
};

const LoginForm = ({ dictionary }: LoginFormProps) => {
  const form = useForm<Services.authDto.LoginInputPayload>({
    resolver: zodResolver(Services.auth.loginInputSchema),
  });

  const loginMutation = useMutation(
    "LOGIN_MUTATION",
    (_, { arg }: { arg: Services.authDto.LoginInput }) =>
      Services.auth.login(arg)
  );

  const onLogin = (data: Services.authDto.LoginInputPayload) => {
    loginMutation.trigger({
      payload: data,
    });
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
                  disabled={loginMutation.isMutating}
                  data-testid="login-form-input-username"
                />
              </FormControl>
              <FormMessage
                data-testid="login-form-helper-text-username"
                messageObj={dictionary?.message}
              />
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
                  disabled={loginMutation.isMutating}
                  data-testid="login-form-input-username"
                />
              </FormControl>
              <FormMessage
                data-testid="login-form-helper-text-password"
                messageObj={dictionary?.message}
              />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          data-testid="login-form-button-submit"
          disabled={loginMutation.isMutating}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
