<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
 
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
Route::get('/competitive/{id}', [HomepageController::class, 'competitiveAdv']);
Route::get('/collaboration/{id}', [HomepageController::class, 'collaboration']);
Route::get('/contact-us/{id}', [HomepageController::class, 'contactUs']);
Route::get('/business/{parent}/{id}', [HomepageController::class, 'business']);
Route::get('/media/{id}', [HomepageController::class, 'media']);


Route::get('/ceo-message/{id}', [HomepageController::class, 'ceoMessage']);
Route::get('/milestone/{id}', [HomepageController::class, 'milestone']);
Route::get('/procurement/{id}', [HomepageController::class, 'procurement']);



