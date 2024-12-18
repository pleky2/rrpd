<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Business extends Model
{
    use SoftDeletes;
    //
    protected $table = 'business';
    protected $fillable = [
        'name',
        'code',
        'menu',
        'description',
        'background_img',
        'position',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
