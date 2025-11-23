import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Trade Create',
        href: '/trades',
    },
];

export default function Create({ instruments }) {
    const { data, setData, errors, post } = useForm({
        instrument_id: '',
        symbol: '',
        trade_enter_date: new Date().toISOString().split('T')[0],
        trade_exit_date: new Date().toISOString().split('T')[0],
        trade_lots: 1,
        trade_qty: 1,
        entry_price: '',
        exit_price: '',
        target_price: '',
        sl_price: '',
        target_achieved: 'No',
        trade_days: 1,
        trade_result: 'Hold',
        profit_loss: 0,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('trades.store'));
    }

    const inputClass =
        '.text-white-900 block w-full rounded-md border border-gray-300 bg-white text-gray-900 ' +
        'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 ' +
        'px-3 py-2 ' +
        'focus:border-blue-500 focus:ring-blue-500 focus:outline-none';

    const labelClass =
        'text-sm font-medium text-gray-700 dark:text-gray-300 mb-1';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Trade Create" />

            <div className="p-3">
                <Link
                    href={route('trades.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <form
                    onSubmit={submit}
                    className="mx-auto mt-6 max-w-4xl space-y-5"
                >
                    {/* Row 1: Instrument + Symbol */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Instrument */}
                        <div className="grid gap-2">
                            <label className={labelClass}>Instrument</label>
                            <select
                                id="instrument"
                                value={data.instrument_id}
                                onChange={(e) =>
                                    setData('instrument_id', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            >
                                <option value="">Select Instrument</option>
                                {instruments.map(
                                    (instrument: {
                                        id: number;
                                        name: string;
                                    }) => (
                                        <option
                                            key={instrument.id}
                                            value={instrument.id}
                                        >
                                            {instrument.name}
                                        </option>
                                    ),
                                )}
                            </select>
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.instrument_id || ''}
                            </p>
                        </div>

                        {/* Symbol */}
                        <div className="grid gap-2">
                            <label className={labelClass}>Symbol</label>
                            <input
                                type="text"
                                value={data.symbol}
                                onChange={(e) =>
                                    setData('symbol', e.target.value)
                                }
                                className={`${inputClass} h-10`} // Added h-10 for equal height
                                placeholder="e.g. RELIANCE"
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.symbol || ''}
                            </p>
                        </div>
                    </div>

                    {/* Row 2: Enter Date + Exit Date + Lots */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Trade Enter Date */}
                        <div className="grid gap-2">
                            <label className={labelClass}>
                                Trade Enter Date
                            </label>
                            <input
                                type="date"
                                value={data.trade_enter_date}
                                onChange={(e) =>
                                    setData('trade_enter_date', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.trade_enter_date}
                            </p>
                        </div>

                        {/* Trade Exit Date */}
                        <div className="grid gap-2">
                            <label className={labelClass}>
                                Trade Exit Date
                            </label>
                            <input
                                type="date"
                                value={data.trade_exit_date}
                                onChange={(e) =>
                                    setData('trade_exit_date', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.trade_exit_date}
                            </p>
                        </div>

                        {/* Lots */}
                        <div className="grid gap-2">
                            <label className={labelClass}>Lots</label>
                            <select
                                value={data.trade_lots}
                                onChange={(e) =>
                                    setData('trade_lots', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            >
                                <option value="">Select</option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.trade_lots}
                            </p>
                        </div>
                    </div>

                    {/* Row 3: Qty + Entry Price + Exit Price */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="grid gap-2">
                            <label className={labelClass}>Quantity</label>
                            <input
                                type="number"
                                value={data.trade_qty}
                                onChange={(e) =>
                                    setData('trade_qty', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.trade_qty}
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <label className={labelClass}>Entry Price</label>
                            <input
                                type="number"
                                step="0.01"
                                value={data.entry_price}
                                onChange={(e) =>
                                    setData('entry_price', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.entry_price}
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <label className={labelClass}>Exit Price</label>
                            <input
                                type="number"
                                step="0.01"
                                value={data.exit_price}
                                onChange={(e) =>
                                    setData('exit_price', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.exit_price}
                            </p>
                        </div>
                    </div>

                    {/* Row 4: Target Price + SL Price + Target Achieved */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="grid gap-2">
                            <label className={labelClass}>Target Price</label>
                            <input
                                type="number"
                                step="0.01"
                                value={data.target_price}
                                onChange={(e) =>
                                    setData('target_price', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            {errors.target_price && (
                                <p className="text-sm text-red-500">
                                    {errors.target_price}
                                </p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <label className={labelClass}>SL Price</label>
                            <input
                                type="number"
                                step="0.01"
                                value={data.sl_price}
                                onChange={(e) =>
                                    setData('sl_price', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            {errors.sl_price && (
                                <p className="text-sm text-red-500">
                                    {errors.sl_price}
                                </p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <label className={labelClass}>
                                Target Achieved
                            </label>
                            <select
                                value={data.target_achieved}
                                onChange={(e) =>
                                    setData('target_achieved', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            >
                                <option selected value="No">
                                    No
                                </option>
                                <option value="Yes">Yes</option>
                            </select>
                            {errors.target_achieved && (
                                <p className="text-sm text-red-500">
                                    {errors.target_achieved}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Row 5: Trade Days + Trade Result + Profit/Loss */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="grid gap-2">
                            <label className={labelClass}>Trade Days</label>
                            <input
                                type="number"
                                value={data.trade_days}
                                onChange={(e) =>
                                    setData('trade_days', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.trade_days || ''}
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <label className={labelClass}>Trade Result</label>
                            <select
                                value={data.trade_result}
                                onChange={(e) =>
                                    setData('trade_result', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                            >
                                <option value="">Select</option>
                                <option value="Profit">Profit</option>
                                <option value="Loss">Loss</option>
                                <option value="Hold">Hold</option>
                            </select>
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.trade_result || ''}
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <label className={labelClass}>
                                Profit / Loss Value
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                value={data.profit_loss}
                                onChange={(e) =>
                                    setData('profit_loss', e.target.value)
                                }
                                className={`${inputClass} h-10`}
                                placeholder="e.g. +500 or -200"
                            />
                            <p className="min-h-[1.25rem] text-sm text-red-500">
                                {errors.profit_loss || ''}
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-4 rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
