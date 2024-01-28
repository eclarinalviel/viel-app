<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index() {
        if(Auth::check() === true) {
            return Inertia::render('Dashboard', [
                'users' => ''
            ]);
        } else {
            return redirect('/login');
        }
    }
}
