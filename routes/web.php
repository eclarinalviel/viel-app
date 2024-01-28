<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HttpController;


Route::controller(AuthController::class)->group(function() {
    Route::get('/', 'index');
    Route::get('login', 'index');
    Route::get('signup', 'signup');
    Route::post('loginPost', 'loginPost');
    Route::post('signupPost', 'signupPost');
    Route::get('logout','logout')->name('logout');
});

Route::controller(HttpController::class)->group(function() {
    Route::any('dashboard/','fetchData');
});

