$dom="fedbytes.com";
$(document).click(function (e) {
    if ($(e.target).closest(".openbtn").length > 0) {
        $('#mySidebar').toggleClass("sidebaropen");
    } else {
        $('#mySidebar').removeClass("sidebaropen");
    }
});
$(document).ready(function () {
    autoPadding();
    setHost();  
    setTimeout(function () {
        autoPadding();
    }, 5000);
})
$(window).on('resize', function () {
    autoPadding();
});
let autoPadding = () => {
    var top_pad = ($(window).height() - ($('.section-1').height() + $('.section-2').height())) / 2;
    if (top_pad > 0) { $('body').css("padding-top", top_pad + "px"); }
}
let setHost=()=>{
    let host=window.location.hostname;
    $('#hostname').html(""+capitalize(host)+"");
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }