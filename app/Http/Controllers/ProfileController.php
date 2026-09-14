<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Profile;
use Yajra\DataTables\Facades\DataTables;

class ProfileController extends Controller
{
    /**
     * Show the "Our Company" list page.
     */
    public function index()
    {
        return view('admin.ourcompany.index');
    }

    /**
     * Server-side DataTables source.
     */
    public function all()
    {
        $data = Profile::select(['id', 'company_name', 'code', 'lang', 'description']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $html = '<a href="/our-company/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/our-company/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
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
        $data['url'] = '/our-company/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.ourcompanyForm', $data);
    }

    /**
     * Persist a new entry.
     */
    public function store(Request $request)
    {
        $request->validate([
            'company_name' => 'required',
        ]);

        try {
            $profile = new Profile();
            $profile->company_name = $request->company_name;
            $profile->code = $request->code ? $request->code : 'homep';
            $profile->lang = $request->lang;
            $profile->img_title = $request->img_title;
            $profile->description = $request->description;
            $profile->visi = $request->visi;
            $profile->misi = $request->misi;
            $profile->desc_logo = $request->desc_logo;

            if ($request->image) {
                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(public_path('images/profile'), $imageName);
                $profile->logo = $imageName;
            }

            if ($request->image_2) {
                $imageName2 = time().rand().'2.'.$request->image_2->extension();
                $request->image_2->move(public_path('images/profile'), $imageName2);
                $profile->logo_2 = $imageName2;
            }

            $profile->save();

            return redirect('our-company')->with('status', 'Our Company inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('our-company/create')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/our-company/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['profile'] = Profile::find($id);

        if (!$data['profile']) {
            abort(404);
        }

        return view('admin.forms.ourcompanyForm', $data);
    }

    /**
     * Update an existing entry.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'company_name' => 'required',
        ]);

        try {
            $profile = Profile::find($id);
            if (!$profile) {
                abort(404);
            }

            $profile->company_name = $request->company_name;
            $profile->code = $request->code ? $request->code : $profile->code;
            $profile->lang = $request->lang ? $request->lang : $profile->lang;
            $profile->img_title = $request->img_title;
            $profile->description = $request->description;
            $profile->visi = $request->visi;
            $profile->misi = $request->misi;
            $profile->desc_logo = $request->desc_logo;

            if ($request->image) {
                $oldImage = public_path('images/profile').'/'.$profile->logo;
                if ($profile->logo and File::exists($oldImage)) {
                    File::delete($oldImage);
                }

                $imageName = time().rand().'.'.$request->image->extension();
                $request->image->move(public_path('images/profile'), $imageName);
                $profile->logo = $imageName;
            }

            if ($request->image_2) {
                $oldImage2 = public_path('images/profile').'/'.$profile->logo_2;
                if ($profile->logo_2 and File::exists($oldImage2)) {
                    File::delete($oldImage2);
                }

                $imageName2 = time().rand().'2.'.$request->image_2->extension();
                $request->image_2->move(public_path('images/profile'), $imageName2);
                $profile->logo_2 = $imageName2;
            }

            $profile->save();

            return redirect('our-company')->with('status', 'Our Company updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/our-company/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove an entry.
     */
    public function destroy($id)
    {
        try {
            $profile = Profile::find($id);
            if (!$profile) {
                abort(404);
            }

            $imagePath = public_path('images/profile').'/'.$profile->logo;
            if ($profile->logo and File::exists($imagePath)) {
                File::delete($imagePath);
            }

            $profile->delete();

            return redirect('our-company')->with('status', 'Our Company deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('our-company')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}