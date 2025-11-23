<?php

namespace App\Http\Controllers;

use App\Models\Instrument;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstrumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $instruments = Instrument::all();

        return Inertia::render('Instruments/index', compact('instruments'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Instruments/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'description' => 'nullable|string|max:255',
            ],
            [
                'name.required' => 'The instrument is required.'
            ]
        );

        Instrument::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return to_route('instruments.index')->with('success', 'Instrument created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $instrument = Instrument::find($id);

        return Inertia::render("Instruments/show", [
            "instrument" => $instrument
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $instrument = Instrument::find($id);

        return Inertia::render('Instruments/edit', compact('instrument'));
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

        $instrument = Instrument::find($id);

        $instrument->name = $request->name;
        $instrument->description = $request->description;

        $instrument->save();

        return to_route('instruments.index')->with('success', 'Instrument updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Instrument::destroy($id);

        return to_route('instruments.index')->with('success', 'Instrument deleted successfully!');
    }
}
