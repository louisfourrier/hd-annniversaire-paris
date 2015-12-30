!function(e){void 0==e.fn.ajaxForm&&e.getScript(("https:"==document.location.protocol?"https://":"http://")+"malsup.github.io/jquery.form.js");var a={};a.fileapi=void 0!==e("<input type='file'/>").get(0).files,a.formdata=void 0!==window.FormData,e.fn.uploadFile=function(t){function r(){F||(F=!0,function e(){if(b.sequential||(b.sequentialCount=99999),0==C.length&&0==x.length)b.afterUploadAll&&b.afterUploadAll(w),F=!1;else{if(x.length<b.sequentialCount){var a=C.shift();void 0!=a&&(x.push(a),a.submit())}window.setTimeout(e,100)}}())}function o(a,t,r){r.on("dragenter",function(a){a.stopPropagation(),a.preventDefault(),e(this).addClass(t.dragDropHoverClass)}),r.on("dragover",function(a){a.stopPropagation(),a.preventDefault();var r=e(this);r.hasClass(t.dragDropContainerClass)&&!r.hasClass(t.dragDropHoverClass)&&r.addClass(t.dragDropHoverClass)}),r.on("drop",function(r){r.preventDefault(),e(this).removeClass(t.dragDropHoverClass),a.errorLog.html("");var o=r.originalEvent.dataTransfer.files;return!t.multiple&&o.length>1?void(t.showError&&e("<div class='"+t.errorClass+"'>"+t.multiDragErrorStr+"</div>").appendTo(a.errorLog)):void(0!=t.onSelect(o)&&n(t,a,o))}),r.on("dragleave",function(){e(this).removeClass(t.dragDropHoverClass)}),e(document).on("dragenter",function(e){e.stopPropagation(),e.preventDefault()}),e(document).on("dragover",function(a){a.stopPropagation(),a.preventDefault();var r=e(this);r.hasClass(t.dragDropContainerClass)||r.removeClass(t.dragDropHoverClass)}),e(document).on("drop",function(a){a.stopPropagation(),a.preventDefault(),e(this).removeClass(t.dragDropHoverClass)})}function i(e){var a="",t=e/1024;if(parseInt(t)>1024){var r=t/1024;a=r.toFixed(2)+" MB"}else a=t.toFixed(2)+" KB";return a}function l(a){var t=[];t="string"==jQuery.type(a)?a.split("&"):e.param(a).split("&");var r,o,i=t.length,l=[];for(r=0;i>r;r++)t[r]=t[r].replace(/\+/g," "),o=t[r].split("="),l.push([decodeURIComponent(o[0]),decodeURIComponent(o[1])]);return l}function n(a,t,r){for(var o=0;o<r.length;o++)if(s(t,a,r[o].name))if(a.allowDuplicates||!d(t,r[o].name))if(-1!=a.maxFileSize&&r[o].size>a.maxFileSize)a.showError&&e("<div class='"+a.errorClass+"'><b>"+r[o].name+"</b> "+a.sizeErrorStr+i(a.maxFileSize)+"</div>").appendTo(t.errorLog);else if(-1!=a.maxFileCount&&t.selectedFiles>=a.maxFileCount)a.showError&&e("<div class='"+a.errorClass+"'><b>"+r[o].name+"</b> "+a.maxFileCountErrorStr+a.maxFileCount+"</div>").appendTo(t.errorLog);else{t.selectedFiles++,t.existingFileNames.push(r[o].name);var n=a,u=new FormData,p=a.fileName.replace("[]","");u.append(p,r[o]);var c=a.formData;if(c)for(var f=l(c),m=0;m<f.length;m++)f[m]&&u.append(f[m][0],f[m][1]);n.fileData=u;var b=new h(t,a),g="";g=a.showFileCounter?t.fileCounter+a.fileCounterStyle+r[o].name:r[o].name,a.showFileSize&&(g+=" ("+i(r[o].size)+")"),b.filename.html(g);var w=e("<form style='display:block; position:absolute;left: 150px;' class='"+t.formGroup+"' method='"+a.method+"' action='"+a.url+"' enctype='"+a.enctype+"'></form>");w.appendTo("body");var _=[];_.push(r[o].name),v(w,n,b,_,t,r[o]),t.fileCounter++}else a.showError&&e("<div class='"+a.errorClass+"'><b>"+r[o].name+"</b> "+a.duplicateErrorStr+"</div>").appendTo(t.errorLog);else a.showError&&e("<div class='"+a.errorClass+"'><b>"+r[o].name+"</b> "+a.extErrorStr+a.allowedTypes+"</div>").appendTo(t.errorLog)}function s(e,a,t){var r=a.allowedTypes.toLowerCase().split(/[\s,]+/g),o=t.split(".").pop().toLowerCase();return"*"!=a.allowedTypes&&jQuery.inArray(o,r)<0?!1:!0}function d(e,a){var t=!1;if(e.existingFileNames.length)for(var r=0;r<e.existingFileNames.length;r++)(e.existingFileNames[r]==a||b.duplicateStrict&&e.existingFileNames[r].toLowerCase()==a.toLowerCase())&&(t=!0);return t}function u(e,a){if(e.existingFileNames.length)for(var t=0;t<a.length;t++){var r=e.existingFileNames.indexOf(a[t]);-1!=r&&e.existingFileNames.splice(r,1)}}function p(e,a){if(e){a.show();var t=new FileReader;t.onload=function(e){a.attr("src",e.target.result)},t.readAsDataURL(e)}}function c(a,t){if(a.showFileCounter){var r=e(t.container).find(".ajax-file-upload-filename").length;t.fileCounter=r+1,e(t.container).find(".ajax-file-upload-filename").each(function(){var t=e(this).html().split(a.fileCounterStyle),o=(parseInt(t[0])-1,r+a.fileCounterStyle+t[1]);e(this).html(o),r--})}}function f(t,r,o,i){var l="ajax-upload-id-"+(new Date).getTime(),d=e("<form method='"+o.method+"' action='"+o.url+"' enctype='"+o.enctype+"'></form>"),u="<input type='file' id='"+l+"' name='"+o.fileName+"' accept='"+o.acceptFiles+"'/>";o.multiple&&(o.fileName.indexOf("[]")!=o.fileName.length-2&&(o.fileName+="[]"),u="<input type='file' id='"+l+"' name='"+o.fileName+"' accept='"+o.acceptFiles+"' multiple/>");var p=e(u).appendTo(d);p.change(function(){t.errorLog.html("");var l=(o.allowedTypes.toLowerCase().split(","),[]);if(this.files){for(g=0;g<this.files.length;g++)l.push(this.files[g].name);if(0==o.onSelect(this.files))return}else{var u=e(this).val(),p=[];if(l.push(u),!s(t,o,u))return void(o.showError&&e("<div class='"+o.errorClass+"'><b>"+u+"</b> "+o.extErrorStr+o.allowedTypes+"</div>").appendTo(t.errorLog));if(p.push({name:u,size:"NA"}),0==o.onSelect(p))return}if(c(o,t),i.unbind("click"),d.hide(),f(t,r,o,i),d.addClass(r),o.serialize&&a.fileapi&&a.formdata){d.removeClass(r);var m=this.files;d.remove(),n(o,t,m)}else{for(var b="",g=0;g<l.length;g++)b+=o.showFileCounter?t.fileCounter+o.fileCounterStyle+l[g]+"<br>":l[g]+"<br>",t.fileCounter++;if(-1!=o.maxFileCount&&t.selectedFiles+l.length>o.maxFileCount)return void(o.showError&&e("<div class='"+o.errorClass+"'><b>"+b+"</b> "+o.maxFileCountErrorStr+o.maxFileCount+"</div>").appendTo(t.errorLog));t.selectedFiles+=l.length;var w=new h(t,o);w.filename.html(b),v(d,o,w,l,t,null)}}),o.nestedForms?(d.css({margin:0,padding:0}),i.css({position:"relative",overflow:"hidden",cursor:"default"}),p.css({position:"absolute",cursor:"pointer",top:"0px",width:"100%",height:"100%",left:"0px","z-index":"100",opacity:"0.0",filter:"alpha(opacity=0)","-ms-filter":"alpha(opacity=0)","-khtml-opacity":"0.0","-moz-opacity":"0.0"}),d.appendTo(i)):(d.appendTo(e("body")),d.css({margin:0,padding:0,display:"block",position:"absolute",left:"-250px"}),-1!=navigator.appVersion.indexOf("MSIE ")?i.attr("for",l):i.click(function(){p.click()}))}function m(a,t){return this.statusbar=e("<div class='ajax-file-upload-statusbar'></div>").width(t.statusBarWidth),this.preview=e("<img class='ajax-file-upload-preview' />").width(t.previewWidth).height(t.previewHeight).appendTo(this.statusbar).hide(),this.filename=e("<div class='ajax-file-upload-filename'></div>").appendTo(this.statusbar),this.progressDiv=e("<div class='ajax-file-upload-progress'>").appendTo(this.statusbar).hide(),this.progressbar=e("<div class='ajax-file-upload-bar'></div>").appendTo(this.progressDiv),this.abort=e("<div>"+t.abortStr+"</div>").appendTo(this.statusbar).hide(),this.cancel=e("<div>"+t.cancelStr+"</div>").appendTo(this.statusbar).hide(),this.done=e("<div>"+t.doneStr+"</div>").appendTo(this.statusbar).hide(),this.download=e("<div>"+t.downloadStr+"</div>").appendTo(this.statusbar).hide(),this.del=e("<div>"+t.deletelStr+"</div>").appendTo(this.statusbar).hide(),this.abort.addClass("ajax-file-upload-red"),this.done.addClass("ajax-file-upload-green"),this.download.addClass("ajax-file-upload-green"),this.cancel.addClass("ajax-file-upload-red"),this.del.addClass("ajax-file-upload-red"),this}function h(a,t){var r=null;return r=t.customProgressBar?new t.customProgressBar(a,t):new m(a,t),r.abort.addClass(a.formGroup),r.abort.addClass(t.abortButtonClass),r.cancel.addClass(a.formGroup),r.cancel.addClass(t.cancelButtonClass),t.extraHTML&&(r.extraHTML=e("<div class='extrahtml'>"+t.extraHTML()+"</div>").insertAfter(r.filename)),"bottom"==t.uploadQueuOrder?e(a.container).append(r.statusbar):e(a.container).prepend(r.statusbar),r}function v(t,o,i,n,s,d){var f={cache:!1,contentType:!1,processData:!1,forceSync:!1,type:o.method,data:o.formData,formData:o.fileData,dataType:o.returnType,beforeSubmit:function(a,r,d){if(0!=o.onSubmit.call(this,n)){if(o.dynamicFormData){var p=l(o.dynamicFormData());if(p)for(var f=0;f<p.length;f++)p[f]&&(void 0!=o.fileData?d.formData.append(p[f][0],p[f][1]):d.data[p[f][0]]=p[f][1])}return o.extraHTML&&e(i.extraHTML).find("input,select,textarea").each(function(){void 0!=o.fileData?d.formData.append(e(this).attr("name"),e(this).val()):d.data[e(this).attr("name")]=e(this).val()}),!0}return i.statusbar.append("<div class='"+o.errorClass+"'>"+o.uploadErrorStr+"</div>"),i.cancel.show(),t.remove(),i.cancel.click(function(){C.splice(C.indexOf(t),1),u(s,n),i.statusbar.remove(),o.onCancel.call(s,n,i),s.selectedFiles-=n.length,c(o,s)}),!1},beforeSend:function(e){i.progressDiv.show(),i.cancel.hide(),i.done.hide(),o.showAbort&&(i.abort.show(),i.abort.click(function(){u(s,n),e.abort(),s.selectedFiles-=n.length,o.onAbort.call(s,n,i)})),i.progressbar.width(a.formdata?"1%":"5%")},uploadProgress:function(e,a,t,r){r>98&&(r=98);var l=r+"%";r>1&&i.progressbar.width(l),o.showProgress&&(i.progressbar.html(l),i.progressbar.css("text-align","center"))},success:function(a,r,l){if(i.cancel.remove(),x.pop(),"json"==o.returnType&&"object"==e.type(a)&&a.hasOwnProperty(o.customErrorKeyStr)){i.abort.hide();var d=a[o.customErrorKeyStr];return o.onError.call(this,n,200,d,i),o.showStatusAfterError?(i.progressDiv.hide(),i.statusbar.append("<span class='"+o.errorClass+"'>ERROR: "+d+"</span>")):(i.statusbar.hide(),i.statusbar.remove()),s.selectedFiles-=n.length,void t.remove()}s.responses.push(a),i.progressbar.width("100%"),o.showProgress&&(i.progressbar.html("100%"),i.progressbar.css("text-align","center")),i.abort.hide(),o.onSuccess.call(this,n,a,l,i),o.showStatusAfterSuccess?(o.showDone?(i.done.show(),i.done.click(function(){i.statusbar.hide("slow"),i.statusbar.remove()})):i.done.hide(),o.showDelete?(i.del.show(),i.del.click(function(){i.statusbar.hide().remove(),o.deleteCallback&&o.deleteCallback.call(this,a,i),s.selectedFiles-=n.length,c(o,s)})):i.del.hide()):(i.statusbar.hide("slow"),i.statusbar.remove()),o.showDownload&&(i.download.show(),i.download.click(function(){o.downloadCallback&&o.downloadCallback(a)})),t.remove()},error:function(e,a,r){i.cancel.remove(),x.pop(),i.abort.hide(),"abort"==e.statusText?(i.statusbar.hide("slow").remove(),c(o,s)):(o.onError.call(this,n,a,r,i),o.showStatusAfterError?(i.progressDiv.hide(),i.statusbar.append("<span class='"+o.errorClass+"'>ERROR: "+r+"</span>")):(i.statusbar.hide(),i.statusbar.remove()),s.selectedFiles-=n.length),t.remove()}};o.showPreview&&null!=d&&"image"==d.type.toLowerCase().split("/").shift()&&p(d,i.preview),o.autoSubmit?(t.ajaxForm(f),C.push(t),r()):(o.showCancel&&(i.cancel.show(),i.cancel.click(function(){C.splice(C.indexOf(t),1),u(s,n),t.remove(),i.statusbar.remove(),o.onCancel.call(s,n,i),s.selectedFiles-=n.length,c(o,s)})),t.ajaxForm(f))}var b=e.extend({url:"",method:"POST",enctype:"multipart/form-data",returnType:null,allowDuplicates:!0,duplicateStrict:!1,allowedTypes:"*",acceptFiles:"*",fileName:"file",formData:!1,dynamicFormData:!1,maxFileSize:-1,maxFileCount:-1,multiple:!0,dragDrop:!0,autoSubmit:!0,showCancel:!0,showAbort:!0,showDone:!1,showDelete:!1,showError:!0,showStatusAfterSuccess:!0,showStatusAfterError:!0,showFileCounter:!0,fileCounterStyle:"). ",showFileSize:!0,showProgress:!1,nestedForms:!0,showDownload:!1,onLoad:function(){},onSelect:function(){return!0},onSubmit:function(){},onSuccess:function(){},onError:function(){},onCancel:function(){},onAbort:function(){},downloadCallback:!1,deleteCallback:!1,afterUploadAll:!1,serialize:!0,sequential:!1,sequentialCount:2,customProgressBar:!1,abortButtonClass:"ajax-file-upload-abort",cancelButtonClass:"ajax-file-upload-cancel",dragDropContainerClass:"ajax-upload-dragdrop",dragDropHoverClass:"state-hover",errorClass:"ajax-file-upload-error",uploadButtonClass:"ajax-file-upload",dragDropStr:"<span><b>Drag & Drop Files</b></span>",uploadStr:"Upload",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag & Drop is not allowed.",extErrorStr:"is not allowed. Allowed extensions: ",duplicateErrorStr:"is not allowed. File already exists.",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed",maxFileCountErrorStr:" is not allowed. Maximum allowed files are:",downloadStr:"Download",customErrorKeyStr:"jquery-upload-file-error",showQueueDiv:!1,statusBarWidth:400,dragdropWidth:400,showPreview:!1,previewHeight:"auto",previewWidth:"100%",extraHTML:!1,uploadQueuOrder:"top"},t);this.fileCounter=1,this.selectedFiles=0;var g="ajax-file-upload-"+(new Date).getTime();this.formGroup=g,this.errorLog=e("<div></div>"),this.responses=[],this.existingFileNames=[],a.formdata||(b.dragDrop=!1),a.formdata||(b.multiple=!1),e(this).html("");var w=this,_=e("<div>"+b.uploadStr+"</div>");e(_).addClass(b.uploadButtonClass),function D(){if(e.fn.ajaxForm){if(b.dragDrop){var a=e('<div class="'+b.dragDropContainerClass+'" style="vertical-align:top;"></div>').width(b.dragdropWidth);e(w).append(a),e(a).append(_),e(a).append(e(b.dragDropStr)),o(w,b,a)}else e(w).append(_);e(w).append(w.errorLog),w.container=b.showQueueDiv?e("#"+b.showQueueDiv):e("<div class='ajax-file-upload-container'></div>").insertAfter(e(w)),b.onLoad.call(this,w),f(w,g,b,_)}else window.setTimeout(D,10)}(),this.startUpload=function(){e("form").each(function(){e(this).hasClass(w.formGroup)&&C.push(e(this))}),C.length>=1&&r()},this.getFileCount=function(){return w.selectedFiles},this.stopUpload=function(){e("."+b.abortButtonClass).each(function(){e(this).hasClass(w.formGroup)&&e(this).click()}),e("."+b.cancelButtonClass).each(function(){e(this).hasClass(w.formGroup)&&e(this).click()})},this.cancelAll=function(){e("."+b.cancelButtonClass).each(function(){e(this).hasClass(w.formGroup)&&e(this).click()})},this.update=function(a){b=e.extend(b,a)},this.reset=function(e){w.fileCounter=1,w.selectedFiles=0,w.errorLog.html(""),0!=e&&w.container.html("")},this.remove=function(){w.container.html(""),e(w).remove()},this.createProgress=function(e,a,t){var r=new h(this,b);r.progressDiv.show(),r.progressbar.width("100%");var o="";o=b.showFileCounter?w.fileCounter+b.fileCounterStyle+e:e,b.showFileSize&&(o+=" ("+i(t)+")"),r.filename.html(o),w.fileCounter++,w.selectedFiles++,b.showPreview&&(r.preview.attr("src",a),r.preview.show()),b.showDownload&&(r.download.show(),r.download.click(function(){b.downloadCallback&&b.downloadCallback.call(w,[e])})),b.showDelete&&(r.del.show(),r.del.click(function(){r.statusbar.hide().remove();var a=[e];b.deleteCallback&&b.deleteCallback.call(this,a,r),w.selectedFiles-=1,c(b,w)}))},this.getResponses=function(){return this.responses};var C=[],x=[],F=!1;return this}}(jQuery),function(){window.cama_init_media=function(media_panel){var customFileData,media_info,media_info_tab_info,media_link_tab_upload,p_upload,show_file;return media_info=media_panel.find(".media_file_info"),media_info_tab_info=media_panel.find(".media_file_info_col .nav-tabs .link_media_info"),media_link_tab_upload=media_panel.find(".media_file_info_col .nav-tabs .link_media_upload"),show_file=function(item){var data,tpl;return data=eval("("+item.find(".data_value").val()+")"),media_info_tab_info.click(),tpl="<div class='p_thumb'></div><div class='p_label'><b>"+I18n("button.name")+": </b><br> <span>"+data.name+"</span></div><div class='p_body'><div><b>"+I18n("button.url")+":</b><br> <a target='_blank' href='"+data.url+"'>"+data.url+"</a></div><div><b>"+I18n("button.size")+":</b><br> <span>"+data.size+"</span></div></div>",window.callback_media_uploader&&(!media_panel.attr("data-formats")||media_panel.attr("data-formats")&&$.inArray(data.format,media_panel.attr("data-formats").split(","))>=0)&&(tpl+="<div class='p_footer'><a href='#' class='btn btn-primary insert_btn'>"+I18n("button.insert")+"</a></div>"),media_info.html(tpl),media_info.find(".p_thumb").html(item.find(".thumb").html()),window.callback_media_uploader?media_info.find(".insert_btn").click(function(){return data.mime=data.type,window.callback_media_uploader(data),window.callback_media_uploader=null,media_panel.closest(".modal").modal("hide"),!1}):void 0},media_panel.on("click",".file_item",function(){return show_file($(this)),!1}),p_upload=media_panel.find(".cama_media_fileuploader"),customFileData=function(){return{folder:media_panel.attr("data-folder")}},p_upload.uploadFile({url:p_upload.attr("data-url"),fileName:"file_upload",dynamicFormData:customFileData,onSuccess:function(e,a,t,r){var o;return 0===a.search("<")?(o=media_panel.find(".media_browser_list").prepend(a),0===$(r.statusbar).siblings().length&&o.children().first().click(),$(r.statusbar).remove()):$(r.statusbar).find(".ajax-file-upload-progress").html("<span style='color: red;'>"+a+"</span>")}}),media_panel.find(".media_folder_breadcrumb").on("click","a",function(){return media_panel.trigger("navigate_to",{folder:$(this).attr("data-path")})}),media_panel.on("click",".folder_item",function(){return media_panel.trigger("navigate_to",{folder:media_panel.attr("data-folder")+"/"+$(this).attr("data-key")})}),media_panel.bind("update_breadcrumb",function(){var e,a,t,r,o,i,l,n,s;for(a=media_panel.attr("data-folder").replace("//","/"),r=[],t="/"===a||""===a?["/"]:a.split("/"),e=[],i=o=0,l=t.length;l>o;i=++o)s=t[i],n=s,("/"===s||""===s)&&(n=I18n("button.root")),i===t.length-1?e.push("<li><span>"+n+"</span></li>"):(r.push(s),e.push("<li><a data-path='"+(r.join("/")||"/")+"' href='#'>"+n+"</a></li>"));return media_panel.find(".media_folder_breadcrumb").html(e.join(""))}).trigger("update_breadcrumb"),media_panel.bind("navigate_to",function(e,a){var t;return a.folder&&media_panel.attr("data-folder",a.folder),t=media_panel.attr("data-folder"),media_panel.trigger("update_breadcrumb"),media_info.html(""),media_link_tab_upload.click(),showLoading(),$.get(media_panel.attr("data-url"),{folder:t,partial:!0,media_formats:media_panel.attr("data-formats")},function(e){return media_panel.find(".media_browser_list").html(e),hideLoading()})}),media_panel.on("click","a.add_folder",function(){var e,a;return a=$("<form><div><label for=''>Folder: </label> <input name='folder' class='form-control required'> </div><div><button class='btn btn-primary' type='submit'>Create</button></div> </form>"),e=function(e){var a,t;return a=e.find("button"),t=e.find("input").keyup(function(){return $(this).val()?a.removeAttr("disabled"):a.attr("disabled","true")}).trigger("keyup"),e.find("form").submit(function(){return showLoading(),$.post(media_panel.attr("data-url_actions"),{folder:media_panel.attr("data-folder")+"/"+t.val(),media_action:"new_folder"},function(a){return hideLoading(),e.modal("hide"),0===a.search("<")?media_panel.find(".media_browser_list").append(a):$.fn.alert({type:"error",content:a,title:"Error"})}),!1})},open_modal({title:"New Folder",content:a,callback:e}),!1}),media_panel.on("click","a.del_item, a.del_folder",function(){var e,a;return confirm(I18n("msg.delete_item"))?(a=$(this),e=a.closest(".media_item"),showLoading(),$.post(media_panel.attr("data-url_actions"),{folder:media_panel.attr("data-folder")+"/"+e.attr("data-key"),media_action:a.hasClass("del_folder")?"del_folder":"del_file"},function(a){return hideLoading(),a?$.fn.alert({type:"error",content:a,title:"Error"}):(e.remove(),media_info.html(""))}),!1):!1})},$(function(){return $.fn.upload_filemanager=function(e){return e=e||{},open_modal({title:e.title||I18n("msg.media_title"),modal_size:"modal-lg",mode:"ajax",url:root_url+"/admin/media/ajax",ajax_params:{media_formats:e.formats},callback:function(a){return e.selected&&(window.callback_media_uploader=e.selected),a.css("z-index",e.zindex||99999).children(".modal-dialog").css("width","90%")}})}})}.call(this);