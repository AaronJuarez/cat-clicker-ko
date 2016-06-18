var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function() {
    	var strLevel = 'newborn';
    	if (this.clickCount() >= 10 && this.clickCount() < 100) {
    		strLevel = 'infant';
    	} else {
    		if (this.clickCount() >= 100 && this.clickCount() < 200) {
    			strLevel = 'teen';
    		} else {
    			if (this.clickCount() >= 200) {
    				strLevel = 'adult';
    			}
    		}
    	}
    	return strLevel;
    }, this);
}

ko.applyBindings(new ViewModel());