<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mitra extends Model
{
    use SoftDeletes;
    //
    protected $table = 'mitra';
    protected $fillable = [
        'name',
        'description',
        'type',
        'img',
        'is_order',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
