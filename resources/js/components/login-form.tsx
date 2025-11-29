import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Form } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    {/* REAL LOGIN FORM (Inertia + Laravel) */}
                    <Form
                        {...AuthenticatedSessionController.store.form()}
                        resetOnSuccess={['password']}
                        className="space-y-6 p-6 md:p-8"
                    >
                        {({ processing, errors }) => (
                            <FieldGroup>
                                <div className="mb-4 flex flex-col items-center gap-2 text-center">
                                    <h1 className="text-2xl font-bold">
                                        Welcome back
                                    </h1>
                                    <p className="text-balance text-muted-foreground">
                                        Login to your account
                                    </p>
                                </div>

                                {/* Email */}
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        autoFocus
                                    />
                                    <InputError message={errors.email} />
                                </Field>

                                {/* Password */}
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <a
                                            href="/forgot-password"
                                            className="ml-auto text-sm underline-offset-2 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                    />
                                    <InputError message={errors.password} />
                                </Field>

                                {/* Submit */}
                                <Field>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full"
                                    >
                                        {processing && (
                                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Login
                                    </Button>
                                </Field>

                                {/* Separator */}
                                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                    Or continue with
                                </FieldSeparator>

                                {/* Social buttons */}
                                <Field className="grid grid-cols-3 gap-4">
                                    <Button variant="outline" type="button">
                                        <span className="sr-only">
                                            Login with Apple
                                        </span>
                                        
                                    </Button>
                                    <Button variant="outline" type="button">
                                        G
                                    </Button>
                                    <Button variant="outline" type="button">
                                        f
                                    </Button>
                                </Field>

                                <FieldDescription className="text-center">
                                    Don’t have an account?{' '}
                                    <a href="/register">Sign up</a>
                                </FieldDescription>
                            </FieldGroup>
                        )}
                    </Form>

                    {/* Right side image */}
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="images/placeholder.svg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>

            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our{' '}
                <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    );
}
