<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sliders;
use DataTables;
use Illuminate\Support\Facades\DB;

class SliderController extends Controller
{
    //
    public function index(){
        return view('admin.slider.index');
    }

    public function all()
    {
        //
        // $data = Sliders::all();
        $data = DB::table('sliders')
                ->select('id', 'title', 'description', 
                DB::raw('CASE 
                    WHEN type = "HOME_1" THEN "Homepage"
                    WHEN type = "bti" THEN "BTI" 
                    WHEN type = "enpos" THEN "Enpos"
                    WHEN type = "gh" THEN "Growing Hope"
                    WHEN type = "nw" THEN "Narwastu"
                    WHEN type = "HOME_MEBI" THEN "Homepage MEBI"
                    END AS type
                '))
                ->whereNull('menu')
                ->get();

        return Datatables::of($data)
            ->addColumn('action', function ($data) {
                $update = '<a href="slide/edit/'. $data->id .'" class="btn btn-primary">Edit</a>';
                $update .= ' <button data-href="/slide/delete/'. $data->id .'" class="btn btn-danger" data-to-delete="'.$data->id.'" id="btn_delete" onclick="deleteFunc(this)">Delete</button>';
                return $update;
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    public function create()
    {
        $data['url'] = '/slider/store';
        $data['method'] = 'post';

        return view('admin.slider.add', $data);
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);
        
        $imageName = time().rand().'.'.$request->image->extension();  
        $request->image->move(public_path('images/gallery'), $imageName);
        
        try{
            $galleryHis = new GalleryHistory;

            if($request->photo_1){
                $photoName_1 = time().rand().'.'.$request->photo_1->extension();  
                $request->photo_1->move(public_path('images/gallery'), $photoName_1);
                $galleryHis->photo_1 = $photoName_1;
            }
    
            if($request->photo_2){
                $photoName_2 = time().rand().'.'.$request->photo_2->extension();  
                $request->photo_2->move(public_path('images/gallery'), $photoName_2);
                $galleryHis->photo_2 = $photoName_2;
            }
            
            if($request->photo_3){
                $photoName_3 = time().rand().'.'.$request->photo_3->extension();  
                $request->photo_3->move(public_path('images/gallery'), $photoName_3);
                $galleryHis->photo_3 = $photoName_3;
            }

            $galleryHis->title = $request->title;
            $galleryHis->description = $request->description;
            $galleryHis->image   = $imageName;
            $galleryHis->status = $request->status ?? 0;
            $galleryHis->save();

            return redirect('galleries')->with('status',"Insert successfully");
        }
        catch(Exception $e){
            return redirect('/galleries/add')->with('failed',"operation failed");
        }
    }

    public function edit($id)
    {
        //
        $data['url'] = '/galleries/update/'.$id;
        $data['method'] = 'post';
        $data['gallery'] = GalleryHistory::find($id);

        return view('admin.forms.galleryForm', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $this->validate($request,[
            'title' => 'required',
         ]);

        try{
            $galleryHis = GalleryHistory::find($id);

            if(isset($request->image)) {
                $image_path = public_path('images/gallery') . '/' . $galleryHis->image;
                
                if(File::exists($image_path)) {
                   File::delete($image_path);
                }

                $imageName = time().rand().'.'.$request->image->extension();  
                $request->image->move(public_path('images/gallery'), $imageName);
                $galleryHis->image = $imageName;
            }

            if(isset($request->photo_1)) {
                $photo_1_path = public_path('images/gallery') . '/' . $galleryHis->photo_1;
                
                if(File::exists($photo_1_path)) {
                   File::delete($photo_1_path);
                }

                $photoName_1 = time().rand().'.'.$request->photo_1->extension();  
                $request->photo_1->move(public_path('images/gallery'), $photoName_1);
                $galleryHis->photo_1 = $photoName_1;
            }

            if(isset($request->photo_2)) {
                $photo_2_path = public_path('images/gallery') . '/' . $galleryHis->photo_2;
                
                if(File::exists($photo_2_path)) {
                   File::delete($photo_2_path);
                }

                $photoName_2 = time().rand().'.'.$request->photo_2->extension();  
                $request->photo_2->move(public_path('images/gallery'), $photoName_2);
                $galleryHis->photo_2 = $photoName_2;
            }

            if(isset($request->photo_3)) {
                $photo_3_path = public_path('images/gallery') . '/' . $galleryHis->photo_3;
                
                if(File::exists($photo_3_path)) {
                   File::delete($photo_3_path);
                }

                $photoName_3 = time().'.'.$request->photo_3->extension();  
                $request->photo_3->move(public_path('images/gallery'), $photoName_3);
                $galleryHis->photo_3     = $photoName_3;
            }

            $galleryHis->title         = $request->title;
            $galleryHis->description   = $request->description;
            $galleryHis->status        = $request->status ?? 0;
            $galleryHis->save();

            return redirect('galleries')->with('status',"Update successfully");
        }
        catch(Exception $e){
            return redirect('/galleries/add')->with('failed',"operation failed");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try{
            $galleryHis = GalleryHistory::find($id);
            $image_path = public_path('images/gallery') . '/' . $galleryHis->image;
            $photo_1_path = public_path('images/gallery') . '/' . $galleryHis->photo_1;
            $photo_2_path = public_path('images/gallery') . '/' . $galleryHis->photo_2;
            $photo_3_path = public_path('images/gallery') . '/' . $galleryHis->photo_3;
                
            if(File::exists($image_path)) {
                File::delete($image_path);
            }
            if(File::exists($photo_1_path)) {
                File::delete($photo_1_path);
            }
            if(File::exists($photo_2_path)) {
                File::delete($photo_2_path);
            }
            if(File::exists($photo_3_path)) {
                File::delete($photo_3_path);
            }
            $galleryHis->delete();

            return redirect('galleries')->with('status',"Delete successfully");
        }
        catch(Exception $e){
            return redirect('galleries')->with('failed',"operation failed");
        }
    }
}
