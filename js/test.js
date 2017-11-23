/**
 * Created by xiefei1 on 2017/9/12.
 */
function aa(){
    $.ajax({
        cache : true,
        async : false,
        type : "POST",
        url : url,
        dataType : "json",
        data : jsonData,
        beforeSend : function() {
            $.blockUI({
                message : $("#salesLoading"),
                css : {
                    'border' : 'none',
                    'z-index' : '9999'
                }
            });
            $(".blockOverlay").css({
                'z-index' : '9998'
            });
        },
        success: function(data){
            $.unblockUI();
            console.log(data);
            if (b) {
                if (data.message) {
                    window.wxc.alert(data.message);
                }
            }
        }
    });
}



