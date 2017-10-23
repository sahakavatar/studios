<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>Studio</title>
    <link media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/admin.css?v=0.392">
    <link media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/dashboard-css.css?v=0.2">


    <link id="stylecolor" media="all" type="text/css" rel="stylesheet" href="/resources/assets/css/admin-theme.css?v2.91">
    <link href='/resources/assets/fonts/FontAwesome/font-awesome.css' rel='stylesheet' />
    <link href='/resources/assets/fonts/BBIcons/bb-icons.css' rel='stylesheet' />
     {!! HTML::style('/admin/framework-versions/version/get-css-live') !!}
    {!! HTML::style('/resources/assets/js/bootstrap-select/css/bootstrap-select.min.css') !!}
    {!! HTML::style('/resources/assets/js/jquery.mCustomScrollbar/css/jquery.mCustomScrollbar.css') !!}
    {!! HTML::style('/resources/assets/js/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css') !!}
    {!! HTML::style('/resources/assets/js/animate/css/animate.css') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/css/styles.css?v=50') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/Classes/container/css/container-studio.css?v=0.60') !!}
    {!! HTML::style('/app/Modules/Studios/Resources/Views/assets/text/css/text-studio.css?v=3.52') !!}
    <style id="savedcss" data-role="savedcss">

    </style>
    {!! \Sahakavatar\Studios\Models\Studios::linkAllCss() !!}
    {!! \Sahakavatar\Studios\Models\Studios::linkAllCssByType($type) !!}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="/resources/assets/js/jquery-2.1.4.min.js"></script>

    <script src="/resources/assets/js/jqueryui/js/jquery-ui.min.js"></script>

    @yield('CSS')
    @stack('css')
</head>
<body>

@include('studios::_partial.header_versions')

@yield('content')

 <input id="sendajaxdata" data-type="{!! $type !!}" data-name="{!! $data['name'] or 'classname' !!}" data-id="{!! $data['id'] or null !!}" data-edit="{!! $data['edit'] or 0 !!}">
<script src="/resources/assets/js/bootstrap.min.js"></script>
<script src="/resources/assets/js/admin.js?v=6.0"></script>
<script src="/resources/assets/js/bootbox/js/bootbox.min.js"></script>
<script src="/app/Modules/Studios/Resources/Views/assets/js/versions_main.js?v=0.8"></script>
 {!! HTML::script('/resources/assets/js/bootstrap-select/js/bootstrap-select.min.js') !!}
    {!! HTML::script('/resources/assets/js/jquery.mCustomScrollbar/js/jquery.mCustomScrollbar.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js') !!}
    {!! HTML::script('/resources/assets/js/bootbox/js/bootbox.min.js') !!}
    {!! HTML::script('/resources/assets/js/media-lightbox.js') !!}
    {!! HTML::script('/resources/assets/js/less.js') !!}
    {!! HTML::script('/resources/assets/js/underscore-min.js') !!}
    {!! HTML::script('/resources/assets/js/ace-editor/ace.js') !!}
    {!! HTML::script('/app/Modules/Studios/Resources/Views/assets/js/studio-plugin-new.js?=v0.7') !!}
{!! \Sahakavatar\Studios\Models\Studios::linkAllJs() !!}
{!! \Sahakavatar\Studios\Models\Studios::linkAllJsByType($type) !!}
<input  data-pagetype value="{!! $type !!}">
<input  data-callback="save" value="{!! $data['call_back'] or null!!}">
<input  data-section="save" value="{!! $data['section'] or null!!}">
<input  data-pageid="save" value="{!! $data['id'] or null !!}">
<input  data-edit="edit" value="{!! $data['edit'] or 0 !!}">







@yield('JS')
@stack('javascript')
</body>

</html>