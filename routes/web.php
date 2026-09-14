<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\MitraController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ManagementController;
use App\Http\Controllers\SuperiorityController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ContactController;
 
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomepageController::class, 'index']);
Route::get('/profile/{id}', [HomepageController::class, 'profile']);
Route::get('/organization/{id}', [HomepageController::class, 'organization']);
Route::get('/procurement/{id}', [HomepageController::class, 'procurement']);
Route::get('/procurement-detail/{id}', [HomepageController::class, 'procurementDetail']);
Route::get('/collaboration/{id}', [HomepageController::class, 'collaboration']);
Route::get('/contact-us/{id}', [HomepageController::class, 'contactUs']);
Route::get('/business/{parent}/{id}', [HomepageController::class, 'business']);
Route::get('/project-detail/{id}', [HomepageController::class, 'projectDetail']);
Route::get('/media-detail/{id}/{slug}', [HomepageController::class, 'mediaDetail']);
Route::get('/locale/{lang}', [HomepageController::class, 'changeLanguage']);


Route::get('/ceo-message/{id}', [HomepageController::class, 'ceoMessage']);
Route::get('/milestone/{id}', [HomepageController::class, 'milestone']);
Route::get('/competitive/{id}', [HomepageController::class, 'competitiveAdv']);


//===========ADMIN===========//
Route::get('/cms/login', function () {
  // If already logged in, don't show the login page
  if (\Illuminate\Support\Facades\Session::get('login')) {
    return redirect('/admin');
  }

  // Prevent Back button from showing a cached login page after login
  return response()->view('admin.login')
    ->header('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate')
    ->header('Pragma', 'no-cache')
    ->header('Expires', 'Fri, 01 Jan 1990 00:00:00 GMT');
});

Route::post("/loginpost", [AdminController::class, 'loginPost']);
Route::get("/logout", [AdminController::class, 'logout']);
Route::get("/cms/generate", [AdminController::class, 'generatePassword']);

Route::middleware(['cekloginstatus'])->group(function () 
{
    Route::get("/admin", [AdminController::class, 'index']);

    // ===== Change Password =====
    Route::get("/change-password", [AdminController::class, 'changePassword']);
    Route::post("/change-password", [AdminController::class, 'updatePassword']);

    // ===== Master > Slider =====
    Route::get("/slider", [SliderController::class, 'index']);
    Route::get("/slider/all", [SliderController::class, 'all']);
    Route::get("/slider/add", [SliderController::class, 'create']);
    Route::post("/slider/store", [SliderController::class, 'store']);
    Route::get("/slider/edit/{id}", [SliderController::class, 'edit']);
    Route::post("/slider/update/{id}", [SliderController::class, 'update']);
    Route::get("/slider/destroy/{id}", [SliderController::class, 'destroy']);

    // ===== Master > Our Company =====
    Route::get("/our-company", [ProfileController::class, 'index']);
    Route::get("/our-company/all", [ProfileController::class, 'all']);
    Route::get("/our-company/add", [ProfileController::class, 'create']);
    Route::post("/our-company/store", [ProfileController::class, 'store']);
    Route::get("/our-company/edit/{id}", [ProfileController::class, 'edit']);
    Route::post("/our-company/update/{id}", [ProfileController::class, 'update']);
    Route::get("/our-company/destroy/{id}", [ProfileController::class, 'destroy']);

    // ===== Master > Mitra =====
    Route::get("/mitra", [MitraController::class, 'index']);
    Route::get("/mitra/all", [MitraController::class, 'all']);
    Route::get("/mitra/add", [MitraController::class, 'create']);
    Route::post("/mitra/store", [MitraController::class, 'store']);
    Route::get("/mitra/edit/{id}", [MitraController::class, 'edit']);
    Route::post("/mitra/update/{id}", [MitraController::class, 'update']);
    Route::get("/mitra/destroy/{id}", [MitraController::class, 'destroy']);

    // ===== Master > Management =====
    Route::get("/management", [ManagementController::class, 'index']);
    Route::get("/management", [ManagementController::class, 'index']);
    Route::get("/management/all", [ManagementController::class, 'all']);
    Route::get("/management/add", [ManagementController::class, 'create']);
    Route::post("/management/store", [ManagementController::class, 'store']);
    Route::get("/management/edit/{id}", [ManagementController::class, 'edit']);
    Route::post("/management/update/{id}", [ManagementController::class, 'update']);
    Route::get("/management/destroy/{id}", [ManagementController::class, 'destroy']);

    // ===== Master > Superiority (Keunggulan) =====
    Route::get("/superiority", [SuperiorityController::class, 'index']);
    Route::get("/superiority/all", [SuperiorityController::class, 'all']);
    Route::get("/superiority/add", [SuperiorityController::class, 'create']);
    Route::post("/superiority/store", [SuperiorityController::class, 'store']);
    Route::get("/superiority/edit/{id}", [SuperiorityController::class, 'edit']);
    Route::post("/superiority/update/{id}", [SuperiorityController::class, 'update']);
    Route::get("/superiority/destroy/{id}", [SuperiorityController::class, 'destroy']);

    // ===== Master > Project =====
    Route::get("/project", [ProjectController::class, 'index']);
    Route::get("/project/all", [ProjectController::class, 'all']);
    Route::get("/project/add", [ProjectController::class, 'create']);
    Route::post("/project/store", [ProjectController::class, 'store']);
    Route::get("/project/edit/{id}", [ProjectController::class, 'edit']);
    Route::post("/project/update/{id}", [ProjectController::class, 'update']);
    Route::get("/project/destroy/{id}", [ProjectController::class, 'destroy']);

    // ===== Business =====
    Route::get("/business", [BusinessController::class, 'index']);
    Route::get("/business/all", [BusinessController::class, 'all']);
    Route::get("/business/edit/{id}", [BusinessController::class, 'index']);

    // ===== Media =====
    Route::get("/media", [MediaController::class, 'index']);
    Route::get("/media/all", [MediaController::class, 'all']);
    Route::get("/media/add", [MediaController::class, 'create']);
    Route::post("/media/store", [MediaController::class, 'store']);
    Route::get("/media/edit/{id}", [MediaController::class, 'edit']);
    Route::post("/media/update/{id}", [MediaController::class, 'update']);
    Route::get("/media/destroy/{id}", [MediaController::class, 'destroy']);

    // ===== Contact =====
    Route::get("/contact", [ContactController::class, 'index']);
    Route::get("/contact/all", [ContactController::class, 'all']);
    Route::get("/contact/add", [ContactController::class, 'create']);
    Route::post("/contact/store", [ContactController::class, 'store']);
    Route::get("/contact/edit/{id}", [ContactController::class, 'edit']);
    Route::post("/contact/update/{id}", [ContactController::class, 'update']);
    Route::get("/contact/destroy/{id}", [ContactController::class, 'destroy']);
});

Route::get('/mitra/{id}', [HomepageController::class, 'mitra']);
Route::get('/management/{id}', [HomepageController::class, 'management']);
Route::get('/superiority/{id}', [HomepageController::class, 'superiority']);
Route::get('/media/{id}', [HomepageController::class, 'media']);


