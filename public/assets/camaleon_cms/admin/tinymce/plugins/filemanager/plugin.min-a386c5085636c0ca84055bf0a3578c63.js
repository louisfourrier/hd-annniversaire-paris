tinymce.PluginManager.add("filemanager",function(e){function n(){var n=e.dom;$.fn.upload_filemanager({selected:function(t){var a={href:t.url,target:"_blank",rel:null,"class":null,title:t.name};e.insertContent(n.createHTML("a",a,n.encode(t.name)))}})}e.addButton("filemanager",{icon:"browse",tooltip:"Insert file",onclick:n,stateSelector:"img:not([data-mce-object])"}),e.addMenuItem("filemanager",{icon:"browse",text:"Insert file",onclick:n,context:"insert",prependToContext:!0})});