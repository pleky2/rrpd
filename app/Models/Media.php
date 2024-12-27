<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Media extends Model
{
    use SoftDeletes;
    //
    protected $table = 'media';
    protected $fillable = [
        'title',
        'menu',
        'code',
        'url',
        'img',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
