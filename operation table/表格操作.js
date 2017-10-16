window.onload=function(){
	var hiddenTr=document.getElementById("hiddenTr");
	var btns=document.getElementsByTagName("button");
	
	
	/*给添加按钮绑定事件*/
btns[0].onclick=function(){
	var cloneTr=hiddenTr.cloneNode(true);
	cloneTr.removeAttribute("id");
	hiddenTr.parentNode.appendChild(cloneTr);
}

/*给删除按钮绑定事件*/
btns[1].onclick=function(){
	var inputs=document.getElementsByTagName("input");
    Array.prototype.slice.call(inputs,0).forEach(function(item,index){
    	if(item.checked){
    		hiddenTr.parentNode.removeChild(item.parentNode.parentNode);
    	}
    });
    
}

/*鼠标移到当前行时改变颜色*/
/*var trs=document.getElementsByTagName("tr");
Array.prototype.slice.call(trs,0).forEach(function(item){
	item.onmouseover=function(event){
		event.target.parentNode.style.backgroundColor="#FF0000";
	}
	item.onmouseout=function(event){
		event.target.parentNode.style.backgroundColor="";
	}
})
*/
/*事假代理*/
var body=hiddenTr.parentNode;
    body.onmouseover=function(event){
    	if(event.target.parentNode.nodeName="TR"){
    	    event.target.parentNode.style.backgroundColor="#FF0000";
	    }
    }
    
	body.onmouseout=function(event){
    	if(event.target.parentNode.nodeName="TR"){
    	    event.target.parentNode.style.backgroundColor="";
	    }
    }
	
  

}//onload结束位置
