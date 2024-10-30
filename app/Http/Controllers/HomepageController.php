<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mitra;
use App\Models\Sliders;
use App\Models\Profile;

class HomepageController extends Controller
{
    //
    public function index() {

        $data['slider'] = Sliders::where('type', 'HOME_1')->orderBy('is_order', 'DESC')->get();
        $data['slider_mebi'] = Sliders::where('type', 'HOME_MEBI')->orderBy('is_order', 'DESC')->get();
        $data['mitra'] = Mitra::all();
        $data['profile'] = Profile::first();

        return view('content.homepage', [
            'mitra' => $data['mitra'],
            'slider' => $data['slider'],
            'slider_mebi' => $data['slider_mebi'],
            'profile' => $data['profile']
        ]);
    }

    public function profile() {
        $data['profile'] = Profile::first();

        return view('content.profile', [
            'profile' => $data['profile']
        ]);
    }

    public function ceoMessage() {
        $data['profile'] = Profile::first();

        return view('content.ceo-message', [
            'profile' => $data['profile']
        ]);
    }

    public function management() {
        $data['profile'] = Profile::first();

        return view('content.management', [
            'profile' => $data['profile']
        ]);
    }

    public function milestone() {
        $data['profile'] = Profile::first();

        return view('content.milestone', [
            'profile' => $data['profile']
        ]);
    }

    public function organization() {
        $data['profile'] = Profile::first();

        return view('content.organization', [
            'profile' => $data['profile']
        ]);
    }

    public function superiority() {
        $data['profile'] = Profile::first();

        return view('content.superiority', [
            'profile' => $data['profile']
        ]);
    }
}
