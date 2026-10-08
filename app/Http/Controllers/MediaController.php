<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Media;
use Yajra\DataTables\Facades\DataTables;

class MediaController extends Controller
{
    //
    public function index()
    {
        return view('admin.media.index');
    }

    public function all()
    {
        //
        $data = Media::select(['id', 'title', 'code', 'menu', 'img', 'url']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('img', function ($row) {
                if ($row->img) {
                    return '<img class="rounded img-fluid" style="max-width:80px;" src="'.url('upload/images/media/'.$row->img).'" alt="">';
                }
                return '-';
            })
            ->addColumn('action', function ($row) {
                $html = '<a href="/media/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/media/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
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
        $data['url'] = '/media/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.mediaForm', $data);
    }

    /**
     * Persist a new media entry.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        try {
            $media = new Media();
            $media->title = $request->title;
            $media->code = $request->code ? $request->code : 'bti';
            $media->lang = $request->lang ? $request->lang : 'id';
            $media->menu = $request->menu;
            $media->url = $request->url;

            if ($request->image) {
                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(upload_path('images/media'), $imageName);
                $media->img = $imageName;
            }

            $media->save();

            return redirect('media')->with('status', 'Media inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('media/add')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/media/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['media'] = Media::find($id);

        if (!$data['media']) {
            abort(404);
        }

        return view('admin.forms.mediaForm', $data);
    }

    /**
     * Update an existing media entry.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        try {
            $media = Media::find($id);
            if (!$media) {
                abort(404);
            }

            $media->title = $request->title;
            $media->code = $request->code ? $request->code : $media->code;
            $media->lang = $request->lang ? $request->lang : $media->lang;
            $media->menu = $request->menu;
            $media->url = $request->url;

            if ($request->image) {
                $oldImage = upload_path('images/media').'/'.$media->img;
                if ($media->img and File::exists($oldImage)) {
                    File::delete($oldImage);
                }

                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(upload_path('images/media'), $imageName);
                $media->img = $imageName;
            }

            $media->save();

            return redirect('media')->with('status', 'Media updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/media/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a media entry (and its image).
     */
    public function destroy($id)
    {
        try {
            $media = Media::find($id);
            if (!$media) {
                abort(404);
            }

            $imagePath = upload_path('images/media').'/'.$media->img;
            if ($media->img and File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $media->delete();

            return redirect('media')->with('status', 'Media deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('media')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}

