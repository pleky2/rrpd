<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mitra;
use App\Models\Sliders;
use App\Models\Profile;
use App\Models\Contact;

class HomepageController extends Controller
{
    //
    public function index() {

        $data['slider'] = Sliders::where('type', 'HOME_1')->orderBy('is_order', 'DESC')->get();
        $data['slider_mebi'] = Sliders::where('type', 'HOME_MEBI')->orderBy('is_order', 'DESC')->get();
        $data['mitra'] = Mitra::where('code', 'homep')->get();
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.homepage', [
            'mitra' => $data['mitra'],
            'slider' => $data['slider'],
            'slider_mebi' => $data['slider_mebi'],
            'profile' => $data['profile']
        ]);
    }

    public function profile($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $data['about'] = Profile::where('code', $id)->first();

        if(!$data['about']) {
            abort(404);
        }

        return view('content.profile', [
            'profile' => $data['profile'],
            'about' => $data['about']
        ]);
    }

    public function ceoMessage() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.ceo-message', [
            'profile' => $data['profile']
        ]);
    }

    public function management() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.management', [
            'profile' => $data['profile']
        ]);
    }

    public function milestone() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.milestone', [
            'profile' => $data['profile']
        ]);
    }

    public function organization() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.organization', [
            'profile' => $data['profile']
        ]);
    }

    public function superiority() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.superiority', [
            'profile' => $data['profile']
        ]);
    }

    public function mitra() {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $data['title_mitra'] = Mitra::where('code', 'bti')->first();
        $data['mitra'] = Mitra::where('code', 'bti')->get();

        return view('content.mitra', [
            'profile' => $data['profile'],
            'title_mitra' => $data['title_mitra'],
            'mitra' => $data['mitra']
        ]);
    }

    public function procurement() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.procurement', [
            'profile' => $data['profile']
        ]);
    }

    public function procurementDetail() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.procurementDetail', [
            'profile' => $data['profile']
        ]);
    }

    public function competitiveAdv() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.competitiveAdv', [
            'profile' => $data['profile']
        ]);
    }

    public function collaboration() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.collaboration', [
            'profile' => $data['profile']
        ]);
    }

    public function contactUs($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $data['contactUs'] = Contact::where('code', $id)->get();

        return view('content.contactUs', [
            'profile' => $data['profile'],
            'contactUs' => $data['contactUs']
        ]);
    }

    public function business() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.business', [
            'profile' => $data['profile']
        ]);
    }

    public function media() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.media', [
            'profile' => $data['profile']
        ]);
    }

    public function projectDetail() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.projectDetail', [
            'profile' => $data['profile']
        ]);
    }
}
