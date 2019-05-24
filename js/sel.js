window.onload = function() {
	toSel();
}
var toSel = function(){
	var oSel = document.getElementById('sel');
	var ap = oSel.getElementsByTagName('p')
	var aDd = oSel.getElementsByTagName('dd');
	var aUl = oSel.getElementsByTagName('ul');

	for (var i = 0; i < aDd.length;i++) {
		ap[i].index = i;
		ap[i].onclick =  function(ev){
			var ev = ev || window.event;
			var This = this;
			for(var i = 0; i <aUl.length;i++){
				aUl[i].style.display = "none";
			}
			aUl[this.index].style.display="block";
			document.onclick = function(){
				aUl[This.index].style.display="none";
			};
			ev.cancelBubble = true;
		}		
	}
}