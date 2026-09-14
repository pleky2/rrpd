<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Mitra;
use Yajra\DataTables\Facades\DataTables;

class MitraController extends Controller
{
    /**
     * Show the mitra list page.
     */
    public function index()
    {
        return view('admin.mitra.index');
    }

    /**
     * Server-side DataTables source.
     */
    public function all()
    {
        $data = Mitra::select(['id', 'name', 'description', 'type', 'is_order']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $html = '<a href="/mitra/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/mitra/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
                return $html;
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    /**
     * Show the create form.
     */
    public function create()
    {
        $data['url'] = '/mitra/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.mitraForm', $data);
    }

    /**
     * Persist a new mitra.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            $mitra = new Mitra();
            $mitra->name = $request->name;
            $mitra->description = $request->description;
            $mitra->type = $request->type ? $request->type : 'M';
            $mitra->is_order = $request->order ? $request->order : 0;

            if ($request->image) {
                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(public_path('images/mitra'), $imageName);
                $mitra->img = $imageName;
            }

            $mitra->save();

            return redirect('mitra')->with('status', 'Mitra inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('mitra/create')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/mitra/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['mitra'] = Mitra::find($id);

        if (!$data['mitra']) {
            abort(404);
        }

        return view('admin.forms.mitraForm', $data);
    }

    /**
     * Update an existing mitra.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        try {
            $mitra = Mitra::find($id);
            if (!$mitra) {
                abort(404);
            }

            $mitra->name = $request->name;
            $mitra->description = $request->description;
            $mitra->type = $request->type ? $request->type : 'M';
            $mitra->is_order = $request->order ? $request->order : 0;

            if ($request->image) {
                $oldImage = public_path('images/mitra').'/'.$mitra->img;
                if ($mitra->img and File::exists($oldImage)) {
                    File::delete($oldImage);
                }

                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(public_path('images/mitra'), $imageName);
                $mitra->img = $imageName;
            }

            $mitra->save();

            return redirect('mitra')->with('status', 'Mitra updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/mitra/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a mitra (and its image).
     */
    public function destroy($id)
    {
        try {
            $mitra = Mitra::find($id);
            if (!$mitra) {
                abort(404);
            }

            $imagePath = public_path('images/mitra').'/'.$mitra->img;
            if ($mitra->img and File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $mitra->delete();

            return redirect('mitra')->with('status', 'Mitra deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('mitra')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}