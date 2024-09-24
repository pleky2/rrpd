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
Route::get('/profile', [HomepageController::class, 'profile']);
Route::get('/ceo-message', [HomepageController::class, 'ceoMessage']);
Route::get('/management', [HomepageController::class, 'management']);
Route::get('/milestone', [HomepageController::class, 'milestone']);

