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

    public function ceoMessage() {
        return view('content.ceo-message');
    }

    public function management() {
        return view('content.management');
    }

    public function milestone() {
        return view('content.milestone');
    }
}
