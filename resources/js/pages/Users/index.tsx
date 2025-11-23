import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';

import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

export default function Index({ users }) {
    const { flash } = usePage().props as {
        flash?: { success?: string; error?: string };
    };

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    function handleDelete(id) {
        if (confirm('Are you sure to remove this?')) {
            router.delete(route('users.destroy', id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />

            <div className="p-3">
                <Link
                    href={route('users.create')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Create
                </Link>

                <div className="mt-3 overflow-auto">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map(({ id, name, email }) => (
                                    <tr
                                        key={id}
                                        className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                                    >
                                        <td className="px-6 py-2 font-medium text-gray-900 dark:text-white">
                                            {id}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {name}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {email}
                                        </td>
                                        <td className="space-x-2 px-6 py-2">
                                            <Link
                                                href={route('users.show', id)}
                                                className="cursor-pointer rounded-lg bg-gray-700 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                                            >
                                                Show
                                            </Link>
                                            <Link
                                                href={route('users.edit', id)}
                                                className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(id)}
                                                className="cursor-pointer rounded-lg bg-red-700 px-3 py-2 text-xs font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                                    >
                                        No data found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
