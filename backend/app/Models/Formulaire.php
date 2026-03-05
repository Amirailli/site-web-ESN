<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formulaire extends Model
{
    public $timestamps = true;
    protected $fillable = ['nomPrenom','entreprise', 'email', 'fonction', 'telephone','typeRequete', 'message'];
}