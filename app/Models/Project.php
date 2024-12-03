<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;
    //
    protected $table = 'Project';
    protected $fillable = [
        'name',
        'description',
        'slug',
        'img_1',
        'img_2',
        'img_3',
        'img_4',
        'address',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
