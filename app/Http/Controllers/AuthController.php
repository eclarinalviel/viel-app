<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::check() === false) {
            return Inertia::render('Login');
        } else {
            return redirect('dashboard');
        }
    }

    public function loginPost(Request $request) : RedirectResponse
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        } else {
            return redirect()->back()->with(['error' => 'These credentials do not match our records.']);
        }
       
        
    }

    public function signup() 
    {
        if(Auth::check() === false) {
            return Inertia::render('Signup');
        } else {
            return redirect('dashboard');
        }
    }

    public function signupPost(Request $request)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'username' => 'required',
            'password' => 'required',
        ], [
            'firstname.required' => 'The first name field is required.',
            'lastname.required' => 'The last name field is required.',
            'username.required' => 'The username field is required.',
            'password.required' => 'The password field is required.',
        ]);

        $user = new Users();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->save();

        return redirect('login')->with(['message' => 'Registered successfully. Login below to proceed.']);
        
    }

    public function logout()
    {
        Auth::logout();
        Session::flush(); // Clear all session data
        Session::regenerate(); // Regenerate the session ID
        return redirect('login');
    }

   
}
