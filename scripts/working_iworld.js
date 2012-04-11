/* Author: Hemant Kumar Singh
 */ (function () {
    var list = "";
    var template1 = $("#template1").html(),
        template2 = $("#template2").html(),
        template3 = $("#template3").html();

    function replace(template, obj) {
        var t, key, reg;

        for (key in obj) {
            reg = new RegExp('{{' + key + '}}', 'ig');
            t = (t || template).replace(reg, obj[key]);
        }

        return t;
    }

    $(document).on("gotResult",function(e,result){
        //console.log($(this));
    });

    $.ajax({
        url: "http://textures.corp.apple.com:14040/ws/ws_ext?&servlet=GetProjectGroupsJson&token=1679461311",
        type: "get",
		dataType: "jsonp",
		success: function (data) {console.log(data)},
		//error: AjaxFailed
	
		error: function(response) 
		              { 
			
		              alert("response="+response); 
					  alert("response.status="+response.status); 
					  alert("response.textStatus="+response.textStatus); 
					  alert("response.errorThrown="+response.errorThrown); 
		    
		          },
		
	//	error(XMLHttpRequest, textStatus, errorThrown)
		
		});


		    function AjaxSucceeded(data) {
		console.log(data)        
		alert("Worked!");
		        //alert(result.d);
		    }

		    function AjaxFailed(data) {
		        alert("there is error");
		        //alert(result.status + ' ' + result.statusText);
		    }
	
/*
    $("#infopane").find(".project").not(':first').hide();

    $(".tabs").on("click", ".tab", function (e) {
        var id = $(this).data("id");
        $("#" + id).show().siblings(".project").hide();
        $(this).addClass("selected").siblings(".tab").removeClass("selected");
    });

    $("#footer").on("click", "#addfolder", function (e) {
        $(this).next().toggle();
        e.stopPropagation();
    });

    $.fn.center = function () {

        var element = this;
        //$(element).load(function(){
        changeCss();

        $(window).bind("resize", function () {
            changeCss();
        });

        function changeCss() {

            var elementHeight = $(element).outerHeight(),
                elementWidth = $(element).outerWidth(),
                windowWidth = $(window).width(),
                windowHeight = $(window).height();

            $(element).css({
                "position": "absolute",
                "left": windowWidth / 2 - elementWidth / 2,
                "top": windowHeight / 2 - elementHeight / 2
            });
        };
        //});
    };



    //smartPopup();
    $("ul.smartmenu").on("click", "li", function () {

        var text = $(this).text();


        switch (text) {

        case "Smart Folder":
            {
                $("#addsmartfoldersheetdialog").show().center();
                $(this).closest(".smartmenu").hide();
                break;
            }
        case "Duplicate Folder":
            {

            }
        case "Remove Smart Folder":
            {

            }
        default:
            break;

        }

    });

    //creating samrt folder
    $(".dialogbuttons").on("click", ".dialogbutton", function (e) {

        var chktest = $("#smart-folder-form").find("input[type='checkbox']:checked").length;

        if ($(e.target).text() === "Save" && $("#smartfoldername").val() !== "" && chktest != 0) {
            $("<li />", {
                text: $("#smartfoldername").val(),
                class: "folder-item",
                name: "Smart Folder"
            }).appendTo("#folderlist ul");
            $("#addsmartfoldersheetdialog").hide();
            $("#sheeterrormessage ul").html("");

        } else if ($("#smartfoldername").val() == "") {
            $("#sheeterrormessage ul").html($("<li />", {
                text: "- Enter a name for this folder."
            }));
        } else if (chktest == 0) {
            $("#sheeterrormessage ul").html($("<li />", {
                text: "- Select at least one of the filter criteria. Try clicking on a check box."
            }));
        } else {
            $("#sheeterrormessage ul").html($("<li />", {
                text: "- Please correct the errors and try again."
            }));
        }

        if ($(e.target).text() === "Cancel") {
            $("#addsmartfoldersheetdialog").hide();
            $("#sheeterrormessage ul").html("");
        }

        e.preventDefault();
    });

    //testing for checkbox under smart folder dialog
    $("#smart-folder-form").on("change", "input[type='checkbox']", function () {
        var $this = $(this).closest(".dialogoptiongroup").children("select");

        if (this.checked === true) {
            $this.removeAttr("disabled");
        } else {
            $this.attr("disabled", "disabled");
        }
    });


    //choose column
    $("#choosecolumn").on("click", function () {

        if (!$(".select-options").length) {

            $.ajax({
                url: "select-columns.html",
                type: "post",
                dataType: "html",
                success: function (data) {
                    $("body").append(data).find(".select-options").show().center();
                },
                error: function () {
                    console.log("My Error ");
                }
            });
        } else {
            $(".select-options").show();
        }

    });


            $("#projectgroupsheader").children("div").resizable({
                     handles:"e,w",
                     create: function(event, ui) { $(this).resizable( "option" , "alsoResize" , "."+$(this).attr("name") ); },
                     start: function(event, ui) {  }
                   
                });

            $("#projectgroupsheader").children("div").on("click",function(e){
                var $this=$(this),
                headercol=$this.attr("name"),
                cols=$(".projectgroup").find("."+headercol).sort(function(a,b){
                    return $(a).text() > $(b).text();
                }),
                nextelm=$this.next().attr("name");

                $.each(cols,function(i,obj){
                        $(obj).insertBefore($(obj).closest(".row").children("."+nextelm)).closest(".projectgroup").appendTo("#projectgroups");
                });

            });*/

})();