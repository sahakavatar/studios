<?php
/**
 * Created by PhpStorm.
 * User: Comp1
 * Date: 3/21/2017
 * Time: 3:02 PM
 */

namespace Sahakavatar\Studios\Models;

use App\Modules\Users\User;
use Illuminate\Database\Eloquent\Model;

/**
 * Class StudioClasses
 * @package Sahakavatar\Studios\Models
 */
class StudioClasses extends Model
{
    /**
     * @var string
     */
    protected $table = 'studio_classes';

    /**
     * @var array
     */
    protected $fillable = ['user_id','name','item_name', 'css_data', 'json_data', 'type','data_type' ,'sub_type','section','classtype','class_id'];
    protected $casts=['json_data'];

    /**
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}