<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('trades', function (Blueprint $table) {
            $table->id();

            // Instrument type
            $table->enum('instrument', [
                'Nifty',
                'Bank Nifty',
                'Sensex',
                'Stock Future',
                'Stock'
            ]);

            // Symbol
            $table->string('symbol', 100);

            // Trade dates
            $table->date('trade_enter_date')->default(now());
            $table->date('trade_exit_date')->default(now());

            // Lots
            $table->enum('trade_lots', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

            // Quantity
            $table->integer('trade_qty')->default(1);

            // Prices
            $table->float('entry_price', 10, 2);
            $table->float('exit_price', 10, 2);
            $table->float('target_price', 10, 2);
            $table->float('sl_price', 10, 2);

            // Target achieved or not
            $table->enum('target_achieved', ['Yes', 'No'])->default('No');

            // Trade duration
            $table->unsignedTinyInteger('trade_days')->default(1)->comment('Number of days trade held (1-30)');

            // Trade result
            $table->enum('trade_result', ['Profit', 'Loss'])->nullable();

            // Profit or loss value
            $table->float('profit_loss', 10, 2)->default(0);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
