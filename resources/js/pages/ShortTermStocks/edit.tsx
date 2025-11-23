import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Short Term Stock Edit',
        href: route('short_term_stocks.index'),
    },
];

export default function Edit({ short_term_stock }: { short_term_stock: any }) {
    const { data, setData, errors, put } = useForm({
        stock_name: short_term_stock.stock_name || '',
        is_fno: short_term_stock.is_fno || 'No',
        tips_date: short_term_stock.tips_date || '',
        current_price: short_term_stock.current_price || '',
        target: short_term_stock.target || '',
        stoploss: short_term_stock.stoploss || '',
        target_achieve: short_term_stock.target_achieve || 'No',
        trade_days: short_term_stock.trade_days || '',
        review_chart: short_term_stock.review_chart || 'No',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(route('short_term_stocks.update', short_term_stock.id));
    }

    const inputClass =
        'block w-full rounded-md border border-gray-300 bg-white text-gray-900 ' +
        'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 ' +
        'px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Short Term Stock Edit" />

            <div className="p-3">
                <Link
                    href={route('short_term_stocks.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <form
                    onSubmit={submit}
                    className="mx-auto mt-4 max-w-2xl space-y-6"
                >
                    {/* Stock Name */}
                    <div>
                        <label className="text-sm font-medium">
                            Stock Name
                        </label>
                        <input
                            type="text"
                            id="stock_name"
                            value={data.stock_name}
                            onChange={(e) =>
                                setData('stock_name', e.target.value)
                            }
                            className={inputClass}
                            placeholder="Enter stock name"
                        />
                        {errors.stock_name && (
                            <p className="text-sm text-red-500">
                                {errors.stock_name}
                            </p>
                        )}
                    </div>

                    {/* Is F&O */}
                    <div>
                        <label className="text-sm font-medium">Is F&O</label>
                        <select
                            id="is_fno"
                            value={data.is_fno}
                            onChange={(e) => setData('is_fno', e.target.value)}
                            className={`${inputClass} h-10`}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Tips Date */}
                    <div>
                        <label className="text-sm font-medium">Tips Date</label>
                        <input
                            type="date"
                            id="tips_date"
                            value={data.tips_date}
                            onChange={(e) =>
                                setData('tips_date', e.target.value)
                            }
                            className={inputClass}
                        />
                    </div>

                    {/* Current Price */}
                    <div>
                        <label className="text-sm font-medium">
                            Current Price
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            id="current_price"
                            value={data.current_price}
                            onChange={(e) =>
                                setData('current_price', e.target.value)
                            }
                            className={inputClass}
                            placeholder="Enter current price"
                        />
                    </div>

                    {/* Target */}
                    <div>
                        <label className="text-sm font-medium">Target</label>
                        <input
                            type="number"
                            step="0.01"
                            id="target"
                            value={data.target}
                            onChange={(e) => setData('target', e.target.value)}
                            className={inputClass}
                            placeholder="Enter target price"
                        />
                    </div>

                    {/* Stoploss */}
                    <div>
                        <label className="text-sm font-medium">Stoploss</label>
                        <input
                            type="number"
                            step="0.01"
                            id="stoploss"
                            value={data.stoploss}
                            onChange={(e) =>
                                setData('stoploss', e.target.value)
                            }
                            className={inputClass}
                            placeholder="Enter stoploss"
                        />
                    </div>

                    {/* Target Achieved */}
                    <div>
                        <label className="text-sm font-medium">
                            Target Achieved
                        </label>
                        <select
                            id="target_achieve"
                            value={data.target_achieve}
                            onChange={(e) =>
                                setData('target_achieve', e.target.value)
                            }
                            className={`${inputClass} h-10`}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Trade Days */}
                    <div>
                        <label className="text-sm font-medium">
                            Trade Days
                        </label>
                        <input
                            type="number"
                            id="trade_days"
                            value={data.trade_days}
                            onChange={(e) =>
                                setData('trade_days', e.target.value)
                            }
                            className={inputClass}
                            placeholder="Enter trade days"
                        />
                    </div>

                    {/* Review Chart */}
                    <div>
                        <label className="text-sm font-medium">
                            Review Chart
                        </label>
                        <select
                            id="review_chart"
                            value={data.review_chart}
                            onChange={(e) =>
                                setData('review_chart', e.target.value)
                            }
                            className={`${inputClass} h-10`}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                    >
                        Update
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
