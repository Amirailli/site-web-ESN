<?php
// use App\Http\Controllers\FormulaireController;
use Illuminate\Support\Facades\Route;

// Route::post('/api/formulaire', [FormulaireController::class, 'store']);

Route::get('/', function () {
    return view('welcome');

});
