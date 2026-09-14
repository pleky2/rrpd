<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Business;
use Yajra\DataTables\Facades\DataTables;

class BusinessController extends Controller
{
    //
    public function index(){
        return view('admin.business');
    }

    public function all()
    {
        //
        $data = Business::select(['id', 'name', 'code', 'menu', 'description', 'background_img', 'position']);

        return DataTables::of($data)
            ->addColumn('background_img', function ($data) {
                if ($data->background_img) {
                    return '<img class="rounded img-fluid" style="max-width:80px;" src="'.url('upload/images/project/'.$data->background_img).'" alt="">';
                }
                return '-';
            })
            ->addColumn('action', function ($data) {
                $update = '<a href="business/edit/'. $data->id .'" class="btn btn-primary">Edit</a>';
                $update .= ' <button data-href="/business/delete/'. $data->id .'" class="btn btn-danger" data-to-delete="'.$data->id.'" id="btn_delete" onclick="deleteFunc(this)">Delete</button>';
                return $update;
            })
            ->rawColumns(['background_img', 'action'])
            ->make(true);
    }

}
