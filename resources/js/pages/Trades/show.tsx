import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Trade Show',
        href: '/trades',
    },
];

export default function Show({ trade }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Trade Show" />

            <div className="space-y-4 p-3">
                <Link
                    href={route('trades.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-900 p-6 shadow-lg md:grid-cols-2">
                    <div className="space-y-2 text-gray-100">
                        <p>
                            <strong>Instrument:</strong> {trade.instrument}
                        </p>
                        <p>
                            <strong>Symbol:</strong> {trade.symbol}
                        </p>
                        <p>
                            <strong>Trade Enter Date:</strong>{' '}
                            {trade.trade_enter_date}
                        </p>
                        <p>
                            <strong>Trade Exit Date:</strong>{' '}
                            {trade.trade_exit_date}
                        </p>
                        <p>
                            <strong>Lots:</strong> {trade.trade_lots}
                        </p>
                        <p>
                            <strong>Quantity:</strong> {trade.trade_qty}
                        </p>
                    </div>

                    <div className="space-y-2 text-gray-100">
                        <p>
                            <strong>Entry Price:</strong> {trade.entry_price}
                        </p>
                        <p>
                            <strong>Exit Price:</strong> {trade.exit_price}
                        </p>
                        <p>
                            <strong>Target Price:</strong> {trade.target_price}
                        </p>
                        <p>
                            <strong>SL Price:</strong> {trade.sl_price}
                        </p>
                        <p>
                            <strong>Target Achieved:</strong>{' '}
                            {trade.target_achieved}
                        </p>
                        <p>
                            <strong>Trade Days:</strong> {trade.trade_days}
                        </p>
                        <p>
                            <strong>Trade Result:</strong> {trade.trade_result}
                        </p>
                        <p>
                            <strong>Profit/Loss:</strong> {trade.profit_loss}
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
