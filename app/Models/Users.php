<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = ['firstname', 'lastname', 'username', 'password', 'last_logged_date'];
}
