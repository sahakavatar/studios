<div class="col-xs-12 col-sm-6 frameworkoptionbox formoptions textBuilderEditor ">
                <div data-tabpreview="setting" class="collapse in">
                    <ul class="nav nav-tabs nav-justified studiotabs hide" data-type-selector>
                        <li role="presentation" class="active" data-role="normal"><a href="#default" role="tab" data-toggle="tab">Default</a></li>
                        <li role="presentation" data-role="hover"><a href="#hover" role="tab" data-toggle="tab">Hover</a></li>
                        <li role="presentation" data-role="selected"><a href="#linked" role="tab" data-toggle="tab">Linked</a></li>
                    </ul>
                    
                    
                    <ul class="stepNav list-unstyled nav-justified tabStepnav clearfix">
                        <li role="presentation" class="active" ><a href="#studio_style" role="tab" data-toggle="tab">Style</a></li>
                        <li role="presentation"><a href="#studio_function" role="tab" data-toggle="tab">Functions</a></li>
                    </ul>
                    
                    
                    <div class="tab-content p-15">
                        <div class="tab-pane active" aria-expanded="true" role="tabpanel" id="studio_style">
                          
                            <div class="panel panel-default">
                                <div class="panel-heading">Add Master Classes</div>
                                <div class="panel-body">
                                    <div class="form-inline p-b-20 hide">  <div class="form-group">
                                            <select class="form-control" data-selectmaster="element">
                                                <option value="css">Main Container</option>
                                                <option value="div"> Div </option>
                                                <option value="h1"> H1 </option>
                                                <option value="h2"> H2 </option>
                                                <option value="h3"> H3 </option>
                                                <option value="h4"> H4 </option>
                                                <option value="h5"> H5 </option>
                                                <option value="h6"> H6 </option>
                                                <option value="p"> p </option>
                                                <option value="button"> button </option>
                                                <option value="a"> a </option>
                                                <option value="hr"> hr </option>
                                                <option value="img">img</option>
                                                <option value="span">span</option>
                                                <option value="input">input</option>
                                                <option value="ul">ul</option>
                                                <option value="ol">ul</option>
                                                <option value="li">li</option>
                                                <option value="b">b</option>
                                                <option value="table">table</option>
                                                <option value="tr">tr</option>
                                                <option value="td">td</option>
                                                <option value="th">th</option>
                                                <option value="label ">label</option>
                                                <option value="nav">nav</option>
                                            </select>
                                        </div>
                                        <button type="button" class="btn btn-default" data-buttonrole="selectmaster">Select Master</button>
                                    </div>
                                    <div class="form-inline p-b-20 hide">
                                        <div class="form-group">
                                            <select class="form-control" data-selectcssmaster="target">
                                                <option value="div"> Div </option>
                                                <option value="h1"> H1 </option>
                                                <option value="h2"> H2 </option>
                                                <option value="h3"> H3 </option>
                                                <option value="h4"> H4 </option>
                                                <option value="h5"> H5 </option>
                                                <option value="h6"> H6 </option>
                                                <option value="p"> p </option>
                                                <option value="button"> button </option>
                                                <option value="a"> a </option>
                                                <option value="hr"> hr </option>
                                                <option value="img">img</option>
                                                <option value="span">span</option>
                                                <option value="input">input</option>
                                                <option value="ul">ul</option>
                                                <option value="ol">ul</option>
                                                <option value="li">li</option>
                                                <option value="b">b</option>
                                                <option value="table">table</option>
                                                <option value="tr">tr</option>
                                                <option value="td">td</option>
                                                <option value="th">th</option>
                                                <option value="label ">label</option>
                                                <option value="nav">nav</option>
                                            </select>
                                            <select class="form-control" data-selectcssmaster="cssselector">
                                                <option>Select Selector</option>
                                                <option value="el,val" data-mode="mel">element,element</option>
                                                <option value="el>val" data-mode="mel">element>element</option>
                                                <option value="el~val" data-mode="mel">element+element</option>
                                                <option value="el+val" data-mode="mel">element1~element2</option>
                                                <option value="::after">::after</option>
                                                <option value="::before">::before</option>
                                                <option value=":empty">:empty</option>
                                                <option value=":hover">:hover</option>
                                                <option value=":first-child">:first-child</option>
                                                <option value="::first-letter">::first-letter</option>
                                                <option value="::first-line">::first-line</option>
                                                <option value=":first-of-type">:first-of-type</option>
                                                <option value=":focus">:focus</option>
                                                <option value=":last-child">:last-child</option>
                                                <option value=":last-of-type">:last-of-type</option>
                                                <option value=":not(val)" data-mode="mel">:not(selector)	</option>
                                                <option value=":nth-child(val)" data-mode="number">:nth-child(1)</option>
                                                <option value=":nth-last-child(val)" data-mode="number">:nth-last-child(1)</option>
                                                <option value=":nth-last-of-type(val)" data-mode="number">:nth-last-of-type(1)</option>
                                                <option value=":nth-of-type(val)" data-mode="number">:nth-of-type(1)</option>
                                                <option value=":nth-child(odd)">:nth-child(odd)</option>
                                                <option value=":nth-child(even)" >:nth-child(even)</option>
                                                <option value=":nth-child(1n+0)">:nth-child(1n+0)</option>
                                                <option value=":nth-child(2n+0)">:nth-child(2n+0)</option>
                                                <option value=":nth-child(3n+0)">:nth-child(3n+0)</option>
                                                <option value=":nth-child(4n+0)">:nth-child(4n+0)</option>
                                                <option value=":only-of-type">:only-of-type</option>
                                                <option value=":only-child">:only-child</option>
                                                <option value=":checked">input:checked</option>
                                                <option value=":disabled">input:disabled</option>
                                                <option value=":enabled">input:enabled</option>
                                                <option value=":focus">input:focus</option>
                                                <option value=":invalid">input:invalid</option>
                                                <option value=":optional">input:optional</option>
                                                <option value=":read-only">input:read-only</option>
                                                <option value=":read-write">input:read-write</option>
                                                <option value=":required">input:required</option>
                                                <option value=":valid">input:valid</option>
                                            </select>
                                            <select class="form-control hide" data-cssseelctortype="mel" data-selectcssmaster="mel">
                                                <option value="div"> Div </option>
                                                <option value="h1"> H1 </option>
                                                <option value="h2"> H2 </option>
                                                <option value="h3"> H3 </option>
                                                <option value="h4"> H4 </option>
                                                <option value="h5"> H5 </option>
                                                <option value="h6"> H6 </option>
                                                <option value="p"> p </option>
                                                <option value="button"> button </option>
                                                <option value="a"> a </option>
                                                <option value="hr"> hr </option>
                                                <option value="img">img</option>
                                                <option value="span">span</option>
                                                <option value="input">input</option>
                                                <option value="ul">ul</option>
                                                <option value="ol">ul</option>
                                                <option value="li">li</option>
                                                <option value="b">b</option>
                                                <option value="table">table</option>
                                                <option value="tr">tr</option>
                                                <option value="td">td</option>
                                                <option value="th">th</option>
                                                <option value="label ">label</option>
                                                <option value="nav">nav</option>
                                            </select>
                                            <input class="form-control hide" type="text" data-cssseelctortype="number" value="" placeholder="1" />
                                        </div>
                                        <button type="button" class="btn btn-default" data-buttonrole="selectcssselector">Add</button>
                                    </div>
                                  <div data-role="elementtree" data-roles="cssselectorttree">

                                    </div>
                                      <!--<div data-role="elementtree">
                                      </div>-->
                                </div>
                            </div>

                            <div class="panel panel-default hide">
                                <div class="panel-heading">Add CSS Selector</div>
                                <div class="panel-body">

                                    
                                    <div >

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" aria-expanded="true" role="tabpanel" id="studio_function">
                            <form data-role="unitsetting">@include("framework::UnitCreator._partials.".$data["id"].".settings")</form>
                        </div>
                        <textarea name="less_data" class="form-control hide" data-export="css"></textarea>
                        <textarea name="json_data" class="form-control hide" data-export="json"></textarea>
                        <textarea name="componentsjson" class="form-control hide" data-export="componentsjson"></textarea>
                        <textarea name="componentsextra" class="form-control hide" data-export="componentsextra"></textarea>
                        <textarea name="tabclass" class="form-control hide" data-export="tabclass"></textarea>
                    </div>
                    
                    
                </div>
                <div class="component_setting collapse "  data-tabpreview="selectclass">
                    <div class="tab-content p-15">
                        	 <div class="row p-t-20" data-role="selectedClasses">
								<div class="col-xs-12" >
										Temporarily Classes : <span data-temporarilyclasses=""></span>
								 </div>
							 </div>	
                        
                        
                         @include('studios::_partial.component.html.container_blade_classes')
                        
                            <div class="row p-t-20" data-role="selectedClasses">
								<div class="col-xs-12">
									<div class="panel panel-default">
										<div class="panel-heading">Selected Classes</div>
										<div class="panel-body" data-role="previewslclasses">Example </div>
									</div>
								</div>
							</div>       
                          <div class="row buttons_bottom m-t-15">
                              <button class="save_class" data-buttonrole="save"><i class="fa fa-check" aria-hidden="true"></i>Save
                              </button>
                              <button class="decline_class" data-buttonrole="decline"><i class="fa fa-close" aria-hidden="true"></i>Decline
                              </button>
                          </div>
                    </div>
                </div>
            </div>