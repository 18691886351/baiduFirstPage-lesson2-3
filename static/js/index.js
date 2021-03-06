/*
实现了导航栏目中“设置”的鼠标moveover以及moveout事件：鼠标moveover的时候显示，moveout消失
*/
function settingMenuHideOrdisplay() {
    if(document.getElementById("setting_menu").className == "setting_menu_hide"){
    	document.getElementById("setting_menu").className="setting_menu_show"
    }else{
    	document.getElementById("setting_menu").className="setting_menu_hide"
    }
}

/*
实现了导航栏目中“更多”的鼠标moveover以及moveout事件：鼠标moveover的时候显示，moveout消失
*/
function productsMenuHideOrdisplay() {
    if(document.getElementById("products_menu").className == "products_menu_hide"){
    	document.getElementById("products_menu").className="products_menu_show"
    }else{
    	document.getElementById("products_menu").className="products_menu_hide"
    }
}


/*
实现了搜索栏获得焦点后改变其父级元素的边框颜色,失去焦点还原
*/
function changeInputParentBorderColor() {
    if(document.getElementById("input_div").className == "text_span"){
        document.getElementById("input_div").className="text_span_focus"
    }else{
        document.getElementById("input_div").className="text_span"
    }
}