cj.evt.add(cj.w,"load",function(){var c=cj.d.getElementById("culture_list");c&&cj.util.each(c.getElementsByTagName("li"),function(a){a.div=a.getElementsByTagName("div")[0];a.active=0;a.mou=function(b){if(!a.active)return!1;b=b||cj.w.event;for(b=b.relatedTarget||b.toElement;b;){if(b==a)return!1;b=b.parentNode}a.active=0;cj.animate.move_to(a.div,"top",0,133)};cj.evt.add(a,"mouseout",a.mou);a.onmouseover=function(){if(a.active)return!1;a.active=1;cj.animate.move_to(a.div,"top",133,0)}})});
