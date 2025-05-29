import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createElement, useState, JSX } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Box } from "@/components/ui/box";

type PasswordFieldProps = {
  name?: string;
  placeholder?: string;
  label?: string;
  description?: string | JSX.Element;
};

export const PasswordInput = ({
  name = "password",
  placeholder = "Password",
  label = "Password",
  description,
}: PasswordFieldProps) => {
  const { control, getFieldState } = useFormContext();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel className="absolute -top-2.5 left-3 p-1 bg-white text-black z-10">
            {label}
          </FormLabel>
          <FormControl>
            <Box className="relative">
              <Input
                {...field}
                type={passwordVisibility ? "text" : "password"}
                autoComplete="on"
                placeholder={placeholder}
                className={`pr-12 ${
                  getFieldState(name).error && "text-destructive"
                }`}
              />
              <Box
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                  className: "h-6 w-6",
                })}
              </Box>
            </Box>
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
