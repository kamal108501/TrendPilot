<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('id', 'asc')->paginate(5);

        return Inertia::render('Categories/index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Categories/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'type' => 'required|in:income,expense',
                'user_id' => 'required|exists:users,id',
            ],
            [
                'name.required' => 'The category name is required.',
                'type.required' => 'The category type is required.',
                'type.in' => 'The category type must be either income or expense.',
            ]
        );

        Category::create([
            'name' => $request->name,
            'type' => $request->type,
            'user_id' => $request->user_id,
        ]);

        return to_route('categories.index')->with('success', 'Category created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);

        return Inertia::render("Categories/show", [
            "category" => $category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::find($id);

        return Inertia::render('Categories/edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'type' => 'required|in:income,expense',
                'user_id' => 'required|exists:users,id',
            ],
            [
                'name.required' => 'The category name is required.',
                'type.required' => 'The category type is required.',
                'type.in' => 'The category type must be either income or expense.',
            ]
        );

        $category = Category::find($id);

        $category->name = $request->name;
        $category->type = $request->type;
        $category->user_id = $request->user_id;

        $category->save();

        return to_route('categories.index')->with('success', 'Category updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Category::destroy($id);

        return to_route('categories.index')->with('success', 'Category deleted successfully!');
    }
}
