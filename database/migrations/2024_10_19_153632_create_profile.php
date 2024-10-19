<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profile', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->text('description')->nullable();
            $table->text('address_ho')->nullable();
            $table->text('address_branch')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('instagram')->nullable();
            $table->string('youtube')->nullable();
            $table->string('linkedin')->nullable();
            $table->timestamps();
            $table->softDeletes('deleted_at', precision: 0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile');
    }
};
