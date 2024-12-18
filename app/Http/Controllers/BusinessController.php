<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Business;
use Datatables;

class BusinessController extends Controller
{
    //
    public function index(){
        return view('admin.business');
    }

    public function all()
    {
        //
        $data = Business::all();

        return Datatables::of($data)
            ->addColumn('action', function ($data) {
                $update = '<a href="business/edit/'. $data->id .'" class="btn btn-primary">Edit</a>';
                $update .= ' <button data-href="/business/delete/'. $data->id .'" class="btn btn-danger" data-to-delete="'.$data->id.'" id="btn_delete" onclick="deleteFunc(this)">Delete</button>';
                return $update;
            })
            ->rawColumns(['action'])
            ->make(true);
    }

}
