<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomepageController extends Controller
{
    //
    public function index() {
        return view('content.homepage');
    }

    public function profile() {
        return view('content.profile');
    }
}
