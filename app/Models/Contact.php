<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use SoftDeletes;
    //
    protected $table = 'contact';
    protected $fillable = [
        'company_name',
        'description',
        'address_ho',
        'address_branch',
        'phone',
        'email',
        'instagram',
        'youtube',
        'linkedin',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
