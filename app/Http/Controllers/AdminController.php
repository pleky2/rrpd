<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use App\Models\Users;

class AdminController extends Controller
{

    public function index(){
        return view('admin.business');
    }
    
    public function loginPost(Request $request){
                
        $email = $request->input("email");;
        $password = $request->input("password");
    
        $data = Users::where('email',$email)->first();
        if($data){
            if(Hash::check($password,$data->password)){
                Session::put('id',$data->id);
                Session::put('name',$data->name);
                Session::put('email',$data->email);
                Session::put('login',TRUE);
                return redirect('admin');
            }
            else{
                return redirect('cms/login')->with('alert','Password atau Email, Salah !');
            }
        }
        else{
            return redirect('cms/login')->with('alert','Password atau Email, Salah!');
        }
    }

    public function logout(){
        Session::flush();
        return redirect('cms/login')->with('alert','Kamu sudah logout');
    }

    /**
     * Show the change password form.
     */
    public function changePassword()
    {
        return view('admin.forms.changePasswordForm');
    }

    /**
     * Handle a change password request.
     */
    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = Users::find(Session::get('id'));

        if (!$user or !Hash::check($request->current_password, $user->password)) {
            return redirect('/change-password')->with('failed', 'Password lama tidak sesuai.');
        }

        if (Hash::check($request->password, $user->password)) {
            return redirect('/change-password')->with('failed', 'Password baru tidak boleh sama dengan password lama.');
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return redirect('/change-password')->with('status', 'Password berhasil diubah.');
    }

    public function generatePassword(){
       
        $data =  new Users();
        $data->name = "Superadmin";
        $data->email = "superadmin@btiofficial.com";
        $data->password = bcrypt("superadmin");
        $data->save();
        return redirect('login');
    }
}
