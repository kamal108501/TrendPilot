<?php

namespace App\Http\Controllers;

use App\Models\ShortTermStock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShortTermStockController extends Controller
{
    /**
     * Display a listing of the short-term short_term_stocks.
     */
    public function index()
    {

        $short_term_stocks = ShortTermStock::orderBy('tips_date', 'desc')->paginate(10);

        return Inertia::render('ShortTermStocks/index', [
            'short_term_stocks' => $short_term_stocks
        ]);
    }

    /**
     * Show the form for creating a new short-term stock.
     */
    public function create()
    {
        return Inertia::render('ShortTermStocks/create');
    }

    /**
     * Store a newly created short-term stock in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'stock_name' => 'required|string|max:50',
            'is_fno' => 'required|in:Yes,No',
            'tips_date' => 'nullable|date',
            'current_price' => 'required|numeric',
            'target' => 'required|numeric',
            'stoploss' => 'required|numeric',
            'target_achieve' => 'in:Yes,No',
            'trade_days' => 'nullable|integer',
            'review_chart' => 'in:Yes,No',
        ]);

        ShortTermStock::create($validated);

        return redirect()->route('short_term_stocks.index')
            ->with('success', 'Short Term Stock added successfully.');
    }

    /**
     * Show the form for editing the specified short-term stock.
     */
    public function edit($id)
    {
        $short_term_stock = ShortTermStock::findOrFail($id);

        return Inertia::render('ShortTermStocks/edit', [
            'short_term_stock' => $short_term_stock
        ]);
    }

    /**
     * Update the specified short-term stock in storage.
     */
    public function update(Request $request, $id)
    {
        $stock = ShortTermStock::findOrFail($id);

        $validated = $request->validate([
            'stock_name' => 'required|string|max:50',
            'is_fno' => 'required|in:Yes,No',
            'tips_date' => 'nullable|date',
            'current_price' => 'required|numeric',
            'target' => 'required|numeric',
            'stoploss' => 'required|numeric',
            'target_achieve' => 'nullable|in:Yes,No',
            'trade_days' => 'nullable|integer',
            'review_chart' => 'nullable|in:Yes,No',
        ]);


        $stock->update($validated);

        return redirect()->route('short_term_stocks.index')
            ->with('success', 'Short Term Stock updated successfully.');
    }

    /**
     * Remove the specified short-term stock from storage.
     */
    public function destroy($id)
    {
        $stock = ShortTermStock::findOrFail($id);
        $stock->delete();

        return redirect()->route('short_term_stocks.index')
            ->with('success', 'Short Term Stock deleted successfully.');
    }
}
