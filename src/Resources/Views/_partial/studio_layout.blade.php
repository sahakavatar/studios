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
    {!! \App\Modules\Studios\Models\Studios::linkAllCss() !!}
    {!! \App\Modules\Studios\Models\Studios::linkAllCssByType($type) !!}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="/resources/assets/js/jquery-2.1.4.min.js"></script>

    <script src="/resources/assets/js/jqueryui/js/jquery-ui.min.js"></script>

    @yield('CSS')
    @stack('css')
</head>
<body>
@yield('content')


<script src="/resources/assets/js/bootstrap.min.js"></script>
<script src="/resources/assets/js/admin.js?v=6.0"></script>
<script src="/resources/assets/js/bootbox/js/bootbox.min.js"></script>
<script src="/app/Modules/FrameworkVersions/Resources/Views/assets/element-class/main.js?v=0.20"></script>
{!! \App\Modules\Studios\Models\Studios::linkAllJs() !!}
{!! \App\Modules\Studios\Models\Studios::linkAllJsByType($type) !!}
<input  data-pagetype value="{!! $type !!}">
<input  data-callback="save" value="{!! $callback !!}">
<input  data-section="save" value="{!! $section !!}">
<input  data-pageid="save" value="{!! $id !!}"> 
<input name="title" type="text" class="form-control hide" value="{!! $name !!}" id="classname" data-role="classname" required>
@yield('JS')
@stack('javascript')
</body>

</html>