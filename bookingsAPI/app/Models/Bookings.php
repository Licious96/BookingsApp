<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookings extends Model
{
    use HasFactory;
    protected $table = "bookings";
    public $timestamps = false;
    protected $fillable = [
        'venue',
        'date',
        'time',
        'lecturer_id',
        'lecturer_name',
        'lecturer_contacts',
        'lecturer_email',
        'module_code'
    ];
}
