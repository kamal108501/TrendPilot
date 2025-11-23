import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Create() {
    const { auth } = usePage().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Category Create',
            href: '/categories',
        },
    ];

    const { data, setData, errors, post } = useForm({
        name: '',
        user_id: auth.user?.id || '',
        type: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('categories.store'));
    }

    const inputClass =
        '.text-white-900 block w-full rounded-md border border-gray-300 bg-white text-gray-900 ' +
        'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 ' +
        'px-3 py-2 ' +
        'focus:border-blue-500 focus:ring-blue-500 focus:outline-none';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Category Create" />

            <div className="p-3">
                <Link
                    href={route('categories.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <form
                    onSubmit={submit}
                    className="mx-auto mt-4 max-w-md space-y-6"
                >
                    {/* Category Name */}
                    <div className="grid gap-2">
                        <label
                            htmlFor="name"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Category :
                        </label>

                        <input
                            type="hidden"
                            name="user_id"
                            value={data.user_id}
                        />

                        <input
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter category name"
                        />

                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Type (Income / Expense) */}
                    <div className="grid gap-2">
                        <label
                            htmlFor="type"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Type :
                        </label>

                        <select
                            id="type"
                            name="type"
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className={`${inputClass} h-10`}
                        >
                            <option value="">Select Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>

                        {errors.type && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.type}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
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
