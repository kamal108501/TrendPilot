<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InstrumentController;
use App\Http\Controllers\StrategyController;
use App\Http\Controllers\TradeController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel;
use App\Exports\CategoriesExport;
use App\Http\Controllers\ShortTermStockController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('users', UserController::class);
    Route::resource('instruments', InstrumentController::class);
    Route::resource('strategies', StrategyController::class);
    Route::resource('trades', TradeController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('transactions', TransactionController::class);
    Route::resource('short_term_stocks', ShortTermStockController::class);

    Route::get('categories/export', function () {
        return Excel::download(new CategoriesExport, 'categories.xlsx');
    })->name('categories.export');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
