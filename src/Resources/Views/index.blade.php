@extends('layouts.admin')
@section('content')
    <div class="row list_222">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <div class="cms_module_list module_list_1">
                <h3 class="menuText f-s-17">
                    <span class="module_icon_main"></span>Groups

                </h3>
                <hr>
                <ul class="list-unstyled menuList" id="components-list">
                    @foreach($groups as $key => $value)
                        <li class="@if($type == $key) active_class @endif">
                            <a href="?type={!! $key !!}" rel="tab" class="tpl-left-items">
                                <span class="module_icon"></span>{!! htmlentities($value) !!}
                            </a><a data-type="{!! $value !!}" class="add-class-modal pull-right gettype"></a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
        <img src="http://www.cardbugs.uk/resources/assets/images/ajax-loader5.gif" class="thumb img-loader hide"
             alt="a picture">
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
             <div class="tpl-list">

                {{--<div class="row template-search">--}}

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-l-0 p-r-0">
                    <div class="template-upload-button clearfix">

                    </div>
                </div>
                {{--</div>--}}
                <div class="container_main">
                    <div data-role="listitem">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            @if(count($data))
                                @foreach($data as $item)
                                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 m-10">
                                        <div class="bottom_part_1">
                                            <a href="{!! url('/admin/studios',[$type,$item]) !!}"><span>{!! $item !!}</span></a>
                                        </div>
                                    </div>
                                @endforeach
                            @endif

                            {{--<div class="bottom_part_1">--}}
                                {{--<a href="{!! url('/admin/studios/create/classes/basic') !!}"><span>Classes</span></a>--}}
                            {{--</div>--}}
                            {{--@if(count($data))--}}
                            {{--@foreach($data as $key => $item)--}}
                            {{--<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">--}}
                            {{--<div class="main_div_1" data-toolaction="selected"--}}
                            {{--data-classname="{!! $key !!}">--}}
                            {{--<div class="bottom_part_1" data-item="" data-key="true">--}}
                            {{--<a href="#">--}}
                            {{--@if($config)--}}
                            {{--<p><i class="{!! $config->prefix.' '.$key !!}"></i></p>--}}
                            {{--@endif--}}
                            {{--<span>--}}
                            {{--{!! $item->name !!}--}}
                            {{--<a href="{!! url('/admin/framework-versions/version/delete-import',$item->id) !!}"--}}
                            {{--class="btn btn-danger"><i class="fa fa-trash"></i></a>--}}
                            {{--</span>--}}
                            {{--</a>--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--@endforeach--}}
                            {{--@endif--}}
                        </div>

                        <div class="templates-list  m-t-20 m-b-10">

                            <div class="row templates m-b-10">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@section('CSS')
    {!! HTML::style('app/Modules/Resources/Resources/assets/css/new-store.css') !!}
    {!! HTML::style('app/Modules/Framework/Resources/Views/assets/css/styles.css?v=4.3') !!}
@stop