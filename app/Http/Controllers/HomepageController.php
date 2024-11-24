<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

use App\Models\Mitra;
use App\Models\Sliders;
use App\Models\Profile;
use App\Models\Contact;
use App\Models\Management;
use App\Models\ManagementDetail;
use App\Models\Superiority;
use App\Models\Media;


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
        $data['about'] = Profile::where('code', $id)->where('lang', Session::get('locale'))->first();

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

    public function management($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $manag = Management::where('code', $id)->get();
        $managDetail = ManagementDetail::where('code', $id)->get();

        return view('content.management', [
            'profile' => $data['profile'],
            'manag' => $manag,
            'managDetail' => $managDetail,
        ]);
    }

    public function milestone() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.milestone', [
            'profile' => $data['profile']
        ]);
    }

    public function organization($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $organ = Sliders::where('type', $id)->where('menu', 'org')->first();

        return view('content.organization', [
            'profile' => $data['profile'],
            'organ' => $organ
        ]);
    }

    public function superiority($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $super = superiority::where('code', $id)->where('lang', Session::get('locale'))->get();

        return view('content.superiority', [
            'profile' => $data['profile'],
            'super' => $super
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

    public function collaboration($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $colab = Media::where('menu', 'kerjasama')->where('code', $id)->get();

        return view('content.collaboration', [
            'profile' => $data['profile'],
            'colab' => $colab
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

    public function mediaDetail() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.mediaDetail', [
            'profile' => $data['profile']
        ]);
    }

    public function projectDetail() {
        $data['profile'] = Contact::where('code', 'homep')->first();

        return view('content.projectDetail', [
            'profile' => $data['profile']
        ]);
    }

    public function changeLanguage($lang) {
        if(in_array($lang, ['id', 'en'])) {
            App::setLocale($lang);
            Session::put('locale', $lang);
        }
        
        return back();
    }
}
