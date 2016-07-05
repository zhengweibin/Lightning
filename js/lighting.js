(function($){
    $.fn.Lightning = function(content,type) {
        this.html(content);
		if(type === 'add'){
			this.css("background-color","#3DC1FA")			
		}else{
        this.css("background-color","#ffb2b0");			
		}
    };
})(jQuery);