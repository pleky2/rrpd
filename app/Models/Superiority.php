<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Superiority extends Model
{
    use SoftDeletes;
    //
    protected $table = 'superiority';
    protected $fillable = [
        'title',
        'lang',
        'description',
        'img',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
