<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Media;
use Yajra\DataTables\Facades\DataTables;

class MediaController extends Controller
{
    //
    public function index(){
        return view('admin.media.index');
    }

    public function all()
    {
        //
        $data = Media::select(['id', 'title', 'code', 'url']);
        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                return '<a href="/users/' . $row->id . '/edit" class="btn btn-sm btn-primary">Edit</a>';
            })
            ->rawColumns(['action'])
            ->make(true);

        // return Datatables::of($data)
        //     ->addColumn('action', function ($data) {
        //         $update = '<a href="business/edit/'. $data->id .'" class="btn btn-primary">Edit</a>';
        //         $update .= ' <button data-href="/business/delete/'. $data->id .'" class="btn btn-danger" data-to-delete="'.$data->id.'" id="btn_delete" onclick="deleteFunc(this)">Delete</button>';
        //         return $update;
        //     })
        //     ->rawColumns(['action'])
        //     ->make(true);
    }

}
