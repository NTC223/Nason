// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: NASON.ggsk
// Generated 2025-10-28T11:52:58

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._setting=document.createElement('div');
		els=me._setting__img=document.createElement('img');
		els.className='ggskin ggskin_setting';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAPgUlEQVRogb2aa4xexXnHf/855313N96bubS2l+DtBXBaRyymNogE2Q6pqlSqMFWhkRoI0ERFNCXuh6jgfgCkcomSqjiVSRRShdykKJESkNqSpAIvhDQBq/VSSDCXlgXiG4mza++a3fdy5umHmTnnvK8NgUB7pHd3zjkzzzyX/3OZmSPexqu9Y3Iqy9mM/JSTn8L5cZONS34chJnAaxZzs1ZoBmm26LqHm7fPzrxdPOitErCbfntzF7bh7Grkx5284UzII+dNoW1mEl5gWRLMMIeZ5L2bBTdNh53NTz33loT7lQXqfGLdZnN2C7ItyCN5kzNwXsKMzEsykmBmkkzmvZNwZl4y78DLjEzmBUHQmcK0c+hT++79fxFoafv6LcrtZjm/BTxyJdMgQ6qeMZ'+
			'BBw2GNDBDW9agAaxeo7cGc4YWZw8wJE+YdmMO8ZgfwW/T3T7/4fyKQbZ8abzl/M/jtSrByHiczk5ecYSty/HATWzGADTZel57zBssddLyNjrVhqQBz4B1mwrzAO/OmnUNkt+qumfm3TaC57VOTA9huJ5vEBXiZTE7eyA1/+pDs1CHM/TJyAuwkbVDH415ZgiOtaCEXIejMm15stbR15edmZt+yQHPXT00NNLRb+DElZ5c3GpKd3sROG+gRJLXs5OR6BEktofjEAhQPL+N+0cUSHL3A3Lzv5luH797zukHjdQVa+svzP2yOewPEvHCG8MZ4LnvnEGRgkYQEmGGobFMymi4DCVld4CRc7BulVMfDc6+iZcxwMWg4k8+uGdr1+JfetEBz109NNZXvLZ0++c0ZA9hpeWQhajg2SjD1PygZV0//upDp3kqm4vOfttDhrnlz'+
			'wsvMnMx03mtZ6qQCzV134WTT+f9EfiUuRq6GGWcNicH+IZGFCj91yQDDIm/pZXVPr9AKhlUcaxbtf7CNHSxIAmHZXNtrw8rP/Wi2n3d3gjDbt4w3sN3ASkU+yQRnD4lBF5CUmDBCRCqfCXztvQ9WUmLcG+ajbY3QN7Xj2PKdgRLd1U1Y3cBKNdjKBrZ7bvuW8X7+8/4HjaXWzRJrkzIR0lmD0KxNosh4msLSPFZZxkDDq8l/53J0ylnheXuR4qVHKJ7/1z44JiHUd18pTqsa4MEO+DRosrG0dDPw132Uata57sLJhvE/yEgRzZ2Zw+lZrVfdia2PRHWv4dU0L/1ieLx4EGsvouHVaHgV3Z98g+5jn+nX5Ru4DJst8D8zZAp+VWRbR77w6HTq0WOhhne7caZgGsOdmsFpGb18x2AQLSUC1il9JNK6+CZoL9J+4GOweD'+
			'gKD41NN5D/7hX45x7AH3m25kxU0e+1QpUJvTPHHeuYXy4H3QyUApU+dOzai642NBn0AK4p0+qavMk3ot+kCSyG5xIyBjKh4dX4g3uxhcOhTxxb/PibgY9TzkII1cbUA1+dVgl1FDhem6vsKLYsfOS9W04QSM59vIxAgNZkUiMUjDL1TZ4mNdQYITvzvbhVG4LZTDC8qhRIyaaRjm8tYO1F3KrzYjAx1BxBq87DrTovBAaL4c7qAoIifY0IN6JI18zg5lIOgLmPXjSV4faKkGs0aGTr80BAKXnW/4aBbv3l5BuuRc3hMO/iIfzBvbi1F0N7kc6//BW2cKisAhKW8vWXk194Q7Dg4iHc2otLGv7gXrr/tgPrLEblpjDfE9OxRaO7z5flURfet/ILj07nAJlvfBwV4AL72eosmpio3yrxlfAeWU3jwhuwXzxP+98/g0ZW'+
			'kZ/9h7hVU/hnH6B46pvYwqGgAoXFXUqoxZPfxFqL5OuvQKtWUzz5DezI8zAwTGPzDrILb6Dz8O01V1LM0yrTgFYEK/mjEWoF24Dp6CS2JfmmwFgR7yLEemqVyFTz92/DFg/R+d6OYIWDRuuZB/pjQ0B1SpA1Jflnv9PbP74rhleRnX8txbMPYAdnqjwmRRpW9nenC380hCQ5XQVsd4vXvvdcwyZjcjSNOKkBVgsC+OAJqIHUwE1sRKeeRfEfX8YWfw7KkWsg1wDXAMWfa4Dy6r58noNyXL1/bHd/ch/WPk6+/oow1lV0RFhXpQClYUEewIgxPnf1lqm8g7aWgVkSo7FzmZQNmkMoHypDrFZOhldH/hsNjNWBceLVXIE784LQXngFf/ipntcnHXP4KTQ20UO77G8e6yxBZwky4YaMohOyh8Nvzp1lk6go6boV6snYGh'+
			'yF1nH8sUPgO0HAgdHwdvI9FA/d0bdmSMWmkZ3/YfKLPoYGRkqG/MuP0/3uDuzoAcx8OU+iobEJGDsD//Lj+Ff2VZKYgXNBsYNjqLkCax2HUeAYgCSnqVzOzq2NQkOuZE6DK/Dz+1G3RQlyA//i4xQ//jb5hqvAoLv7jh6dy8Ct/2MaW2+ieP7BAM2j+3FnbiLfehP5H9xO++sfrpKqxdBz+joaHwwrg+IHu0Juij4jHOYNa7+K2kvYO05BzRW45qsUQWDzpqnsxqnJW5CNy4EbAndqdL68iR07iLrtUNDVwjWAf+4hEOQXfBSOHcAffqbGHDQ+cAd0W7S/9kHs6H5oLWCv7EPHf052/lX4l/dgRw+QoqiZ0fzQ16GIY+b39yipDCzp6iwHX8xy/M8MQ3JoySEmy05ZTILKYOkY6naqSjolTasSbPfRXdjR/eiMTT1Z'+
			'HRP6tXUUT91X6x/eFc8+GKD9zk1lgjYDd/o6NDZB96E7sfkDZTIuE2rtPv23479ATVcq2oyVrtS6BYEwsG4HlheqKiGVO5YK6mAvDYzA4CgsH6uqh5QzWgtoYLSs+0QUOPnT8rHwPFUe7eOBsdPWxfks0hQh9FNWKaq1OX4EZS7NMeZklPqTE8jB8kK5zrE6oVSYeoPRCRqX/SMaGKF48r6eCTHg8NNk796GRifCsxhq8/WXBcg++1BkPCpx7qfYS3vIf+8qsvWXxToxqi6uq6ym2PLX7YC6ISpLym7cMLndZEPI5AYwDXtZ63jJfD2AlZoBmtd+C42fgZ/+B3yEUR3z/qU9uA1/SvauD4Qnp/4W+ftvJHv3ZXS/vwv/3INV0kx++dIe3MS5ZBuvhMP7sCMv9FQoivsRQG0ZL4oj70g90NFrN78g2STyuGFPvmoRik'+
			'5PWV9hNFBzazfR+LN76f7zDoon76dcU/esrUGja2j80e3ozI1BKa0Fikd2Uez5cqJ44jgzmh/5FrZ0jM7XrqHCrBLeq7Gx3X7hFMOczGs2R8xHQ4YtpG63tvJJNAyTQujEYGwiaPTFPScuo2u5yI4eoP3Vq6OvjcSolkyemKRWYoW2ze+HsTMqWKUolyqyYIvwupWVN4JZJ2MG4i50N2zH0hMA4oQ+WsiDPRMglm286gQrVuVS1bblBWz+QA37VcErqyHBQGNrcGdfAoefrkVXSp8yT+Ql0upmtRRpTzjDP1FSM8xasV6K0Q1fzVe2lxYpHv8y2aYrQ2ZP/QZG0fgECc9VoOhzZFPYLBmbgNHVPUrINl2JHd1P8cjdpXXqGyel30WFWdtVawG52dz7bDrLPJIDFbJWjprdmOwIVa4PkINoIYxi+m7cOe+n8aEv4v/r'+
			'fjS2Bp1zCRocweb3U3zvkxTPpGAR50vYH1tDfultuLXRt+b345+4H01uxK3dSPe7n8TP7SdVEEAs+Pv8zRvWapCY9Z5pARz984vnJD8uZ7jBDtmpx0t/JWK1TigFCK2coHHpbWjtxgCrJ+7Dz+8nu+AqNDhC+/N/AjHjVy5sZJfehjvnEvxjX8GWj5FNbUO/vg5bXsA/fDfFY1+pXCpBOc0pykUmXUfn8GjaMp4d+6dHfiMHcOJe5LZjBdbKzFq5XLPoCZkorGusPsncATr3XhPvq79+5n6af/ND8guupPOdO8sRAhgcJTt3G8X0LoqHPwsYxY++2rcu6henZmGr5vLtas9D2DSkPQVxn4UdwECu1SgrgtLhvPVmdqv8pLxP7RQEBoZTdqjyx9iagJZDz9BbzlQ0LPlvGme9/WJMxi80k6QULttZCjRyz/cfljQddS'+
			'O/lCFzVUj2SZA+545C0vczD/7pB3FT23Dnbgtrm/EJNDZBvu22oKCD+2IFoKpiSDutPZHyxIAiE/7VBlY4MDPBzMp7pmegZ19Ot2DsDiAVfrGBG26HScqr3i5BUEtYYV3jgGL3Z3HvuoR829/1jLDlBYpv/y3MH6T0jnK/4SRQi7mpp2TBKI43YswQZn5nxVHtWviL9+wWfjPyUmZkY8so872y1EckGKnOSyUYgJvcCONryrH29EPY0kKNgE7iOycpDGpz+qUGxfEmmDPMzQ5//ge/mV737m17f4s5phUis/xibtlwO+1O0FsJOFKJaz5O6ok7PBWP/oU9Na6s38+rdkoRVLm07FZb2FIIv5yT9tc7rnhfXYSe04eRe374MLCz9OHCYa0suGfCcnJkb71lfD1horIqrjYNLVbsNQFKWkmhlJszvTumEdxeFIvNoG4z'+
			'yNjZf6RywnFKt7V0C8ZssrJvZ/KpeoDaMqJWDZTRqmbFMjoZmIvL6XT0Usv+Po7xFV2hEFVTUPAxyi5lZl4YEtJsZ2Dg1n7+1f8AYOm6CycLV+yVbDx+e4BrFCj3PQUiVFhXzFE9ybeefwKKT5jU0pB0hBkTuGqYNMBaDt/OzCwTprm2dyc98DqpQACLH904pQHbm749QJ6saSjrj3SBKxPl2VHFej3P9w3ABXyp/33NwUQ4MO5A0c3SEoHXO5I8AXLpGr5nz4x5f00KnRL4rpnvWl8uimzX8kVVTKoSqHYCYSecWtR/VuUeH3bOfNhlC65quub1TsJf00LpWrx+45Ty7m7n/Hj1qYuZnBQiHfRaombB+jlpxGYwYj0m97FSC3O+MMMc3juZad66tnX47plf/Vg/XUvbpyaB3chPIk/4QMkjOYUd/rC70sNiKWPUeD'+
			'1Olz5DBbkyHVjYgPQKNUA4/X5hoOu2atfeF38Zr68Jufo1dNfM7DKcJ+MuBcQIJKMA1wa3ZKhblkihZIkQ80lnle5OrM8M1AXXMaNbn1qY3TUgbXgjwvTO8gavpe3rJpW53XLpM5kShmFRgpP5DHwGlmFFrRJIqHIeXIEUHNJkwmTmax8xmZs2dOvQp5+afjP8vWmBSsE+se7qTP7jJptyGYQvszzpuwZU/1LLsCILpomfu8QvruJnL+n7AwfmpouCW4c+ve9NCfKWBUrX4o6zpprGdlRslvOTCifopWDlZzWWBJGZr74KCUIwZ959qWvcP3Tn87+SIG+bQPWrvWNyiowtWebXCj+F85NyttbwsUpzc1ZwFMvnzZjB3EzR5W39RPN/ATrmsvvNB4v3AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="setting";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._setting.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._setting.onclick=function (e) {
			me._container_1.ggVisible = !me._container_1.ggVisible;
			var flag=me._container_1.ggVisible;
			me._container_1.style.transition='none';
			me._container_1.style.visibility=((flag)&&(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity))?'inherit':'hidden';
		}
		me._setting.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._setting);
		el=me._menu=document.createElement('div');
		els=me._menu__img=document.createElement('img');
		els.className='ggskin ggskin_menu';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.onclick=function (e) {
			me._container_2.style.transition='none';
			me._container_2.style.visibility=(Number(me._container_2.style.opacity)>0||!me._container_2.style.opacity)?'inherit':'hidden';
			me._container_2.ggVisible=true;
			me._menu.style.transition='none';
			me._menu.style.visibility='hidden';
			me._menu.ggVisible=false;
			me._x.style.transition='none';
			me._x.style.visibility=(Number(me._x.style.opacity)>0||!me._x.style.opacity)?'inherit':'hidden';
			me._x.ggVisible=true;
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 125px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 127px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._share=document.createElement('div');
		els=me._share__img=document.createElement('img');
		els.className='ggskin ggskin_share';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 70px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share.onclick=function (e) {
			shareOpen();
		}
		me._share.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._share);
		el=me._map=document.createElement('div');
		els=me._map__img=document.createElement('img');
		els.className='ggskin ggskin_map';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAOPElEQVRogb2afYxmVX3HP99z7/PMjDu7O6uQ7IIvk6Yr/IFhFrUQq91dm5hiE91/sP+UFjbxpTTVTRrTlv6BJJVotAlopKaoYP9rbVNM2mIT4w4praakzJCYgGDbIZFdaAsz+8a8PM893/5x7jn3Ps8uKEJ7kpnnvpzzO7/v7/3cc8Tr2HZuX1yqag6juBQUlwhxwfKCFBdA2IKoNRzW3GgVaa0Zh4eHd62tvl486LUS8B/94uExHCP4FhQXgqIJFoooRCtd25aIAlcZmHHAlmIMaxCWGXHP8AtPvyZwPzeg0aevPuzgzyAfQREpWsEQooRNFSWZDMyWZDnGIBHsKDkGiLKp5ChIQFcb6565Lzz5wP8LoM0T1xxR7TsU4hGIKBSmQUbqnjFTwSDgQQ'+
			'UIjyNqwDsN2ongYKKwA3YQFo4BHHDU2gzxiP70iWf+TwD5xNLCdoh3QDyhbFYhEmRbUQrGu2ri/BDvmsGzg1ekF6Jha4Qu7KCzO7DZgAPEgC0cBTE4WvfMUd2pu1c3XjdA6yeWFmfwySAvEpJ5WVZQNLWJl8/Jb5rD4aeRE+BLXINGkfBfm/DCdquh0JpgcLSe2d7W0X1fXV17zYDWb1tamhnopIh7lZ1d0QwkXz7El81MAMlXvjS5CSD5Sqh94mSKz28RXhzjbI5R4LARx/XR+XsffcWg8YqANn/3nb/twAPJxKIIRkSzUMtvmYMK3JKQABujck1hNDeDhNwHnMG1fVuUGkV4+iW0hU1og0awYnXr3Ff+9ZuvGtD6bUtLQ9Urxemz37x5Bl9Wtyy0Em4vijFNPyiMa6J/H2S+d2Gqff6TbfT82NFBRNkOsnXo5TR1'+
			'SUDrn7hhcRjiYyjuI7SRa2BzcE7MTg9pWejsp48MMG55yy+7eyZBKylW7Vi71f/pHXy6IQPC1fpO1HX7vvqDtWnew0VgThxZGOCTwD61fFIJ3j4nZkOypMyESRGpPBPE3vuYtKTMeDSOrW5N6puv27HlnUGZ7oEhHBjgIgbvG+CT6yeOLPxUQIPN7TsEb8vCBNDBWRiqmwSRsn5iVs5J0R1zVq9fZ1LKasjAS396/TpQGbj2D9CBqs/q4mBz845p/ifsZ/0TNywOzH8gkyNaeGsNl/cJ9Z3YUySm73uz+BXe/8zNeK0h/reRlfyqqY7u/tojy7nHhIYGMZxsPVrG6E0VXFZNObcSGHfX3Xuh+QOE/YcIbzzYjbDKezIuaCNhj3LfnC+JR+gtNWGmN1Ke0FIR19nj77lFte5XiJhINWvrqoEYFuH0ek9HAKH5/Qx+5X'+
			'bC/kOFeHxuhfHKN4inV5ge2U2eNN1pfLKnynvKf5818UdNKnhdQVTRUtGQQvhUiUCArqikQbJ/OWlC7vmRk4Q12E19/e8x85FvoTceJD6XmG8e+waaP8Dwxi8zvPHLhP3XoTaAZDpuaWDBcJ760HFmbvoWM7/5HerrPzkRfNK8qa92i7A7W4dtuKMvBtY/+p6lirAiUq7RrKmuqRMBMSUflYHhmpuorzuOhvM0P/wrmpX70Vvfx+Dw7Wz/5U1w7jTV2z9Idd1xNL+feHqF8cr9xFMrnV6G81TX3ER1zUeSVp/5JwCqgzcyfux+mse+3ob5iZiOz5vxk7GUR2N4/76vPbJcA1Rx8CnUQEjsVweqNpqlwX0/EaA3HWTwgbtaJlcZff9LxBeeRlKxyqQN0fzoH2ieeohw8Ebqdx5n+MEvEU+v0Dz1EAx3U7/jpkJn/PBd'+
			'+NzpYnT1NTfR/NvXyVHP9CLrrqSleCb1DQ3HgAQIfCRHeIHZ1d7lMNqrVbT7AINf/xLsnGf0d59s/aOtGmLXr2sBbOJTD7Hz1ENUb7+R6p3HGRy+PWnk9Arj5buIp1YmRsVnV6gO3ojmr4Bzp1PJBJ2WDOFyEc84KTDot4AT9fnj7722wYstcmtPkAa0CTDbcJthVVO94zfQzDw7f/sxfP45UFom5HJGoc7yhTC4CGDz9HdpfvxdhsfuwzvnGP3977e4J5cbhY7q8k42pkn5DtC8oEYaYZuF9VuOLNUjdLQqoUpiT8tYScqG4Ryq50AiXH4Vfv6HMNpEM3snmQCoZ9P1cDeMNnsvNRmmx5so1BfRKK1PZ6ajI0c82ky0KxHmTDNKwTAQD9fB1SJqijLCrpzlE4ua3QPbF4hnn4M4wqOXwBCffwJJuahuwYMuvxqA+D'+
			'8/xudOZSo41TkpSkkweikVDM8/QakF+8LJdF74d3z22SSMEJJgZ/ei4S68fQH2AGeTxBS0VCv42o6M0VzomJvdRdx4Fo23mSiHcwhnSuot++W3DJmsEGyXxExx9DYPla69JGwQAUfjnZfQziZ+wxvRcBdh+BJNSzRaS7Uji4RkEZrtoojrIXH9J6gZtemtn/jakJsDhbsFWgdQF/lPp61ecxdQpB6ovqDcVt6lxDNceDHdvKEGNVgowN6AWCwDqzZeqYLNs2g86irpnAB7zLpNsnZbVbtnrs6MqXtexhj1NJDnsHPx2qfTJlQ6GoXWhRfRMBS7sNlXF+U6AcLgZgRb56CbtiTUbBJlTK/PhCYMtkosSFEwa0cdnaLQFN5L7izGIHLoL7x2bMCFF1C1QGyMYG8t45KDgpLitjbSx8BOH61Z9wrTvJaZtqseI7lE6jPY'+
			'rVbdmlJ+P8lwV+m1+a2QmBLgeAQaI9WAVFucMSwIQ8QejeTxKKfKCT5V7K9z5otbv6LugkYXFiYrb12ChnsA87opC7QAL+wJj7pFQwA21DLoscXWuYmyJ/+FfvlRJsq2TffbZ7CsSNXJNTqtXPsCuETEuxihugWkNbVAzDLwWo3YoDUw7UQYj9WbqhVIsksRkm+UF1Ng+oy4/+up905Cy1IuJVZ33Q8a6ZlLsm+rgPRquyo3grUgswrtV+hx+hzbj0iJQpKI+3buKSlmGfeBlL9+hOrGlqXEtBAAx2k6yd8caXlpn4+7Bajx48HEx8tIY29XFDMpzt+26UkiZW2TTGCyyihJcQLMpDBKQZtpZJ9R16f/4aT4U9vPO6HYBwprIcZqGUAKqQDYrpN6szQQilNMtPlHPQaTFfY8Y7inx4QLsP4yuwSJnuNn5vXWd+GNU7'+
			'B+uh2bBZZHtlazPSiDYmQ57HtgedV4w62OvZ1U6OhiQi4OKbx5Fs3u6fJmZnC4h/oDf0j9oT8BYPCxv6b+0GfR3jcXzeW+6gNv5ynM7r2CwYc+S3XtMeLjD059ImsXmTkgjCvidt3yorV9Dyyv1gBBPIDCCdzg7crerhWGzaQkc+I7c4qw+EupaN06B7O7CdffTHXDzWh2N83yvXjjFGHxXVRLx6iuPUaz+iDNw/fCxinyurfECVJI0uxuqhtuJlx/MwDNP36e5gd/QT/XFe21YSHu5KUKCC8D1O3dg3Y8odDGpO0BHjQTy96S3J74Hlx/M4OP/w1+8nto6cNodjdee5TRg3+czEQQH38QLf8Z1ZHbErClY8TVBxkv3wtnThVGsKiu/lWqX/sDtHAF8cnvMf7O52DjFPk7+ET0JFmMJOK5YQ54NKrumeh57qPvPYni'+
			'YRSlKjK4bLMz7H7BiQlXv5/q6G2wcCU89yTNyXuJa4/2Juz7CGjflVRHbiMsfRiAuPpttP8qmN2DN54lLL4brz16EZ3+nJP3ELcGNGdm7SggPL77vkcOTQF632FoThIshUg1NyLM7/TAXKqp+8l5SZO3fXhauILqyO8QDh3rwG+dIz70eZrVb/cG9X5zid0v4jCjF3fhcUXap/Wte+77lwcmAAGc+/gvnxRZS6bau4Wq2CM0NSL7mPq8dMAu3YwWrkQLV+Kts7B+Cm+fK4yW2Kcpw+jNGTcHNBeG4GAc1ub//J9/Ib+u6bcYP+PAssAYxfO1q/kddZJWN3EbJJJ/tZNGyip22lDKEwuvn8Ivnuo0UMiryKSvq5L/BDQibtVpXIRRaN7fn2XiU/Du+77/MHAP2RebgLer5JYTH9LbEFrCMF02b3cQXD5KtqJuc1uRzQ'+
			'StLNAuJE981KT1/Cia88Mkbhsq7pneUrlo92G8vfkZzFrWctypFHP1QJtQycXmFMh+fVcSocGhfKdzScS5wmjHxI6uUFpu54QeU5T1ZmVHYSSktdHMzJ3T/F/S0jc/ccNiE5oVyQvt2QPCoEF1nCgQobP19ImJYkLJXEpUbe+6d7k5D8lbmO1qsFuo5yI0EHcq25Ww1ndiuOSG18u67vmPvntJM17JZw9QpBoaVZeIesk12gpaPdb74WlqACHZl6bf97xPpA3jETTjyjjttb7SluRFJpfb/H2PrjrGW3MukiCO7Th2z6RI5sBkAdoVk+oAuRvn9qPHpHnmP3dlUIQ4gpi+siVXtW59pZ3wl9VQbudve/eS6vHJEOJCd9TFLsv1qXA7Edv6+6StbSYl9mPyFCu9MBcbGwdiDLK14bGPzt+7+vNv6+e2eWJpETiJ4iKK'+
			'pANKESkofeFPX1cmWOwnVveDeD/zMhm227Bmx3aDWJB2v/9zZhyO6isrz/w0Xl/W5Ppt7u7VtS04JHO3ksUIJNNA2IGwaTRu10d0y3OT9lgzkHxVIqA6M9MYwshm3J9a2HfPSNf9LGAmZ/kZ2+aJqxdVhZMK+ZhMMUNSUA5yrCBW4Ao36vw8W1WIEBqk5JCWhWXH3iEmh2WjO+e++MPlV8PfqwZUgH366lsqxU9ZXgoVpJNZkXyuAfVPahk3VVJNe9ylPXHVHnvJ5w8COCw3DXfOffHJVwXkNQPK7fztB5eG5gRqDivERaUd9AKsHKtxBiI7dqdCEgjWHcM3x+bbc5/78c8F5HUD1G87ty8uUXGkquLbRFwixEUFv83EtkoL6244g+sNm1UcVpsxr+sRzf8Fc0MfWPKyGTIAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.onclick=function (e) {
			mapOpen();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._map);
		me.divSkin.appendChild(me._container_1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 291px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 53px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ful=document.createElement('div');
		els=me._ful__img=document.createElement('img');
		els.className='ggskin ggskin_ful';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ful";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ful.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ful.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._ful.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._ful);
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_unmute';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			me._mute.style.transition='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
			me._unmute.style.transition='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			player.unmute("_main");
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._unmute);
		el=me._roll=document.createElement('div');
		els=me._roll__img=document.createElement('img');
		els.className='ggskin ggskin_roll';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="roll";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._roll.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roll.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._roll.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._roll);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_info';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			generalOpen();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._info);
		el=me._help=document.createElement('div');
		els=me._help__img=document.createElement('img');
		els.className='ggskin ggskin_help';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._help.onclick=function (e) {
			guideOpen();
		}
		me._help.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._help);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_mute';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			me._mute.style.transition='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			player.mute("_main");
			me._unmute.style.transition='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._mute);
		me.divSkin.appendChild(me._container_2);
		el=me._x=document.createElement('div');
		els=me._x__img=document.createElement('img');
		els.className='ggskin ggskin_x';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="x";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._x.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._x.onclick=function (e) {
			me._menu.style.transition='none';
			me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
			me._menu.ggVisible=true;
			me._container_2.style.transition='none';
			me._container_2.style.visibility='hidden';
			me._container_2.ggVisible=false;
			me._x.style.transition='none';
			me._x.style.visibility='hidden';
			me._x.ggVisible=false;
		}
		me._x.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._x);
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_logo';
		hs=basePath + 'images/logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 71px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo.onclick=function (e) {
			player.openUrl("https:\/\/www.nason.com.vn\/","");
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._logo);
		el=me._t2=document.createElement('div');
		els=me._t2__img=document.createElement('img');
		els.className='ggskin ggskin_t2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAvCAYAAADQD/VqAAAYQUlEQVR4nKWbfYwd13XYf+fOvK99u+TSsiiTaGHSkRXHsaM1yaROW0RrJ1brWooipI0rtqiVtKX6EdRW7T+S1omWAQK3gJXIaAvUghFaRS0XBYw6keMASdysXDeyI63D2rId0024Rl0y4krkcnff233vzdzTP+beO3fmzVuumiEeZ+bec8/3PefcO3eFv8Cly0uLGSylafoAak9gdAkriwqLIoKqHgiPAAqIRLgbhjbhjNsCHneP26Y6xT9KREwdPiLgBj4j/DEfHo/GY5uAi2tTRNdRNq3Isxa72vr9i6uNkAe85NYg09dkeWk5SZL3K7oswmLgNdage/fKFqnJNKVtB4vWlO3uTQqJudfCGXSGtgtHKToqxopwCM4xat4g8TiJ5PK8zuAdXFtdhl'+
			'leUbx/0op96v/HsK/KmJOfWFoWksdUdbkQoGgfmRYTk5KbhEwSbNyJk0IiCaacviZV3B/GRlfcNj2Bpq8AEwHrtDFnj2/g4aCXH+sdyOExqqSak2hOK8/o2EllmAjrmnM+/e9f/eRBSR2Iw93lpRNpmlyAwogA46TNbtpmmHax9WkXe16jYLGAVSEPZJxo2K0lUdAwnarjoghSHe/G7MdHLWTP7J9qrzmG48Wg9PIRc5M92nYSy/bZLLOP9lYvru/DDcwgV7myHz/9Piv6BMKiKoyTFjvtOSbdPq033El6++0ki7ch7RZ7L36N0aVvubBU5A6pkTiI7Bq11sfvr8WCoh/nc1czvSruJl6b+JqFK6ajEX3Zx+K+tX3XmzD9eUYvfg2djEk0Z2E8pJft4aL+JpZH27eYpel+naOfOPVYhq4gYCVhq7fAOGkh/T4L73gX'+
			'MtcHXPIHTLuNEWl09HpEq4sWR1UjZWuZcyRqmz1WpGZANxOKfGjdc8mXDxSe7wo+QFw4liiHo65QimCLnKgBvzguCngJgUhqbmNaHeZOnSmCwXCH8aU/IRfDZmeeUdKiPx6S2HyRhAuje0+9vvO7Xz3PjCuZ1TG699RjFlYwwiRts3nodszJO9HJmO5bfoj06OsKI2YT8usb7P7Rc0zW/6xiNHHFg5hiviBSGGqfnzgNi3s3PiR5bYp7lEJVEvpdWzQ2vKPRe9lnXB4VI65NIxjFiAn0fM4VKOA9bc9jhF9CfeD5JMLj8PvxNkdaLSRJGH3ja2g24dB9D4IRxpubjNI2qc0xmqOw/OE7j/Grf3r12SabNYbZ3XtPPabKCsCo02OnM0936Qztu95EfuM6g9/7PMniEXQ8wg6H0chbBKWZebTGSlyw1Ncs+151+APyUO'+
			'+P8+u+5OIawDfGebnWrxHMrHoCmPtr95BtvMT40p8EXP3RDt3xbjFaWOk1zNApjofvOv1+iz4hAqNWj2FvHoD2G99Ed+kMkyv/h+H/XK3lhJnSBhKq0SwizlF17e6TEyvFQ1NQbBRpuvC6Ba/lsCrPddhq/z5ecotq2OOp3uuyCb3dHbqTPQAMPNz73bWnYjwVCjeWl06kLfPHCIt50mIwv1hRbbJ4BLuzA9nEkdDIiQ86e+rmmi5TQgERlBU5hfvf5yOfq2JlzKbVnLd8W7NTxZNMQQxhc2BK6e5yhJr6m2JXU/EnDW8Ac4NN0kL/m9nYvu1IVOWamIe0JRdUWLRJwm5/ARFCjhMUe/MG5BMnmcsHHkOcW8SHHS2fw72EK5RTzXOVfuPzpITxUslR7mckPJc01bVphFOjd621SUnflM+BjnF8EMlhqMCFn9OHMVLB'+
			'W+RJKPUX8+bGVPQjpS0d7G7/MNYkKCwmneRC3YcAuPGuUw8bwwUUxv0Fsk7XbZNNBfeaH9W82eWssKTzzjW1vmrIlTFjQrl1F/LgtA+LmKntvNnhePbsm7rqGx0OPlSoAWNcW9fgG9FHW4ZTNMoBQZYGnpNsQnf7JgjY3L7jiNstKpcmhscsYDtdsnYnIGyW1RGIC5UgT42p4IlSVfKtQrMqc/fcS3L7HQx/579hh4MGekLp7U5RobjwwJFXTRlnhqOG9ZHW+mVqVDVYx70znNWB+cq2OqbmqP7/inMKttUma7Uwkwkkya8DbwMXZl++9/RPKXJCEbJeH6+PIkJopBL/7JUokW38v6gfwruXq8RTh/G03E/AvvwS83/777PwD/4JfhlSVSQVHFToSbVdJNCtyqMRbdcnsRwEfjxcSWcqsjboqQYnVRyz5YjGen6kxJ'+
			'P3+qiAoksbf/PMMriZaYT3KYq2WmhiImLloh0U3yMxOWPcOimFNK2G0jCyWvV2fug07bt/eGbdGs+H7Hvr9O55F6O1PyT/3ndZeOSDJK95LXvPPcvwdz5TG3mQq2lfqNo2u4qNOSz7u3/lx2jffZr0L50gf2UDe/1lBr/9GewrG6jUd4Oiy+ZolkOeIVkG1oaiKTZ4JZRLwadtpeRudiboY8Cq3FheWsy75gYItj+PdjrlqFmCiEHaHaTVKgyIFIxk4+I+yRBRFx1KBflr/sGzzD349/ZRVnlNvvU1Nj/yi5g7jrH4Cx+BLGPw+c+w8DPvY/S/1tj5z/8Ru7NdVo3Rmk6j/BScJopkITD6Shg3d8V/WRHAljnO6cXv5pj5eQ5/4JdpvfHNjbxv/buPsPf8l9yMrOpBWi0wCZKmYNzeTZ6hoxE6HtXSApH/lHaR0S5m'+
			'MEBVN9ORPZnmvWTZfxLSdjtCoDUEjonuHNLpgio62Eb3dtHdIZpNqM6zhhzinodf+ByTy98JTJn+AguPfBCAnU89Sf7SlUBXt7fIN/6c3t94gPEffzn0T776h8w98BDtpTMMP/vpiFadflUBdV6mrqniadYz9B/8EK03vhkdbHPjVz5E9meXMHe8jiO//GskR48x/3M/76JHnXZVL9LpFpNjbh7pzSG9XqHX8aiEFZ0ar50OdrCDCIt5O1mWP3/3qSdEeT+tFnL4cC0EOQEESFJkbh5Ge9jhAN2+CTav8uldtlEJsyvJ5I5jvPY3ngHgxi+cY/z1r0a9lU+9mDuOF607O+hgO4IoczU+PSgkrzsOCnbjajlba0aX/iGkX2yO2GtXm0NigxyvvfAMydFjbD/5OMPffDpw0X37PSz+0uMAvPyz95NfuxJhqDu6q1m9Dx'+
			'mDzC1gjrwGkgTd3nJLgqaqGbi5hU7GqPCxFORulWLa+33MctffJdxOB1pt7PWX0O3tMoa72VNGA8+RN0PsGJFyBFCfR2pzRADRkPh9iJx74CzzZ88h/YUAOv76Glu/vhIMkByNnOIXH6F/9hztt54O8DtPP8nw6Y9XDF7Hm1+7yuBTH+fQoyvkL13hlX/4k6XCA4vF+MnXX2ACTF5cC7lMUPKNK6U8fi0KmEhSjfD4yjd8DBhsYQdbyMIhzOJtkGfYvWHFwbzjaCtBM8FaeyK1sCho2DzGb0x7Rc/1izB67SpqbSBaiubQiq8LS3JlPVYv8XF0IgOWzdWlhgj9h87RP3uuMOBXVlFV0je8ifZbT3Pk33ycG//iLHawXam9Fj/8UXCKTo4exxw9xvzZc2QvrjH++hqg9H78fhb+cRHedbBNdvkS5uhxDj26UvIlcd6t'+
			'rjO3nzhfRoVo2dN6w/cDkF+7gr12pSJPXWQ/yri87e8A7GyRD7dJjryWZK6P3R2EUSHuJUkxKYy5O1VYUiBNE2fQSLHdOfTmdXRnq8ZwzFIUrqqjq8zHTFYEk4oRqBiz6Jt74KFCtk88zu5vPQ0I5ugxbvvEMyRHj9N+6xlGX/mDCp69L3yOnU98FERIjh7nyBOfQvoLtN56ismLLwDQP/sIAKOvrLL1qx8s6PXnOfyvHqflZnRY0hih+MhNZM76XCn48nj3vvDMgfbrfRwrv6aUOEUVe/0asnCYZOEwdm+3oleTJuTFGn4xDQVOYsoFPhRh9ZVrMN6rGbFppmnlSeowbsOgXPe6B58LKhFYavSUV86+I7x7HjUKZbIwj/8c5a+xN66AvfZ/ya9dJT25QHLHcUSg9ZbTJEePAbD76SedsYDhNpMX1yJjRhlbZsuNgs'+
			'zPc/hfP05y9Bj22lV2/8uTtY34UsrmtqbizfXtbJHvDTG33Q6Tceixgj+ms5jayhiX+NMUe2OjWPv4pKbV9Y73AT/ZQriIWIoZrJ7CcEWN9/pKmI2N7vErrbecofPO+2id/P5K3ix50RkzvEgdvljC0U1cIQWQrX+bcCDL4fJ4i5qumjIC73GkEZj/Rx8kPXkX9tpVbn74nEtJsz8klM+OT6ZpEfoEzSfY6xskR4o86iOGh0qt/+Jgc0RSxBjs1o3wZQRvBFNlPt6d8znFBMbrHlaG4GnYaLM+GEGDaEag93cfoffeImdmL66RXf42CHSO3h94iequSpvHU91FrKaE8DHBrzcr3hXlNyez8SaSUsq5n/sQnXfej712la1fOoduXKnSrITmUjfxTlgoOKlOHA8lzqC6vYmZP4SqLX4AqqTBL9yimfEejEe1WF+GuMo5'+
			'1Wjt4xXQXPTUDCves6nBEcKlJ5/cfjwYcvgbj7P3uacDvs477o/GQXWGQ1nMVVmph2TTX8AOdyiNXnVan7vLT1pVZ5h77yP07n8IHWyz/W//JXbjSkWG6qU19VSjXcWhZsAwHsFkhKQtNLeogM0FYzMXd20O2QQdbOFOSwSll8chCsTGSPTZqewrf1o+G6E8jlHFUzmmEQkb4Ixg7jgWeibPr1bwVw1UN6aja6aNLKJk31wLbcn33eVgvVxSg3d8GYlkKp577y2jxvDfr2DXL0Uw1PRQniWaaov4FxeexVR1VOKisJPNsdZitdixShVdB06MJxldHZUxPoS+eiETxXy3nKnvPJU51oVcQxSi47xDtTAiYlZduH35aujrvucso9XfwvQP0f2Zc1MKn3YKSs3FthfBblwh+8Ya6Q+epv/PV9j9r0+Sf3ON1o8s03nPQy'+
			'WrTrFlXnHyC7TfczYYcrz6OXS4Q/qW08R7sXawjV3/dqGQcAAKF908jxL0U54vdJpyzleuywWkUK7ubpONBS1S13pqx7Ju2pzIxhlqCuQmtkjFnFpVWmQfQaMiR1DRMrd4dEGv4moMN6Y2ywIdwG5cYfT5T9P5Ww/Rua/4AehwGx1uI3MLJCfumjamlDmzHmp9etj9Dyv0zz+JOXqc/s+vlFIOy2LJhFrBy1eG7vaPLAe49vJ9tJfvo35l31hjZ+VcyNVQHgsJ7EqpztLcjr7vF3U29PoUbJ4zyQqD65j1lEwvqsoyBkYWev4Lp9/t13g3JtogcF4qkcdKSafwoMa/KdCSS3W4httMnn0mLA0kKrYE2PvkR7Hr36Z1T6Es+93vMPrtp0l/8DTpm08XyxQh4FGHJ85b2Qur2I0r5N9cC+325SsMVs7Rec9ZktffVYx/'+
			'fhVz+3E6f+dcya93xJokk+f/oLJEapJUN66GZU9cGcc6RLUic4VWXDXX8vAkU3ItOnSsF+XS2089zGEu0BLaRjnSjaAriFzd1Wighqteus/AGeKxl0D3GV8JCd6d3bNEeOq4ppkIndI/hA62Kr29f7ZC6577yb+5xuD8uYbxt8Zb4XUflVU2U/blefq6MRLGOcgI7E0eTFtd+9lsN7mgKYxzYWKhnXgFxUM1GLTCu5+B8bOH94vO+pjKuLoCSm+tEPNtFX6idqlpIvQ1qaGAb7/7Ido/fY7Rf3qcfP0SOtym8+6ztO4pquTJsw07OPs5WW3dGd5jPUSRLFTzUqqEyAemriiZZlYYZ47GnmBNfjE9uXpx8zs/emaVsS6Tws4IbpsvmdOQ66IjgFKGX0Jeiv8rCwaVaGykSLdgi3BShm4AUw3r4ShHRWFSNbqJ+KbEU1'+
			'e+z6M63Eb6C3T/6cqU3rIvPkP2xWeqPj219tGwZ1u3ui+SClouctQdt+agdR+PA1ZME2DL7+rlAhNWf+DLF9eLDGntb8qeLGsfxhnsTZRuq8BS6qK2Zygl/kDYxX4PjyEUOqGyjLyxST9l2CnHlCKUebr4xOXfa+FfYrk9T9P5KPviMwy/tUb6Y/eTvPk0oNj1S2QvrJJ/q8ytJbIiZMb4JOT+aDKJ21iIHTi+S00HVC8TOWU1uhSyDPaUsd/T2UXV6FMBz+WlpcW8l1y2cyySFga8fVFJ/OebA6fJWvz3D425c7++atIv6/TZNOvRr1pg1NpjBBV+oxxe1/CtdBDDHwT2VcJ4efIcXt4S8hwkA9ll/c7n1k6Cq3xPXry4qSIfM3tArlgL129KWHBXFsFxW+jzM0yn+/AL39pYfJ9rNxGNGA/RvU47/I2IF3i63Z/t'+
			'9birPJabCgWdJv4jHir6aICTpo2CGbCmhmcfvcZ8X98W8gzEgtlDET3f5E/87x89fVlSXp93ijTQn4PFw7Xdlkogr80golqkfml5C6muPgPrM3WGByvRWCkbq7mb0BDXZ4HHCL/nqVoN1xpqBbTU8dZm8/RGShx2a7Sp8VDH5+A2bwqDXecMI0EyLn/fcy+8waOsnGhPMA9rjsgYBGEwKBAEhuMfbga5UDzlVZFgwUvrW1x+fDSz8bM0eLAEGJy3GgO4WRXwi2s31RkCRXs4pY7LSRGcifkyPiJFTtY0q3Cnz403qF8/ljRxsETRxsuAly2ewVFfSbf4JL55s7AHFhiD5Kpjzd4Z269izJPPPf+sIueTXDATZ9AdeOml4otLCDdeUSZSjkfolOQFqRdNISQGBU/v7QbOYvhYUMoZEWhLDK/Vdx+mvHJDAeeWTxIpOn'+
			'ZCE9CUxz9M9JXF8+NljtsrziTBYWMHDA4Z7hLGe9pZrmxswKD4DkCSC0kugPzKD3y5+tfUTQGRP/2rpy8YkYdtArkpPDRN4PAi9BeoVln1ODNVADEVMhqf/bsb63efvOBa669VMZH2ynOqjfBNoayeGxrj7jSPU/JVwvQB5I+Ai+FawbG1BVs3pTg3J4UhxYK1+tSdz609XMfS+JfTpp0/SpYumVzvNlbIjEpmlVc2hO0tOPIa6M7FCvEJUaO5LqXRY+YrgkRKVMqxDqdECgizI8YTO1O8WSGOJRP1xX9uIFTvZd5o4KP23OT+Uu2v73eEcR53zZnCX1w7Pvd2hZs3YG/XDxfS3H8Zk4tJJ/tAAxfNMxPg8vLSIuP0gggPIJALkkduk6bK4m1Ct6ckaTl74lMWZaFQNM5K8E0bOHGDGx20FHbwvJ4D/qYpWJ145WT0'+
			'B7Ui3hrVo5HSy6ayiPO4Cit5XstvnyVdfNFH7UuTgLWwcxOGAwlGBEgQEodPVZ+SVv6Bk6sXN2dxu+91+a+fWRF4zC/UM8Daavhp94qD7e22krbApGUuE2MgSZDEFCe4E4OYBJKikhEjSJK4ZwNJUSiVfe6vvNS6e/FT1UIDCooF69tjONdeW7uIvxuX3Iw7BOkrGse3mCgpGoFcixOKqmhe4C7utmjPbeVd88y15+7Efw7iDnEoZJmQTWBv6NoiXzQiJCIhSFiV8ye/9Ecr+9nqlsZ0Bl0WkQuCnvDFTWYVq0qwa2XzvLzMXB8z38f0eiT9PjI3R9LvYeZ6JL0upt/D9DrFb66L6bYwcx1Mr43ptUm6LdRm2EmGZmNslmEnYzTL0GwSnu1kgs0mrs3ds0kBl2dIkmDSNpKmSNrCtFrFPU2RVtFuXLtJW1WYVuGhdm'+
			'+C3Z1gd8fY3RF2OMLujsh3R9jhXvE+HGJ397CDIXa4S74zwO4OsYNhcUrdVk5dEYcoARJTGDGKJOvW6s+e/NILq7eyk7kVAMDJL72weuJ/PH8SMecV1kWgbUR7qdFuaugmoqkxzpPcGReF4jyDhVzLNtTNImf/4A1R3KqJOhWX3b3Mkj5JVXNimIGuvCzhokvK8zX4eyiro99ULVTrU8o47N7VySZa5EO1hALaUOiqZQydxNBNDb1WQtudkhTYzK2et6b/toMYMhL74Nfl5befSMiXjcpjgr7ea8D92Zki4s5Tq7rQ5cyjKu5RImUHdTgcxRDfT8gzYQyoXwUg4lYEvjYo+0tsZT9a3BUNgaTYBi5KEOdroX5Rn3Ldg9UAQ3mPcHlodWVY2IePdpsr/aoqIj5vuz3tdVX9ZGayj83KjbOuV23M+Pre8g8vGbjHwk8Z'+
			'WBKRxbgwMSacxNPSqL4IcO3iji55wwhIsI2qt3+YQQ6JEW9mDWNL3OUHYO8Qzmb48lFFRK0vqBTVcjkTJlkYEz6OhLst7oUxIUSakk7BdnjXsPTwY73vfBeVixb7rMLFv7x6sFnYdP2FjNl0XV1++4mm9q4xumdtQS/6AN6dAdM1RrFW6LpnIIx/FZfHv/dqB8669mbgi+WrdVZkr6Dqbp5cXX1Vs2+/6/8BTVwuo5gel8QAAAAASUVORK5CYII=';
		me._t2__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._t2__img.ggDownSrc=hs;
		el.ggId="t2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._t2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._t2.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me._t2.onmouseenter=function (e) {
			me._t2__img.src=me._t2__img.ggOverSrc;
			me.elementMouseOver['t2']=true;
		}
		me._t2.onmousedown=function (e) {
			me._t2__img.src=me._t2__img.ggDownSrc;
		}
		me._t2.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._t2__img.src = me._t2__img.ggNormalSrc;
			} else {
				me._t2__img.src = me._t2__img.ggOverSrc;
			}
		}
		me._t2.onmouseleave=function (e) {
			me._t2__img.src=me._t2__img.ggNormalSrc;
			me.elementMouseOver['t2']=false;
		}
		me._t2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._t2);
		el=me._t3=document.createElement('div');
		els=me._t3__img=document.createElement('img');
		els.className='ggskin ggskin_t3';
		hs='data:image/png;base64,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'+
			'==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._t3__img.ggOverSrc=hs;
		el.ggId="t3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 230px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._t3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._t3.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me._t3.onmouseenter=function (e) {
			me._t3__img.src=me._t3__img.ggOverSrc;
			me.elementMouseOver['t3']=true;
		}
		me._t3.onmouseleave=function (e) {
			me._t3__img.src=me._t3__img.ggNormalSrc;
			me.elementMouseOver['t3']=false;
		}
		me._t3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._t3);
		el=me._t1=document.createElement('div');
		els=me._t1__img=document.createElement('img');
		els.className='ggskin ggskin_t1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAvCAYAAADQD/VqAAAX4ElEQVR4nKWcfYxdx3XYf2fufV/7dqWlZVEm0cKkoipOa9lrkQaUNKhWia0mtVU5aJFERBGrKCr1C00E/9U2gMgAARoghp0/AlSCEVpFLf9RFHUiwynSuF45jmXHokPYih3TSbhCbTISJXK5H2/fx71z+sedmTtz333LVTPE3XvvzJkzZ873zJ1H4W9QdH1ttYC1PM8fRe0JjK5hZVVhVURQ1UPhEUABkQh3S9c2nHFdwOPucd1co/hHiQZTh48IuIXOCH9Mh8ejcd824KpsiegmypYVedFiNzp/eHGjFfKQRW4NMl9m62vrWZb9sqLrIqwGWmMOunfPbJHGnOa47WDRBrPdvY0hMfVaKYMu4HalKFVDIqwIh+AUo6ENEveTaF6e1gW0g6trzmGRVl'+
			'Tvn7Zin/v/EexbEubsA2vrQva0qq5XE6jqJ6bDzOSUJqOQDBs34mYh0QzmlL4xq7g99I1KXDdvQPMlwETAOi/Mxf1baDhs8X29Ajk8RpVcSzIt6ZQFPTtLuomwqSXn8v/zzU8fdqhDUbi/vnYiz7PzUAkRYJp12c+7jPI+tml2sea1TiyeYDrJQwkn6nbrmShoMKe0X+RB0v6uz0F0NFz2wva5+oZiOFoMyqCcsDQb07WzeG6fKwr71GDj4uYB1MCC4ZJS/PSpj1rRTyKsqsI067DbXWLWH9K5+x7yO+8kW70D6XYYv/ItJpe+69xSFTukMcRh5q5RbbP/wVysRvT9fOxqHy/F3UZrG12LcMXjaDS+HCBxX9u9912Y4TKTV76FzqZkWrIyHTEoxjivv4Xlqe4trDQ/qHHygfufLtCzCFjJ2B6sMM06yHDIykMfRJaG'+
			'gAv+gOl2MSKtit70aM2pxV7VSF1bxxyJ6hb3FWkI0FlCFQ+te67p8o7C053gA8S5Y4liOOoSpQi2ioka8IujooKX4IikoTam02Pp/tOVMxjtMr3055Ri2OotM8k6DKcjMluuknF+8vD97+z9wTfPsaBkixomD9//tIWzGGGWd9m67U7MyXvQ2ZT+u99DfvQdlRCLGeX1a+z/yUvMNv8qEZq45EFMZS+IVII64BLHYXHvxrskz01xj1KxSkK7q4v6hnc0eq/bjIujYsTVaQSjGDFhPB9zBSp4P7anMcIvIT/wdBLhcfh9f1sinQ6SZUz+7FtoMeO2D/8cGGG6tcUk75LbEqMlCuu/es8xfv0vr77YJrNWN7v/8P1Pq3IWYNIbsNtbpr92mu6976K8cZ29//0FstUj6HSCHY2inrdwSgvjaIOUOGFprlkOLE34Q9LQbI'+
			'/j64HDxTmAr4zjcqNdI5hF+QSw9PcfpLj2GtNLfx5wDSe79Kf7VW/h7KDFQucoHn3w1C9b9JMiMOkMGA2WAej+nXfRXzvN7Mr/ZfTHG42YsHC2YQjVyIqIY1STuwfExCR5aHOKrVOaT7xuQWvdLaW5CZu2H6Alt8iGPZ703pybMNjfpT8bA2Dg8cEfXHguxpOMcGN97UTeMX+KsFpmHfaWVxPWZqtHsLu7UMzcEBop8WGtpymu+TQlJBCBWZFSuL8+HvlYFTNj8VjtccvXtStVbGQKYgibA3NMd8UN1Nbe5rvakj9peQNY2tsir/i/VUzt+45EWa6Jacg7cl6FVZtl7A9XECHEOEGxN29AOXMzc/HAY4hji3i3o/VzuNdwFXPSOJe0Gx8nJfSXJEa5y0h4rsdUV6cRTo3etVEn9fimfg7jGEcH0TwMCVy4HD+MkQRv'+
			'FSeh5l9Mm+uT8EdqWTrY/eHtWJOhsJr1svNNHQLgxgfvf9wYzqMwHa5Q9Ppum2zOuTf0qKHNLmaFJZ1Xrrn1VUusjAkT6q27EAfndVjEzG3nLXbHi61vrjQ3Ohx8yFADxji3bsC3oo+2DOfGqDuEubTQnBUz+js3QcCW9qEjbreoXpoYnraA7fUpur2AsH2uboA4UQnzaRAVNFFSJt/KNauy9ODDZHfexej3/yd2tNcynlBru2NUSC48cKRVc8JZoKhhfaSNdpnrlTrruHWBsjown9mmfRqK6v8myinYTpei08HMZpBlnwDeB87NvvHwqY8ockIRisEQz4/KQ2jEEv/smSiRbPy/qB3Cu59XjacJ48dyl4B94zWW/+k/Y+WX/hV+GZIykgQHyXiS1ouEcdP5aDS2a5N4HgR6PFw9zpxnbeFTA05SHIvnEfX19EiNpx'+
			'wMUQFF1679zOl1cJZphI8qinY6aGaiwepFOyi+ReLhjHHrpBzyPHWloWea9fbec4rue9+/MG+N7aH4wSaDBz/I5MJXKX/wKitPfozsbW9n/NKLjH7/fzR6Hqa07QuldYuz2JjC+XYZDOg/8CACjL70v6qoI83doKjYEi1KKAukKMDakDTFAk9cuVR02k5O6awzQ58GNvIb62urpehHQLC9vttBifum+lMtwA2m20M6nUqASEVIMa3uswIRdd7B2WD02SN/x3H6P7F+ALPqMvvut7j2Sx/C3HWM1f/0G1AU7H3+v7Py8x8le/tRdv/bf8Hu7tRZY7Sm0yg+BaWJvHBwjD4E4GxX/JcVAWwd4zxH4giD0r3vFL2f/Gl673k/srTE+CtfhNEOrrkeI+KDdDpgMky3A6ZfAZUFOpmg0wlEmXwSNSJT0l4PLQqs6tqN9bXV'+
			'vBxk6/6TkHa7UVzRBgJHRH8J6fVBFd3bQcf76P4ILWYRXBxv4jhQPY+++Hlml78fBGaGK6w8+TEAdj/zLOVrV8K4urNNee2vGfzDR5n+6ddC++ybX2Xp0cforp1m9LnPRmM1x49p8OUwiU8Tbj75yu/+Ue74jWeQ4UqKYjyivPbXB4yd8kV6faTbQ5aWkcESMhhUfJ1OathgZHV/7fWwe7uIsFp2s/W8QNcFoNNBsoY7cPucCJB1kKVlmIyxN95Ad26CLWt2eWeuMUPbGVde/j7l5UuhPrvrWBDm7NsvM/32NxPNx8De888AYO46TvaO45SvXWX7E+cSvsy5aoXsHcdBwV67WltrQ+gyvA0ZVpsj9vWrEUybwGvKzMoKMlxh9u0L7P/hCyw9eob87ntrfjSUqnblmvJlOsZOxsjuzSpsLa1gjrwNGfTRne1oSRC4TU'+
			'gqO13sbIpmup6DvFelMnu/j1nv+ruA2+tVna6/hu7s1D7cEVxvRWok1Zj4Bqud0P03joRlAoiGwO9d5NKjZ1g+80RiBdNvX2D7E2eDALKjx3j777wAwI3/8CTDM0/Qve9UgN99/llGzz8TKFN0Dm/5+lX2PvMMtz11lvK1K7z5L/5xEEhkE4BQ/tX3uPYLD1UeCqX/gUfqKUhz2QImmqlGeHzmGz4G7G1j97aRldswq3dAWWDHoyTm+oiqnQwtBGvtCWNhVYlS8WijWQRkOERnU+wPX0V3d6pBw4YyLsb6BXiUbkULdL+ID5cnPknzHKOkvnzGvHzmSVb+5ceQ4QrTr28w+dqXKF+/Sve+Uxz5z89glpejPlVZ/dXfpHP3vcxeuYB9/SoAy2eeoPue0/hNiMEHHgl4dW+H2SsXALjtqbOpYrmVvIi6DQs3z9EuOtp2'+
			'c02VNeURgac0Ngr8vdpg0HBHFHa3Ka9swnRMtjSc6y8CZFllFMa8N1dYUyDPM/c1IKKpv4TevI7ubjtGt8WiyF2lvRPY+fM7tZ4niWMilKpt6dHHANj91MfZ/73nAcEcPcYdn3qB7OhxuvedZvL1LyV4xl/8PLuf+k0QITt6nCOf/AwyXKFz3/3MXnkZgOGZJwGYfH2D7V//WDXecJnb/+PH6TiLDkmIERdCvEU5+qL5JMtGWRiV54r3Y7UCRzhVsddfR1ZuJ1u5HTveJ+aryTPKKoFbzUOCk5l6gQ+VW33zdZiOG0JsCpTkPY0Lvou47Cx6BxcLNJm1II3xlDfPPBTePY167UrdZ2UZ/znKl6kXroB9/YeUr18lP7lCdtfxKtS8+xTZ0WMA7H/2WScsYFRZaC3MKLbJ4nk3WSLG10kLwKK6tuTNte1uU45HmDvuhN'+
			'k0tFjBH9NZzW3SxwX+PMfeuFatfbwb1DQGeB3wxuZJ8HOQpFYapzDcus5rfeJmUw33mXbn3afp/dSH6Zz80bnsUTztrRZehQ7d24nGELK7jof3YvN7hANZDpfH62NfPJ9Ae+xpGpYoqJvz4g8J9bOjk/mxCG2CljPs9WtkR6o46j2Gh8qt/+JgS0RyxBjs9o3wZSQQaVLi4905n6iYQHhTw2oXPA8bbdYHIWiYmhEY/OKTDH7hiYrxr1yguPw9EOgdfSTQEuVdSV1YPUpAj0+wfAkfE6Tly0skJD9n40UkC+woCRUkwnIzDu/xTlhIOGkmT/WOlJYzdGcLs3wbqra6AFTJg16oe5qOYTppbOTULi45pxqtfTwD5rWq+a4BT8iAE0ZIwsDszuNBkKPf+Tjjzz8f8PUeemQxA51ZzR0ykXoMX8xwBTvapRZ6qrQ+dtef'+
			'tFJlCMJpegbaijbYk3q7RKEWwDCdwGyC5B20tKiALQVjC+d3bQnFDN3bxp2WCEyPMzOoMq76s9N81uZdpQgOTlvxJMc0oskGOCOYu46Fltk3NhL8qYCawnTjmnkhiyjFdy6EuuxH7nWwfl7SgHd0GYnmlGb0cfIokHyWm+tDS11Evzj3LCblUY2LSk62xFqL1WrHyii6qSjTWQH7O06TayaIeIT14GF9aKrzPbgB4sFC6h1wNYQX4Joxk/CdUETRN66Gtv6HzpCdvJfOu0+z8mvPzjF8XilqpsVFRLDXrlD8WSXQ4b89S/ehR8iOHqP/4cfofeixSCq1sCSyXGksEZrK5XkYYDwfnMIQ4Um+x4bvrIS8pBKqBK8iUn0g0P0diukMrULXZm6nsmm6nCimBWoqRCZQlC6WYwYlDY7YOskRVLSOLWGCkdtyLlYXMcLhst'+
			'euMPnCZ+n9o8fofbi6AHS0g452kKUVshP3tjLUe6qmq/XhYf+3zzI89yzm6HGG/+5sPctRnSyZkCv4+dWuO95JmtsgcEpvAg2VoKA+FhLIlZqdQlSPk4UXcpyEimDLkllRrZh0ymb27//WsTV68gAGjIFO5job6jgoblKBSXWMCFpvYk1qnopr0V6X9Pj+5sgd2M1LlN+5gG5fr3EJFBe/il67iiwtVxb18ovs//ZZ7JVN2NvBXtmk/ItXQCo8pcdz882g5WZ5Bbv1JuV3LlC+eqkS9GiH4hsb1XymU+yrl5j87qexP3yV/O+dQkc7TL/wfGShEKSQXJVlmeUVNIzxvdorOCIq66q8mon4FvNBorFEiM+dNngpTEtlXFYRXHf1c3Lpgfsf53bO0xG6RjnSjxguXisdwXDoHwMlfRfVe6VoW8K29U9cgldn9yxKYhwx'+
			'rnkiQqMMb0P3tpPWwb85S+fBRyi/c4G9c08cNMuFeBNaD2BZsplyIM3z5cZEmJYgE7A3+bm807efK/az85rDtBRmFrqZZ1DcVYNAE9pxTI+fPXxYODf6JP2aDPDZ3nx2mApXa1xNPPE4rcyp4Ls/+xjdf/IEk//6ccrNS+hoh97PnqHzYJUlz158oRGHOVjJGuvO8B7zQSJ++Ww+io9EOjBXaq9OYYVp4cYYC9aUF/OTGxe3vv/jpzeY6jo57E7gjuWaOA2xLjoC6J/dAHVMiEZ0RKtEfSNGugVbhJPwCywBMPESyMM3GBkzxvUJdFPjaTI/RLnRDjJcof+vz87xrfjyCxRffiHV6Wamhvtm6+eUjKFRzHaeo6m4DQVt6njssOIxAbb9rl4pMGPjx752cbM6A2Tt78pY1nUI0wLGM6XfqbDUvGjsGUqNPwysbkfCa5'+
			'whJDpeYLE2tvGndjtpVhdSMQ+DBkGKV4SIKxKNJZFixMwpvvwCo+9eIP8Hj5D93VOAYjcvUby8QfndC5HFeGSVy4zx+W27mPmI21iIFTi+S4MHpMVESpl6l2oue2Nl6vd09lE1+lzAc3ltbbUcZJftEqvklQDvXFUyf5Tw0GGy4f/9Q2vsPKgtjqvUpt8KGv3+U+frm/38b0RCSeiNYniTw7fiQQx/GNi3COPnU5bwxrZQliAFyD6b97x04SS4XOrkxYtbKvJbZgyUirVw/aY01o5+wRzVhTZvYTrfFjYHGn3xba7eRGPEeIjuzbHDb0T8hOfr/dlejzulMVpPA8lmR0In8/Q3aXEMb9K3ENY08BzA15ju6ztCWYBYMGMU0XNt+sRf/Pipy5LzzrJXhYHhEqze3thtSRx5w4KIcpFm0foWQl3TApuWukCDlaiv1JVp'+
			'7CZUNI/oJu9a05Rmw42KRgItTbwNa57LyZK8oTE2DRqa+Bzc1k1hb98pw0SQgss/8tLLd3uUyYn2DPO4lohMQRD29ioEgeD4wllQvMvRuGK+1FtlDas1uDWto9pbadBgCTA4bTUGcFYV8IurN6mFQFVf77q4mBTBmZgu4z1SpGRtVoU7fR7W1/50RD0mDpbI2/g54OcWW3DUVo9bHQLdulnJAwtMQUrVqRY/FcsvEebJl77xoiLnslIwMyfQXXjtteqLS3A3nlEmYo5HGG82JPui6e6RBAa3fJH3lMXw8USpLSLezKjhNX33bsozNyRwbvkUb6HFSmgCmkAPJvrK4unxc47rE2WSoLCxAgaFDHcJ/f3YRalcuwZ71XcAslLISgHk137sa+mvqdscIn/5E6fOG5HHbQalqTQ0z+D2VRiukGZZTT8zlwAx5zJan/276y'+
			'vES5M6CQ640ywm4p4/v6Tt8G2ubO6nEwRcc2VuvdDAxwHtbXN2wFV3TXBsb8P2TanOzUklSLFgrT53z0sXHm9iaf3ltOmWT1Hka6bU9xorFEalsMqb14SdbTjyNugvxQzxAVEjW5da6DHxyUQiJip1X4dTIgYE64jxxMoUb1aII8lEbfHPDYT0XseNFjoaz23qL2l7c78j9PO4G8oUfnHt6BzvCzdvwHjfdxfy0n8Zk4tZr/iVFiraLRPg8vraKtP8vAiPIlAKUkZqk+fK6h1Cf6BkeW098SmLOlGoKhcF+LYNnLjC9Q5cCjt4ns8Bf5sJpoZXG6P7KB/T1soejZheV9VJnMdVScnTWn/7rMfFJ31oOmcBa2H3Joz2JAgRIEPIHD5VfU465a+c3Li4tYjaA8vlnzx9VuBpv1AvAGtT99MdVAfbu10l74DJ61gmxkCW'+
			'IZkBU93FZJBVmYwYQbLMPRvI3Cei0OZ+5aXW3atLVSsOKCgWrK+P4Vx9Y+0i/m5ccDPuEKTPaBzdYqKgaARKRa2txikr3NXdVvWlTd61LFx96U78lyDuEIdCUQjFDMYjVxfpohEhEwlOwqqcO/mVPzl7kKxuKUwn0HUROS/oCZ/cFFaxqgS5JpvndTFLQ8zyEDMYkA2HyNIS2XCAWRqQDfqY4QAz6FXXUh/T72CWephBFzPokvU7qC2wswItptiiqA79FgVazMKznc2wxczVuXsxq+DKAskyTN5F8hzJO5hOp7rnOdKp6o2rN3knhelUGmrHM+z+DLs/xe5PsKMJdn9CuT/BjsbV+2iE3R9j90bY0T7l7h52f4TdG1Wn1G1y6orYRQmQmUqIkSfZtFb/+cmvvLxxKzmZWwEAnPzKyxsn/ugbJxFzTmFTBLpGdJAb7e'+
			'eGfiaaG+M0yZ1xUajOM1gota5DnRU5+QdtiPxWY6pzftnd6yjpg1QaE4MFuvSyhouK1Odr8PeQVkfXXC7UaFNqP+ze1c1NtIqHagkJtKHiVccYepmhnxsGnYyuOyUpsFVaPWfN8H2HEWQ07cOXy+sPnMgo143K04K+03PA/UBIEXH/GYeqc11OPKriHiVidmCHw1F18e2EOBP6gPpVACJuReBzg7q9xla3o9Vd0eBIqm3gKgVxuhbyF/Uh1z1YDTDU9wiXh1aXhoV9+Gi3OWlXVRHxcdvtaW+q6qcLU/zWoti4qLxlYcblB+vvXzPwoIWPGFgTkdU4MTEmnMTTWqg+CXD14o4uecEISJCNqpd/sCCHxIgXs4a+NW6/gK+TLiczfPqoIqLWJ1SKar2cCUYW+oSPI+Fuq3slTAieph6nIju8a1h6+L5ed15F5aLFvqhw'+
			'8W9vHM4K28rfSJht5er6Ayfa6vvG6NjaarzoA3h/AUzfGMVaoe+egdD/LRSPf/xWOy4q4wX44vk1GpO5J6j6Wyc3Nt6S9R1U/h+OwbUGn//qvwAAAABJRU5ErkJggg==';
		me._t1__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._t1__img.ggDownSrc=hs;
		el.ggId="t1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._t1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._t1.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._t1.onmouseenter=function (e) {
			me._t1__img.src=me._t1__img.ggOverSrc;
			me.elementMouseOver['t1']=true;
		}
		me._t1.onmousedown=function (e) {
			me._t1__img.src=me._t1__img.ggDownSrc;
		}
		me._t1.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._t1__img.src = me._t1__img.ggNormalSrc;
			} else {
				me._t1__img.src = me._t1__img.ggOverSrc;
			}
		}
		me._t1.onmouseleave=function (e) {
			me._t1__img.src=me._t1__img.ggNormalSrc;
			me.elementMouseOver['t1']=false;
		}
		me._t1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._t1);
		me.elementMouseOver['t2']=false;
		me.elementMouseOver['t3']=false;
		me.elementMouseOver['t1']=false;
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};