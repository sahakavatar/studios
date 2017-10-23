@extends('studios::_partial.studio_framework_layout')
@section('content')
<div class="menuBuilder pageLayoutBuilderPreview" ng-app="pagebulder" ng-controller="pagebuilders">
<section class="container-fluid"> 
    <!-- Responsive view tab --> 
    
    <!-- End Responsive view tab -->
    
    <div class="row " id="builderContain">
        <div class="col-xs-12 col-sm-6 p-0" class="text-center" style="height: calc(100vh - 60px)">
        <div class="classnamedetail">
            <input name="title" type="text" class="form-control form-controlblack" value="classname"
                           id="classname" data-role="classname" required>
        </div>
        <iframe id="layoutViewSetting"  class="iframeView" src="/app/Modules/Studios/Resources/Views/assets/ganaral_layouts/pagelayout-setting.html"></iframe>
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
    <li><a href="#" ng-click="downloadzip()" >Template Zip</a></li>
  </ul>
</div>
            <a href="#" class="btn css3-button"><i class="fa fa-css3" aria-hidden="true"></i> </a> </div>
        </div>
        
        <!-- Page Layout Tabs -->
        
        <ul class="stepNav list-unstyled nav-justified  tabStepnav  tabNavMenu clearfix m-t-10 hide" data-role="topnav" data-tabnav="button" role="tablist">
            
            <li class="tab-width-50 active"> <a href="#sidebarvartical" title="Sidebar 1" data-targettab="sidebarvartical" data-rolecss="leftbar" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Vertical Sidebar </span> <span class="col-xs-6 text-left">
                <label class="switch switch-flat switch-button m-b-0">
                    <input class="switch-input" type="checkbox" ng-model="layoutjson.layoutView.sidebarv" checked data-layout-role='leftbar' />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                </span> </a> </li>
            <li class="tab-width-50"> <a href="#sidebarhorizontal" title="Sidebar 2" data-targettab="sidebarhorizontal" data-rolecss="rightbar" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Horizontal Sidebar</span> <span class="col-xs-6 text-left">
                <label class="switch switch-flat switch-button m-b-0">
                    <input class="switch-input" type="checkbox" ng-model="layoutjson.layoutView.sidebarh" checked data-layout-role='rightbar'/>
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                </span> </a> 
            </li>
        </ul>
        
        <!-- Switches  --> 
        
        <!-- End Switches  --> 
        
        <!-- resonsive -->
        
        <ul class="stepNav  col-xs-12 m-b-10  p-r-0 p-l-0  list-unstyled tabStepnav responsive-toolbar clearfix m-t-10 " data-tabnav="button">
            <li class="active "> <a href="#" ng-click="aresponsiveview('desktop')" title="Desktop" data-view="1800" data-mode="desktop" data-modeclass="lg" class="active"> <i class="fa fa-desktop" aria-hidden="true"></i> </a> </li>
            <li> <a href="#" title="Tablet" ng-click="aresponsiveview('tablet')" data-view="1024" data-mode="tablet" data-modeclass="tl"> <i class="fa fa-tablet fa-rotate-90" aria-hidden="true"></i> </a> </li>
            <li > <a href="#" title="Tablet landscape"  ng-click="aresponsiveview('tabletportrait')" data-view="800" data-mode="tabletportrait" data-modeclass="tp"> <i class="fa fa-tablet" aria-hidden="true"></i> </a> </li>
            <li> <a href="#" title="Mobile" data-view="680" ng-click="aresponsiveview('mobile')" data-mode="mobile" data-modeclass="ml"> <i class="fa fa-mobile fa-rotate-90" aria-hidden="true"></i> </a> </li>
            <li> <a href="#" title="Mobile landscape" data-view="400" ng-click="aresponsiveview('mobileportrait')" data-mode="mobileportrait" data-modeclass="mp"> <i class="fa fa-mobile" aria-hidden="true"></i> </a> </li>
        </ul>
        
        <!-- end responsive --> 
        
        <div class="tab-content" data-tabscontianer="option">
    		<div role="tabpanel" class="tab-pane active" id="sidebarvartical">
       
      
        
        <!--  Sidebar -->
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0" data-tabcontainer="leftbar" data-layout="leftbar">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-10 m-b-5">Vertical Sidebar  </span> <a href="#" class="btn  add-area-button  m-r-5 pull-right" ng-click="addSidebarv()" ng-show="activemode == 'desktop' ? true : false "> Add </a></div>
            
            
              <ul  class="col-xs-12 studio-collapse-toobar  " ui-sortable="sortableOptions" style="list-style: none;" ng-model="varticalsidebar">
              		<li class="row body-inner" ng-repeat="slidebar in varticalsidebar track by $index" data-rowname="slidebar.name" >
                   			 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-5 extra-block"> <a href="#" class="iconstudio addicon m-r-10 bluebg" data-addpopup="container"> <i class="fa fa-arrows-v" aria-hidden="true"></i> </a> <% slidebar.name %></div>
                   			 <a data-toggle="collapse" ng-show="slidebar.setting" href="#collapsevSidebarsetting<% $index + 1 %>" class="iconstudio addicon btnCloserow btnsettingrow"> <i class="fa fa-cog" aria-hidden="true"></i> </a>
                    		 <a href="#" class="iconstudio addicon disable btnCloserow" ng-show="slidebar.setting && activemode == 'desktop' ? true : false" ng-click="deletesidebar(slidebar.name, 'varticalsidebar')"> <i class="fa fa-remove" aria-hidden="true"></i> </a> 
                    		 
                    		 <div class="col-xs-12 collapse " ng-show="slidebar.setting" id="collapsevSidebarsetting<% $index + 1 %>">
                <div class="row b-b-1">
                    <div class="col-xs-5 col-sm-12 col-md-5 col-lg-5 p-l-20 p-t-5 p-b-5  ">
                        <label class="col-xs-7 p-l-0  m-t-10 m-b-5" for="grid<% $index %>">Grid Width</label>
                        <div class="col-xs-5 p-l-0  m-t-10 m-b-5">
                            <div class="spinner spinner-block">
                                <label for="grid<% $index %>" class="sr-only">Grid Width</label>
                                <input type="text" value="20" ng-model="slidebar.grid" readonly data-min="1"  data-max="12"   id="grid<% $index %>" class="form-control">
                                <div class="input-group-btn-vertical">
                                    <button class="btn btn-default" type="button"   ng-click="slidebar.grid = slidebar.grid >= 12 ? 12 : slidebar.grid + 1 "><i class="fa fa-caret-up"></i></button>
                                    <button class="btn btn-default" type="button" ng-click="slidebar.grid = slidebar.grid <= 1 ? 1 : slidebar.grid - 1 " ><i class="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-xs-12 p-t-5 p-b-5  p-l-20 defulat-content ">
                        <label class="col-xs-3 col-sm-6 col-md-3 col-lg-3 p-l-0  m-t-15 m-b-5" for="pageleftbarFixed<% $index %>">Type of</label>                       
                        <div class="col-xs-3 col-sm-6 col-md-3 p-l-0  m-t-10 m-b-5 sidebaroptionGroup">
                            <select name="" id="pageleftbarFixed<% $index %>"  ng-model="slidebar.fixed" class="customselect form-control" data-style="class-style-menu">
                                <option value="none" selected>none</option>
                                <option value="sticky">Sticky</option>
                                <option value="floating">Floating</option>
                              	<option value="armenu" data-soption="small" hidden="hidden">Add as a right  menu to header</option>
                                <option value="almenu" data-soption="small" hidden="hidden">Add as a left menu to header</option>
                                <option value="hide" data-soption="small" hidden="hidden">Hide</option>
                            </select>
                        </div>
                        <label class="col-xs-3 col-sm-6 col-md-3 m-t-10 m-b-5 sidebaroptionGroup" for="requiredicon">
                        <div class="customelement">
                            <input type="checkbox" name="extra[sidebar_type_collapsible]" ng-model="slidebar.collapsible" id="scollapsible<% $index %>" data-role="slidebar1" data-optioncss="collapsible"  value="collapsible" >
                            <label for="scollapsible<% $index %>" class="m-t-5">Collapsible</label>
                        </div>
                        </label>
                    </div>
                </div>
            </div>
                    		 
                    		 
              		</li>
              		
			  </ul>
        </div>
        
        
        
        <div class="row formrow form-horizontal p-t-10 m-l-0 m-r-0" data-tabcontainer="rightbar" data-layout="rightbar">
            <div class="col-xs-12 studio-collapse-header p-t-5 p-b-5 "> <span class=" pull-left m-t-10 m-b-5">Horizontal Sidebar  </span>  <a href="#" class="btn  add-area-button  m-r-5 pull-right" ng-click="addSidebarh()" ng-show="activemode == 'desktop' ? true : false "> Add </a>
            </div>
            
              <ul  class="col-xs-12 studio-collapse-toobar  " ui-sortable="sortableOptions" style="list-style: none;" ng-model="horizontalsidebar">
              		<li class="row body-inner" ng-repeat="slidebar in horizontalsidebar track by $index"  >
                  			 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-5 extra-block"> <a href="#" class="iconstudio addicon m-r-10 bluebg" data-addpopup="container"> <i class="fa fa-arrows-v" aria-hidden="true"></i> </a> <% slidebar.name %></div>
                   			 <a data-toggle="collapse" href="#collapsevSidebarsettingh<% $index + 1 %>" class="iconstudio addicon btnCloserow btnsettingrow hide"> <i class="fa fa-cog" aria-hidden="true"></i> </a>
                    		 <a href="#" class="iconstudio addicon disable btnCloserow" ng-show="slidebar.setting && activemode == 'desktop' ? true : false" ng-click="deletesidebar(slidebar.name, 'horizontalsidebar')"> <i class="fa fa-remove" aria-hidden="true"></i> </a> 
                    		 
                    		 <div class="col-xs-12 collapse " ng-show="slidebar.setting" id="collapsevSidebarsettingh<% $index + 1 %>">
             
           					 </div>
                    		 
                    		 
              		</li>
              		
			  </ul>
              
        </div>
        
        
			</div>
        <div role="tabpanel" class="tab-pane" id="sidebarhorizontal">
        
        
        
        <!-- END Sidebar --> 
        
        <!-- Body -->
      
        
        <!-- END Body -->
        
        </div>
		</div>
		
       <div class="footerPadding">
            <div class="row responsive-bg">
                <div clsss="col-xs-12 "> <a class="btn responsive-btn" data-responsive="view" data-toggle="modal" data-target="#testResposniveVIew">Test Responsive Views</a> </div>
            </div>
        </div>
        
       	<textarea class="form-control m-t-40"><% layoutjson %></textarea>
        
        <!-- END footer --> 
    </div>
    </div>
</section>



<div class="modal fade bigpopup" id="testResposniveVIew" tabindex="-1" role="dialog" aria-labelledby="testResposniveVIew">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header p-0">
                <div class="row">
                    <div class="col-xs-12 p-r-0 p-l-0 clearfix">
                        <ul class="stepNav col-xs-4  p-r-0 p-l-0  list-unstyled tabStepnav responsive-toolbar clearfix " data-tabnav="button">
                            <li class="active "> <a href="#"  class=" activebtn" ng-click="ifrewidth = 1800" title="Desktop" > <i class="fa fa-desktop" aria-hidden="true"></i> </a> </li>
                            <li> <a href="#" ng-click="ifrewidth = 1024" title="Tablet" > <i class="fa fa-tablet fa-rotate-90" aria-hidden="true"></i> </a> </li>
                            <li > <a href="#" ng-click="ifrewidth = 800" title="Tablet landscape"> <i class="fa fa-tablet" aria-hidden="true"></i> </a> </li>
                            <li> <a href="#" ng-click="ifrewidth = 680" class="clearfix col-xs-12"> <i class="fa fa-mobile fa-rotate-90" aria-hidden="true"></i> </a> </li>
                            <li> <a href="#"  ng-click="ifrewidth = 400" title="Mobile landscape" class="clearfix col-xs-12"> <i class="fa fa-mobile" aria-hidden="true"></i> </a> </li>
                        </ul>
                        <div class="col-xs-4 pull-right">
                            <div class="menuIcons m-t-15"> <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="open-login greenbg"><em class="fa fa-check"></em></a> <a href="#" class="closeIcon" data-preview="close" data-dismiss="modal" aria-label="Close"><em class="fa fa-times"></em></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="bootbox-body text-center" style="background: #eee;">
                    <iframe id="iframepreview" style="width: <% ifrewidth %>px; border: solid 1px #eee;"  class="iframeView" src="/app/Modules/Studios/Resources/Views/assets/ganaral_layouts/pagelayout-preview.html"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bigpopup" id="contentcomponet" tabindex="-1" role="dialog" aria-labelledby="contentcomponet">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header p-0">
                <div class="row">
                    <div class="col-xs-12 p-r-0 p-l-0 clearfix">
                        <h4 class="pull-left p-l-15">	Content</h4>
                          <div class="col-xs-4 p-b-10 pull-right">
                            <div class="menuIcons m-t-15"> <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="open-login greenbg"><em class="fa fa-check"></em></a> <a href="#" class="closeIcon" data-preview="close" data-dismiss="modal" aria-label="Close"><em class="fa fa-times"></em></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                
            </div>
        </div>
    </div>
</div>



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
<script  type="template" data-tempcss="cssforpagelayout">
		/* clearfix */
.bbclearfix:after {  content: "."; display:block; font-size:0; line-height:0; height:0; clear:both; visibility:hidden; }
.bbclearfix {
  display: inline-block;
}
* html .bbclearfix { height:1%; }
.bbclearfix { display:block; }

body{ margin:0; font:12px/18px Helvetica, Arial, sans-serif;}


/*== General setting
============================================================*/
.pagelayoutWrapper { width:100%; display:block; overflow:hidden;}
/*==  FlexBox for 
============================================================*/
.pagelayoutflexbox{  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;}
/*==  Middle Container 
============================================================*/
.pagelayoutContainer{ flex: 2 auto; }

/*==  Slidebar 1
============================================================*/
.bb-holizontalSidebar{  background:#636363; min-height:100px; width: 100%;}
.bb-varticalSidebar {  background:#9AE690; min-height:100px;}


/*==  Middle  
============================================================*/
.pagelayoutmiddle{flex: 1 auto; background:#FFF; min-height:50px; }

/*==  Set laout Order  
============================================================*/
.pagelayoutContainer{ order:1;  }
.pagelayoutmiddle{order:1; }


/*==  sidebar as menu css
============================================================*/
.menurightSidebar, .menuleftSidebar{ display:none; position:absolute; right:12px; top:5px; z-index:11; color:#000; }
.menuleftSidebar{ right:auto; left:12px;}

/*==  collapse Button
============================================================*/
.collapseButton{ display:none; text-align:left; padding:5px 10px; background:#FFF; text-decoration:none; color:#000; z-index:99;}
.gsarrorTop, .gsarrorButtom{ display:none;}
.generalsidebar_left, .gsidebarCollapse, .collapseButton i{transition: all 0.1s; -moz-transition: all 0.1s; -webkit-transition: all 0.1s; -o-transition: all 0.1s;}
.bbcollapsible .collapseButton { display: block;}
/*==  resposnive menu header
============================================================*/
.resposniveMenu{ display:none; min-height:30px; position:relative; background:#FFF; border-bottom:solid 1px rgba(000,000,000,0.1);}
.fullscreenwith { height: 100vh;}

/*==  Extra css for view
============================================================*/

.gl-text-center{ text-align:center; font-weight:normal !important;}
.gl-min-height150{ min-height:150px;}
.gl-min-height90{ min-height:90px;}
</script>


 

@stop

@section('CSS')
	{!! HTML::style('/app/Modules/Studios/Resources/Views/assets/theme-studio/css/page-layout-studio.css?v=0.12') !!}
@stop

@section('JS')
 {!! HTML::script('/resources/assets/js/angular.min.js ') !!}
 {!! HTML::script('/resources/assets/js/uisortable.js') !!}
 {!! HTML::script('/resources/assets/js/underscore-min.js') !!}
 {!! HTML::script('/resources/assets/js/jszip/jszip.js') !!}
 {!! HTML::script('/resources/assets/js/jszip/FileSaver.js') !!}
 {!! HTML::script('/app/Modules/Studios/Resources/Views/assets/theme-studio/js/page-layout-builder-app.js?v=103') !!}
@stop