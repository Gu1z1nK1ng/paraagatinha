/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){

    var now = new Date();

    var diff = now.getTime() - date.getTime();

    var totalSegundos = Math.floor(diff / 1000);
    var totalMinutos = Math.floor(totalSegundos / 60);
    var totalHoras = Math.floor(totalMinutos / 60);
    var totalDias = Math.floor(totalHoras / 24);


    var anos = now.getFullYear() - date.getFullYear();
    var meses = now.getMonth() - date.getMonth();
    var dias = now.getDate() - date.getDate();


    if(dias < 0){
        meses--;
        dias += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if(meses < 0){
        anos--;
        meses += 12;
    }


    var result =
    "Você é ESPECIAL á Exatos:<br><br>" +
   "<span class='digit'>" + anos + "</span> anos " +
   "<span class='digit'>" + meses + "</span> meses " +
   "<span class='digit'>" + dias + "</span> dias<br>" +

    "<span class='digit'>" + totalDias.toLocaleString() + "</span> dias <br>" +

    "<span class='digit'>" + totalHoras.toLocaleString() + "</span> horas<br>" +

    "<span class='digit'>" + totalMinutos.toLocaleString() + "</span> minutos<br>" +

    "<span class='digit'>" + totalSegundos.toLocaleString() + "</span> segundos";


    $("#clock").html(result);

}

