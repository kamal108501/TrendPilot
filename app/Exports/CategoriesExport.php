<?php

namespace App\Exports;

use App\Models\Category;
use Maatwebsite\Excel\Concerns\FromCollection;

class CategoriesExport implements FromCollection
{
    public function collection()
    {
        return Category::select('id', 'name', 'type')->get();
    }
}
