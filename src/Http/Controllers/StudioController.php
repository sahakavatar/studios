<?php

namespace Sahakavatar\Studios\Http\Controllers;

use App\helpers\dbhelper;
use App\Modules\Framework\Models\Classes;
use Sahakavatar\Studios\Models\StudioClasses;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Sahakavatar\Studios\Models\Studios;

class StudioController extends Controller
{
    public function getIndex(Request $request)
    {
        $type = $request->get('type','versions');
        $groups = Studios::getGroupsList();
        $data = Studios::getStudiosByGroup($type);
        return view("studios::index",compact(['groups','type','data']));
    }

    public function renderStudio(Request $request,$type,$studio)
    {
        $data=$request->except('_token');
//        if(!isset($data['json_data']) || !isset($data['css_data'])) {
//            abort(404);
//        }
        $elements = Studios::$elements;
        $globals = Classes::$getGlobalClasses;
        $elementCollectiom = Classes::$collectionsMenuItems;
        if(! \File::exists(Studios::$viewFolderPath.DS.$type.DS.$studio.'.blade.php')) abort(404);
        return view("studios::studios.$type.$studio",compact(['type','studio','data','elementCollectiom','elements','globals']));
    }

    public function getStudioClasses(Request $request)
    {
        $data_edit = $request->except('_token');
        $call_back=$request->get('call_back',url('/admin/studios/save-class'));
        $studio = $request->studio;
        $elements = Studios::$elements;
        $globals = Classes::$getGlobalClasses;
        $elementCollectiom = Classes::$collectionsMenuItems;
        $section = $request->get('section', $studio);
        $tag = $request->get('item', $request->get('tag'));
        $type = $request->get('type');
        $studioView = isset(Studios::$studioView[$studio][$tag]) ? Studios::$studioView[$studio][$tag] : Studios::$studioView[$studio]['default'];

        return view("studios::Classes.$studio", compact(['tag', 'type', 'tags', 'globals', 'elements', 'studioView', 'section','call_back','elementCollectiom', 'data_edit']));
    }

    public function getComponentClasses(Request $request)
    {
        $type = $request->get('type');
        $tag = $request->get('tag');
        $section = $request->get('component');
        $tags = Studios::$elements;
        $studioView = isset(Studios::$studioView['component'][$type]) ? Studios::$studioView['component'][$type] : Studios::$studioView['component']['default'];
        $elements = $tags;
        return view('studios::Classes.component', compact(['type', 'tag', 'tags', 'elements', 'studioView', 'section']));
    }

    public function postSaveClass(Request $request)
    {
        $data = $request->except('_token');
        $data['user_id'] = \Auth::id();
        if ($data['section'] == 'basic') {
            $data['class_id'] = 'core-basic-' . $data['type'] . '-' . $data['sub_type'] . '-' . time();
        } else {
            $data['class_id'] = 'core-' . $data['section'] . '-' . $data['sub_type'] . '-' . time();
        }
        StudioClasses::create($data);
        return \Response::json(['error' => false]);
    }

    public function postEditClass(Request $request)
    {
        $data = $request->except('_token');
        $id = $data['id'];
        unset($data['id']);
        if ($data['section'] == 'basic') {
            $data['class_id'] = 'core-basic-' . $data['type'] . '-' . $data['sub_type'] . '-' . time();
        } else {
            $data['class_id'] = 'core-' . $data['section'] . '-' . $data['sub_type'] . '-' . time();
        }
        StudioClasses::find($id)->update($data);
        return \Response::json(['error' => false]);
    }

    public function renderFieldTypes(Request $request)
    {
        dd($request->all());
    }
}
