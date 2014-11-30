function writeLeftMenu(){
	var html = "";

	html += '<div id="menu"><div id="me-top"></div><div id="me-mid"><div id="menutext">';

	//TOP Page
	html += '<div class="m-title">';
	html += 'HOME';
	html += '</div>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/index.html">トップページ</a>';
	html += '<br> <br>';

	//Contents
	html += '<div class="m-title">';
	html += 'CONTENTS';
	html += '</div>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/src/contents/2014summer.html">2014年 夏</a>';
	html += '<br>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/src/contents/2014spring.html">2014年 春</a>';
	html += '<br>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/src/contents/2013summer.html">2013年 夏</a>';
	html += '<br>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/src/contents/2013spring.html">2013年 春</a>';
	html += '<br>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/src/contents/2011summer.html">2011年 夏</a>';
	html += '<br>';
	html += '<a href="http://goldenwondergassyuku.web.fc2.com/src/contents/2005spring.html">2005年 春</a>';
	html += '<br>';

	//BBS
	html += '<div class="m-title">';
	html += 'BBS';
	html += '</div>';
	html += '<a href="http://gwg-bbs.bbs.fc2.com/">BBS</a>';
	html += '<br> <br>';

	html += '</div>';
	html += '</div>';
	html += '<div id="me-bot">';
	html += '</div>';
	html += '</div>';

	document.write(html);
}
