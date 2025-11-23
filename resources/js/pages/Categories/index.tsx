import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';

import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Category',
        href: '/category',
    },
];

export default function Index({ categories }) {
    const { flash } = usePage().props as {
        flash?: { success?: string; error?: string };
    };

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    function handleDelete(id: number) {
        if (confirm('Are you sure to remove this?')) {
            router.delete(route('categories.destroy', id));
        }
    }

    const handlePageChange = (url: string) => {
        if (url) router.visit(url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Category" />

            <div className="p-3">
                <Link
                    href={route('categories.create')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Create
                </Link>

                <a
                    href={route('categories.export')} // optional export route
                    className="cursor-pointer rounded-lg bg-green-700 px-3 py-2 text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none"
                >
                    Export Excel
                </a>

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
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.data.length > 0 ? (
                                categories.data.map(({ id, name, type }) => (
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
                                            {type}
                                        </td>
                                        <td className="space-x-2 px-6 py-2">
                                            <Link
                                                href={route(
                                                    'categories.show',
                                                    id,
                                                )}
                                                className="cursor-pointer rounded-lg bg-gray-700 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                                            >
                                                Show
                                            </Link>
                                            <Link
                                                href={route(
                                                    'categories.edit',
                                                    id,
                                                )}
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
                                        className="text-white-500 px-6 py-4 text-center"
                                    >
                                        No data found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <div className="mt-4 flex justify-end space-x-1">
                        {categories.links.map((link, index) => (
                            <button
                                key={index}
                                disabled={!link.url}
                                onClick={() => handlePageChange(link.url)}
                                className={`rounded px-3 py-1 ${
                                    link.active
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
