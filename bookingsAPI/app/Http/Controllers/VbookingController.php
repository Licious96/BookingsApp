<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use App\Models\User;
use App\Models\Venue;
use Illuminate\Http\Request;

class VbookingController extends Controller
{
    //

    public function all_venues(){
        return Venue::all();
    }

    public function all_bookings(){
        return Bookings::all();
    }
    
    public function make_booking(Request $request){
        $request->validate([
            'venue' => 'required',
            'date' => 'required',
            'time' => 'required'
        ]);

        return Bookings::create($request->all());
    }

    public function my_bookings($id){
        return Bookings::where('lecturer_id', $id)->get();
    }

    public function delete_booking($id){
    
        $delete = Bookings::where('id', $id)->delete();
        if ($delete) {
            return response()->json('Deleted', 200);
        }
    }

    public function update_profile(Request $request, $id){
        $user_row = User::find($id);
        $request->validate([
            'f_name' => 'required|string|regex:/(^([a-zA-Z]+)(\d+)?$)/u',
            'l_name' => 'required|string|regex:/(^([a-zA-Z]+)(\d+)?$)/u',
            'email' => 'required|email',
            'contacts' => 'required|regex:/(01)[0-9]{9}/',
            'password' => 'required',
            'module_code' => 'required|regex:/(^([a-zA-Z]+)(\d+)?$)/u',
            'module_name' => 'required|string|regex:/(^([a-zA-Z]+)(\d+)?$)/u',
        ]);
        $user_row->update($request->all());
        return $user_row;
    }
}