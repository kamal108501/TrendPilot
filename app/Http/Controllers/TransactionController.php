<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->transactions()->with('category')->latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'type' => 'required|in:income,expense',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
            'note' => 'nullable|string',
        ]);

        $request->user()->transactions()->create($data);

        return response()->json(['message' => 'Transaction added successfully']);
    }

    public function balanceSheet(Request $request)
    {
        $income = $request->user()->transactions()->where('type', 'income')->sum('amount');
        $expense = $request->user()->transactions()->where('type', 'expense')->sum('amount');
        $balance = $income - $expense;

        return response()->json([
            'income' => $income,
            'expense' => $expense,
            'balance' => $balance,
            'currency' => '₹'
        ]);
    }
}
