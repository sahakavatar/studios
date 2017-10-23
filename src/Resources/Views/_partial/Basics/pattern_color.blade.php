<div class="menuBuilder colorBuilderPreview">
        <section class="container-fluid" >
                <div class="row" id="builderContain">
                        <div class="col-xs-12 col-sm-6 previewAray">
                                <div class="classnamedetail">
                                        <input name="title" type="text" class="form-control form-controlblack" value="classname" id="classname" data-role="classname" required>
                                </div>
                                
                                <!--  Preview Section -->
                                <div data-preview="container" data-print="demehtml"> 
                                        <!--  Apply css class  -->
                                        <div class="previewCol">
                                                <div class="" data-role="classview"></div>
                                        </div>
                                </div>
                                <textarea name="json_data" class="form-control hide" data-export="json" style="margin-top:140px;">{!! $data_edit['jsonData'] or null !!}</textarea>
                                <textarea name="less_data" class="form-control hide" data-export="css"></textarea>
                                <textarea name="openconected" class="form-control hide" data-export="conected"></textarea>
                        </div>
                        
                        <!--  Start Setting option -->
                        <div class="col-xs-12 col-sm-6 formoptions editDesignCol"> 
                                
                                <!--  Tabs -->
                                <ul class="stepNav nav-justified list-unstyled tabStepnav tabNavs tabNavMenu clearfix hide" data-inset="nav" >
                                        <li><a href="#color" aria-controls="color" role="tab" data-toggle="tab" title="color" data-rolecss="color" data-rolehtml="color">color</a></li>
                                        <li ><a href="#gradient" aria-controls="gradient" role="tab" data-toggle="tab" title="gradient" data-rolecss="gradient" data-rolehtml="gradient">Gradient</a></li>
                                        <li class="active"><a href="#image" aria-controls="image" role="tab" data-toggle="tab" title="image" data-rolecss="image" data-rolehtml="image">Image</a></li>
                                </ul>
                                
                                <!--  Tabs panel -->
                                <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane " id="color"> 
                                        <div class="row">
                                                        <div class="col-sm-12">
                                                                <div class="colorSelectBox">
                                                                        <div class="row">
                                                                                <div class="col-lg-6 col-xs-12">
                                                                                        <div class="color-picker2" data-colortype="backgroundcolor"></div>
                                                                                </div>
                                                                                <div class="col-lg-6 col-xs-12" data-typecolor="backgroundcolor">
                                                                                        <div class="row">
                                                                                                <div class="col-sm-12">
                                                                                                        <div class="list-unstyled colorCodeDataList">
                                                                                                                <div class="form-group row">
                                                                                                                        <div class="spinner m-r-10">
                                                                                                                                <label for="code-r">R</label>
                                                                                                                                <input type="text" value="130" data-rolecolor="rgba" data-scolor="r" id="code-r" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="spinner ">
                                                                                                                                <label for="code-h">H</label>
                                                                                                                                <input type="text" value="94" data-rolecolor="hsb" data-scolor="h" id="code-h" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group row">
                                                                                                                        <div class="spinner m-r-10">
                                                                                                                                <label for="code-g">G</label>
                                                                                                                                <input type="text" value="244" data-rolecolor="rgba" data-scolor="g" id="code-g" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="spinner ">
                                                                                                                                <label for="code-s">S</label>
                                                                                                                                <input type="text" value="84" data-rolecolor="hsb" data-scolor="s" id="code-s" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group row">
                                                                                                                        <div class="spinner m-r-10">
                                                                                                                                <label for="code-b">B</label>
                                                                                                                                <input type="text" value="040" data-rolecolor="rgba" data-scolor="b" id="code-b" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="spinner ">
                                                                                                                                <label for="code-v">V</label>
                                                                                                                                <input type="text" value="96" data-rolecolor="hsb" data-scolor="b" id="code-v" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group clearfix">
                                                                                                                        <div class=" leftLabel ">
                                                                                                                                <label for="color-code">#</label>
                                                                                                                                <input type="text" value="82f428" maxlength="6" id="color-code" data-rolecolor="hex" class="form-control">
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group">
                                                                                                                        <div class="opacitySlider clearfix">
                                                                                                                                <label for="opacityValue">Opacity</label>
                                                                                                                                <div class="horzSlider settingSlider" data-rolecolor="rgba" data-scolor="a" data-slide-min="0" data-slide-max="1" data-slide-step="0.1" data-slide-val="0"></div>
                                                                                                                                <input type="text" value="50" id="opacityValue" data-rolecolor="rgba" data-scolor="a" class="form-control">
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                            
                                                
                                                <!--  End option row with buttom border  --> 
                                        </div>
                                        <div role="tabpanel" class="tab-pane " id="gradient">
                                                <div class="inofo"></div>
                                                <div class="row styleRow firstchild form-horizontal">
                                                        <div class="form-group">
                                                                <label class="col-lg-3 col-xs-12" for="fieldsType"><span class="class-style-icon"></span> Class Style</label>
                                                                <div class="col-lg-6 col-xs-6">
                                                                        <select name="" id="class-style" class="customselect form-control" data-style="class-style-menu">
                                                                                <option>Class</option>
                                                                                <option>Class 1</option>
                                                                                <option>Class 2</option>
                                                                                <option>Class 3</option>
                                                                        </select>
                                                                </div>
                                                                <div class="col-lg-3 col-xs-6">
                                                                        <button type="button" class=" btn btn-block btn-cyan" data-toggle="collapse" data-target="#import-background-markup">Upload Style</button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="collapse" id="import-background-markup">
                                                <div class="row styleRow form-horizontal">
                                                        <div class="form-group background-markup">
                                                                <label class="col-lg-3 col-xs-12" for="gradient-type">Import CSS</label>
                                                                <div class="col-lg-9 col-xs-12">
                                                                        <textarea name="" id="background-markup" data-bgrole="importcss" rows="2" class="form-control"></textarea>
                                                                        <div class="clearfix">
                                                                                <p class="f-left">Paste existing CSS background markup.</p>
                                                                                <a href="#" title="Import" data-action="importcss" class="btn btn-cyan f-right">Import</a>
                                                                        </div>
                                                                </div>
                                                                
                                                        </div>
                                                </div>
                                                </div>
                                                
                                                <div class="row styleRow form-horizontal">
                                                        <div class="form-group">
                                                                <label class="col-lg-3 col-xs-12" for="gradient-type">Gradient Type</label>
                                                                <div class="col-lg-4 col-xs-12">
                                                                        <select name="" id="gradient-type" data-subcss="type" data-multycss="background" data-selector="type" class="customselect form-control" data-style="class-style-menu">
                                                                                <option value="linear-gradient" selected data-getcontainer="backgroundInner">Linear</option>
                                                                                <option value="repeating-linear-gradient" data-getcontainer="backgroundInner">Repeating Linear</option>
                                                                                <option value="radial-gradient"  data-getcontainer="backgroundRadial">Radial</option>
                                                                                <option value="repeating-radial-gradient" data-getcontainer="backgroundRadial">Repeating Radial</option>
                                                                        </select>
                                                                </div>
                                                                <div class="col-lg-5 col-xs-12 collapse"  data-showcontainer="backgroundInner">
                                                                        <div class="angleData clearfix">
                                                                                <div class="angleLeft">
                                                                                        <label for="AngleInput" class="labelAngle">Angle</label>
                                                                                        <span id="angleIcon" class="angleIcon uiangel" data-subcss="angle" data-multycss="background" ></span> </div>
                                                                                <div class="spinner">
                                                                                        <label for="AngleInput" class="sr-only">Angle</label>
                                                                                        <input type="text" value="50" data-rolecolor="angle" data-subcss="angle" data-multycss="background" id="AngleInput" class="form-control">
                                                                                        <div class="input-group-btn-vertical">
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div data-showcontainer="backgroundRadial" class="collapse">
                                                        <div class="row styleRow form-horizontal" >
                                                                <div class="form-group">
                                                                        <label class="col-md-3 col-xs-12" for="size-radial">Size</label>
                                                                        <div class="col-md-4 col-xs-6">
                                                                                <select id="size-radial" data-subcss="size" data-multycss="background" data-selector="size" class="customselect form-control" data-style="class-style-menu">
                                                                                        <option value="circle">Circle</option>
                                                                                        <option value="ellipse">Ellipse</option>
                                                                                </select>
                                                                        </div>
                                                                        <div class="col-md-4 col-xs-6">
                                                                                <select id="size-radial" data-subcss="size2" data-multycss="background" data-selector="size2" class="customselect form-control" data-style="class-style-menu">
                                                                                        
                                                                                        <option value="closest-side">Closest Side</option>
                                                                                        <option value="closest-corner">Closest Corner</option>
                                                                                        <option value="farthest-side">Farthest Side</option>
                                                                                        <option value="farthest-corner">Farthest Corner</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="row styleRow form-horizontal" >
                                                                <div class="form-group">
                                                                        <label class="col-sm-3" for="position">Position</label>
                                                                        <div class="col-sm-4 clearfix">
                                                                                <div class="numberInput">
                                                                                        <label for="code-x">x</label>
                                                                                        <div class="horzSlider settingSlider" data-subcss="positionx" data-multycss="background" data-selector="positionx" data-slide-min="0" data-slide-max="100" data-slide-step="1" data-slide-val="50"></div>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-sm-4 clearfix">
                                                                                <div class="numberInput">
                                                                                        <label for="code-y">y</label>
                                                                                        <div class="horzSlider settingSlider" data-subcss="positiony" data-multycss="background" data-selector="positiony" data-slide-min="0" data-slide-max="100" data-slide-step="1" data-slide-val="50"></div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="row styleRow">
                                                        <div class="col-sm-12">
                                                                <div class="gradientWidth"> <a href="#" class="iconBorder f-left"  data-bgrole="Refresh"><span class="iconColor iconColorRefresh"></span></a>
                                                                        <div class="transparent-bg">
                                                                                <div class="gradientBgLine" data-bgrole="makergrid"> <span class="addmaker hide"></span> </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="row styleRow">
                                                        <div class="col-sm-12">
                                                                <div class="gradientWidth"> <a href="#" class="iconBorder f-left" data-bgrole="AddNepoint"><span class="iconColor iconColorAdd"></span></a>
                                                                        <div class="gradientLineHeight" data-bgrole="addpointer"></div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col-sm-12">
                                                                <div class="colorSelectBox">
                                                                        <div class="row">
                                                                                <div class="col-lg-6 col-xs-12">
                                                                                        <div class="color-picker" data-colortype="background"></div>
                                                                                </div>
                                                                                <div class="col-lg-6 col-xs-12" data-typecolor="background">
                                                                                        <div class="row">
                                                                                                <div class="col-sm-12">
                                                                                                        <div class="list-unstyled colorCodeDataList">
                                                                                                                <div class="form-group row">
                                                                                                                        <div class="spinner m-r-10">
                                                                                                                                <label for="code-r">R</label>
                                                                                                                                <input type="text" value="130" data-rolecolor="rgba" data-scolor="r" id="code-r" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="spinner ">
                                                                                                                                <label for="code-h">H</label>
                                                                                                                                <input type="text" value="94" data-rolecolor="hsb" data-scolor="h" id="code-h" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group row">
                                                                                                                        <div class="spinner m-r-10">
                                                                                                                                <label for="code-g">G</label>
                                                                                                                                <input type="text" value="244" data-rolecolor="rgba" data-scolor="g" id="code-g" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="spinner ">
                                                                                                                                <label for="code-s">S</label>
                                                                                                                                <input type="text" value="84" data-rolecolor="hsb" data-scolor="s" id="code-s" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group row">
                                                                                                                        <div class="spinner m-r-10">
                                                                                                                                <label for="code-b">B</label>
                                                                                                                                <input type="text" value="040" data-rolecolor="rgba" data-scolor="b" id="code-b" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="spinner ">
                                                                                                                                <label for="code-v">V</label>
                                                                                                                                <input type="text" value="96" data-rolecolor="hsb" data-scolor="b" id="code-v" class="form-control">
                                                                                                                                <div class="input-group-btn-vertical">
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group clearfix">
                                                                                                                        <div class=" leftLabel ">
                                                                                                                                <label for="color-code">#</label>
                                                                                                                                <input type="text" value="82f428" maxlength="6" id="color-code" data-rolecolor="hex" class="form-control">
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="form-group">
                                                                                                                        <div class="opacitySlider clearfix">
                                                                                                                                <label for="opacityValue">Opacity</label>
                                                                                                                                <div class="horzSlider settingSlider" data-rolecolor="rgba" data-scolor="a" data-slide-min="0" data-slide-max="1" data-slide-step="0.1" data-slide-val="0"></div>
                                                                                                                                <input type="text" value="50" id="opacityValue" data-rolecolor="rgba" data-scolor="a" class="form-control">
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                
                                                <!--  End option row with buttom border  --> 
                                        </div>
                                        
                                        
                                        <div role="tabpanel" class="tab-pane active" id="image"> 
                                               
                                                <div class="row styleRow form-horizontal">
                                                        <div class="form-group">
                                                                <label class="col-lg-3 col-xs-12" for="backgrond-image">Backgrond Image</label>
                                                                <div class="col-lg-4 col-xs-12">
                                                                       	<div class="uploadImg"><img src="/resources/assets/images/baboon.png" data-imageurl="" alt=""></div>
                                                                       	
                                                                       	<button type="button" id="backgrond-image" data-role="browseMedia" class=" btn btn-block btn-cyan">Upload Image</button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="row styleRow form-horizontal">
                                                		<div class="form-group">
                                                                <label class="col-lg-3 col-xs-12" for="backgrond-repeat">Backgrond Repeat</label>
                                                                <div class="col-lg-4 col-xs-12">
                                                                       	<select name="" id="backgrond-repeat" data-subcss="repeat" data-multycss="backgroundimage" data-selector="repeat" class="customselect form-control" data-style="class-style-menu">
                                                                                <option value="repeat">repeat</option>
                                                                                  <option value="repeat-x">repeat-x</option>
                                                                                  <option value="repeat-y">repeat-y</option>
                                                                                  <option value="no-repeat">no-repeat</option>
                                                                                  <option value="inherit">inherit</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="row styleRow form-horizontal">
                                                		<div class="form-group">
                                                                <label class="col-lg-3 col-xs-12" for="backgrond-position">Backgrond Position</label>
                                                                <div class="col-lg-4 col-xs-6">
                                                                       <select name="" id="backgrond-position" data-subcss="position" data-multycss="backgroundimage" data-selector="position" class="customselect form-control" data-style="class-style-menu">
                                                                                <option value="left">left</option>
																				<option value="right">right</option>
                                                                       			<option value="center">center</option>
                                                                        </select>
                                                                </div>
                                                                <div class="col-lg-4 col-xs-6">
                                                                       <select name="" id="backgrond-position-2" data-subcss="position2" data-multycss="backgroundimage" data-selector="position" class="customselect form-control" data-style="class-style-menu">
                                                                            	<option value="top">top</option>
                                                                                <option value="bottom">bottom</option>
                                                                                <option value="center">center</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="row styleRow form-horizontal">
                                                		<div class="form-group">
                                                                <label class="col-lg-3 col-xs-12" for="backgrond-size">Backgrond Size</label>
                                                                <div class="col-lg-4 col-xs-12">
                                                                       	<select name="" id="backgrond-size" data-subcss="size" data-multycss="backgroundimage" data-selector="size" class="customselect form-control" data-style="class-style-menu">
                                                                                <option value="auto">auto</option>
                                                                                <option value="cover">cover</option>
																				<option value="contain">contain</option>
                                                                        </select>
                                                                </div>
                                                                
                                                        </div>
                                                </div>
                                                <!--  End option row with buttom border  --> 
                                        </div>
                                </div>
                                
                                <!--  End Tabs panel --> 
                        </div>
                </div>
        </section>
</div>

<!--  HTML For Preview Element   --> 

<!--  End Preview Element   --> 

<a href="#" class="btn btn-default btn-sm hide" id="icons">Icon Button</a>

<link media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/icon-buttons.css">
<link media="all" type="text/css" rel="stylesheet" href="/resources/assets/js/ui.anglepicker/css/ui.anglepicker.css">
<link media="all" type="text/css" rel="stylesheet" href="/app/Modules/Studios/Resources/Views/assets/color/css/color-builder.css?v=0.20">
@push('javascript') 
<script src="/resources/assets/js/ui.anglepicker/js/ui.anglepicker.js" type="text/javascript"></script> 
<script src="/resources/assets/js/icon-plugin.js?v=0.50" type="text/javascript"></script>

<script src="/app/Modules/Studios/Resources/Views/assets/color/js/class-color-builder.js?v=0.32" type="text/javascript"></script> 
@endpush