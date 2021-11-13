<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\VbookingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Public routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

//Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/all_venues', [VbookingController::class, 'all_venues']);
    Route::get('/all_bookings', [VbookingController::class, 'all_bookings']);
    Route::post('/all_bookings', [VbookingController::class, 'make_booking']);
    Route::get('/my_bookings/{id}', [VbookingController::class, 'my_bookings']);
    Route::delete('/delete_booking/{id}', [VbookingController::class, 'delete_booking']);
    Route::put('/update_profile/{id}', [VbookingController::class, 'update_profile']);
    Route::post('/logout', [UserController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
