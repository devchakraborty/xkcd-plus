// KEYBOARD NAVIGATION

$(document).keydown(function(e) {
	switch (e.which) {
		case 37: // LEFT
			var href;
			if (e.metaKey || e.ctrlKey || e.shiftKey) href = "/1/";
			else href = $(".comicNav a[rel='prev']").attr("href");
			window.location.href = href;
			break;
		case 39: // RIGHT
			var href;
			if (e.metaKey || e.ctrlKey || e.shiftKey) href = "/";
			else href = $(".comicNav a[rel='next']").attr("href");
			window.location.href = href;
			break;
		case 82: // R
			window.location.href = "//c.xkcd.com/random/comic/";
			break;
	}
});

// TITLE TEXT

var titleTextSelectors = ["#comic img", "#comic div[title]"];

var titleText = null;

while (!titleText && titleTextSelectors.length > 0) {
	titleText = $(titleTextSelectors.shift()).attr("title");
}

if (titleText) {
	$(".comicNav").last().before("Title-Text: <br />" + titleText);
}