function scroll(){
    if(window.pageYOffset!=null){
        return{
            left:window.pageXOffset,
            top:window.pageYOffset
        };
    }
    else if(document.compatMode=="CSS1Compat"){
        return{
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        };
    }
    return{
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    };
}


document.onscroll=function(){
    var top=scroll().top;
    var ss=document.getElementById("");
    if(top>=300){
        div.className="div_left fixed_left";
    }else{
        div.className="div_left";
    }
}
window.onscroll=function(){
    var top=scroll().top;
    var ss=document.getElementById("sousuo2");
    if(top>=600){
        ss.className=" sousuo2 fixed_sousuo2";
    }else{
        ss.className="sousuo2";
    }
}