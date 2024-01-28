<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\Pool;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HttpController extends Controller
{
    public function fetchData(Request $request) 
    {
        if(Auth::check() === true) {
            $symbolParam = $request->symbol ? $request->symbol : "AAPL";

            $data = json_decode(Cache::store('redis')->get('responses'));
            if(isset($data)) {
                return Inertia::render('Dashboard', [
                    'profile' => $data->profile,
                    'quote' => $data->quote
                ]);
            } else {
                $responses = Http::pool(fn (Pool $pool) => [
                    $pool->as('profile')->get(env('COMPANY_PROFILE') . "/" . $symbolParam.  "?apikey=".env('APIKEY')),
                    $pool->as('quote')->get(env('COMPANY_QUOTE') . "/" .  $symbolParam . "?apikey=".env('APIKEY'))
                ]);
                
                if($responses['profile']->ok() && $responses['quote']->ok()) {
                  
                    return Inertia::render('Dashboard', [
                        'profile' => $responses['profile']->body(),
                        'quote' => $responses['quote']->body()
                    ]);
                    Cache::store('redis')->put('responses', json_encode($responses), 60);
                } 

            }

        } else {
            return redirect('/login');
        }
       
    }

}
