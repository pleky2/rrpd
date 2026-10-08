<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Management;
use Yajra\DataTables\Facades\DataTables;

class ManagementController extends Controller
{
    /**
     * Show the management list page.
     */
    public function index()
    {
        return view('admin.management.index');
    }

    /**
     * Server-side DataTables source.
     */
    public function all()
    {
        $data = Management::select(['id', 'name', 'title', 'code', 'img']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('img', function ($row) {
                if ($row->img) {
                    return '<img class="rounded img-fluid" style="max-width:80px;" src="'.url('upload/images/'.$row->img).'" alt="">';
                }
                return '-';
            })
            ->addColumn('action', function ($row) {
                $html = '<a href="/management/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/management/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
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
        $data['url'] = '/management/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.managementForm', $data);
    }

    /**
     * Persist a new management entry.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            $management = new Management();
            $management->name = $request->name;
            $management->title = $request->title;
            $management->code = $request->code ? $request->code : null;
            $management->history = $request->history;

            if ($request->image) {
                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(upload_path('images'), $imageName);
                $management->img = $imageName;
            }

            $management->save();

            return redirect('management')->with('status', 'Management inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('management/add')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/management/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['management'] = Management::find($id);

        if (!$data['management']) {
            abort(404);
        }

        return view('admin.forms.managementForm', $data);
    }

    /**
     * Update an existing management entry.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            $management = Management::find($id);
            if (!$management) {
                abort(404);
            }

            $management->name = $request->name;
            $management->title = $request->title;
            $management->code = $request->code ? $request->code : $management->code;
            $management->history = $request->history;

            if ($request->image) {
                $oldImage = upload_path('images').'/'.$management->img;
                if ($management->img and File::exists($oldImage)) {
                    File::delete($oldImage);
                }

                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(upload_path('images'), $imageName);
                $management->img = $imageName;
            }

            $management->save();

            return redirect('management')->with('status', 'Management updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/management/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a management entry (and its image).
     */
    public function destroy($id)
    {
        try {
            $management = Management::find($id);
            if (!$management) {
                abort(404);
            }

            $imagePath = upload_path('images').'/'.$management->img;
            if ($management->img and File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $management->delete();

            return redirect('management')->with('status', 'Management deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('management')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}
