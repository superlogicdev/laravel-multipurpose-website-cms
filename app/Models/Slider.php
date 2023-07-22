<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
        'language_id',
        'photo_id',
        'heading1',
        'heading2',
        'button_text',
        'button_link'
    ];

    public function photo(){
        return $this->belongsTo('App\Models\Photo', 'photo_id');
    }
}
