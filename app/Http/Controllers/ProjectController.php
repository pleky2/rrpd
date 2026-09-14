<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Models\Project;
use Yajra\DataTables\Facades\DataTables;

class ProjectController extends Controller
{
    /**
     * Show the project list page.
     */
    public function index()
    {
        return view('admin.project.index');
    }

    /**
     * Server-side DataTables source.
     */
    public function all()
    {
        $data = Project::select(['id', 'name', 'slug', 'is_order', 'address', 'source', 'img_1']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('img_1', function ($row) {
                if ($row->img_1) {
                    return '<img class="rounded img-fluid" style="max-width:80px;" src="'.url('upload/images/project/'.$row->img_1).'" alt="">';
                }
                return '-';
            })
            ->addColumn('action', function ($row) {
                $html = '<a href="/project/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/project/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
                return $html;
            })
            ->rawColumns(['img_1', 'action'])
            ->make(true);
    }

    /**
     * Show the create form.
     */
    public function create()
    {
        $data['url'] = '/project/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.projectForm', $data);
    }

    /**
     * Upload helper: stores one project image and returns its filename.
     */
    private function uploadImage($image)
    {
        $imageName = time().rand().'.'.$image->extension();
        $image->move(public_path('upload/images/project'), $imageName);

        return $imageName;
    }

    /**
     * Delete an image file if it exists.
     */
    private function deleteImage($filename)
    {
        $path = public_path('upload/images/project').'/'.$filename;
        if ($filename and File::exists($path)) {
            File::delete($path);
        }
    }

    /**
     * Persist a new project entry.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image_1' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'image_2' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'image_3' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'image_4' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        try {
            $project = new Project();
            $project->name = $request->name;
            $project->description = $request->description;
            $project->slug = $request->slug ? Str::slug($request->slug) : Str::slug($request->name);
            $project->is_order = $request->is_order ? $request->is_order : 0;
            $project->address = $request->address;
            $project->source = $request->source;

            if ($request->image_1) {
                $project->img_1 = $this->uploadImage($request->image_1);
            }
            if ($request->image_2) {
                $project->img_2 = $this->uploadImage($request->image_2);
            }
            if ($request->image_3) {
                $project->img_3 = $this->uploadImage($request->image_3);
            }
            if ($request->image_4) {
                $project->img_4 = $this->uploadImage($request->image_4);
            }

            $project->save();

            return redirect('project')->with('status', 'Project inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('project/add')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/project/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['project'] = Project::find($id);

        if (!$data['project']) {
            abort(404);
        }

        return view('admin.forms.projectForm', $data);
    }

    /**
     * Update an existing project entry.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image_1' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'image_2' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'image_3' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
            'image_4' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        try {
            $project = Project::find($id);
            if (!$project) {
                abort(404);
            }

            $project->name = $request->name;
            $project->description = $request->description;
            $project->slug = $request->slug ? Str::slug($request->slug) : $project->slug;
            $project->is_order = $request->is_order ? $request->is_order : $project->is_order;
            $project->address = $request->address;
            $project->source = $request->source;

            foreach ([1, 2, 3, 4] as $n) {
                $field = 'image_'.$n;
                if ($request->hasFile($field)) {
                    $this->deleteImage($project->{'img_'.$n});
                    $project->{'img_'.$n} = $this->uploadImage($request->file($field));
                }
            }

            $project->save();

            return redirect('project')->with('status', 'Project updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/project/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a project entry (and its images).
     */
    public function destroy($id)
    {
        try {
            $project = Project::find($id);
            if (!$project) {
                abort(404);
            }

            foreach ([1, 2, 3, 4] as $n) {
                $this->deleteImage($project->{'img_'.$n});
            }

            $project->delete();

            return redirect('project')->with('status', 'Project deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('project')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}
