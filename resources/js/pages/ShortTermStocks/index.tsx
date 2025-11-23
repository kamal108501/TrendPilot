import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Short Term Stocks',
        href: route('short_term_stocks.index'),
    },
];

export default function Index({
    short_term_stocks,
}: {
    short_term_stocks: {
        data: any[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}) {
    const { flash } = usePage().props as {
        flash?: { success?: string; error?: string };
    };

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    function handleDelete(id: number) {
        if (confirm('Are you sure you want to delete this record?')) {
            router.delete(route('short_term_stocks.destroy', id));
        }
    }

    const handlePageChange = (url: string) => {
        if (url) router.visit(url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Short Term Stocks" />

            <div className="p-3">
                <Link
                    href={route('short_term_stocks.create')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Create
                </Link>

                <div className="mt-3 overflow-auto">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-4 py-3">#</th>
                                <th className="px-4 py-3">Stock Name</th>
                                <th className="px-4 py-3">F&O</th>
                                <th className="px-4 py-3">Tips Date</th>
                                <th className="px-4 py-3">Current Price</th>
                                <th className="px-4 py-3">Target</th>
                                <th className="px-4 py-3">Stoploss</th>
                                <th className="px-4 py-3">Target Achieved</th>
                                <th className="px-4 py-3">Trade Days</th>
                                <th className="px-4 py-3">Review Chart</th>
                                <th className="px-4 py-3">Active</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {short_term_stocks.data.length > 0 ? (
                                short_term_stocks.data.map(
                                    (stock: any, index: number) => (
                                        <tr
                                            key={stock.id}
                                            className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                                        >
                                            <td className="px-4 py-2 text-gray-900 dark:text-white">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.stock_name}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.is_fno}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.tips_date || '-'}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.current_price}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.target}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.stoploss}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.target_achieve}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.trade_days}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.review_chart}
                                            </td>
                                            <td className="px-4 py-2">
                                                {stock.is_active ? 'Yes' : 'No'}
                                            </td>
                                            <td className="space-x-2 px-4 py-2">
                                                <Link
                                                    href={route(
                                                        'short_term_stocks.edit',
                                                        stock.id,
                                                    )}
                                                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(stock.id)
                                                    }
                                                    className="cursor-pointer rounded-lg bg-red-700 px-3 py-2 text-xs font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ),
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan={12}
                                        className="px-6 py-4 text-center text-gray-500 dark:text-gray-300"
                                    >
                                        No records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-end space-x-1">
                        {short_term_stocks.links.map(
                            (link: any, index: number) => (
                                <button
                                    key={index}
                                    disabled={!link.url}
                                    onClick={() => handlePageChange(link.url)}
                                    className={`rounded px-3 py-1 ${
                                        link.active
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    } ${
                                        !link.url
                                            ? 'cursor-not-allowed opacity-50'
                                            : ''
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
