import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
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

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    {/* REAL REGISTER FORM */}
                    <Form
                        {...RegisteredUserController.store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        className="space-y-6 p-6 md:p-8"
                    >
                        {({ processing, errors }) => (
                            <FieldGroup>
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <h1 className="text-2xl font-bold">
                                        Create your account
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Enter your details below to sign up
                                    </p>
                                </div>

                                {/* Name */}
                                <Field>
                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
                                        required
                                    />
                                    <InputError message={errors.name} />
                                </Field>

                                {/* Email */}
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email Address
                                    </FieldLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                    <InputError message={errors.email} />
                                </Field>

                                {/* Password + Confirm */}
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="password">
                                                Password
                                            </FieldLabel>
                                            <Input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="password_confirmation">
                                                Confirm Password
                                            </FieldLabel>
                                            <Input
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                type="password"
                                                required
                                            />
                                        </Field>
                                    </div>

                                    {/* Errors directly under the grid (NO extra space) */}
                                    <div className="space-y-1">
                                        <InputError message={errors.password} />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Field>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Create Account
                                    </Button>
                                </Field>

                                {/* Separator */}
                                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                    Or continue with
                                </FieldSeparator>

                                {/* Socials (optional) */}
                                <Field className="grid grid-cols-3 gap-4">
                                    <Button variant="outline" type="button">
                                        
                                    </Button>
                                    <Button variant="outline" type="button">
                                        G
                                    </Button>
                                    <Button variant="outline" type="button">
                                        f
                                    </Button>
                                </Field>

                                {/* Login Link */}
                                <FieldDescription className="text-center">
                                    Already have an account?{' '}
                                    <a href="/login">Sign in</a>
                                </FieldDescription>
                            </FieldGroup>
                        )}
                    </Form>

                    {/* Right-side image */}
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="/images/placeholder.png"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Terms */}
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our{' '}
                <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    );
}
