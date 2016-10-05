
window.onload=function(){
	/*//主体内容mainone选项卡

	//获取类名为link的对象
	var link=getClass('link',document);
	//获取link里面的a标签
	var links=link[0].getElementsByTagName('a')
	//获取类名为list的对象
	var lists=getClass('list',document)
	//默认选中第一个a标签 一种方法 另一种方法在html中给a标签添加样式
	// links[0].style.backgroundColor='pink';
	//遍历出每一个a标签 links.length为a标签的长度
	for(var i=0;i<links.length;i++){
		//给links[]对象设置一个属性index来保存a标签的下标
		links[i].index=i;
		//鼠标事件  对象.事件=function(){}
		links[i].onmousemove=function(){
			// alert(this.index) //this.index 操作哪个代表哪个的下标
			//事件触发时，所有的list里面的所有内容清空
			for(var j=0;j<links.length;j++){
				lists[j].style.display='none'
				// links[j].style.backgroundColor='#fff';
				//a标签背景颜色透明
				 links[j].style.borderBottom='0' 
				 
			}
			//触发哪个下标，显示哪个下标对应的内容
			lists[this.index].style.display='block'
			//this当前选中的a
			 this.style.borderBottom='5px solid #e5004f'
		}
	}
*/
	
	//下拉菜单  我的银泰
	var dropdown=$('.top_drop')[0]
	var drop=$('.drop')[0]
	hover(dropdown,function(){
		drop.style.display='block';
		// dropdown.style.backgroundColor='#fff'
	},function(){
		drop.style.display='none'
		// dropdown.style.backgroundColor=''
	})

	//微信 手机
	var topTl1=$('.top_tl1')[1]
	var weixinBox=$('.weixinBox',topTl1)[0];
	var weixhid=$('.weixhid',weixinBox)[0]
	var topTlimg=$('.top_tlimg')[1];
	var topTlt=$('img',topTlimg)[0]
	console.log(topTlt)
	hover(weixinBox,function(){
		weixhid.style.display='block';
		weixinBox.style.backgroundColor='#fff';
	},function(){
		weixhid.style.display='none'
		weixinBox.style.backgroundColor='';


	})



	var topTl2=$('.top_tl1')[2];
	var phoneBox=$('.phoneBox',topTl2)[0];
	var phhid=$('.phhid',phoneBox)[0]
	hover(phoneBox,function(){
		phhid.style.display='block';
		phoneBox.style.backgroundColor='#fff';
	},function(){
		phhid.style.display='none';
		phoneBox.style.backgroundColor='';

	})



	//主体内容mainone的选项卡
	var mainbox1=getClass('main_box1',document)[0]
	var main1left=getClass('main_oneleft',mainbox1)[0] 
	var mainonet=getClass('main_onet',main1left)[0]
	var mainonetad=getClass('main_onet1',mainonet)
	var mainonets=mainonet.getElementsByTagName('a')
	var mainonems=getClass('main_onem',main1left)
	var sanjiao=mainonet.getElementsByTagName('span')
	// console.log(sanjiao)
	// console.log(mainonems)
	// var mainsanjiao=document.createElement('div')
	// mainonetad.appendChild(mainsanjiao)
	sanjiao[0].style.display='block'
	mainonetad[0].style.borderBottom='5px solid #e4004f'
	for(var i=0;i<mainonets.length;i++){
		mainonets[i].index=i;
		mainonets[i].onmouseover=function(){
			for(var j=0;j<mainonems.length;j++){
				mainonems[j].style.display='none';
				mainonetad[j].style.borderBottom=''
				mainonets[j].style.fontWeight='';
				sanjiao[j].style.display=''

			}
			mainonems[this.index].style.display='block';
			mainonetad[this.index].style.borderBottom='5px solid #e4004f'
			mainonets[this.index].style.fontWeight='bold';
			sanjiao[this.index].style.display='block'
		}
	}
	//banner轮播图

	//获取whellbox
	var whellbox=getClass('whell-box',document)
	//获取whellbox中的a标签
	var as=whellbox[0].getElementsByTagName('a')
	//获取whellbox里面li的大盒子
	var lunbo=getClass('lunbo',whellbox[0])
	//获取li
	var lis=lunbo[0].getElementsByTagName('li')
	//获取whellbox中左右按钮的大盒子
	var bbutton=getClass('ban-button',whellbox[0])[0]
	//从按钮的盒子中获取左边的按钮
	var bleft=getClass('butleft',bbutton)[0]
	//从按钮的盒子中获取右边的按钮
	var bright=getClass('butright',bbutton)[0]

	var index=0;
	as[0].style.zIndex=10;
	lis[0].style.backgroundColor='#e5004f'
	var t;
	t=setInterval(move,2000)
	function move(){
		index++;		
		if(index==as.length){index=0};
		for(var i=0;i<as.length;i++){
			lis[i].style.backgroundColor=''
			as[i].style.zIndex=0;
		}
		lis[index].style.backgroundColor='#e5004f'
		 as[index].style.zIndex=10;
	}
	 whellbox[0].onmouseover=function(){
	 	clearInterval(t)
	 }

	 whellbox[0].onmouseout=function(){
	 	t=setInterval(move,2000)
	 }
	 for(var j=0;j<as.length;j++){
	 	lis[j].index=j;
	 	lis[j].onmouseover=function(){
	 		for(var i=0;i<as.length;i++){
	 			as[i].style.zIndex=0;
	 			lis[i].style.backgroundColor=''
	 		}
	 		as[this.index].style.zIndex=10;
	 		lis[this.index].style.backgroundColor='#e5004f'
	 		index=this.index;
	 	}
	 }
	bright.onclick=function(){
		move()
	}
	bleft.onclick=function(){

		index--;		
		if(index==-1){index=as.length-1};

		for(var i=0;i<as.length;i++){
			lis[i].style.backgroundColor=''
			as[i].style.zIndex=0;
		}
		lis[index].style.backgroundColor='#e5004f'
		 as[index].style.zIndex=10;
		 
	
	}

	// 左右按钮隐藏
	var bannerBox=$('.banner_boxm')[0]
	bannerBox.onmouseover=function(){
		bleft.style.display='block';
		bright.style.display='block';
	}
	bannerBox.onmouseout=function(){
		bleft.style.display='none';
		bright.style.display='none';
	}

	//banner左边的选项卡
	 var bannerbox=getClass('banner_box',document)[0] 
	 var banimg=getClass('banner_img',bannerbox)[0]
	 var banmain1=getClass('banner_main1',banimg)[0]
	 var banmain1s=getClass('banner_m1w',banmain1)
	 // console.log(banmain1s)
	 var banmhids=getClass('banner_mhid',banimg)
	 // console.log(banmhids)

	 for(var j=0;j<banmhids.length;j++){
	 			banmhids[j].style.display='none'
	 		}

	 for(var i=0;i<banmain1s.length;i++){
	 	banmain1s[i].index=i;
	 	banmain1s[i].onmouseover=function(){

	 		for(var j=0;j<banmhids.length;j++){
	 			banmain1s[j].style.backgroundColor=''
	 			banmhids[j].style.display='none'
	 		}
	 		banmain1s[this.index].style.backgroundColor='#e4004f'
	 		banmhids[this.index].style.display='block'
	 	}
	 	banmhids[i].onmouseout=function(){
		 		for(var j=0;j<banmhids.length;j++){
		 			banmain1s[j].style.backgroundColor=''
		 			banmhids[j].style.display='none'
		 		}
	 	}

	 }

	 for(var i=0;i<banmhids.length;i++){
	 	banmhids[i].index=i;
	 	 hover(banmhids[i],function(){
	 	 	banmhids[this.index].style.display='block'
		 },function(){
		 	banmhids[this.index].style.display='none'
		 })

	 }
	

	 //mainbox3选项卡
	 //获取a标签
	 var mainbox3=getClass('main_box3',document)[0]
	 var maint=getClass('main_threemr',mainbox3)[0] 
	 var maintm=getClass('main_threemrt',maint)[0]
	  var maintmad=getClass('main_threemrtw', maintm)
	  // console.log(maintmad)
	 var maintma=maintm.getElementsByTagName('a')
	 //获取显示内容
	 var main3big=getClass('main_thbig',maint)
	 // console.log(main3big)
	 var sanjiao2=maintm.getElementsByTagName('span')

	 maintmad[0].style.borderBottom='3px solid #e70050'
	 sanjiao2[0].style.display='block'
	 for(var i=0;i<maintma.length;i++){
	 	maintma[i].index=i;
	 	maintma[i].onmouseover=function(){
	 		for(var j=0;j<main3big.length;j++){
	 			main3big[j].style.display='none';
	 			maintmad[j].style.borderBottom=''
	 			maintma[j].style.fontWeight=''
	 			sanjiao2[j].style.display=''

	 		}
	 		main3big[this.index].style.display='block'
	 		maintmad[this.index].style.borderBottom='3px solid #e70050'
	 		maintma[this.index].style.fontWeight='bold'
	 		sanjiao2[this.index].style.display='block'

	 	}
	 }
	  
	 //banner下动画 
	 			var mbox1=$('.main_box1')[0];
				var mainone=$('.main_onem',mbox1)[0]
				var mainones=$('.main_onems',mbox1)
				
				for(var i=0;i<mainones.length;i++){
					mainones[i].onmouseover=function(){
						var bt=$('.mobt',this)[0];
						var bl=$('.mobl',this)[0];
						var br=$('.mobr',this)[0];
						var bb=$('.mobb',this)[0];
						animate(bt,{width:220})
						animate(bl,{height:260})
						animate(br,{height:260})
						animate(bb,{width:220})
					}


					mainones[i].onmouseout=function(){
						var bt=$('.mobt',this)[0];
						var bl=$('.mobl',this)[0];
						var br=$('.mobr',this)[0];
						var bb=$('.mobb',this)[0];
						animate(bt,{width:0})
						animate(bl,{height:0})
						animate(br,{height:0})
						animate(bb,{width:0})
					}
				}

		//本周推荐线框动画
		var main3box=$('.main_box3')[0];
		var main3thmr=$('.main_threemr',main3box)[0];
		var main3thboxi=$('.main_thboxi',main3thmr)[0]
		var mainthbig2=$('.main_thbig',main3thboxi)[1];
		var maintmrms1s=$('.main_tmrms1',mainthbig2)
		// console.log(maintmrms1s)

		for(var i=0;i<maintmrms1s.length;i++){
			maintmrms1s[i].onmouseover=function(){

				var mt3bt=$('.mt3bt',this)[0]
				var mt3bl=$('.mt3bl',this)[0]
				var mt3br=$('.mt3br',this)[0]
				var mt3bb=$('.mt3bb',this)[0]
				animate(mt3bt,{width:198})
				animate(mt3bl,{height:248})
				animate(mt3br,{height:248})
				animate(mt3bb,{width:198})

			}

			maintmrms1s[i].onmouseout=function(){
				var mt3bt=$('.mt3bt',this)[0]
				var mt3bl=$('.mt3bl',this)[0]
				var mt3br=$('.mt3br',this)[0]
				var mt3bb=$('.mt3bb',this)[0]
				animate(mt3bt,{width:0})
				animate(mt3bl,{height:0})
				animate(mt3br,{height:0})
				animate(mt3bb,{width:0})

			}
		}
		


	 //下重复动画
	 	var mainbox5=$('.main_box5');
	 	for(var i=0;i<mainbox5.length;i++){
	 		activate(mainbox5[i])
	 	}
		function activate(mainbox5){
				var mfmr=$('.main_fivemright',mainbox5)[0];
				var mfmrs=$('.main_fivemrights',mfmr)
				// console.log(mfmrs)
				for(var i=0;i<mfmrs.length;i++){
					mfmrs[i].onmouseover=function(){
						var bt=$('.bt',this)[0];
						var bl=$('.bl',this)[0];
						var br=$('.br',this)[0];
						var bb=$('.bb',this)[0];
						animate(bt,{width:270})
						animate(bl,{height:180})
						animate(br,{height:180})
						animate(bb,{width:270})
					}


					mfmrs[i].onmouseout=function(){
						var bt=$('.bt',this)[0];
						var bl=$('.bl',this)[0];
						var br=$('.br',this)[0];
						var bb=$('.bb',this)[0];
						animate(bt,{width:0})
						animate(bl,{height:0})
						animate(br,{height:0})
						animate(bb,{width:0})
					}
				}
		}


		var mainbox51=$('.main_box51');
	 	for(var i=0;i<mainbox51.length;i++){
	 		activate(mainbox51[i])
	 	}
		function activate(mainbox51){
				var mfmr=$('.main_fivemright',mainbox51)[0];
				// console.log(mfmr)
				var mfmrs=$('.main_fivemrights',mfmr)
				// console.log(mfmrs)
				for(var i=0;i<mfmrs.length;i++){
					mfmrs[i].onmouseover=function(){
						var bt=$('.bt',this)[0];
						var bl=$('.bl',this)[0];
						var br=$('.br',this)[0];
						var bb=$('.bb',this)[0];
						animate(bt,{width:270})
						animate(bl,{height:180})
						animate(br,{height:180})
						animate(bb,{width:270})
					}


					mfmrs[i].onmouseout=function(){
						var bt=$('.bt',this)[0];
						var bl=$('.bl',this)[0];
						var br=$('.br',this)[0];
						var bb=$('.bb',this)[0];
						animate(bt,{width:0})
						animate(bl,{height:0})
						animate(br,{height:0})
						animate(bb,{width:0})
					}
				}
		}



		//box5左轮播

		var mainbox5=$('.main_box5');
		// console.log(mainbox5)
	 	for(var i=0;i<mainbox5.length;i++){
	 		left5whell(mainbox5[i])
	 	}

		function left5whell(mainbox5){
			var mfiveml=$('.main_fivemleft',mainbox5)[0];
			// console.log(mfiveml)
			var mfivelbtm=$('.main_fivemlbottom',mfiveml)[0];
			//获取按钮
			var mfjtbtn=$('.fbjtbtn',mfivelbtm)[0]
			var leftmfjt=$('.fjiantou',mfjtbtn)[0]
			
			var rightmfjt=$('.fjiantou1',mfjtbtn)[0]

			//获取图片
			var fibcbox=$('.fivebcbox',mfivelbtm)[0]
			var fivebimgs=$('.fivebcontent',fibcbox)
			//获取图片宽度
			var iw=parseInt(getStyle(fivebimgs[0],'width'))

			var index=0;
			var next=0;
			fivebimgs[0].style.left=0;
			var flag=true;

			rightmfjt.onclick=function(){
				// alert(1)
				next++;
				if(next==fivebimgs.length){
					next=0;
				}

				fivebimgs[next].style.left=iw+'px';
				animate(fivebimgs[index],{left:-iw})
				animate(fivebimgs[next],{left:0})
				index=next;
			}

			leftmfjt.onclick=function(){
				// alert(1)
				next--;
				if(next==-1){
					next=fivebimgs.length-1;
				}
				
				fivebimgs[next].style.left=-iw+'px';
				animate(fivebimgs[index],{left:iw})
				animate(fivebimgs[next],{left:0})
				index=next;
			}
		}



		var mainbox51=$('.main_box51');
	 	for(var i=0;i<mainbox51.length;i++){
	 		leftwhell(mainbox51[i])
	 	}

		function leftwhell(mainbox51){
			var mfiveml=$('.main_fivemleft',mainbox51)[0];
			var mfivelbtm=$('.main_fivemlbottom',mfiveml)[0];
			//获取按钮
			var mfjtbtn=$('.fbjtbtn',mfivelbtm)[0]
			var leftmfjt=$('.fjiantou',mfjtbtn)[0]
			var rightmfjt=$('.fjiantou1',mfjtbtn)[0]
			//获取图片
			var fibcbox=$('.fivebcbox',mfivelbtm)[0]
			var fivebimgs=$('.fivebcontent',fibcbox)
			//获取图片宽度
			var iw=parseInt(getStyle(fivebimgs[0],'width'))

			var index=0;
			var next=0;
			fivebimgs[0].style.left=0;
			var flag=true;

			rightmfjt.onclick=function(){
				next++;
				if(next==fivebimgs.length){
					next=0;
				}

				fivebimgs[next].style.left=iw+'px';
				animate(fivebimgs[index],{left:-iw})
				animate(fivebimgs[next],{left:0})
				index=next;
			}

			leftmfjt.onclick=function(){
				next--;
				if(next==-1){
					next=fivebimgs.length-1;
				}
				
				fivebimgs[next].style.left=-iw+'px';
				animate(fivebimgs[index],{left:iw})
				animate(fivebimgs[next],{left:0})
				index=next;
			}
		}

	 //box5的轮播图
	 var mainbox5=$('.main_box5');
	 for(var i=0;i<mainbox5.length;i++){
	 	whellbox5(mainbox5[i])
	 }
			function whellbox5(mainbox5){
			 var mainfivemid=$('.main_fivemmid',mainbox5)[0];
			 // 
			 var mainn5mbtn=$('.mainfivembut',mainfivemid)[0];
			 //获取到左右按钮
			 var main5mbleft=$('.main5mleft',mainn5mbtn)[0]
			 var main5mbright=$('.main5mright',mainn5mbtn)[0]
			
			 //获取a链接
			 var box5imgs=$('img',mainfivemid)
			 var mfab=$('.mfabox',mainfivemid)[0]
			 // console.log(mfab)
			 var iw=parseInt(getStyle(box5imgs[0],'width'))

			 mfab.style.width=iw*box5imgs[0].length+'px';

			 var main5ma=$('a',mfab)
			 var a=0;

			 //获取li
			 var main3wlis=$('li',mainfivemid)
			main3wlis[0].style.backgroundColor='#e5004f';



			// 下选项卡
			for(var j=0;j<main5ma.length;j++){
				 main3wlis[j].index=j;
				main3wlis[j].onmouseover=function(){
					for(var i=0;i<main5ma.length;i++){
						main3wlis[i].style.backgroundColor='';
						
					}
				
					animate(mfab,{left:-iw*this.index})
					main3wlis[this.index].style.backgroundColor='#e5004f';
					
				}
			}
			
			
			main5mbright.onclick=function(){
				// a++;
				if(a<main5ma.length-1){a=1;}
					for(var i=0;i<main5ma.length;i++){
						
						main3wlis[i].style.backgroundColor='';
					}
					animate(mfab,{left:-iw*a})
					main3wlis[a].style.backgroundColor='#e5004f';
				
				
			}

			main5mbleft.onclick=function(){
				a--;
				if(a<0){a=0}
				for(var i=0;i<main5ma.length;i++){
					
					main3wlis[i].style.backgroundColor='';
				}
				animate(mfab,{left:-iw*a})
				main3wlis[a].style.backgroundColor='#e5004f';
			}

			mainfivemid.onmouseover=function(){
				main5mbleft.style.display='block';
				main5mbright.style.display='block';
			}
			mainfivemid.onmouseout=function(){
				main5mbleft.style.display='none';
				main5mbright.style.display='none';
			}
		}


		var banner_box=$('.banner_box')[0];
		var banner_main2=$('.banner_main2',banner_box)[0];
		var banm2img=$('img',banner_main2)[0]
		banner_main2.onmouseover=function(){
			animate(banm2img,{left:980},300)
		}
		banner_main2.onmouseout=function(){
			animate(banm2img,{left:990},300)
		}
		

		//右下角楼层
		var floor=$('.scroll_whell')[0]
		var main5big=$('.main5big')
		var newarr=[];
		for(var i=0;i<main5big.length;i++){
			newarr.push(main5big[i].offsetTop)
		}
		
		var kg=true;

		//按需加载
		var ch=document.documentElement.clientHeight;
		var needLoad=$('.needLoad')
		var needArr=[];
		var fn=[];
		for(var n=0;n<needLoad.length;n++){
			needArr.push(needLoad[n].offsetTop)
			fn.push(true)
		}
		console.log(needArr)

		var whellsmask=$('.whellsmask',floor)
		var whellBox=$('.whells',floor)
		console.log(whellBox)
		window.onscroll=function(){
			var scroll1=document.body.scrollTop||document.documentElement.scrollTop;

			//在某一刻出来侧导航
			if(scroll1>1210){
				if(kg){
					kg=false;
					animate(floor,{top:80})
					floor.style.display='block'
				}
				
			}else{
				if(!kg){
					kg=true;
					animate(floor,{top:-600})

				}
				
			}

			//楼层 有问题
			for(var i=0;i<newarr.length;i++){
					if(newarr[i]<scroll1+100){

					for(var j=0;j<whellBox.length;j++){
						whellBox[j].style.backgroundColor=''
						whellsmask[j].style.zIndex=-1;
						
						
					}
					whellBox[i].style.backgroundColor='#e5004f';
					whellsmask[i].style.zIndex=0;
				
					
				}
			}


			//按需加载

			for(var p=0;p<needArr.length;p++){
				if(scroll1+ch>=needArr[p]&&fn[p]){
					fn[p]=false;

					var imgn=needLoad[p].getElementsByTagName('img')
					
					for(var q=0;q<imgn.length;q++){
						imgn[q].src=imgn[q].getAttribute('asrc')
					}
					
				}
			}


			
		}

		//点击跳转楼层
			for(var i=0;i<whellBox.length;i++){
				whellBox[i].index=i;
				whellBox[i].onclick=function(){
						animate(document.body,{scrollTop:newarr[this.index]},300)
						animate(document.documentElement,{scrollTop:newarr[this.index]},300)
					
				}
			}
		


		//返回顶部
		var  scrollWhell=$('.scroll_whell')[0];
		var  scrolltopa=$('a',scrollWhell)[0];
		scrolltopa.onclick=function(){
			animate(document.body,{scrollTop:0},500)
		}

			
	


	


}
