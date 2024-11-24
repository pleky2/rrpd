<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Management extends Model
{
    use SoftDeletes;
    //
    protected $table = 'management';
    protected $fillable = [
        'name',
        'title',
        'img',
        'history',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
