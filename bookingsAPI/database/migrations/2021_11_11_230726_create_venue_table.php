<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVenueTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('venues', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('capacity');
            $table->timestamps();
        });

        DB::table('venues')->insert(
            [     
                [
                    'name' => 'TB',
                    'capacity' => 100
                ],     
                [
                    'name' => 'R70',
                    'capacity' => 200
                ],
                [
                    'name' => 'KB',
                    'capacity' => 450
                ],
                [
                    'name' => 'TC',
                    'capacity' => 650
                ],
                [
                    'name' => 'M1',
                    'capacity' => 350
                ],
                [
                    'name' => 'B002',
                    'capacity' => 180
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
        Schema::dropIfExists('venues');
    }
}
