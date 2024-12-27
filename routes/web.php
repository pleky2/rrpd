<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\SliderController;
 
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
Route::get('/management/{id}', [HomepageController::class, 'management']);
Route::get('/organization/{id}', [HomepageController::class, 'organization']);
Route::get('/superiority/{id}', [HomepageController::class, 'superiority']);
Route::get('/mitra/{id}', [HomepageController::class, 'mitra']);
Route::get('/procurement/{id}', [HomepageController::class, 'procurement']);
Route::get('/procurement-detail/{id}', [HomepageController::class, 'procurementDetail']);
Route::get('/collaboration/{id}', [HomepageController::class, 'collaboration']);
Route::get('/contact-us/{id}', [HomepageController::class, 'contactUs']);
Route::get('/business/{parent}/{id}', [HomepageController::class, 'business']);
Route::get('/media/{id}', [HomepageController::class, 'media']);
Route::get('/project-detail/{id}', [HomepageController::class, 'projectDetail']);
Route::get('/media-detail/{id}/{slug}', [HomepageController::class, 'mediaDetail']);
Route::get('/locale/{lang}', [HomepageController::class, 'changeLanguage']);


Route::get('/ceo-message/{id}', [HomepageController::class, 'ceoMessage']);
Route::get('/milestone/{id}', [HomepageController::class, 'milestone']);
Route::get('/competitive/{id}', [HomepageController::class, 'competitiveAdv']);


//===========ADMIN===========//
Route::get('/cms/login', function () {
  return view('admin.login');
});

Route::post("/loginpost", [AdminController::class, 'loginPost']);
Route::get("/cms/generate", [AdminController::class, 'generatePassword']);

Route::middleware(['cekloginstatus'])->group(function () 
{
    Route::get("/admin", [AdminController::class, 'index']);

    Route::get("/slider", [SliderController::class, 'index']);
    Route::get("/slider/all", [SliderController::class, 'all']);
    Route::get("/slider/add", [SliderController::class, 'create']);
    Route::post("/slider/store", [SliderController::class, 'store']);
    
    Route::get("/business", [BusinessController::class, 'index']);
    Route::get("/business/all", [BusinessController::class, 'all']);
    Route::get("/business/edit/{id}", [BusinessController::class, 'index']);

    Route::get("/media", [MediaController::class, 'index']);
    Route::get("/media/all", [MediaController::class, 'all']);
    Route::get("/media/edit/{id}", [BusinessController::class, 'index']);
    
});


