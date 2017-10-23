 <section id="menuBuilderHeader">
     <section class="container-fluid p-0">
         <div class="row">
             <div class="col-xs-5 col-sm-5 p-0">
                 <button type="button" class="logoArea pull-left p-15"  data-openmenu="mainmenu" data-openmenusub="mainmenu">
                     {{--<i class="fa fa-code iconFolder" aria-hidden="true"></i> Create--}}
                     <i class="fa fa-arrow-left pull-left p-l-5" aria-hidden="true"></i>
                 </button>
                 {{--<button type="button" class="fileBtn pull-left" data-openmenu="mainmenu" data-openmenusub="filemenu"><i class="iconheadersprite iconFolder"></i> <span class="mobileNone">File</span> <i class="iconheadersprite dropdownArrow"></i></button>--}}

                 {{--<div class="dropdown view-dropdown-menu">--}}
                     {{--<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="iconheadersprite iconViewEye"></i> <span class="mobileNone">View</span> <i class="iconheadersprite dropdownArrow"></i> </button>--}}
                     {{--<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">--}}
                         {{--<li role="separator" class="divider"></li>--}}
                         {{--<li class="grids"><a href="#" data-viewtoolbar="grid" ><i class="iconheadersprite iconViewEyeNa"></i> Grids</a></li>--}}
                         {{--<li role="separator" class="divider m-b-10"></li>--}}
                         {{--<li><a href="#view-responsives-modal" class="active" data-openresponsiveview="modal" data-viewtoolbar="reponsive"><i class="iconheadersprite iconViewEyeNa"></i> Responsive</a></li>--}}
                         {{--<li><a href="#"  class="active" data-viewtoolbar="redoundo"><i class="iconheadersprite iconViewEyeNa"></i> Redo &amp; undo</a></li>--}}
                         {{--<li><a href="#"  class="active" data-viewtoolbar="setting"><i class="iconheadersprite iconViewEyeNa"></i> Settings</a></li>--}}
                         {{--<li><a href="#"  class="active" data-viewtoolbar="fullscreen"><i class="iconheadersprite iconViewEyeNa"></i> Full Screen</a></li>--}}
                     {{--</ul>--}}
                 {{--</div>--}}
                 <div id="bc1" class="myBreadcrumb m-t-10 m-l-20 hide">
                     <a href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                     <a href="#" class="active" data-openproject="opentemplatecollections"> Create</a>
                     <a href="#" data-openproject="opentemplate"> Classes</a>

                     {{--<a href="#" ><i class="fa fa-chevron-left" aria-hidden="true"></i></a>--}}
                     {{--<a href="#" class="active"><div>Create</div></a>--}}
                     {{--<a href="#"><div>Classes</div></a>--}}
                 </div>

             {{--<div class="row">--}}
                     {{--<div class="btn-group btn-breadcrumb  m-t-10 m-l-15">--}}
                         {{--<a href="#" class="btn btn-default btn-dark-grey"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>--}}
                         {{--<a href="#" class="btn btn-default btn-dark-grey active">Create</a>--}}
                         {{--<a href="#" class="btn btn-default btn-dark-grey">Classes</a>--}}
                     {{--</div>--}}
                 {{--</div>--}}
             </div>
             <div class="col-xs-3 col-sm-3">

                 <!--<button type="button" class="toolsbtn"><i class="iconheadersprite iconBuilder"></i> Site Builder</button>-->
             </div>
             <div class="col-xs-4 col-sm-4 loginMobilePosition">
                 @if(\Auth::check())
                     <div class="login-data-col">
                         <div class="login-profile">
                             {{--<figure class="profileImg"> <img src="{!! BBGetUserAvatar() !!}" alt="" class="img-rounded"></figure>--}}
                             {{--{!! BBGetUserName() !!} <i class="iconheadersprite icon-downarrow"></i> --}}
                             <a href="#" class="closeIcon" data-dismiss="modal" style="background-color: transparent;">
                                 <i class="icon-close-red"></i></a> </div>
                         <div class="menuIcons">
                             <!--<a href="#" class="btn save-button hide" data-openpopup="savebutton" >Save</a>
                             <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn save-button open-login">Save</a>
                             <a href="#" class="btn save-as-button hide" data-openpopup="savebutton">Save As</a> -->
                         </div>
                     </div>
                 @else
                      <div class="login-data-col">
                                <div class="login-profile"> <a href="#" class="closeIcon" data-dismiss="modal"><i class="icon-close-red"></i></a> </div>
                                <div class="menuIcons">
                                        <!--<a href="#" class="btn save-button hide" data-openpopup="savebutton" >Save</a>
                                                                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn save-button open-login">Save</a>
                                                                        <a href="#" class="btn save-as-button hide" data-openpopup="savebutton">Save As</a> -->

                                </div>
                        </div>
                        <div class="loginCol">
                                <div class="btn-group">
                                        <button type="button" id="dropdown-login" class="btn btn-default btn-black2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Login <span class="caret"></span> </button>

                                </div>
                        </div>
                 @endif
             </div>
                </div>
        </section>
</section>
<div class="studioMenu animated" data-menucontainer="mainmenu">
    <ul data-submenucontainer="mainmenu">
        {{--<li><a href="#" data-openproject="opentemplate"> Classes</a></li>--}}
        {{--<li><a href="#" data-openproject="opentemplatecollections"> Collections</a></li>--}}
    {{--</ul>--}}
    {{--<ul class="active" data-submenucontainer="filemenu">--}}
        <li><a href="#" data-openproject="opentemplateCreate"><i class="iconheadersprite iconPlusGray"></i> Create</a></li>
        <li><a href="#" data-actionmenu="saveas">
                <i class="fa fa-folder-open-o iconFolderGray" aria-hidden="true"></i>
                {{--<i class="iconheadersprite iconFolderGray"></i>--}}
                Open</a></li>
        <li><a href="#save-alert-modal" data-actionmenu="save" data-toggle="modal">
                <i class="fa fa-floppy-o iconTickGray" aria-hidden="true"></i>
                {{--<i class="iconheadersprite iconTickGray"></i> --}}
                Save</a></li>
        <li><a href="#" data-actionmenu="saveas"><i class="iconheadersprite iconFolderGray"></i> Save As	</a></li>
        <li><a href="#" data-actionmenu="settings"><i class="iconheadersprite iconSettingGray"></i> Settings</a></li>
    </ul>
  
    <ul data-submenucontainer="newproject">
        <li><a href="#" data-openproject="new"><i class="iconheadersprite iconPlusGray"></i> Blank Project</a></li>
        <li><a href="#" data-openproject="opentemplate"><i class="iconheadersprite iconFolderGray"></i> Templates</a></li>
        <li><a href="#" data-openproject="myproject" >My Projects</a></li>
    </ul>
</div>




<br>
<!-- Modal -->
<div id="save-alert-modal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Enter Class name</h4>
      </div>
      <div class="modal-body">
        <p><input name="title" type="text" class="form-control " value="{!! $data['name'] or 'classname' !!}" id="classname" data-role="classname" required></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-default" data-save="class" data-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div id="selectexistingstyle" class="modal fade" role="dialog">
  <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title p-l-15">Style type name</h4>
      </div>
      <div class="modal-body">
           <div class="row">
             <div class="col-md-4">
                 <div class="comp-list">
                     <div class="form-group">
                         <select class="form-control" data-typelsit="lists">

                         </select>
                     </div>
                     <div class="list-group" data-role="componentslist" data-typeclasses="basic">
                     </div>
                 </div>
              </div>
             <div class="col-md-8">
                  <ul class="list-unstyled template-files existingclass clearfix" data-classeslsit="basic">

                   </ul>
               </div>
           </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default close_btn" data-dismiss="modal">Close</button><button type="button" class="btn btn-default save_btn" data-save="class" data-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>