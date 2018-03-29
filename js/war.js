ifm();
bgs();
function ifm()
{
	
	hei=parseInt(window.innerHeight);
	wid=parseInt(window.innerWidth*80/100);
	xmin=12.5+25;
	ymin=12.5+25;
	xmax=wid-(xmin);
	ymax=hei-(ymin);
	x=rando(500)+xmin+1;
	y=ymin+1;
	sliwid=175;
	psi=0;
	ysp=0;
	slimax=sliwid;
	yspm=sliwid;
	speed=1;
	dx=1;
	dy=1;
	score=0;
	hsnop=localStorage.getItem("name");
	state=0;
	gameover=0;
	muteson=0;
	highscore=localStorage.getItem("high");
	document.getElementById("hisc").innerHTML=highscore+"<br>("+hsnop+")";
	pmen=document.getElementById("offarea").innerHTML;
	document.getElementById("marea").style.visibility="hidden";
	creplay();
}

function rando(r)
{
	var day = new Date();
	var seed = day.getTime();
	var rand=parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100*r + 1,10);
	return rand;
}

function creplay()
{
	tehei=hei-25;
	tewid=wid-25;
	document.getElementById("parea").innerHTML="<svg height='"+hei+"' width='"+wid+"' onmousemove='slider(event);' onclick='pause();' ondbclick='pause();'><circle cx='"+x+"px' cy='"+y+"px' r='12.5px' fill='white'></circle><polygon points='"+psi+",25 "+slimax+",25 "+slimax+",0 "+psi+",0' fill='#eee'></polygon>                         <polygon points='"+psi+","+tehei+" "+slimax+","+tehei+" "+slimax+","+hei+" "+psi+","+hei+"' fill='#eee'></polygon>                         <polygon points='0,"+ysp+" 25,"+ysp+" 25,"+yspm+" 0,"+yspm+"' fill='#eee'></polygon>                         <polygon points='"+wid+","+ysp+" "+tewid+","+ysp+" "+tewid+","+yspm+" "+wid+","+yspm+"' fill='#eee'></polygon></svg>";
	document.getElementById("points").innerHTML="Score: "+score;
	if(state==1)
	{
	mto=setTimeout("move()",speed);
	}
}

function move()
{
	if(x==xmax)
	{
		gamex();
	}
	if(y==ymax)
	{
		gamey();
	}
	if(x==xmin)
	{
		gamex();
	}
	if(y==ymin)
	{
		gamey();
	}
	x=x+dx;
	y=y+dy;
	creplay();
}

function pause()
{
	
	if(state==0)
	{
		state=1;
		document.getElementById("marea").style.visibility="visible";
		document.getElementById("offarea").style.visibility="hidden";
		move();
	}
	else if(state==1)
	{
	state=0;
	if(gameover==1)
	{
		ifm();
	}
	document.getElementById("marea").style.visibility="hidden";
	document.getElementById("offarea").style.visibility="visible";
	clearTimeout(mto);
	}
}

function slider(event)
{
	psi=event.clientX-sliwid/2;
	slimax=event.clientX+sliwid/2;
	ysp=event.clientY-sliwid/2;
	yspm=event.clientY+sliwid/2;
	if(psi<25)
	{
		psi=xmin-12.5;
		slimax=psi+sliwid;
	}
	if(slimax>xmax)
	{
		psi=xmax-sliwid;
		slimax=xmax;
	}
	if(ysp<0)
	{
		ysp=ymin;
		yspm=ysp+sliwid;
	}
	if(yspm>ymax)
	{
		ysp=ymax-sliwid;
		yspm=ymax;
	}
	
	
}

function gamey()
{
	if((x<=slimax)&&(x>=psi))
	{
		document.getElementById("bounce").play();
		dy=dy*-1;
		score=score+10;
		speed=speed/10;
		if(sliwid>30)
		{
		sliwid=sliwid-10;
		}
	}
	else
	{
		gameover=1;
		document.getElementById("over").play();
		if(score>highscore)
		{
			localStorage.setItem("high",score);
			var name=prompt("You Have Created A High Score\nEnter Your Name","Faisal Manzer");
			localStorage.setItem("name",name);
		}
		document.getElementById("marea").style.visibility="hidden";
		document.getElementById("offarea").style.visibility="visible";
		document.getElementById("offarea").innerHTML=pmen;
	}
}

function gamex()
{
	if((y<=yspm)&&(y>=ysp))
	{
		document.getElementById("bounce").play();
		dx=dx*-1;
		score=score+10;
		speed=speed/10;
		if(sliwid>30)
		{
		sliwid=sliwid-10;
		}
	}
	else
	{
		gameover=1;
		document.getElementById("over").play();
		if(score>highscore)
		{
			localStorage.setItem("high",score);
			var name=prompt("You Have Created A High Score\nEnter Your Name","Faisal Manzer");
			localStorage.setItem("name",name);
		}
		document.getElementById("marea").style.visibility="hidden";
		document.getElementById("offarea").style.visibility="visible";
		document.getElementById("offarea").innerHTML=pmen;
	}
}

function bgs()
{
	document.getElementById("bga").volume=0.2;
	document.getElementById("bga").play();
	
}


function clickmu()
{
	document.getElementById("cli").play();
}

function mute()
{
	if(muteson==0)
	{
	document.getElementById("bga").volume=0;
	document.getElementById("cli").volume=0;
	document.getElementById("over").volume=0;
	document.getElementById("bounce").volume=0;
	muteson=1;
	}
	else if(muteson==1)
	{
	document.getElementById("bga").volume=0.2;
	document.getElementById("cli").volume=1;
	document.getElementById("over").volume=1;
	document.getElementById("bounce").volume=1;
	muteson=0;
	}
}
function mpause()
{
	if(gameover==1)
	{
		ifm();
	}
	pause();
}
function resets()
{
	localStorage.setItem("high",0);
	localStorage.setItem("name","iFM");
	highscore=0;
	hsnop="iFM";
	document.getElementById("hisc").innerHTML=highscore+"<br>("+hsnop+")";
}
