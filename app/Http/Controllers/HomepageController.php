<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mitra;

class HomepageController extends Controller
{
    //
    public function index() {

        $data['mitra'] = Mitra::all();

        return view('content.homepage', [
            'mitra' => $data['mitra']
        ]);
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
