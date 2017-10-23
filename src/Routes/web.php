<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your module. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
Route::group([
    'middleware' => ['admin:Users'],
    'prefix' => 'admin/studios',
], function () {
    Route::get('/create',"StudioController@getIndex");
    Route::any('/create/classes/{studio?}',"StudioController@getStudioClasses");
    Route::post('/save-class',"StudioController@postSaveClass");
    Route::post('/edit-class',"StudioController@postEditClass");

    Route::any('/{group}/{studio}',"StudioController@renderStudio");
});
Route::group([
    'prefix' => 'studios',
], function () {
//    Route::get('/',"StudioController@getIndex");
    Route::get('/basic-classes',"StudioController@getBasicClasses");
    Route::get('/element-classes',"StudioController@getElementsClasses");
    Route::get('/component-classes',"StudioController@getComponentClasses");
});


