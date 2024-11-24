<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Media extends Model
{
    use SoftDeletes;
    //
    protected $table = 'Media';
    protected $fillable = [
        'title',
        'menu',
        'code',
        'description',
        'img',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
