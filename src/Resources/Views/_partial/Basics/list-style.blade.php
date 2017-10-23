
<div class="menuBuilder textBuilderPreview"> 
    <section class="container-fluid">
        <div class="row " id="builderContain">
            <div class="col-xs-12 col-sm-6 previewAray" class="text-center">
                <div class="classnamedetail">
                <div class="row   firstchild form-horizontal">
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
                <ul data-preview="studio" data-role="classview">
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                    <li>List 4</li>
                    <ul>
                    
                
                <textarea name="json_data" class="form-control" data-export="json" hidden="hidden"
                          style="margin-top:100px">{!! $data_edit['jsonData'] or null !!}</textarea>
                          <textarea name="json_importdata" class="form-control hide" data-export="importjson"></textarea>
                <textarea name="less_data" class="form-control hide" data-export="css" hidden="hidden"></textarea>
            </div>
            <div class="col-xs-12 col-sm-6 formoptions textBuilderEditor ">

                
                <!-- new style for text studio -->
                <!-- Basic -->
                

                <!-- Shadow -->
                

                <!-- Animation -->
                <div class="row formrow form-horizontal">
                    <div class="col-xs-12 studio-collapse-header p-t-10 p-b-10">
                            <span class=" pull-left">
                                <a data-toggle="collapse" href="#animationcontainer" class="iconstudio viewicon m-r-5" data-viewpopup="container">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </a> List style
                            </span>
                           <a href="#" class="iconstudio addicon m-r-5 pull-right" ><i class="fa fa-power-off f-s-20" aria-hidden="true"></i></a>
                    </div>
                    <div class="col-xs-12 studio-collapse-toobar collapse in" id="animationcontainer">
                        <div class="studio-collapse-toobar" style="background-color: transparent">
                            <div class="row b-b-1">
                                <div class="col-xs-6 col-md-6 col-lg-2 p-t-10 p-b-10 m-t-5 text-center">
                                    List style type
                                </div>
                                <div class="col-xs-12 col-md-5 col-lg-5  p-t-10 p-b-10">
                                    <div class="width100">
                                        <div class="spinner" style="width: 100%;">
                                            <label for="list-style-type" class="sr-only">list-style-type</label>
                                            <select class="form-control customselect" data-style="class-style-menu" data-css="list-style-type"
                                                    data-selector="liststyletype">
                                                <option value="disc">disc</option>
                                                <option value="circle">circle</option>
                                                <option value="square">square</option>
                                                <option value="decimal">decimal</option>
                                                <option value="decimal-leading-zero">decimal-leading-zero</option>
                                                <option value="armenian">armenian</option>
                                                <option value="hebrew">hebrew</option>
                                                <option value="hiragana">hiragana</option>
                                                <option value="hiragana-iroha">hiragana-iroha</option>
                                                <option value="katakana">katakana</option>
                                                <option value="katakana-iroha">katakana-iroha</option>
                                                <option value="lower-alpha">lower-alpha</option>
                                                <option value="lower-greek">lower-greek</option>
                                                <option value="lower-latin">lower-latin</option>
                                                <option value="lower-roman">lower-roman</option>
                                                <option value="upper-alpha">upper-alpha</option>
                                                <option value="upper-greek">upper-greek</option>
                                                <option value="upper-latin">upper-latin</option>
                                                <option value="upper-roman">upper-roman</option>
                                                <option value="none">none</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <!-- end new style for text studio -->
            </div>
        </div>
    </section>
</div>

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


<script type="template" data-template="listingclasses">
     <li data-role="listitem" data-prefix="{prefix}" data-name="{name}" data-cssdata='{data}' data-classpath='{classpath}' data-realclass="{realClass}" data-stype="{styletype}" data-css="{type}" data-selectclass=".{name}">    <a href="#" data-buttonrole="getcss"><span class="projecttitle">{name}</span></a></li>
</script>
@push('css')
 {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/text/css/text-studio.css?v=3.20') !!}
@endpush

@push('javascript')
{!! HTML::script('app/Modules/Studios/Resources/Views/assets/js/image-filter-studio.js') !!}

@endpush