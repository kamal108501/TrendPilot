import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';

import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Trades',
        href: '/trades',
    },
];

export default function Index({ trades }) {
    const { flash } = usePage().props as {
        flash?: { success?: string; error?: string };
    };

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    function handleDelete(id) {
        if (confirm('Are you sure to remove this?')) {
            router.delete(route('trades.destroy', id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Trades" />

            <div className="p-3">
                <Link
                    href={route('trades.create')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Create
                </Link>

                <div className="mt-3 overflow-x-auto">
                    <table className="min-w-max table-auto text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Instrument</th>
                                <th className="px-6 py-3">Symbol</th>
                                <th className="px-6 py-3">Entry Date</th>
                                <th className="px-6 py-3">Exit Date</th>
                                <th className="px-6 py-3">Lots</th>
                                <th className="px-6 py-3">Qty</th>
                                <th className="px-6 py-3">Entry Price</th>
                                <th className="px-6 py-3">Exit Price</th>
                                <th className="px-6 py-3">Target Price</th>
                                <th className="px-6 py-3">SL Price</th>
                                <th className="px-6 py-3">Target Achieved</th>
                                <th className="px-6 py-3">Trade Days</th>
                                <th className="px-6 py-3">Trade Result</th>
                                <th className="px-6 py-3">Profit/Loss</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {trades.length > 0 ? (
                                trades.map((trade) => (
                                    <tr
                                        key={trade.id}
                                        className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                                    >
                                        <td className="px-6 py-2 font-medium text-gray-900 dark:text-white">
                                            {trade.id}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.instrument
                                                ? trade.instrument.name
                                                : 'N/A'}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.symbol}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.trade_enter_date}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.trade_exit_date}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.trade_lots}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.trade_qty}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.entry_price}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.exit_price}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.target_price}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.sl_price}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.target_achieved}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.trade_days}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.trade_result}
                                        </td>
                                        <td className="px-6 py-2 text-gray-600 dark:text-gray-300">
                                            {trade.profit_loss}
                                        </td>
                                        <td className="space-x-2 px-6 py-2">
                                            <Link
                                                href={route(
                                                    'trades.show',
                                                    trade.id,
                                                )}
                                                className="cursor-pointer rounded-lg bg-gray-700 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                                            >
                                                Show
                                            </Link>
                                            <Link
                                                href={route(
                                                    'trades.edit',
                                                    trade.id,
                                                )}
                                                className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(trade.id)
                                                }
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
                                        colSpan={16}
                                        className="text-white-500 px-6 py-4 text-center"
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
