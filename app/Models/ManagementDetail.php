<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ManagementDetail extends Model
{
    use SoftDeletes;
    //
    protected $table = 'management_detail';
    protected $fillable = [
        'management_id',
        'desc',
        'history_type',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
