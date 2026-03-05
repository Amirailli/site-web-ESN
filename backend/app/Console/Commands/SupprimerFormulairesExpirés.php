<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Formulaire;
use Carbon\Carbon;

class SupprimerFormulairesExpires extends Command
{
    protected $signature = 'formulaires:supprimer-expire';
    protected $description = 'Supprimer les formulaires dont le code a expiré';

    public function handle()
    {
        Formulaire::where('code_expires_at', '<', Carbon::now())
            ->delete();

        $this->info('Formulaires expirés supprimés.');
    }
}