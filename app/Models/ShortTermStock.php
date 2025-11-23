<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShortTermStock extends Model
{
    use HasFactory;

    protected $table = 'short_term_stocks';

    protected $fillable = [
        'stock_name',
        'is_fno',
        'tips_date',
        'current_price',
        'target',
        'stoploss',
        'target_achieve',
        'trade_days',
        'review_chart',
        'is_active',
    ];
}
