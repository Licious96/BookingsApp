<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hours', function (Blueprint $table) {
            $table->id();
            $table->string('time');
            $table->timestamps();
        });

        DB::table('hours')->insert(
            [     
                [
                    'time' => '07:30-09:10'
                ],     
                [
                    'time' => '09:20-11:00'
                ],
                [
                    'time' => '11:10-12:50'
                ],
                [
                    'time' => '13:00-14:50'
                ],
                [
                    'time' => '14:50-16:30'
                ],[
                    'time' => '16:40-18:00'
                ]
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hours');
    }
}
