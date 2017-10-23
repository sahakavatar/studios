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
                                <textarea name="json_data" class="form-control " data-export="json" style="margin-top:140px;">{!! $data_edit['jsonData'] or null !!}</textarea>
                                <textarea name="less_data" class="form-control hide" data-export="css"></textarea>
                                <textarea name="openconected" class="form-control hide" data-export="conected"></textarea>
                        </div>
                        
                        <!--  Start Setting option -->
                        <div class="col-xs-12 col-sm-6 formoptions editDesignCol">
                                <!--  Tabs -->
                                <!--  Tabs panel -->
                                <div class="tab-content m-t-10">
                                        <div role="tabpanel" class="tab-pane active " id="color">


                                                <div class="col-xs-12 studio-collapse-header p-t-10 p-b-10">
                            <span class=" pull-left">
                                <a data-toggle="collapse" href="#backgroundncontainer" class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a> Background color
                            </span>
                                  <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                                        </div>
                                                <div class="col-xs-12 studio-collapse-toobar collapse in" id="backgroundncontainer">

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

                                                </div>


                                                {{--/////--}}


                                            
                                                
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
<style id="savedcss" data-role="savedcss">
</style>
{!! HTML::style('/app/Modules/Studios/Resources/Views/Classes/container/css/container-studio.css?v=0.57') !!}

<link media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/icon-buttons.css">
<link media="all" type="text/css" rel="stylesheet" href="/resources/assets/js/ui.anglepicker/css/ui.anglepicker.css">
<link media="all" type="text/css" rel="stylesheet" href="/app/Modules/Studios/Resources/Views/assets/color-picker/css/color-builder.css?v=0.20">
@push('javascript') 
<script src="/resources/assets/js/ui.anglepicker/js/ui.anglepicker.js" type="text/javascript"></script> 
<script src="/resources/assets/js/icon-plugin.js?v=0.50" type="text/javascript"></script> 
<script src="/app/Modules/Studios/Resources/Views/assets/color-picker/js/class-color-builder.js?v=0.32" type="text/javascript"></script> 
@endpush