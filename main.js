$(document).ready(function(){
    $("#tabs").on("click", "a", function(e){
        var tab = $(this).attr("href")
        $(".content").removeClass("show")
        $(tab).addClass("show")
    })
})

console.log("hello world")