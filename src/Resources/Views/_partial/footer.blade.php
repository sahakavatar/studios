<div class="templateSize templateFiles animated hide" data-sitecontainer="opentemplate">
    <div class="top-data-row clearfix">
        <ul class="list-unstyled top-buttons clearfix" role="tablist">
            <li>
                <button type="button" class="green-btn" data-tabsclasses="basic"><span class=""><i
                                class="docs-icon sml-icon-page"></i></span> Basic
                </button>
            </li>
            <li>
                <button type="button" class="blue-btn" data-tabsclasses="global"><span class=""><i
                                class="docs-icon sml-icon-form"></i></span> Global classes
                </button>
            </li>
            <li>
                <button type="button" class="violet-btn" data-tabsclasses="element"><span class=""><i
                                class="docs-icon sml-icon-tabs"></i></span> Element
                </button>
            </li>
            <li>
                <button type="button" class="blue-btn" data-tabsclasses="componet"><span class=""><i
                                class="docs-icon sml-icon-form"></i></span> Componet
                </button>
            </li>
            <li>
                <button type="button" class="violet-btn" data-tabsclasses="grid"><span class=""><i
                                class="docs-icon sml-icon-tabs"></i></span> Grid
                </button>
            </li>
        </ul>
        <button class="searchTemp"><i class="icon-close-red iconSearch"></i></button>
    </div>
    <ul class="list-unstyled template-files clearfix element" data-tabcontainercl="element">
        @if(isset($elements))
            @foreach($elements as $key=>$value)
                <li><a href="{!! url("admin/studios/create/classes/elements?tag={$key}") !!}">
                        <span class="left_icon violet_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                        <span class="projecttitle">{!! $value !!}</span>
                    </a></li>
            @endforeach
        @endif
    </ul>
    <div class="list-unstyled template-files clearfix hide grid" data-tabcontainercl="grid">
        <button type="button" class="btn btn-lg"
                style="background-color: #7473a3; color: #fff; padding: 23px 76px;font-size: 20px;margin-top: 89px;"><i
                    class="fa fa-plus m-r-15"></i>Create Grid
        </button>
    </div>
    <ul class="list-unstyled template-files clearfix component" data-tabcontainercl="global">
        @if(isset($globals))
        @foreach($globals as $key=>$global)
            <li><a href="{!! url("/admin/studios/create/classes/global?tag=$key") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">{!! $global !!}</span>
                </a></li>
        @endforeach
            @endif
    </ul>
    <ul class="list-unstyled template-files clearfix hide basic" data-tabcontainercl="basic">
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_shadow") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Text Shadow</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_size") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Text Size</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_color") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Text Color</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_height") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Text Height</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=font_family") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Font Family</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_indent") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Text Indent</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=letter_spacing") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Letter Spacing</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=word_spacing") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Word Spacing</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=padding") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Padding</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=margins") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Margin</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=borders") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Border</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=radius") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Radius</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=box_shadow") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Box Shadow</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=width") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Width </span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=height") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Height</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=background_color") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Background Color</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=gradient_color") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Gradient Color</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=pattern_color") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Pattern Color</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=animation") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Animation</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=position") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Position</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=z-index") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Z-index</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=filter") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">Filter</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=list-style") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                <span class="projecttitle">List style</span>
            </a></li>
    </ul>


    <ul class="list-unstyled template-files clearfix hide component" data-tabcontainercl="componet">
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=card") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Card</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=jumbotron") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Jumbotron</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=navbar") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Navbar</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=forms") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Form</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=table") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Table</span>
            </a></li>
        {{--<li><a href="">--}}
        {{--<span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>--}}
        {{--</span><span class="projecttitle">Thumbnails</span>--}}
        {{--</a></li>--}}
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=panels") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Panel</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=inputgroups") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Input group</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=buttongroups") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Button group</span>
            </a></li>
        <li><a href="{!! url("/admin/studios/create/classes/component?tag=default") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">My component</span>
            </a></li>
    </ul>
</div>


<div class="templateSize templateFiles animated hide" data-sitecontainer="opentemplatecollections">
    <div class="top-data-row clearfix">

        <ul class="list-unstyled top-buttons clearfix" role="tablist">

            <li>
                <button type="button" class="violet-btn" data-tabsclasses="element"><span class=""><i
                                class="docs-icon sml-icon-tabs"></i></span> Element
                </button>
            </li>

        </ul>

        <button class="searchTemp"><i class="icon-close-red iconSearch"></i></button>
    </div>
    <ul class="list-unstyled template-files clearfix element" data-tabcontainercl="element">
        @if(isset($elementCollectiom))
        @foreach($elementCollectiom as $key=>$value)
            <li><a href="{!! url("admin/studios/create/classes/collections?tag={$key}") !!}">
                    <span class="left_icon violet_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                    <span class="projecttitle">{!! htmlentities($value) !!}</span>
                </a></li>
        @endforeach
            @endif
    </ul>
</div>


<div class="templateSize templateFiles animated hide" data-sitecontainer="opentemplateCreate">
    <div class="top-data-row clearfix">
        <div class="row p-20">
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div class="main_div_1">
                    <div class="top_part_studio">
                        <img src="{!! url('\app\Modules\Studios\Resources\Views\assets\img\green.png')!!}" alt=""
                             class="m-t-40">
                    </div>
                    <div class="bottom_part_studio">
                        <a href="#createclasses" role="tab" data-toggle="tab"><span>Classes</span></a>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div class="main_div_1">
                    <div class="top_part_studio">
                        <img src="{!! url('\app\Modules\Studios\Resources\Views\assets\img\violet.png')!!}" alt=""
                             class="m-t-40">
                    </div>
                    <div class="bottom_part_studio">
                        <a href="#collectionclasses" role="tab" data-toggle="tab"><span>Collections</span></a>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane" id="createclasses">
                    <div class="top-data-row clearfix">
                        <ul class="list-unstyled top-buttons clearfix" role="tablist">
                            <li>
                                <button type="button" class="green-btn" data-tabsclasses="basic"><span class=""><i
                                                class="docs-icon sml-icon-page"></i></span> Basic
                                </button>
                            </li>
                            <li>
                                <button type="button" class="blue-btn" data-tabsclasses="global"><span class=""><i
                                                class="docs-icon sml-icon-form"></i></span> Global classes
                                </button>
                            </li>
                            <li>
                                <button type="button" class="violet-btn" data-tabsclasses="element"><span class=""><i
                                                class="docs-icon sml-icon-tabs"></i></span> Element
                                </button>
                            </li>
                            <li>
                                <button type="button" class="blue-btn" data-tabsclasses="componet"><span class=""><i
                                                class="docs-icon sml-icon-form"></i></span> Componet
                                </button>
                            </li>
                            <li>
                                <button type="button" class="violet-btn" data-tabsclasses="grid"><span class=""><i
                                                class="docs-icon sml-icon-tabs"></i></span> Grid
                                </button>
                            </li>
                        </ul>
                        <button class="searchTemp"><i class="icon-close-red iconSearch"></i></button>
                    </div>
                    <ul class="list-unstyled template-files clearfix element hide" data-tabcontainercl="element">
                        @foreach($elements as $key=>$value)
                            <li><a href="{!! url("admin/studios/create/classes/elements?tag={$key}") !!}">
                                    <span class="left_icon violet_span"><i class="fa fa-code"
                                                                           aria-hidden="true"></i></span>
                                    <span class="projecttitle">{!! $value !!}</span>
                                </a></li>
                        @endforeach
                    </ul>
                    <div class="list-unstyled template-files clearfix hide grid" data-tabcontainercl="grid">
                        <button type="button" class="btn btn-lg"
                                style="background-color: #7473a3; color: #fff; padding: 23px 76px;font-size: 20px;margin-top: 89px;">
                            <i class="fa fa-plus m-r-15"></i>Create Grid
                        </button>
                    </div>
                    <ul class="list-unstyled template-files clearfix component hide" data-tabcontainercl="global">
                        @foreach($globals as $key=>$global)
                            <li><a href="{!! url("/admin/studios/create/classes/global?tag=$key") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">{!! $global !!}</span>
                                </a></li>
                        @endforeach
                    </ul>
                    <ul class="list-unstyled template-files clearfix hide basic" data-tabcontainercl="basic">
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_shadow") !!}">
                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Text Shadow</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_size") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Text Size</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_color") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Text Color</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_height") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Text Height</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=font_family") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Font Family</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=text_indent") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Text Indent</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=letter_spacing") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Letter Spacing</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=word_spacing") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Word Spacing</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=padding") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Padding</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=margins") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Margin</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=borders") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Border</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=radius") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Radius</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=box_shadow") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Box Shadow</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=width") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Width </span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=height") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Height</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=background_color") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Background Color</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=gradient_color") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Gradient Color</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=pattern_color") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Pattern Color</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=animation") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Animation</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=position") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Position</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=z-index") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Z-index</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=filter") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">Filter</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/basic?tag=list-style") !!}">
                                <span class="left_icon green_span"><i class="fa fa-code" aria-hidden="true"></i></span>
                                <span class="projecttitle">List style</span>
                            </a></li>
                    </ul>


                    <ul class="list-unstyled template-files clearfix hide component" data-tabcontainercl="componet">
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=card") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Card</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=jumbotron") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Jumbotron</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=navbar") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Navbar</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=forms") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Form</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=table") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Table</span>
                            </a></li>
                        {{--<li><a href="">--}}
                        {{--<span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>--}}
                        {{--</span><span class="projecttitle">Thumbnails</span>--}}
                        {{--</a></li>--}}
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=panels") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Panel</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=inputgroups") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Input group</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=buttongroups") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">Button group</span>
                            </a></li>
                        <li><a href="{!! url("/admin/studios/create/classes/component?tag=default") !!}">
                <span class="left_icon blue_span"><i class="fa fa-code" aria-hidden="true"></i>
                </span><span class="projecttitle">My component</span>
                            </a></li>
                    </ul>


                </div>
                <div role="tabpanel" class="tab-pane" id="collectionclasses">
                    <div class="top-data-row clearfix">

                        <ul class="list-unstyled top-buttons clearfix" role="tablist">

                            <li>
                                <button type="button" class="violet-btn" data-tabsclasses="elementcollections"><span
                                            class=""><i
                                                class="docs-icon sml-icon-tabs"></i></span> Element
                                </button>
                            </li>

                        </ul>

                        <button class="searchTemp"><i class="icon-close-red iconSearch"></i></button>
                    </div>
                    <ul class="list-unstyled template-files clearfix elementcollections hide"
                        data-tabcontainercl="elementcollections">
                        @foreach($elementCollectiom as $key=>$value)
                            <li><a href="{!! url("admin/studios/create/classes/collections?tag={$key}") !!}">
                                    <span class="left_icon violet_span"><i class="fa fa-code"
                                                                           aria-hidden="true"></i></span>
                                    <span class="projecttitle"
                                          style="color: #555674;">{!! htmlentities($value) !!}</span>
                                </a></li>
                        @endforeach
                    </ul>


                </div>
            </div>
        </div>
    </div>


</div>


<div class="templateSize templateFiles animated hide" data-sitecontainer="myproject">
    <div class="top-data-row clearfix">
        <ul class="list-unstyled top-buttons clearfix" data-myprojectlist="tab">
            <li>
                <button type="button" class="green-btn"><span class=""><i class="docs-icon sml-icon-page"></i></span>
                    Pages
                </button>
            </li>
            <li>
                <button type="button" class="violet-btn"><span class=""><i class="docs-icon sml-icon-tabs"></i></span>
                    Tabs
                </button>
            </li>
            <li>
                <button type="button" class="blue-btn"><span class=""><i class="docs-icon sml-icon-form"></i></span>
                    Forms
                </button>
            </li>
        </ul>
        <button class="searchTemp"><i class="icon-close-red iconSearch"></i></button>
    </div>
    <ul class="list-unstyled template-files clearfix" data-myprojectlist="myproject">
        <li><img src="/appdata/app/Modules/Studio/Resources/Views/classes/site-builder/img/template-img.jpg" alt="">
        </li>
        <li><img src="/appdata/app/Modules/Studio/Resources/Views/classes/site-builder/img/template-img.jpg" alt="">
        </li>
        <li><img src="/appdata/app/Modules/Studio/Resources/Views/classes/site-builder/img/template-img.jpg" alt="">
        </li>
    </ul>
</div>