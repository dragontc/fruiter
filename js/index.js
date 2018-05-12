
		window.onload = function(){
			var startgame = document.getElementById("startgame");
			var isclick = false;
			var getrank = document.getElementById("getrank");
			var search = document.getElementById("search");
			var search_value = document.getElementById("search_value");
			var user = document.getElementById("user");
			var user_content = document.getElementById('user_content');
			var confirm = document.getElementById("confirm");
			var isalive = true;
			//getrank button click function
			var getRank = function(){			
				getrank.onclick=function(){
					if(isclick && isalive){
						return ;
					}
					ale.innerHTML=' ';
					search.style.display = 'inline';
					search_value.style.display = 'inline';
					// user.style.display = 'none';
					// user_content.style.display = 'none';
					// confirm.style.display = 'none';
				}
			}
			getRank();

			var upsocre = function(){
				user.style.display = 'inline';
				user_content.style.display = 'inline';
				confirm.style.display = 'inline';
			};


			//if someont click the startgame,run this function to start game
			startgame.onclick=function(){
			if (isclick === true){
				return ;
			}
			startgame.disabled = 'disabled';
			var getrank = document.getElementById("getrank");
			search.style.display = 'none';
			search_value.style.display = 'none';
			getrank.disabled = 'disabled';

			isclick = true;	
			var wallet_install = document.getElementById("wallet_install");
			wallet_install.innerHTML = "";

			var sco = 0;		
			var flag = 0;
			var apple = document.getElementById("apple");
			var japple = document.getElementById("japple");
			var lla = document.getElementById("lla");
			var ale = document.getElementById("ale");
			var taozi = document.getElementById("taozi");
			var xigua = document.getElementById("xigua");
			var yingtao = document.getElementById("yingtao");
			var xg = document.getElementById("xg");
			var boom1 = document.getElementById("boom1");
			var boom2 = document.getElementById("boom2");
			var boom3 = document.getElementById("boom3");
			var boom4 = document.getElementById("boom4");
			var t2 = document.getElementById("t2");
			var t3 = document.getElementById("t3");
			var t4 = document.getElementById("t4");
			var t5 = document.getElementById("t5");
			var t6 = document.getElementById("t6");
			var t7 = document.getElementById("t7");
			var t8 = document.getElementById("t8");
			var xue = document.getElementById("xue");
			var getrank = document.getElementById("getrank");

			
			setTimeout(function(){ale.innerHTML=' ';},500);
			//refresh
			function myrefresh(){
				window.location.reload();
			} 
			//mouse over the fruit
			function mouseover(name,scor){
				name.onmouseover = function(){
					if(isalive === false){
						return ;
					}	
					name.style.display = 'none';
					sco += scor;
					var score = document.getElementById("score");
					score.innerHTML = sco;	
				}
			}
			//mouse over the boom
			function bmouseover(name){
				name.onmouseover = function(){
					if(isalive === false){
						return ;
					}	
					name.style.background = "url(flash.png)";
					setTimeout(function(){name.style.display = 'none';},100);
					setTimeout(function(){name.style.backgroundImage = "url(boom.png)";},200);			
					
					xue.innerHTML = xue.innerHTML - 3;
					if(xue.innerHTML<=3){
						xue.style.color = 'red';
					}
					if(xue.innerHTML <= 0){
//=====
						upsocre();
						isalive = false;
						xue.innerHTML = 0;
						alert("you are loss")
						// myrefresh();
					}
										
				}
			}
			japple.onmouseover=function(){
				if(isalive === false){
						return ;
					}	
				count ++;
				japple.style.display = 'none';
				sco += 3;
				xue.innerHTML ++;
				if(xue.innerHTML >= 4){
					xue.style.fontSize = '1em';
					xue.style.color = 'white';
				}
				var score = document.getElementById("score");
				score.innerHTML = sco;	
			}

			count = 0;
			lla.onmouseover=function(){
				if(isalive === false){
						return ;
					}	
				count ++;
				if(count == 5){
					lla.style.display = 'none';
					ale.innerHTML = '';
				}
				sco = sco + 3;
				var score = document.getElementById("score");
				score.innerHTML = sco;	
			}

			bmouseover(boom1);
			bmouseover(boom2);
			bmouseover(boom3);
			bmouseover(boom4);
			mouseover(apple,2);
			mouseover(t2,1);
			mouseover(t3,2);
			mouseover(t4,1);
			mouseover(t5,2);	
			mouseover(t6,1);
			mouseover(t7,2);
			mouseover(t8,2);
			mouseover(xigua,1);
			mouseover(taozi,1);
			mouseover(yingtao,2);
			mouseover(xg,3);
			
			//Í¨ÓÃº¯Êý
			function func(name,v){
				if(isalive === false){
					return ;
				}
				name.style.display = 'block';
				var dis = 100;
				var lef = 0;
				var fal = 0;
				var num = parseInt(Math.random()*80+10);
				var le = Math.random()/5;
				name.style.left = num +'%';
				var tem = setInterval(function(){
					if(isalive === false){
						return ;
					}	
					if(fal == 0){
						dis -= 0.5;
						if(num <= 50)
							lef -= le;
						else lef += le;	
						name.style.top = dis + '%';
						name.style.left = num - lef + '%';	
					}						
					if(dis == 20 || fal == 1){
						fal = 1;
						dis += 0.5;
						if(num <= 50)
							lef -= le;
						else lef += le;		
						name.style.top = dis + '%';
						name.style.left = num - lef + '%';	
					}			
					if(dis == 110){
							count = 0;
							if(name.style.display == 'block' && name.innerHTML != ' ' ){
								xue.innerHTML--;
								if(xue.innerHTML<=3){
									
									xue.style.color = 'red';
								}
								if(xue.innerHTML == 0){
									xue.innerHTML = 0;
//=====
									upsocre();
									isalive = false;
									alert('you are loss');
									// myrefresh();
								}
							}
							clearInterval(tem);
					}
				},v)
			}
			//boss
			function la(){
				if(isalive === false){
					return ;
				}
				lla.style.display = 'block';
				ale.innerHTML = 'boss is coming ';
				setTimeout(function(){
					ale.innerHTML = ' ';
				},2000);
				setTimeout(function(){	
					if(isalive === false){
						return ;
					}			
					var dis = 0;
					var num = parseInt(Math.random()*75+10);
					lla.style.left = num +'%';
					var val = setInterval(function(){			
						lla.style.top = dis + '%';
						dis += 0.5;
						if(dis == 140){
							if(lla.style.display == 'block' ){
								xue.innerHTML = xue.innerHTML - 3;
								if(xue.innerHTML<=3){
									
									xue.style.color = 'red';
								}
								if(xue.innerHTML == 0){
									xue.innerHTML = 0;
//=====
									upsocre();
									isalive = false;
									xue.innerHTML = 0;
									alert('you are loss');
									// myrefresh();
								}
							}
							ale.innerHTML = ' ';
							count = 0;
							clearInterval(val);
						}
					},50)
				},1000)		
			}

			var v = 0; // speed
			//¼Ó´óÄÑ¶È
			var flag = 0;
			var first = document.getElementById("first");
			var second = document.getElementById("second");
			first.disabled = '';
			second.disabled = 'disabled';
			var funt2,funt3,funt4,funt5,funt6,funt7,funt8;
			first.onclick=function(){
				if(isalive === false){
					return ;
				}
				v = v + 2;
				flag ++;
				if(flag == 3)
					first.disabled = 'disabled';
				if(flag >= 1)
					second.disabled = '';
				if(flag == 1){
					funt2 = setInterval(function(){func(t2,20-v)},7600);
					funt3 = setInterval(function(){func(t3,19-v)},8800);
				}
				else if(flag == 2){
					funt4 =setInterval(function(){func(t4,19-v)},8700);
					funt5 =setInterval(function(){func(t5,21-v)},8200);
					funt6 =setInterval(function(){func(t6,24-v)},9800);
				}
				else if(flag == 3){
					funt7 = setInterval(function(){func(t7,23-v)},8900);
					funt8 = setInterval(function(){func(t8,20-v)},7500);
				}	
				else	;		
			}
			//¼õÐ¡ÄÑ¶È
			second.onclick = function(){
				if(isalive === false){
					return ;
				}
				flag --;
				v = v - 2;
				first.disabled = '';
				if(flag == 0)
					second.disabled = 'disabled';
				if(flag == 2){
					clearInterval(funt7);
					clearInterval(funt8);
				}
				else if(flag == 1){
					clearInterval(funt4);
					clearInterval(funt5);
					clearInterval(funt6);
				}
				else if(flag == 0){
					clearInterval(funt2);
					clearInterval(funt3);
				}
				else ;				
			}

			// Ôö¼ÓÕ¨µ¯
			var bflag = 0;
			var bfirst = document.getElementById("boomfirst");
			var bsecond = document.getElementById("boomsecond");
			bfirst.disabled = '';
			bsecond.disabled = 'disabled';
			var b1,b2,b3;
			bfirst.onclick=function(){
				if(isalive === false){
					return ;
				}
				bflag++;
				if(bflag == 3)
					bfirst.disabled = 'disabled';
				if(bflag >= 1)
					bsecond.disabled = '';
				if(bflag == 1){
					b1 = setInterval(function(){func(boom2,22)},11000);
				}
				else if(bflag == 2){
					b2 =setInterval(function(){func(boom3,20)},9700);
				}
				else if(bflag == 3){
					b3 =setInterval(function(){func(boom4,20)},15000);
				}
				else	;		
			}
			//¼õÉÙÕ¨µ¯
			bsecond.onclick=function(){
				if(isalive === false){
					return ;
				}
				bflag --;
				bfirst.disabled = '';
				if(bflag == 0)
					bsecond.disabled = 'disabled';
				if(bflag == 2) {
					clearInterval(b3);
				}
				if(bflag == 1){
					clearInterval(b2);
				}
				else if(bflag == 0){
					clearInterval(b1);
				}
				else	;		
			}
		
			
			setTimeout(function(){func(taozi,20-v)},300);
			setTimeout(function(){func(apple,21-v)},400);
			setTimeout(function(){func(yingtao,21-v)},500);
			setInterval(function(){func(apple,21-v)},8000);		//Æ»¹û
			setInterval(function(){func(taozi,20-v)},7500);
			setInterval(function(){func(boom1,20-v)},7000);
			setInterval(function(){func(japple,15-v)},10000);
			setInterval(function(){func(yingtao,22-v)},7500);
			setInterval(function(){func(xg,22-v)},8500);
			setInterval(function(){la()},30000);
			setInterval(function(){func(xigua,19-v)},6500);
			setInterval(function(){
				if(isalive === false){
					getrank.disabled = '';
				}
			},500);
			//×Ô¶¯be careful
			var op = 0;
			setInterval(function(){
				if(isalive === false){
					return ;
				}
				if(v < 10){
					ale.innerHTML = 'be careful';
					setTimeout(function(){
						ale.innerHTML = ' ';
					},2000);

					if(flag < 3){
						v++;
						op = 1;
						flag ++;
						if(flag == 3)
							first.disabled = 'disabled';
						if(flag >= 1)
							second.disabled = '';
						if(flag == 1){
							funt2 = setInterval(function(){func(t2,16)},7100);
							funt3 = setInterval(function(){func(t3,21)},8000);
						}
						if(flag == 2){
							funt4 =setInterval(function(){func(t4,20)},8700);
							funt5 =setInterval(function(){func(t5,19)},6200);
							funt6 =setInterval(function(){func(t6,22)},7400);
						}
						else if(flag == 3){
							funt7 = setInterval(function(){func(t7,21)},6300);
							funt8 = setInterval(function(){func(t8,18)},7500);
						}	
						else	;
					}

					if(bflag < 3){
						if(bflag != 3){
							v++;
						}
						bflag++;
						if(bflag == 3)
							bfirst.disabled = 'disabled';
						if(bflag >= 1)
							bsecond.disabled = '';
						if(bflag == 1){
							b1 = setInterval(function(){func(boom2,22)},11000);
						}
						else if(bflag == 2){
							b2 =setInterval(function(){func(boom3,20)},9700);
						}
						else if(bflag == 3){
							b3 = setInterval(function(){func(boom4,20)},15000);
						}
						else	;
					}				

					if(flag == 3 && bflag == 3){
						v = v + 2;
					}
				}	
			},47000);
			
		}
	}
