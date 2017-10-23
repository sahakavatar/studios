<div class="menuBuilder pageLayoutBuilderPreview">
<section class="container-fluid"> 
    <!-- Responsive view tab --> 
    
    <!-- End Responsive view tab -->
    
    <div class="row " id="builderContain">
        <div class="col-xs-12 col-sm-6  p-t-0 p-b-0 p-l-0 p-r-0" class="text-center">
        <div class="classnamedetail">
            <input name="title" type="text" class="form-control form-controlblack" value="classname"
                           id="classname" data-role="classname" required>
        </div>
        <iframe id="layoutViewSetting"  class="iframeView" src="/appdata/resources/ganaral_layouts/responsive-setting.html"></iframe>
        <div class="form-group classes_for_sale">
            <label>classes For save - hide this after work done</label>
            {!! Form::text('settings_data',null,['class' => 'form-control','id' => 'meta_data', 'data-export'=>'css'])
            !!}
            
            {!! Form::text('settings_json',null,['class' => 'form-control','id' => 'meta_json_data', 'data-export'=>'json'])
            !!}
            {!! Form::text('settings_css',null,['class' => 'form-control','id' => 'settings_css', 'data-export'=>'frontcss'])
            !!} </div>
    </div>
    <div class="col-xs-12 col-sm-6 formoptions pageLayoutBuilderEditor">
        <div class="row m-t-10 savePage">
            <div class="col-xs-12 col-sm-12  col-md-6  col-lg-6">
                <input type="text" class="form-control" data-edittex="title" data-key="title" value="Layoutname_50">
            </div>
            <div class="col-xs-12 col-sm-12   col-md-6 col-lg-6"> <a href="#" class="btn save-button" data-dropaction="save">Save</a>
                <!-- Single button -->
<div class="btn-group">
  <button type="button" class="btn save-as-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Export As <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#" download="page-layout.json">Json</a></li>
    <li><a href="#" data-dropaction="exportaszip">Template Zip</a></li>
  </ul>
</div>
            <a href="#" class="btn css3-button"><i class="fa fa-css3" aria-hidden="true"></i> </a> </div>
        </div>
        
        <!-- Page Layout Tabs -->
        
        <ul class="stepNav list-unstyled tabStepnav  tabNavMenu clearfix m-t-10" data-role="topnav" data-tabnav="button">
            <li class="active"> <a href="#" title="Header" data-rolecss="header" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Header</span> <span class="col-xs-6 text-left">
                <label class="switch switch-flat switch-button m-b-0">
                    <input class="switch-input" type="checkbox" checked data-layout-role='header' />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                </span> </a> </li>
            <li> <a href="#" title="Footer" data-rolecss="footer" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Footer</span> <span class="col-xs-6 text-left">
                <label class="switch switch-flat switch-button m-b-0">
                    <input class="switch-input" type="checkbox" checked data-layout-role='footer' />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                </span> </a> </li>
            <li> <a href="#" title="Body" data-rolecss="body" class="clearfix col-xs-12"> <span class="text-right p-r-0">Body</span> </a> </li>
            <li class="tab-width-50"> <a href="#" title="Sidebar 1" data-rolecss="leftbar" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Sidebar 1</span> <span class="col-xs-6 text-left">
                <label class="switch switch-flat switch-button m-b-0">
                    <input class="switch-input" type="checkbox" checked data-layout-role='leftbar' />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                </span> </a> </li>
            <li class="tab-width-50"> <a href="#" title="Sidebar 2" data-rolecss="rightbar" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Sidebar 2</span> <span class="col-xs-6 text-left">
                <label class="switch switch-flat switch-button m-b-0">
                    <input class="switch-input" type="checkbox" checked data-layout-role='rightbar'/>
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                </span> </a> </li>
        </ul>
        
        <!-- Switches  --> 
        
        <!-- End Switches  --> 
        
        <!-- resonsive -->
        
        <ul class="stepNav col-xs-12 m-b-10  p-r-0 p-l-0  list-unstyled tabStepnav responsive-toolbar clearfix m-t-10" data-tabnav="button" id="responsive-toolbar-icon">
            <li class="active "> <a href="#" title="Desktop" data-view="1800" data-mode="desktop" data-modeclass="lg" class="active"> <i class="fa fa-desktop" aria-hidden="true"></i> </a> </li>
            <li> <a href="#" title="Tablet" data-view="1024" data-mode="tablet" data-modeclass="tl"> <i class="fa fa-tablet fa-rotate-90" aria-hidden="true"></i> </a> </li>
            <li > <a href="#" title="Tablet landscape" data-view="800" data-mode="tabletportrait" data-modeclass="tp"> <i class="fa fa-tablet" aria-hidden="true"></i> </a> </li>
            <li> <a href="#" title="Mobile" data-view="680" data-mode="mobile" data-modeclass="ml"> <i class="fa fa-mobile fa-rotate-90" aria-hidden="true"></i> </a> </li>
            <li> <a href="#" title="Mobile landscape" data-view="400" data-mode="mobileportrait" data-modeclass="mp"> <i class="fa fa-mobile" aria-hidden="true"></i> </a> </li>
        </ul>
        
        <!-- end responsive --> 
       
        <!-- Header -->
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0" data-tabcontainer="header" id="header-options">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-10 m-b-5"> Header </span> </div>
            <div class="col-xs-12 studio-collapse-toobar  ">
                <div class="row b-b-1">
                    <div class="col-xs-6 col-sm-12 col-md-3 col-lg-3 p-t-5 p-b-5  m-t-10 m-b-5 p-l-20"> Header Type : </div>
                    <div class="col-xs-6 col-sm-12 col-md-8 col-lg-8  p-t-5 p-b-5  m-t-5 m-b-5">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="radio-inline customelement">
                                    <input type="radio" name="headerType" id="headerType" data-role="header" data-optioncss="fixed" data-parent="header" data-headertype="default" value="none"  data-getcontainer="">
                                    <label  for="headerType">Default</label>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="radio-inline customelement ">
                                    <input type="radio" name="headerType" id="headerTypesticy" checked data-role="header" data-headertype="sticky" data-parent="header" data-optioncss="fixed"  value="fixed" data-getcontainer="headerSticky">
                                    <label for="headerTypesticy">Sticky</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row hide" data-sticky="header">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="row">
                            <div class="col-xs-6 col-sm-12 col-md-4 col-lg-4 p-t-5 p-b-5 m-t-5 m-b-5 always_fixed">
                                <div class="radio-inline customelement">
                                    <input type="radio" name="fixed" id="always_fixed" value="same" data-csstype="background" data-getcontainer="">
                                    <label  for="always_fixed">Always Fixed</label>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6  p-t-5 p-b-5 m-t-5 m-b-5 fixed_after">
                                <div class="radio-inline customelement pull-left">
                                    <input type="radio" name="fixed" id="fixed" checked value="customize" data-csstype="background" data-getcontainer="bordercustomize">
                                    <label for="fixed">Fixed after</label>
                                </div>
                                <div class="spinner">
                                    <label for="word-spacing" class="sr-only">word-spacing</label>
                                    <input type="text" value="20" id="word-spacing" class="form-control">
                                    <div class="input-group-btn-vertical">
                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- END Header --> 
        
        <!-- footer -->
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0" data-tabcontainer="footer" id="footer-options">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-10 m-b-5"> Footer </span> </div>
            <div class="col-xs-12 studio-collapse-toobar  ">
                <div class="row b-b-1">
                    <div class="col-xs-6 col-sm-12 col-md-3 col-lg-3 p-t-5 p-b-5  m-t-10 m-b-5 p-l-20"> Footer Type : </div>
                    <div class="col-xs-6 col-sm-12 col-md-8 col-lg-8  p-t-5 p-b-5  m-t-5 m-b-5">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="radio-inline customelement">
                                    <input type="radio" name="footerType" id="footerType" data-role="footer" data-parent="footer" data-headertype="default" data-optioncss="fixed" value="none" data-getcontainer="">
                                    <label  for="footerType">Default</label>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="radio-inline customelement">
                                    <input type="radio" name="footerType" checked id="footerType2" data-role="footer" data-parent="footer" data-headertype="sticky" data-optioncss="fixed" value="fixed" data-getcontainer="footerSticky">
                                    <label for="footerType2">Sticky</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row hide" data-sticky="footer">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="row">
                            <div class="col-xs-6 col-sm-12 col-md-4 col-lg-4 p-t-5 p-b-5 m-t-5 m-b-5 always_fixed">
                                <div class="radio-inline customelement">
                                    <input type="radio" name="fixed2" id="always_fixed" value="same" data-csstype="background" data-getcontainer="">
                                    <label  for="always_fixed">Always Fixed</label>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6  p-t-5 p-b-5 m-t-5 m-b-5 fixed_after">
                                <div class="radio-inline customelement pull-left">
                                    <input type="radio" name="fixed2" id="fixed" checked value="customize" data-csstype="background" data-getcontainer="bordercustomize">
                                    <label for="fixed">Fixed after</label>
                                </div>
                                <div class="spinner">
                                    <label for="word-spacing" class="sr-only">word-spacing</label>
                                    <input type="text" value="20" id="word-spacing" class="form-control">
                                    <div class="input-group-btn-vertical">
                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- END footer --> 
        
        <!--  Sidebar -->
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0" data-tabcontainer="leftbar" id="leftbar-options" data-layout="leftbar">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-10 m-b-5"> Sidebar 1 </span> </div>
            <div class="col-xs-12 studio-collapse-toobar  ">
                <div class="row b-b-1">
                    <div class="col-xs-7 col-sm-12 col-md-7 col-lg-7 p-t-5 p-b-5  p-l-20 defulat-content b-r-1">
                        <label class="col-xs-7  p-l-0  m-t-10 m-b-5" for="offsetX">Default Content</label>
                        <div class="col-xs-5 p-l-0  m-t-10 m-b-5">
                            <select name="" id="class-style" class="customselect form-control" data-style="class-style-menu">
                                <option>Sidebar</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xs-5 col-sm-12 col-md-5 col-lg-5  p-t-5 p-b-5  ">
                        <label class="col-xs-7 p-l-0  m-t-10 m-b-5" for="offsetX">Width</label>
                        <div class="col-xs-5 p-l-0  m-t-10 m-b-5">
                            <div class="spinner spinner-block">
                                <label for="word-spacing" class="sr-only">width</label>
                                <input type="text" value="20" data-min="20"  data-max="40" id="slidebar1" data-multipale="slidebar1" data-css="width" data-css-after="%" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-xs-12 p-t-5 p-b-5  p-l-20 defulat-content ">
                        <label class="col-xs-3 col-sm-6 col-md-3 col-lg-3 p-l-0  m-t-15 m-b-5" for="offsetX">Position</label>
                        <div class="col-xs-3 col-sm-6 col-md-3 p-l-0  m-t-10 m-b-5">
                            <select class="customselect form-control" data-style="class-style-menu" data-sideposition="first"  data-siderole="slidebar1">
                                <option value="left" selected="selected" data-soption="lg">Left</option>
                                <option value="right" data-soption="lg">Right</option>
                                <option value="top" data-soption="all">Above Content</option>
                                <option value="bottom" data-soption="all">Below Content</option>
                                <option value="armenu" data-soption="small" hidden="hidden">Add as a right  menu to header</option>
                                <option value="almenu" data-soption="small" hidden="hidden">Add as a left menu to header</option>
                                <option value="hide" data-soption="small" hidden="hidden">hide</option>
                            </select>
                        </div>
                        <div class="col-xs-3 col-sm-6 col-md-3 p-l-0  m-t-10 m-b-5 sidebaroptionGroup">
                            <select name="" id="pageleftbarFixed" data-role="slidebar1" data-optioncss="fixed" class="customselect form-control" data-style="class-style-menu">
                                <option value="none" selected>none</option>
                                <option value="sticky">Sticky</option>
                                <option value="floating">Floating</option>
                            </select>
                        </div>
                        <label class="col-xs-3 col-sm-6 col-md-3 m-t-10 m-b-5 sidebaroptionGroup" for="requiredicon">
                        <div class="customelement">
                            <input type="checkbox" name="extra[sidebar_type_collapsible]" id="pageleftbarcollapsible" data-role="slidebar1" data-optioncss="collapsible"  value="collapsible" >
                            <label for="pageleftbarcollapsible" class="m-t-5">Collapsible</label>
                        </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0" data-tabcontainer="rightbar" id="rightbar-options" data-layout="rightbar">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-10 m-b-5"> Sidebar 2 </span> </div>
            <div class="col-xs-12 studio-collapse-toobar  ">
                <div class="row b-b-1">
                    <div class="col-xs-7 col-sm-12 col-md-7 col-lg-7 p-t-5 p-b-5  p-l-20 defulat-content b-r-1">
                        <label class="col-xs-7  p-l-0  m-t-10 m-b-5" for="offsetX">Default Content</label>
                        <div class="col-xs-5 p-l-0  m-t-10 m-b-5">
                            <select name="" id="class-style" class="customselect form-control" data-style="class-style-menu">
                                <option>Sidebar</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-xs-5 col-sm-12 col-md-5 col-lg-5 p-t-5 p-b-5  ">
                        <label class="col-xs-7 p-l-0  m-t-10 m-b-5" for="offsetX">Width</label>
                        <div class="col-xs-5 p-l-0  m-t-10 m-b-5">
                            <div class="spinner">
                                <label for="word-spacing" class="sr-only">width</label>
                                <input type="text" value="20" data-min="20"  data-max="40"  id="slidebar2"  data-multipale="slidebar2" data-css="width" data-css-after="%" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-xs-12 p-t-5 p-b-5  p-l-20 defulat-content ">
                        <label class="col-xs-3 col-sm-6 col-md-3 col-lg-3 p-l-0  m-t-15 m-b-5" for="offsetX">Position</label>
                        <div class="col-xs-3 col-sm-6 col-md-3 p-l-0  m-t-10 m-b-5">
                            <select class="customselect form-control" data-style="class-style-menu" data-sideposition="secound" data-siderole="slidebar2">
                                <option value="left" data-soption="lg">Left</option>
                                <option value="right" selected="selected" data-soption="lg">Right</option>
                                <option value="top" data-soption="all">Above Content</option>
                                <option value="bottom" data-soption="all">Below Content</option>
                                <option value="armenu" data-soption="small" hidden="hidden">Add as a right  menu to header</option>
                                <option value="almenu" data-soption="small" hidden="hidden">Add as a left menu to header</option>
                                <option value="hide" data-soption="small" hidden="hidden">hide</option>
                            </select>
                        </div>
                        <div class="col-xs-3 col-sm-6 col-md-3 p-l-0  m-t-10 m-b-5 sidebaroptionGroup">
                            <select name="" id="pagerightbarFixed" data-role="slidebar2" data-optioncss="fixed" class="customselect form-control" data-style="class-style-menu">
                                <option value="none" selected>none</option>
                                <option value="sticky">Sticky</option>
                                <option value="floating">Floating</option>
                            </select>
                        </div>
                        <label class="col-xs-3 col-sm-6 col-md-3 m-t-10 m-b-5 sidebaroptionGroup" for="requiredicon">
                        <div class="customelement">
                            <input id="pagerightbarcollapsible" data-role="slidebar2" data-optioncss="collapsible" name="extra[sidebar2_type_collapsible]" type="checkbox" value="collapsible">
                            <input type="checkbox" name="extra[sidebar2_type_collapsible]" id="pagerightbarcollapsible" data-role="slidebar2" data-optioncss="collapsible"  value="collapsible">
                            <label for="pagerightbarcollapsible" class="m-t-5">Collapsible</label>
                        </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- END Sidebar --> 
        
        <!-- Body -->
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0"  data-tabcontainer="body" id="body-options">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-5"> Body </span> <a href="#" id="add-body-exrta-area" class="btn  add-area-button  m-r-5 pull-right" > Add Area</a> </div>
            <div class="col-xs-12 studio-collapse-toobar  " id="body-inner-options">
                
                <div class="row body-inner ui-state-default" id="body-content" data-extratarget="main-body">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 p-5 extra-block"> <a href="#" class="iconstudio addicon m-r-10 bluebg" data-addpopup="container"> <i class="fa fa-arrows-v" aria-hidden="true"></i> </a> Body </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 p-5 exrta-block-margin">
                        <label class="p-r-5" for="offsetX">Margin Top</label>
                        <div class="spinner ">
                                <label for="body-top" class="sr-only">Angle</label>
                                <input type="text" value="10" data-extramargin="main-body" data-css="margin-top" id="body-top" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-2 p-5">
                        <label class="p-r-5" for="offsetX">Bottom</label>
                        <div class="spinner">
                                <label for="body-bottom" class="sr-only">word-spacing</label>
                                <input type="text" value="0"  data-extramargin="main-body" data-css="margin-bottom" id="body-bottom" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                    </div>
                    
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-2 p-5">
                        <label class="p-r-5" for="offsetX">Left</label>
                        <div class="spinner">
                                <label for="body-left" class="sr-only">word-spacing</label>
                                <input type="text" value="0"  data-extramargin="main-body" data-css="margin-left" id="body-left" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                    </div>
                    
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-2 p-5">
                        <label class="p-r-5" for="offsetX">Right</label>
                        <div class="spinner">
                                <label for="body-left" class="sr-only">word-spacing</label>
                                <input type="text" value="0"  data-extramargin="main-body" data-css="margin-right" id="body-left" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                    </div>
                     <a href="#" class="iconstudio addicon disable btnCloserow" data-addpopup="container"> <i class="fa fa-remove" aria-hidden="true"></i> </a> 
                </div>
                
            </div>
        </div>
        
        <!-- END Body -->
        
        <div class="footerPadding">
            <div class="row responsive-bg">
                <div clsss="col-xs-12 "> <a class="btn responsive-btn" data-responsive="view" data-toggle="modal" data-target="#testResposniveVIew">Test Responsive Views</a> </div>
            </div>
        </div>
    </div>
    </div>
</section>
</div>
<div class="modal fade" id="extraOptionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="extraOptionModalLabel">Enter Option Name</h4>
            </div>
            <div class="modal-body">
                <form id="option-form">
                    <div class="form-group">
                        <label for="recipient-name" class="control-label">Option Name :</label>
                        <input type="text" class="form-control" id="option-name">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="add-body-exrta-area">Add</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade bigpopup" id="testResposniveVIew" tabindex="-1" role="dialog" aria-labelledby="testResposniveVIew">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header p-0">
                <div class="row">
                    <div class="col-xs-12 p-r-0 p-l-0 clearfix">
                        <ul class="stepNav col-xs-4  p-r-0 p-l-0  list-unstyled tabStepnav responsive-toolbar clearfix " data-tabnav="button">
                            <li class="active "> <a href="#"  class=" activebtn" data-responsiveview="1800" data-mode="desktop" data-modeclass="lg" title="Desktop" data-rolecss="css"> <i class="fa fa-desktop" aria-hidden="true"></i> </a> </li>
                            <li> <a href="#"  data-responsiveview="1024" data-mode="tablet" data-modeclass="tl" title="Tablet" data-rolecss="css"> <i class="fa fa-tablet fa-rotate-90" aria-hidden="true"></i> </a> </li>
                            <li > <a href="#"  data-responsiveview="800" data-mode="tabletportrait" data-modeclass="tp" title="Tablet landscape" data-rolecss="css"> <i class="fa fa-tablet" aria-hidden="true"></i> </a> </li>
                            <li> <a href="#" data-responsiveview="680" data-mode="mobile" data-modeclass="ml"title="Mobile" data-rolecss="hover" class="clearfix col-xs-12"> <i class="fa fa-mobile fa-rotate-90" aria-hidden="true"></i> </a> </li>
                            <li> <a href="#" - data-responsiveview="400" data-mode="mobileportrait" data-modeclass="mp" title="Mobile landscape" data-rolecss="hover" class="clearfix col-xs-12"> <i class="fa fa-mobile" aria-hidden="true"></i> </a> </li>
                        </ul>
                        <div class="col-xs-4 pull-right">
                            <div class="menuIcons m-t-15"> <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="open-login greenbg"><em class="fa fa-check"></em></a> <a href="#" class="closeIcon" data-preview="close" data-dismiss="modal" aria-label="Close"><em class="fa fa-times"></em></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="bootbox-body text-center">
                    <iframe id="iframepreview"  class="iframeView" src="/appdata/resources/ganaral_layouts/responsive-preview.html"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="template" data-tempcss="slidebar1">
    .generalsidebar_left {  width:sidebarwidth;}
    .middleContainer{  width:middlewidth; }

    .slidebar1-fixed [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-floating [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-armenu.slidebar1-fixed [data-layoutrole="middle"] {  margin-right:sidebarwidth;}
    .slidebar1-fixed.slidebar1-right [data-layoutrole="middle"],
    .slidebar1-floating.slidebar1-right [data-layoutrole="middle"] { margin-right:sidebarwidth; margin-left:0;}
    .scollapsed [data-layoutrole="slidebar1"] { z-index:9;}

 
    @media  only screen and (min-width:1025px)  {
    .slidebar1-lg-fixed [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-lg-floating [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-lg-armenu.slidebar1-lg-fixed [data-layoutrole="middle"] {  margin-right:sidebarwidth;}
    .slidebar1-lg-fixed.slidebar1-lg-right [data-layoutrole="middle"],
    .slidebar1-lg-floating.slidebar1-lg-right [data-layoutrole="middle"] { margin-right:sidebarwidth; margin-left:0;}
    }

    @media  only screen and (min-width:801px) and (max-width: 1024px)  {
    .slidebar1-tl-fixed [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-tl-floating [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-tl-armenu.slidebar1-tl-fixed [data-layoutrole="middle"] {  margin-right:sidebarwidth;}
    .slidebar1-tl-fixed.slidebar1-tl-right [data-layoutrole="middle"],
    .slidebar1-tl-floating.slidebar1-tl-right [data-layoutrole="middle"] { margin-right:sidebarwidth; margin-left:0;}
    }
    @media  only screen and (min-width:769px) and (max-width: 800px)   {
    .slidebar1-tp-armenu [data-layoutrole="slidebar1"]{ width:50%;}
    .slidebar1-tp-almenu [data-layoutrole="slidebar1"]{ width:50%;}
    .slidebar1-tp-almenu [data-layoutrole="middle"], .slidebar1-tp-armenu [data-layoutrole="middle"]{ width:50%;}

    .slidebar1-tp-fixed [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-tp-floating [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-tp-armenu.slidebar1-tp-fixed [data-layoutrole="middle"] {  margin-right:sidebarwidth;}
    .slidebar1-tp-fixed.slidebar1-tp-right [data-layoutrole="middle"],
    .slidebar1-tp-floating.slidebar1-tp-right [data-layoutrole="middle"] { margin-right:sidebarwidth; margin-left:0;}
    }

    @media  only screen and (min-width:401px) and (max-width: 768px)   {
    .slidebar1-ml-armenu [data-layoutrole="slidebar1"]{ width:50%}
    .slidebar1-ml-almenu [data-layoutrole="slidebar1"]{ width:50%}
    .slidebar1-ml-almenu [data-layoutrole="middle"], .slidebar1-ml-armenu [data-layoutrole="middle"]{ width:50%;}

    .slidebar1-ml-fixed [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-ml-floating [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-ml-armenu.slidebar1-ml-fixed [data-layoutrole="middle"] {  margin-right:sidebarwidth;}
    .slidebar1-ml-fixed.slidebar1-ml-right [data-layoutrole="middle"],
    .slidebar1-ml-floating.slidebar1-ml-right [data-layoutrole="middle"] { margin-right:sidebarwidth; margin-left:0;}

    }

    @media  only screen and (max-width: 400px)   {
    .slidebar1-mp-armenu [data-layoutrole="slidebar1"]{width:50%}
    .slidebar1-mp-almenu [data-layoutrole="slidebar1"]{ width:50%}
    .slidebar1-mp-almenu [data-layoutrole="middle"], .slidebar1-mp-armenu [data-layoutrole="middle"]{ width:50%;}

    .slidebar1-mp-fixed [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-mp-floating [data-layoutrole="middle"] { margin-left:sidebarwidth;}
    .slidebar1-mp-armenu.slidebar1-mp-fixed [data-layoutrole="middle"] {  margin-right:sidebarwidth;}
    .slidebar1-mp-fixed.slidebar1-mp-right [data-layoutrole="middle"],
    .slidebar1-mp-floating.slidebar1-mp-right [data-layoutrole="middle"] { margin-right:sidebarwidth; margin-left:0;}
    }
</script> 
<script type="template" data-tempcss="slidebar2">
    .generalsidebar_right {   width:sidebarwidth;}
    .gmiddle{ width:middlewidth;}

    /* if have sidebar fixed and  floating as per siderbar 2 for preview*/
    .slidebar2-fixed [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-floating [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-armenu.slidebar2-fixed [data-layoutrole="middlemain"] {  margin-right:sidebarwidth;}
    .slidebar2-fixed.slidebar2-right [data-layoutrole="middlemain"],
    .slidebar2-floating.slidebar2-right [data-layoutrole="middlemain"] { margin-right:sidebarwidth; margin-left:0;}
    .scollapsedright [data-layoutrole="slidebar2"] { z-index:9}

    /* Responsive view Setting */
    @media  only screen and (min-width:1025px)  {
    .slidebar2-lg-fixed [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-lg-floating [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-lg-armenu.slidebar2-lg-fixed [data-layoutrole="middlemain"] {  margin-right:sidebarwidth;}
    .slidebar2-lg-fixed.slidebar2-lg-right [data-layoutrole="middlemain"],
    .slidebar2-lg-floating.slidebar2-lg-right [data-layoutrole="middlemain"] { margin-right:sidebarwidth; margin-left:0}
    }

    @media  only screen and (min-width:801px) and (max-width: 1024px)  {
    .slidebar2-tl-fixed [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-tl-floating [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-tl-armenu.slidebar2-tl-fixed [data-layoutrole="middlemain"] {  margin-right:sidebarwidth;}
    .slidebar2-tl-fixed.slidebar2-tl-right [data-layoutrole="middlemain"],
    .slidebar2-tl-floating.slidebar2-tl-right [data-layoutrole="middlemain"] { margin-right:sidebarwidth; margin-left:0}
    }
    @media  only screen and (min-width:769px) and (max-width: 800px)   {
    .slidebar2-tp-armenu [data-layoutrole="slidebar2"]{ width:50%;}
    .slidebar2-tp-almenu [data-layoutrole="slidebar2"]{ width:50%;}
    .slidebar2-tp-almenu [data-layoutrole="middlemain"], .slidebar2-tp-armenu [data-layoutrole="middlemain"]{ width:50%}

    .slidebar2-tp-fixed [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-tp-floating [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-tp-armenu.slidebar2-tp-fixed [data-layoutrole="middlemain"] {  margin-right:sidebarwidth;}
    .slidebar2-tp-fixed.slidebar2-tp-right [data-layoutrole="middlemain"],
    .slidebar2-tp-floating.slidebar2-tp-right [data-layoutrole="middlemain"] { margin-right:sidebarwidth; margin-left:0}
    }

    @media  only screen and (min-width:401px) and (max-width: 768px)   {
    .slidebar2-ml-armenu [data-layoutrole="slidebar2"]{ width:50%}
    .slidebar2-ml-almenu [data-layoutrole="slidebar2"]{ width:50%}
    .slidebar2-ml-almenu [data-layoutrole="middlemain"], .slidebar2-ml-armenu [data-layoutrole="middlemain"]{ width:50%}

    .slidebar2-ml-fixed [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-ml-floating [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-ml-armenu.slidebar2-ml-fixed [data-layoutrole="middlemain"] {  margin-right:sidebarwidth;}
    .slidebar2-ml-fixed.slidebar2-ml-right [data-layoutrole="middlemain"],
    .slidebar2-ml-floating.slidebar2-ml-right [data-layoutrole="middlemain"] { margin-right:sidebarwidth; margin-left:0}
    }

    @media  only screen and (max-width: 400px)   {
    .slidebar2-mp-armenu [data-layoutrole="slidebar2"]{width:50%}
    .slidebar2-mp-almenu [data-layoutrole="slidebar2"]{ width:50%}
    .slidebar2-mp-almenu [data-layoutrole="middlemain"], .slidebar2-mp-armenu [data-layoutrole="middlemain"]{ width:50%}

    .slidebar2-mp-fixed [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-mp-floating [data-layoutrole="middlemain"] { margin-left:sidebarwidth;}
    .slidebar2-mp-armenu.slidebar2-mp-fixed [data-layoutrole="middlemain"] {  margin-right:sidebarwidth;}
    .slidebar2-mp-fixed.slidebar2-mp-right [data-layoutrole="middlemain"],
    .slidebar2-mp-floating.slidebar2-mp-right [data-layoutrole="middlemain"] { margin-right:sidebarwidth; margin-left:0;}
    }
</script>
<style id="savedcss" data-role="savedcss">
</style>
{!! HTML::style('appdata/app/Modules/Studio/Resources/Views/classes/theme-studio/css/page-layout-studio.css?v=0.12') !!}
@push('javascript') 
<script src="/appdata/app/Modules/Studio/Resources/Views/classes/theme-studio/js/page-layout-builder.js?v=0.13" type="text/javascript"></script> 
@endpush