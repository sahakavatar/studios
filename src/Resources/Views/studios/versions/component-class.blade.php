@extends('studios::_partial.studio_versions_layout')
@section('content')

<div class="menuBuilder textBuilderPreview">
    <section class="container-fluid">
        <div class="row " id="builderContain">
            <div class="col-xs-12 col-sm-6 previewAray" class="text-center">
                <div class="classnamedetail hide">
                    <div class="row   firstchild form-horizontal ">
                        <div class="col-xs-12 ">
                            <div class="form-group p-b-0 m-b-0 uplaod-style">
                                <label class="col-lg-3 col-xs-12 m-t-5" for="fieldsType"><span class="class-style-icon"></span> Class Style</label>
                                <div class="col-lg-5 col-xs-6">
                                    <select name="" id="class-style" class="customselect form-control" data-style="class-style-menu">
                                        <option>Default</option>
                                        <option>option 1</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-xs-6">
                                    <button type="button" class=" btn uploadButton ">Upload Style</button>
                                    <a href="" type="button" class=" btn uploadButton" data-download="css" download="text.css"><i class="glyphicon glyphicon-save"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                      <div class="col-xs-12">
                            <div class="flat-area" data-previewclass>
                                 @include('studios::_partial.component.componenthtml.default')
                            </div>

                          <div class="p-t-20">
                              <div class="form-group ">
                                  <label for="email" style="font-weight: bold!important;">HTML Code</label>
                                  <div class="editcontianer"><div id="htmleditor" data-role="htmlcodeview"></div></div>
                              </div>
                          </div>
                      </div>

                <textarea name="json_data" class="form-control" data-export="json" hidden="hidden" style="margin-top:100px">{!! $data['json_data'] or null !!}</textarea>
                <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                <textarea name="less_data" class="form-control hide" data-export="css" hidden="hidden"></textarea>
                <textarea name="collection" class="form-control hide" data-export="collectiondata" hidden="hidden"></textarea>

            </div>
            @include('studios::_partial.component.html.option')
        </div>
    </section>
</div>

<div class="modal fade" id="componentslisting" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel" data-modal="componenttitle">Modal title</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="list-unstyled menuTplList" data-modal="componenmenu">
                            sdsd
                        </ul>
                    </div>
                    <div class="col-sm-8 tab-content" data-modal="componenmenucontent">
                        <span class="ajaxloding"></span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<input type="hidden" data-action="type" value="super_class">
<input type="hidden" data-action="sub" value="">

<script type="template" data-template="textshadow">
  <div class="row textGroupRow" data-role="textGroup">
  <a href="#" class="iconstudio addicon m-r-5 removetextRow" data-role="removeTextShedow"><i class="fa fa-times" aria-hidden="true"></i></a>
                            <div class="col-xs-6 col-md-6  col-lg-1 p-t-10 p-b-10 border-shadow-color ">
                                    <span class="input-group color-picker input-color input-color-inblock" data-shadowcolor="color">
                                        <input type="text" class="form-control hide" id="" value="#000" name="" data-textshadow="color">
                                        <span class="input-group-addon"><i></i></span>
                                    </span>

                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-4  p-t-10 p-b-10 border-shadow-offset-x">
                                <label class="col-xs-6 p-l-0 m-t-5">offset X</label>
                                <div class="col-xs-6 p-l-0">
                                        <div class="spinner">
                                                <input type="text" value="0" data-textshadow="x" class="form-control">
                                                <div class="input-group-btn-vertical">
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                </div>
                                        </div>

                                </div>
                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-4 p-t-10 p-b-10 border-shadow-offset-y">
                                <label class="col-xs-6 p-l-0 m-t-5">offset Y</label>
                                <div class="col-xs-6 p-l-0">
                                    <div class="spinner">
                                            <input type="text" value="0" data-textshadow="y"  class="form-control">
                                            <div class="input-group-btn-vertical">
                                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                    <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                            </div>
                                    </div>
                                 </div>
                            </div>
                            <div class="col-xs-6 col-md-6  col-lg-2  p-t-10 p-b-10 border-shadow-blur">
                                <label class="col-xs-6 p-l-0 m-t-5" >Blur</label>
                                <div class="col-xs-6 p-l-0">
                                    <div class="spinner">
                                                <input type="text" value="0" data-textshadow="blur" data-min="0" class="form-control">
                                                <div class="input-group-btn-vertical">
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                        <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                </div>
                                        </div>
                                     </div>
                            </div>
                        </div>
</script>
<script type="template" data-template="boxShadow">
  <div class="row textGroupRow" data-role="textGroup">
  <a href="#" class="iconstudio addicon m-r-5 removetextRow" data-mylticss="boxShadow" data-role="removeTextShedow"><i class="fa fa-times" aria-hidden="true"></i></a>
                            <div class="colRow">
                                    <div class="col-xs-6 col-md-6  col-lg-1  p-t-10 p-b-10 border-shadow-color ">
                                            <span class="input-group color-picker input-color input-color-inblock" data-multycss="boxShadow" data-shadowcolor="color">
                                                <input type="text" class="form-control hide" id="" value="#000" name="" data-multycss="boxShadow" data-html="color">
                                                <span class="input-group-addon"><i></i></span>
                                            </span>

                                    </div>

                                     <div class="col-xs-6 col-md-6  col-lg-2   p-t-10 p-b-10 border-shadow-offset-x">
                                                              <select data-selector="fontweight" data-style="btn-black " data-multycss="boxShadow" data-subcss="type" data-css="box-shadow" class="form-control customselect" >
                                            <option selected="" value="">Outer shadow</option>
                                            <option value="inset"> Inner shadow</option>
                                        </select>
                                    </div>

                                    <div class="col-xs-6 col-md-6  col-lg-2   p-t-10 p-b-10 border-shadow-offset-x">
                                        <label class="col-xs-5 p-l-0 m-t-5"> X</label>
                                        <div class="col-xs-6 p-l-0">
                                                <div class="spinner">
                                                        <input type="text" value="0" data-multycss="boxShadow" data-html="x" data-css="x" class="form-control">
                                                        <div class="input-group-btn-vertical">
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                        </div>
                                                </div>

                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-md-6  col-lg-2 p-t-10 p-b-10 border-shadow-offset-y">
                                        <label class="col-xs-5 p-l-0 m-t-5">Y</label>
                                        <div class="col-xs-6 p-l-0">
                                            <div class="spinner">
                                                    <input type="text" value="0" data-multycss="boxShadow" data-html="y" data-css="y"   class="form-control">
                                                    <div class="input-group-btn-vertical">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                    </div>
                                            </div>
                                         </div>
                                    </div>
                            </div>
                            <div class="colRow">
                                     <div class="col-xs-6 col-md-6  col-lg-2 p-t-10 p-b-10 border-shadow-offset-y">
                                        <label class="col-xs-5 p-l-0 m-t-5">spread</label>
                                        <div class="col-xs-6 p-l-0">
                                            <div class="spinner">
                                                    <input type="text" value="0" data-multycss="boxShadow" data-html="spread" data-css="spread"   class="form-control">
                                                    <div class="input-group-btn-vertical">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                            <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                    </div>
                                            </div>
                                         </div>
                                    </div>
                                    <div class="col-xs-6 col-md-6  col-lg-2  p-t-10 p-b-10 border-shadow-blur">
                                        <label class="col-xs-6 p-l-0 m-t-5" >Blur</label>
                                        <div class="col-xs-6 p-l-0">
                                            <div class="spinner">
                                                        <input type="text" value="0"data-multycss="boxShadow" data-html="blur" data-css="blur"   data-min="0" class="form-control">
                                                        <div class="input-group-btn-vertical">
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                        </div>
                                                </div>
                                             </div>
                                    </div>
                            </div>
                        </div>
</script>

<script type="template" data-template="listingclasses">
     <li data-role="listitem" data-prefix="{prefix}" data-name="{name}" data-cssdata='{data}' data-classpath='{classpath}' data-realclass="{realClass}" data-stype="{styletype}" data-css="{type}" data-selectclass=".{name}">    <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
</script>
<script type="template" data-template="classlisting">
     <li data-role="listitem"> <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
</script>


<script type="template" data-template="listingrow">
    <div class="listinginfo" data-listing="row" data-rowid="{rowid}">
        <div class="lsitingbutton">
            <div class="btn-group">
                <button type="button" class="btn dropdown-toggle" data-cssselector="{csstarget}" data-caction="cssselector" data-id="{rowid}" data-toggle="dropdown"><i class="fa fa-css3" aria-hidden="true"></i> </button>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#">:first-child</a></li>
                    <li><a href="#">:last-child</a></li>
                </ul>
            </div>
            <button type="button" class="btn" data-cssselector="{csstarget}" data-caction="edit" data-id="{rowid}"><i class="fa fa-pencil"></i></button>
            <div class="listingonoff">
                <input type="checkbox" data-cssselector="{csstarget}" data-listingoption="active" id="checkbox{rowid}" checked="checked" />
                <label for="checkbox{rowid}"></label>
            </div>
        </div>
        <button class="btn btn-collapse" type="button" data-cssselector="{csstarget}" data-caction="collapse" data-id="{rowid}"><i class="fa fa-plus" aria-hidden="true"></i></button>
        <span class="listingtitle">{name}</span>
    </div>
</script>
<script type="template" data-template="listingclasses">
    <li data-role="listitem" class="list col-xs-12 col-sm-12 col-md-6 col-lg-6" data-prefix="{prefix}" data-name="{name}" data-cssdata='{data}' data-classpath='{classpath}' data-realclass="{realClass}" data-stype="{styletype}" data-css="{type}" data-selectclass=".{name}">           <div class="">
            <div class="main_div_1">
                {{--<div class="top_part_1"></div>--}}
                <div class="bottom_part_1">
                    <a href="#"><span>{name}</span></a>
                </div>
            </div>
        </div>
    </li>
</script>

<script type="template" data-template="typecomponet">
    <div class="col-sm-4">
        <a href="#" class="thumbBox" data-buttonrole="itemedit">
            <img src="/app/Modules/Framework/Resources/Views/assets/framework/img/placeholder-img.jpg" alt="">
            <h4>{name}</h4></a>
    </div>
</script>





@stop

@section('CSS')
{!! HTML::style('app/Modules/Framework/Resources/Views/assets/framework/frameworkstudio.css') !!}
{!! HTML::style('/app/Modules/Studios/Resources/Views/Classes/container/css/container-studio.css?v=80') !!}
{!! HTML::style('/app/Modules/Studios/Resources/Views/assets/text/css/text-studio.css?v=3.20') !!}
{!! HTML::style('/app/Modules/Studios/Resources/Views/assets/component/componetcss.css?v=0.1') !!}
{!! HTML::style('/resources/assets/js/bootstrap-fileinput/css/fileinput.min.css') !!}
<style>
  .editcontianer {
     position:relative; width: 100%; height:100px;
  }

  #editorexportcss, #editorcsscontianer, #editortextcontianer, #htmleditor,  .editorcss {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
  .previewAray{
    bottom: 0;
    left: 0;
    overflow: auto;
    position: absolute;
    top: 0;
  }
</style>
@stop

@section('JS')
{!! HTML::script('/resources/assets/js/bootstrap-fileinput/js/fileinput.min.js') !!}
{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/js/studio-plugin-new.js?=v0.7') !!}
{!! HTML::script('/app/Modules/Studios/Resources/Views/assets/component/component-versions_class-builder.js?v=0.10') !!}
@stop