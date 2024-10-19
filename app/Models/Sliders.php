<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sliders extends Model
{
    use SoftDeletes;
    //
    protected $table = 'sliders';
    protected $fillable = [
        'title',
        'description',
        'img',
        'is_order',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
