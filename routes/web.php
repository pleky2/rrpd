<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\AdminController;
 
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
Route::get('/procurement/{id}/{detail}', [HomepageController::class, 'procurementDetail']);
Route::get('/collaboration/{id}', [HomepageController::class, 'collaboration']);
Route::get('/contact-us/{id}', [HomepageController::class, 'contactUs']);
Route::get('/business/{parent}/{id}', [HomepageController::class, 'business']);
Route::get('/media/{id}', [HomepageController::class, 'media']);
Route::get('/media/{id}/{detail}', [HomepageController::class, 'mediaDetail']);
Route::get('/project-detail/{id}', [HomepageController::class, 'projectDetail']);
Route::get('/media-detail/{id}', [HomepageController::class, 'mediaDetail']);
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
});


