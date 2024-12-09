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
use App\Models\Superiority;
use App\Models\Media;
use App\Models\Project;
use App\Models\Business;


class HomepageController extends Controller
{
    //
    public function index() {

        $data['slider'] = Sliders::where('type', 'HOME_1')->orderBy('is_order', 'ASC')->get();
        $data['slider_mebi'] = Sliders::where('type', 'HOME_MEBI')->orderBy('is_order', 'ASC')->get();
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

        return view('content.management', [
            'profile' => $data['profile'],
            'manag' => $manag
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

    public function mitra($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $tabs = Mitra::select('description')->where('code', $id)->groupBy('description')->orderBy('type', 'ASC')->get();
        
        
        $mitra['tab'] = $tabs;

        foreach($tabs as $key => $tab) {
            $mitra['tab'][$key]['detail_mitra'] = Mitra::where('code', $id)->where('description', $tab->description)->orderBy('is_order', 'ASC')->get();
        }

        return view('content.mitra', [  
            'profile' => $data['profile'],
            'mitra' => $mitra,
        ]);
    }

    public function procurement() {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $project = Project::paginate(5);

        return view('content.procurement', [
            'profile' => $data['profile'],
            'project' => $project
        ]);
    }

    public function procurementDetail($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $proDetail = Project::where('slug', $id)->first();
        
        return view('content.procurementDetail', [
            'profile' => $data['profile'],
            'proDetail' => $proDetail
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

    public function business($parent, $id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $business = Business::where('code', $parent)->where('menu', $id)->get();

        return view('content.business', [
            'profile' => $data['profile'],
            'buss' => $business
        ]);
    }

    public function media($id) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $media = Media::where('menu', 'media')->where('code', $id)->get();

        return view('content.media', [
            'profile' => $data['profile'],
            'media' => $media
        ]);
    }

    public function mediaDetail($id, $slug) {
        $data['profile'] = Contact::where('code', 'homep')->first();
        $mediaDetail = Media::where('menu', 'media')->where('code', $id)->where('slug', $slug)->first();

        return view('content.mediaDetail', [
            'profile' => $data['profile'],
            'mediaDetail' => $mediaDetail
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
