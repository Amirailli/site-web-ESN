<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormulaireController;

Route::post('/formulaire', [FormulaireController::class, 'store']);
Route::post('/verifier-code', [FormulaireController::class, 'verifierCode']);