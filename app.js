window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 136 || document.documentElement.scrollTop > 136)
    {
        document.getElementById("navbar").style.top = "0";
    }
    else
    {
        document.getElementById("navbar").style.top = "-136px";
    }
}