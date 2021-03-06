// Converts integer to roman numeral
function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
	roman = '',
	    i;
	for ( i in lookup ) {
	    while ( num >= lookup[i] ) {
		roman += i;
		num -= lookup[i];
	    }
	}
	return roman;
 }
$.getScript('https://code.jquery.com/ui/1.11.4/jquery-ui.js');
$('head').append('<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">');
$('body').append('<div id="toc"></div>')

// Builds a <ul> Table of Contents from all <headers> in DOM
function createTOC(){
    var toc = "";
    var level = 0;
    var levels = {}
    $('#toc').html('');

    $(":header").each(function(i){
	    if (this.id=='tocheading'){return;}
        
	    titleText = this.innerHTML;
	    openLevel = this.tagName[1];

	    if (levels[openLevel]){
		levels[openLevel] += 1;
	    } else{
		levels[openLevel] = 1;
	    }

	    if (openLevel > level) {
		toc += (new Array(openLevel - level + 1)).join('<ul class="toc">');
	    } else if (openLevel < level) {
		toc += (new Array(level - openLevel + 1)).join("</ul>");
		for (i=level;i>openLevel;i--){levels[i]=0;}
	    }

	    level = parseInt(openLevel);


	    if (this.id==''){this.id = this.innerHTML.replace(/ /g,"-")}
	    var anchor = this.id;
        
	    toc += '<li><a href="#' + anchor + '">' +  romanize(levels[openLevel].toString()) + '. ' + titleText
		+ '</a></li>';
        
	});

    
    if (level) {
	toc += (new Array(level + 1)).join("</ul>");
    }

 
    $('#toc').append(toc);
	$('#toc').css("position","fixed");
	$('#toc').css("left",0);
	$('#toc').css("width","300px");
	$('#toc').css("font-size","9px");
	$('#toc').css("top","115px");
	$(window).scroll(function() {
    el.toggleClass('fixed', $(this).scrollTop() >= pos);
	});
	$('#toc').draggable();//.parent('.ui-wrapper').draggable();
};

// Executes the createToc function
setTimeout(function(){createTOC();},100);

// Rebuild to TOC every minute
setInterval(function(){createTOC();},60000);
