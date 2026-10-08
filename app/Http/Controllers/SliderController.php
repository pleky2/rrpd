<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Sliders;
use Yajra\DataTables\Facades\DataTables;

class SliderController extends Controller
{
    /**
     * Show the slider list page.
     */
    public function index()
    {
        return view('admin.slider.index');
    }

    /**
     * Server-side DataTables source.
     */
    public function all()
    {
        $data = Sliders::whereNull('menu');

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('img', function ($row) {
                if ($row->img) {
                    return '<img class="rounded img-fluid" style="max-width:80px;" src="'.url('upload/images/slider/'.$row->img).'" alt="">';
                }
                return '-';
            })
            ->addColumn('action', function ($row) {
                $html = '<a href="/slider/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/slider/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
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
        $data['url'] = '/slider/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.sliderForm', $data);
    }

    /**
     * Persist a new slider.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        try {
            $slider = new Sliders();
            $slider->title = $request->title;
            $slider->description = $request->description;

            if ($request->image) {
                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(upload_path('images/slider'), $imageName);
                $slider->img = $imageName;
            }

            $slider->is_order = $request->order ? $request->order : 0;
            $slider->type = $request->type ? $request->type : 'HOME_1';
            $slider->lang = $request->lang ?? 'id';
            $slider->save();

            return redirect('slider')->with('status', 'Slider inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('slider/create')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/slider/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['slider'] = Sliders::find($id);

        if (!$data['slider']) {
            abort(404);
        }

        return view('admin.forms.sliderForm', $data);
    }

    /**
     * Update an existing slider.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'title' => 'required',
        ]);

        try {
            $slider = Sliders::find($id);
            if (!$slider) {
                abort(404);
            }

            $slider->title = $request->title;
            $slider->description = $request->description;

            if ($request->image) {
                $oldImage = upload_path('images/slider').'/'.$slider->img;
                if ($slider->img and File::exists($oldImage)) {
                    File::delete($oldImage);
                }

                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(upload_path('images/slider'), $imageName);
                $slider->img = $imageName;
            }

            $slider->is_order = $request->order ? $request->order : 0;
            $slider->type = $request->type ? $request->type : 'HOME_1';
            $slider->lang = $request->lang ?? 'id';
            $slider->save();

            return redirect('slider')->with('status', 'Slider updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/slider/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a slider (and its image).
     */
    public function destroy($id)
    {
        try {
            $slider = Sliders::find($id);
            if (!$slider) {
                abort(404);
            }

            $imagePath = upload_path('images/slider').'/'.$slider->img;
            if ($slider->img and File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $slider->delete();

            return redirect('slider')->with('status', 'Slider deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('slider')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}
