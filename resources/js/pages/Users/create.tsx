import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Create',
        href: '/users',
    },
];

export default function Create() {
    const { data, setData, errors, post } = useForm({
        name: '',
        email: '',
        password: '',
    });

    // ✅ Add React.FormEvent type for safety
    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Create" />

            <div className="p-3">
                <Link
                    href={route('users.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <form
                    onSubmit={submit}
                    className="mx-auto mt-4 max-w-md space-y-6"
                >
                    {/* Name */}
                    <div className="grid gap-2">
                        <label
                            htmlFor="name" // ✅ in JSX use htmlFor instead of for
                            className="text-sm leading-none font-medium select-none"
                        >
                            Name:
                        </label>

                        <input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            name="name"
                            className=".text-white-900 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Email:
                        </label>

                        <input
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            name="email"
                            type="email"
                            className=".text-white-900 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                        <label
                            htmlFor="password"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Password:
                        </label>

                        <input
                            id="password"
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            name="password"
                            type="password"
                            className=".text-white-900 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
