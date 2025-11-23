<?php

namespace App\Http\Controllers;

use App\Models\Strategy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StrategyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $strategies = Strategy::all();

        return Inertia::render("Strategies/index", [
            "strategies" => $strategies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Strategies/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:255',
            ],
            [
                'name.required' => 'The strategy is required.',
                'description.required' => 'The description is required.',
            ]
        );


        Strategy::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return to_route('strategies.index')->with('success', 'Strategy created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $strategy = Strategy::find($id);

        return Inertia::render("Strategies/show", [
            "strategy" => $strategy
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $strategy = Strategy::find($id);

        return Inertia::render("Strategies/edit", [
            "strategy" => $strategy
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ]);

        $strategy = Strategy::find($id);

        $strategy->name = $request->name;
        $strategy->description = $request->description;

        $strategy->save();

        return to_route('strategies.index')->with('success', 'Strategy updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Strategy::destroy($id);

        return to_route('strategies.index')->with('success', 'Strategy deleted successfully!');
    }
}
