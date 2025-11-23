<?php

namespace App\Http\Controllers;

use App\Models\Trade;
use App\Models\Instrument;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TradeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trades = Trade::with('instrument')->get()->map(function ($trade) {
            if (!empty($trade->trade_enter_date)) {
                $trade->trade_enter_date = date('d-m-Y', strtotime($trade->trade_enter_date));
            }
            if (!empty($trade->trade_exit_date)) {
                $trade->trade_exit_date = date('d-m-Y', strtotime($trade->trade_exit_date));
            }
            return $trade;
        });

        return Inertia::render("Trades/index", [
            "trades" => $trades
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $instruments = Instrument::select('id', 'name')->get();

        return Inertia::render('Trades/create', [
            'instruments' => $instruments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'instrument_id' => 'required',
            'symbol' => 'required|string|max:100',
            'trade_enter_date' => 'required|date',
            'trade_exit_date' => 'nullable|date|after_or_equal:trade_enter_date',
            'trade_lots' => 'required',
            'trade_qty' => 'required|integer|min:1',
            'entry_price' => 'required|numeric|min:0',
            'exit_price' => 'required|numeric|min:0',
            'target_price' => 'required|numeric|min:0',
            'sl_price' => 'required|numeric|min:0',
            'target_achieved' => 'required',
            'trade_days' => 'required|integer|min:1|max:30',
            'trade_result' => 'required',
            'profit_loss' => 'required|numeric',
        ], [
            'instrument_id.required' => 'Please select an instrument.',
            'symbol.required' => 'Symbol is required.',
            'trade_enter_date.required' => 'Enter date is required.',
            'trade_exit_date.required' => 'Exit date is required.',
            'trade_lots.required' => 'Trade Lots are required.',
            'entry_price.required' => 'Entry price is required.',
            'exit_price.required' => 'Exit price is required.',
            'target_price.required' => 'Target price is required.',
            'sl_price.required' => 'Stop loss price is required.',
            'trade_result.required' => 'Please select trade result.',
            'profit_loss.required' => 'Please enter profit/loss amount.',
        ]);

        Trade::create([
            'instrument_id' => $request->instrument_id,
            'symbol' => $request->symbol,
            'trade_enter_date' => $request->trade_enter_date,
            'trade_exit_date' => $request->trade_exit_date,
            'trade_lots' => $request->trade_lots,
            'trade_qty' => $request->trade_qty,
            'entry_price' => $request->entry_price,
            'exit_price' => $request->exit_price,
            'target_price' => $request->target_price,
            'sl_price' => $request->sl_price,
            'target_achieved' => $request->target_achieved,
            'trade_days' => $request->trade_days,
            'trade_result' => $request->trade_result,
            'profit_loss' => $request->profit_loss,
        ]);

        return to_route('trades.index')->with('success', 'Trade created successfully!');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $trade = Trade::find($id);

        return Inertia::render("Trades/show", [
            "trade" => $trade
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $trade = Trade::find($id);
        $instruments = Instrument::select('id', 'name')->get();

        return Inertia::render("Trades/edit", [
            "trade" => $trade,
            "instruments" => $instruments
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'instrument_id' => 'required',
            'symbol' => 'required|string|max:100',
            'trade_enter_date' => 'required|date',
            'trade_exit_date' => 'nullable|date|after_or_equal:trade_enter_date',
            'trade_lots' => 'required',
            'trade_qty' => 'required|integer|min:1',
            'entry_price' => 'required|numeric|min:0',
            'exit_price' => 'required|numeric|min:0',
            'target_price' => 'required|numeric|min:0',
            'sl_price' => 'required|numeric|min:0',
            'target_achieved' => 'required',
            'trade_days' => 'required|integer|min:1|max:30',
            'trade_result' => 'required',
            'profit_loss' => 'required|numeric',
        ], [
            'instrument_id.required' => 'Please select an instrument.',
            'symbol.required' => 'Symbol is required.',
            'trade_enter_date.required' => 'Enter date is required.',
            'trade_exit_date.required' => 'Exit date is required.',
            'trade_lots.required' => 'Trade Lots are required.',
            'entry_price.required' => 'Entry price is required.',
            'exit_price.required' => 'Exit price is required.',
            'target_price.required' => 'Target price is required.',
            'sl_price.required' => 'Stop loss price is required.',
            'trade_result.required' => 'Please select trade result.',
            'profit_loss.required' => 'Please enter profit/loss amount.',
        ]);

        $trade = Trade::findOrFail($id);

        $trade->instrument_id = $request->instrument_id;
        $trade->symbol = $request->symbol;
        $trade->trade_enter_date = $request->trade_enter_date;
        $trade->trade_exit_date = $request->trade_exit_date;
        $trade->trade_lots = $request->trade_lots;
        $trade->trade_qty = $request->trade_qty;
        $trade->entry_price = $request->entry_price;
        $trade->exit_price = $request->exit_price;
        $trade->target_price = $request->target_price;
        $trade->sl_price = $request->sl_price;
        $trade->target_achieved = $request->target_achieved;
        $trade->trade_days = $request->trade_days;
        $trade->trade_result = $request->trade_result;
        $trade->profit_loss = $request->profit_loss;

        $trade->save();

        return to_route('trades.index')->with('success', 'Trade updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Trade::destroy($id);

        return to_route('trades.index')->with('success', 'Trade deleted successfully!');
    }
}
