<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    // Allow mass assignment for these fields
    protected $fillable = [
        'instrument_id',
        'symbol',
        'trade_enter_date',
        'trade_exit_date',
        'trade_lots',
        'trade_qty',
        'entry_price',
        'exit_price',
        'target_price',
        'sl_price',
        'target_achieved',
        'trade_days',
        'trade_result',
        'profit_loss',
    ];

    public function instrument()
    {
        return $this->belongsTo(Instrument::class, 'instrument_id', 'id');
    }
}
