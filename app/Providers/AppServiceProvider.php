<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Pastikan helper upload_path() selalu tersedia meski composer
        // autoload belum di-regenerate di server (file punya guard
        // function_exists, jadi aman dimuat berkali-kali).
        require_once base_path('app/helpers.php');
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
