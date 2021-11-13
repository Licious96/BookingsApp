<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //
    public function register(Request $request){
        $fields = $request->validate([
            'f_name' => 'required|string|regex:/(^([a-zA-Z]+)(\d+)?$)/u',
            'l_name' => 'required|string|regex:/(^([a-zA-Z]+)(\d+)?$)/u',
            'staff_no' => 'required|integer|unique:users,staff_no',
            'email' => 'required|email|unique:users,email',
            'contacts' => 'required|digits:10',
            'module_code' => 'required|string',
            'module_name' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'f_name' => $fields['f_name'],
            'l_name' => $fields['l_name'],
            'staff_no' => $fields['staff_no'],
            'email' => $fields['email'],
            'contacts' => $fields['contacts'],
            'module_code' => $fields['module_code'],
            'module_name' => $fields['module_name'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request){

        $fields = Validator::make(
            $request->all(),
            [
                'username' => 'required',
                'password' => 'required'
            ]
        );

        if ($fields->fails()) {
            return response()->json($fields->errors(), 400);
        }

        //Check email
        $user = User::where('email', $fields['username'])->orWhere('staff_no', $fields['username'])->first();

        //Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response()->json("Wrong credentials", 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json($response, 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response()->json("Logged out");
    }
}
