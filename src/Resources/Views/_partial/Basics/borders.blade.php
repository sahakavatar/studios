<div class="menuBuilder containerBuilderPreview">

        <section class="container-fluid" >
                <div class="row " id="builderContain">
                        <div class="col-xs-12 col-sm-6 previewAray">
                                <div class="classnamedetail">
                                <div class="row firstchild form-horizontal">
                                        <div class="col-xs-12 ">
                                                <div class="form-group p-b-0 m-b-0 uplaod-style">
                                                        <label class="col-lg-3 col-xs-12 m-t-5" for="fieldsType"><span class="class-style-icon"></span> Class Style</label>
                                                        <div class="col-lg-5 col-xs-6">
                                                                <div class="btn-group dropdown-button" role="group">
                                                                        <button type="button" data-toggle="collapse" data-target="#gradient-datalist" class="btn btn-block class-style-menu"><span class="filter-option pull-left">Default</span>&nbsp;<span class="caret"></span></button>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-4 col-xs-6">
                                                                <button type="button" class=" btn uploadButton ">Upload Style</button>
                                                                <a href="" type="button" class=" btn uploadButton" data-download="css" download="text.css"><i class="glyphicon glyphicon-save"></i></a>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                        
                                </div>
                                
                                <!--<div class="miniheight">

                    <div class="" data-role="classview">Lorem ipsum dolor sit amet, </div>
                </div>--> 
                                <!--  Preview Section -->
                                <div data-preview="container" data-print="demehtml"> 
                                        <!--  Apply css class  -->
                                        {{--<div class="previewCol">--}}
                                                {{--<div class="" data-role="classview">Container</div>--}}
                                        {{--</div>--}}
                                        <div class="previewCol previewcsscontianer">
                                                <div class="" data-role="classview">Container</div>
                                        </div>
                                </div>
                                <textarea name="json_data" class="form-control hide" data-export="json" style="margin-top:10px">{!! $data_edit['jsonData'] or null !!}</textarea>
                                <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                                <textarea name="less_data" class="form-control hide" data-export="css"></textarea>
                        </div>
                        <div class="col-xs-12 col-sm-6 formoptions containerBuilderEditor">
                                <ul class="stepNav nav-justified list-unstyled tabStepnav clearfix m-t-10 hide" data-tabnav="button">
                                        <li class="active"><a href="#" title="Step1" data-rolecss="css">Default</a></li>
                                        <li> <a href="#" title="Step1" data-rolecss="hover" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Hover</span> <span class="col-xs-6 text-left">
                                                        <label class="switch switch-flat switch-button m-b-0">
                                                                <input class="switch-input" type="checkbox" data-tabactive="hover" />
                                                                <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                                                        </span> </a> </li>
                                        <li> <a href="#" title="Step1" data-rolecss="selected" class="clearfix col-xs-12"> <span class="col-xs-6 text-right p-r-0">Selected</span> <span class="col-xs-6 text-left">
                                                        <label class="switch switch-flat switch-button m-b-0">
                                                                <input class="switch-input" type="checkbox" data-tabactive="selected"/>
                                                                <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle active-grey"></span> </label>
                                                        </span> </a> </li>
                                </ul>
                                
                                
                                <div class="gradient-data">
                                        <div class="collapse gradient-datalist" id="gradient-datalist">
                                                <div class="row">
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data1"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img2.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data2"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img3.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data3"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img4.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data4"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img5.png" alt=""></a> </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data1"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img2.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data2"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img3.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data3"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img4.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data4"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img5.png" alt=""></a> </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data1"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img2.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data2"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img3.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data3"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img4.png" alt=""></a> </div>
                                                        <div class="col-md-3 col-xs-6"> <a href="#" data-loadnew="data4"><img src="/appdata/app/Modules/Studio/Resources/Views/classes/container/img/gradient-sample-img5.png" alt=""></a> </div>
                                                </div>
                                        </div>
                                </div>
                                        
                                <!-- new style for container studio --> 
                                
                                
                           
                                
                                <!-- Border and Radius -->
                                
                                <div class="row formrow form-horizontal">
                                        <div class="col-xs-12 studio-collapse-header p-t-10"> <span class="pull-left"> <a data-toggle="collapse" href="#collapseBorderRadius" class="iconstudio viewicon  m-r-5" data-viewpopup="container"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a> Border </span> <span class=" m-l-10 pull-left">
                                                <label class="switch switch-flat switch-button">
                                                        <input class="switch-input" data-switch="collapseBorderRadius" data-cssexist="border-radius" type="checkbox"/>
                                                        <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle "></span> </label>
                                                </span> <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a> </div>
                                        <div class="col-xs-12 studio-collapse-toobar collapse in" id="collapseBorderRadius">
                                                <div class="borderRadius">
                                                <div class="row">
                                                        <div class="col-xs-12 col-md-12  col-lg-6 p-t-10 p-b-20 border-section">
                                                                <div class="col-xs-12">
                                                                        <div class="radio-inline customelement">
                                                                                <input type="radio" name="bordertype" id="bordersame" value="same" data-csstype="border" data-getcontainer="">
                                                                                <label  for="bordersame">Same Border</label>
                                                                        </div>
                                                                        <div class="radio-inline customelement">
                                                                                <input type="radio" name="bordertype" id="bordercustomize" checked value="customize" data-csstype="border" data-getcontainer="bordercustomize">
                                                                                <label for="bordercustomize">Customize</label>
                                                                        </div>
                                                                </div>
                                                                <div class="col-xs-12  m-t-5" data-role="borderGroup" data-roletype="top">
                                                                        <label class="col-xs-3  p-r-0 m-t-5" data-lable-title="top">Top</label>
                                                                        <div class="col-xs-3 p-l-0">
                                                                                <div class="spinner">
                                                                                        <input type="text" value="1" data-css="border-width" data-html="top" data-multycss="border" id="AngleInput" class="form-control">
                                                                                        <div class="input-group-btn-vertical">
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-xs-2 p-l-0"> <span class="input-group color-picker input-color input-color-inblock" data-html="top" data-multycss="border">
                                                                                <input type="text" class="form-control hide" id="" value="#000" name="" data-css="border-color" data-html="top" data-multycss="border" >
                                                                                <span class="input-group-addon"><i></i></span> </span> </div>
                                                                        <div class="col-xs-4 p-l-0">
                                                                                <select class="form-control customselect" data-css="border-style" data-html="top" data-multycss="border"  data-selector="border"  data-style="class-style-menu">
                                                                                        <option value="solid" selected="">Solid</option>
                                                                                        <option value="dashed">Dashed</option>
                                                                                        <option value="dotted">Dotted</option>
                                                                                        <option value="double">Double</option>
                                                                                        <option value="groove">Groove</option>
                                                                                        <option value="hidden">Hidden</option>
                                                                                        <option value="inset">Inset</option>
                                                                                        <option value="none">None</option>
                                                                                        <option value="outset">Outset</option>
                                                                                        <option value="ridge">Ridge</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                                <div class="col-xs-12  m-t-5" data-role="borderGroup" data-roletype="right">
                                                                        <label class="col-xs-3  p-r-0 m-t-5">Right</label>
                                                                        <div class="col-xs-3 p-l-0">
                                                                                <div class="spinner">
                                                                                        <input type="text" value="1" data-css="border-width" data-html="right" data-multycss="border" id="AngleInput" class="form-control">
                                                                                        <div class="input-group-btn-vertical">
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-xs-2 p-l-0"> <span class="input-group color-picker input-color input-color-inblock" data-html="right" data-multycss="border">
                                                                                <input type="text" class="form-control hide" id=""  name="" data-css="border-color" data-html="right" data-multycss="border" >
                                                                                <span class="input-group-addon"><i></i></span> </span> </div>
                                                                        <div class="col-xs-4 p-l-0">
                                                                                <select class="form-control customselect" data-css="border-style" data-html="right" data-multycss="border"  data-selector="border"  data-style="class-style-menu">
                                                                                        <option value="solid" selected="">Solid</option>
                                                                                        <option value="dashed">Dashed</option>
                                                                                        <option value="dotted">Dotted</option>
                                                                                        <option value="double">Double</option>
                                                                                        <option value="groove">Groove</option>
                                                                                        <option value="hidden">Hidden</option>
                                                                                        <option value="inset">Inset</option>
                                                                                        <option value="none">None</option>
                                                                                        <option value="outset">Outset</option>
                                                                                        <option value="ridge">Ridge</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                                <div class="col-xs-12  m-t-5" data-role="borderGroup" data-roletype="bottom">
                                                                        <label class="col-xs-3  p-r-0 m-t-5">Bottom</label>
                                                                        <div class="col-xs-3 p-l-0">
                                                                                <div class="spinner">
                                                                                        <input type="text" value="1" data-css="border-width" data-html="bottom" data-multycss="border" id="AngleInput" class="form-control">
                                                                                        <div class="input-group-btn-vertical">
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-xs-2 p-l-0"> <span class="input-group color-picker input-color input-color-inblock" data-html="bottom" data-multycss="border">
                                                                                <input type="text" class="form-control hide" id="" value="#000" name="" data-css="border-color" data-html="bottom" data-multycss="border" >
                                                                                <span class="input-group-addon"><i></i></span> </span> </div>
                                                                        <div class="col-xs-4 p-l-0">
                                                                                <select class="form-control customselect" data-css="border-style" data-html="bottom" data-multycss="border"  data-selector="border"  data-style="class-style-menu">
                                                                                        <option value="solid" selected="">Solid</option>
                                                                                        <option value="dashed">Dashed</option>
                                                                                        <option value="dotted">Dotted</option>
                                                                                        <option value="double">Double</option>
                                                                                        <option value="groove">Groove</option>
                                                                                        <option value="hidden">Hidden</option>
                                                                                        <option value="inset">Inset</option>
                                                                                        <option value="none">None</option>
                                                                                        <option value="outset">Outset</option>
                                                                                        <option value="ridge">Ridge</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                                <div class="col-xs-12  m-t-5" data-role="borderGroup" data-roletype="left">
                                                                        <label class="col-xs-3  p-r-0 m-t-5">left</label>
                                                                        <div class="col-xs-3 p-l-0">
                                                                                <div class="spinner">
                                                                                        <input type="text" value="1" data-css="border-width" data-html="left" data-multycss="border" class="form-control">
                                                                                        <div class="input-group-btn-vertical">
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-up"></i></button>
                                                                                                <button class="btn btn-default" type="button"><i class="fa fa-caret-down"></i></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-xs-2 p-l-0"> <span class="input-group color-picker input-color input-color-inblock" data-html="left" data-multycss="border">
                                                                                <input type="text" class="form-control hide" id="" value="#000" name="" data-css="border-color" data-html="left" data-multycss="border" >
                                                                                <span class="input-group-addon"><i></i></span> </span> </div>
                                                                        <div class="col-xs-4 p-l-0">
                                                                                <select class="form-control customselect" data-css="border-style" data-html="left" data-multycss="border"  data-selector="border"  data-style="class-style-menu">
                                                                                        <option value="solid" selected="">Solid</option>
                                                                                        <option value="dashed">Dashed</option>
                                                                                        <option value="dotted">Dotted</option>
                                                                                        <option value="double">Double</option>
                                                                                        <option value="groove">Groove</option>
                                                                                        <option value="hidden">Hidden</option>
                                                                                        <option value="inset">Inset</option>
                                                                                        <option value="none">None</option>
                                                                                        <option value="outset">Outset</option>
                                                                                        <option value="ridge">Ridge</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        
                                                </div>
                                                </div> 
                                        </div>
                                </div>
                                
                             
                                
                                <!-- end new style for container studio --> 
                                
                                <div class="disablelayout hide" data-activetab="suporter"></div>
                                
                        </div>
                </div>
        </section>
</div>
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
{!! HTML::style('/app/Modules/Studios/Resources/Views/assets/css/styles.css') !!}
{!! HTML::style('/app/Modules/Studios/Resources/Views/Classes/container/css/container-studio.css?v=0.57') !!}
<style id="savedcss" data-role="savedcss">
</style>
@push('javascript') 
<script src="/app/Modules/Studios/Resources/Views/public/js/studio-plugin-new.js" type="text/javascript"></script> 
<script src="/app/Modules/Studios/Resources/Views/Classes/container/js/class-container-builder.js?v=3.58" type="text/javascript"></script> 
@endpush