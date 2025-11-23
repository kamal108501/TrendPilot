import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Create() {
    const { auth } = usePage().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Short Term Stock Create',
            href: '/short_term_stocks',
        },
    ];

    const today = new Date().toISOString().split('T')[0];

    const { data, setData, errors, post } = useForm({
        stock_name: '',
        is_fno: 'No',
        tips_date: today,
        current_price: '',
        target: '',
        stoploss: '',
        target_achieve: 'No',
        trade_days: '',
        review_chart: 'No',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('short_term_stocks.store'));
    }

    const inputClass =
        'block w-full rounded-md border border-gray-300 bg-white text-gray-900 ' +
        'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 ' +
        'px-3 py-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Short Term Stock Create" />

            <div className="p-3">
                <Link
                    href={route('short_term_stocks.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <form
                    onSubmit={submit}
                    className="mx-auto mt-4 max-w-5xl space-y-6"
                >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Stock Name */}
                        <div className="flex flex-col space-y-2">
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
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">
                                Is F&O?
                            </label>
                            <select
                                id="is_fno"
                                value={data.is_fno}
                                onChange={(e) =>
                                    setData('is_fno', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        {/* Tips Date */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">
                                Tips Date
                            </label>
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
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Current Price */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">
                                Current Price
                            </label>
                            <input
                                type="number"
                                id="current_price"
                                step="0.01"
                                value={data.current_price}
                                onChange={(e) =>
                                    setData('current_price', e.target.value)
                                }
                                className={inputClass}
                                placeholder="Enter current price"
                            />
                        </div>

                        {/* Target */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">
                                Target
                            </label>
                            <input
                                type="number"
                                id="target"
                                step="0.01"
                                value={data.target}
                                onChange={(e) =>
                                    setData('target', e.target.value)
                                }
                                className={inputClass}
                                placeholder="Enter target price"
                            />
                        </div>

                        {/* Stoploss */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">
                                Stoploss
                            </label>
                            <input
                                type="number"
                                id="stoploss"
                                step="0.01"
                                value={data.stoploss}
                                onChange={(e) =>
                                    setData('stoploss', e.target.value)
                                }
                                className={inputClass}
                                placeholder="Enter stoploss"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Target Achieved */}
                        <div className="flex flex-col space-y-2">
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
                        <div className="flex flex-col space-y-2">
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
                        <div className="flex flex-col space-y-2">
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
                    </div>

                    {/* Submit */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="rounded-md bg-green-600 px-6 py-2 font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
