<section id="menuBuilderHeader">
        <section class="container-fluid p-0">
            <div class="row">
				
                <div class="col-xs-4 col-sm-4 p-t-10"><input name="title" type="text" class="form-control" value="{!! $name or 'classname' !!}" id="classname" data-role="classname" required></div>

                <div class="col-xs-8 col-sm-8 loginMobilePosition">
                    @if(\Auth::check())
                        <div class="login-data-col">
                            <div class="login-profile">
                                <a href="#" class="btn btn-success" data-callback="{!! @$callback !!}" data-save="class" >Save</a>
                                {{--<figure class="profileImg"> <img src="{!! BBGetUserAvatar() !!}" alt="" class="img-rounded"></figure>--}}
                                {{--{!! BBGetUserName() !!} <i class="iconheadersprite icon-downarrow"></i> --}}
                                <a href="#" class="closeIcon" data-dismiss="modal" style="background-color: transparent;">
                                    <i class="icon-close-red"></i></a> </div>
                        </div>
                    @else
                        <div class="login-data-col">
                            <div class="login-profile"> <a href="#" class="closeIcon" data-dismiss="modal"><i class="icon-close-red"></i></a> </div>
                            <div class="menuIcons">
                                <a href="#" class="btn save-button">Save</a>
                                <!--<a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn save-button open-login">Save</a>
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