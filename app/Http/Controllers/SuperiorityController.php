<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Superiority;
use Yajra\DataTables\Facades\DataTables;

class SuperiorityController extends Controller
{
    /**
     * Show the superiority list page.
     */
    public function index()
    {
        return view('admin.superiority.index');
    }

    /**
     * Server-side DataTables source.
     */
    public function all()
    {
        $data = Superiority::select(['id', 'title', 'code', 'lang', 'description', 'img']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('img', function ($row) {
                if ($row->img) {
                    return '<img class="rounded img-fluid" style="max-width:80px;" src="'.url('images/superiority/'.$row->img).'" alt="">';
                }
                return '-';
            })
            ->addColumn('action', function ($row) {
                $html = '<a href="/superiority/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/superiority/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
                return $html;
            })
            ->rawColumns(['img', 'action'])
            ->make(true);
    }

    /**
     * Show the create form.
     */
    public function create()
    {
        $data['url'] = '/superiority/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.superiorityForm', $data);
    }

    /**
     * Persist a new superiority entry.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        try {
            $superiority = new Superiority();
            $superiority->title = $request->title;
            $superiority->code = $request->code ? $request->code : 'bti';
            $superiority->lang = $request->lang ? $request->lang : 'id';
            $superiority->description = $request->description;

            if ($request->image) {
                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(public_path('images/superiority'), $imageName);
                $superiority->img = $imageName;
            }

            $superiority->save();

            return redirect('superiority')->with('status', 'Superiority inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('superiority/add')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/superiority/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['superiority'] = Superiority::find($id);

        if (!$data['superiority']) {
            abort(404);
        }

        return view('admin.forms.superiorityForm', $data);
    }

    /**
     * Update an existing superiority entry.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        try {
            $superiority = Superiority::find($id);
            if (!$superiority) {
                abort(404);
            }

            $superiority->title = $request->title;
            $superiority->code = $request->code ? $request->code : $superiority->code;
            $superiority->lang = $request->lang ? $request->lang : $superiority->lang;
            $superiority->description = $request->description;

            if ($request->image) {
                $oldImage = public_path('images/superiority').'/'.$superiority->img;
                if ($superiority->img and File::exists($oldImage)) {
                    File::delete($oldImage);
                }

                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(public_path('images/superiority'), $imageName);
                $superiority->img = $imageName;
            }

            $superiority->save();

            return redirect('superiority')->with('status', 'Superiority updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/superiority/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a superiority entry (and its image).
     */
    public function destroy($id)
    {
        try {
            $superiority = Superiority::find($id);
            if (!$superiority) {
                abort(404);
            }

            $imagePath = public_path('images/superiority').'/'.$superiority->img;
            if ($superiority->img and File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $superiority->delete();

            return redirect('superiority')->with('status', 'Superiority deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('superiority')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}
