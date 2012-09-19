// Rotate a number of elements clockwise
(function( $ ) {

    $.fn.llminiatyr = function(element, margin) {		
	
    	var containerWidth = this.width();	
        var containerHeight = this.height();
    		
    	var containerArea = ( containerWidth * containerHeight );	
    	
    	var thumbs = element;	
    	var thumbArea = (containerArea / this.find(thumbs).length);
    	
    	var sqrtThumbEdge = Math.floor(Math.sqrt(thumbArea));
    	
    	var thumbsTotalArea = ((sqrtThumbEdge+(margin*2))*(sqrtThumbEdge+(margin*2))) * this.find(thumbs).length;
    	
    	var thumbRatio = ( containerArea / thumbsTotalArea );
    	
    	var thumbEdge = Math.floor( sqrtThumbEdge * thumbRatio);
    				
    	this.find(thumbs).css({'width': thumbEdge,'height': thumbEdge});
    	
    	var perRow;
    	
    	this.find(thumbs).each(function(index) {
    	        
            perRow = '';
    		var pos = $(this).position();
    		var posTop = pos.top;		
    		if ( posTop != 0 ) {
    			perRow = index;
    			return false;	
    		}
    		
    	});	
            
        var rowWidth = ( this.find(element+':first-child').width() + (margin*2)) * perRow;

    	var lastThumbPos = this.find(element+':last').position();	

        if ( ( (containerWidth) - rowWidth ) < ( containerHeight - (lastThumbPos.top+margin+thumbEdge) ) ) {

    		var newThumbEdge = Math.floor( ( containerWidth / perRow )  - (margin*2) );
    		this.find(thumbs).css({'width': newThumbEdge,'height': newThumbEdge});	

    	} else {    	

    		var newThumbEdge = Math.floor( ( (containerWidth) / ( perRow+1 ) )  - (margin*2) );
    		this.find(thumbs).css({'width': newThumbEdge,'height': newThumbEdge});	    
            
            var lastThumbPosAgain = this.find(element+':last').position();
            var lastThumbPosAgainTop = lastThumbPosAgain.top;
            
            if ( containerHeight < (lastThumbPosAgainTop + newThumbEdge)  ) {
                
                var newThumbEdge = Math.floor( ( (containerWidth) / ( perRow+2 ) )  - (margin*2) );
                this.find(thumbs).css({'width': newThumbEdge,'height': newThumbEdge});
                
            }	

        }	
    
    };
  
})( jQuery );