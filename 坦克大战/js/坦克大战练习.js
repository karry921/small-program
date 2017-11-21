window.onload=function(){
	var tanke=document.getElementsByTagName("img");
	var btns=document.getElementsByTagName("button");
	var span=document.getElementsByTagName("span")[0];
	
	
	/*for(var i=0;i<btns.length;i++){
		btns[i].onclick=function(num){
		return function(){
			for(var j=0;j<btns.length;j++){
				btns[j].className="";
			}
			    btns[num].className="bt01";
		  }
		}(i);
	}*/
	
	
	/*手动移动*/
	btns[0].onclick=function(){
		tanke[0].style.left=tanke[0].offsetLeft+20+"px";
		/*单击一次手动移动，居左距离就增加20px*/
	}
	
	/*发射*/
	btns[1].onclick=function(){
		var time=3;
		var id1=setInterval(function(){
			/*setInterval();按照指定的时间间隔重复执行代码
		                  内部有两个参数，第一个为要执行的代码，第二个为毫秒数；*/
			span.innerHTML=time--;
			if(time<=0){
				clearInterval(id1);
				span.innerHTML="咻~"
			}
		},1000);
		
		setTimeout(function(){
			tanke[0].style.left=tanke[0].offsetLeft+400+"px";
		},3000);
		
	}
	
	
	/*赛跑*/
	btns[2].onclick=function(){
	    var id2=setInterval(function(){
	    	
	    	var random01=parseInt(Math.random()*10);
	    	var random02=parseInt(Math.random()*10);
	    	
	    	tanke[0].style.left=tanke[0].offsetLeft+random01+"px";
	    	tanke[1].style.left=tanke[1].offsetLeft+random02+"px";
	    	
	    	if(tanke[0].offsetLeft>820 || tanke[1].offsetLeft>820){
	    		clearInterval(id2);
	    		if(tanke[0].offsetLeft>820){
	    			alert("坦克0胜出！！！");
	    		}else{
	    			alert("坦克1胜出！！！");
	    		}
	    	}
	    },50);
	}
	
	
    /*自动移动*/
    btns[3].onclick=function(){
    	var clear01=setInterval(function(){
    		tanke[0].style.left=tanke[0].offsetLeft+10+"px";
    		if(tanke[0].offsetLeft>820){
    			clearInterval(clear01);
    			tanke[0].src="images/tanke_down.jpg";
    			
    			var clear02=setInterval(function(){
		    		tanke[0].style.top=tanke[0].offsetTop+10+"px";
		    		if(tanke[0].offsetTop>420){
		    			clearInterval(clear02);
		    			tanke[0].src="images/tanke_left.jpg";
		    			
		    			var clear03=setInterval(function(){
				    		tanke[0].style.left=tanke[0].offsetLeft-10+"px";
				    		if(tanke[0].offsetLeft<220){
				    			clearInterval(clear03);
				    			tanke[0].src="images/tanke_up.jpg";
		    			
			    			var clear04=setInterval(function(){
					    		tanke[0].style.top=tanke[0].offsetTop-10+"px";
					    		if(tanke[0].offsetTop<60){
					    			clearInterval(clear04);
					    			tanke[0].src="images/tanke_right.jpg";
						    		}
						    	},50);
					    	}
					    },50);
			    	}
			    },50);
	    	}
	    },50);
    }
}//load结束位置
