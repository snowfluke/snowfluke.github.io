var editable = true;
var interval = setInterval(function() {
	if (document.querySelector("#disqus_thread") != null) {
		if (document.querySelector("#disqus_thread").clientHeight > 0) {
			if (editable) {
				var ads = document.querySelectorAll('[id^="dsq-app"]')[0];
				ads.removeAttribute("style");
				ads.style.display = "none";
				clearInterval(interval);
				editable = false;
			}
		}
	}
}, 100);
