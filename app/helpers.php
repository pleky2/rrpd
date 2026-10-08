<?php

if (! function_exists('upload_path')) {
    /**
     * Get the absolute path to the public upload directory.
     *
     * Defaults to the "upload" directory inside the public folder. On servers
     * where the Laravel public folder is not the web document root (e.g. shared
     * hosting where only the public folder is copied/symlinked into
     * public_html), set UPLOAD_PATH in the .env file to the absolute path of
     * the upload directory inside the document root, e.g.:
     *
     *     UPLOAD_PATH=/home/username/public_html/upload
     */
    function upload_path(string $path = ''): string
    {
        $base = rtrim(config('app.upload_path', public_path('upload')), '/');

        return $path === '' ? $base : $base.'/'.ltrim($path, '/');
    }
}
