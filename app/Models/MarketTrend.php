<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MarketTrend extends Model
{
    protected $table = 'market_trend';

    protected $fillable = [
        'instrument_id',
        'trend',
    ]
}
