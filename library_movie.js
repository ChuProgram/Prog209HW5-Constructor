// Constructor
let Movie = function (pTitle, pRating) {
    this.title = pTitle;
    this.rating = parseInt(pRating);
};

// validation method
Movie.prototype.isValid = function() {
    if (this.title == "" || isNaN(this.rating) ) {
        return false;
    } 
    else if (this.rating < 1 || this.rating > 5) {
        return false;
    }
    else {
        return true;
    }
};

// single string (output) method
Movie.prototype.GetAll = function() {
    return this.title + " with rating " + this.rating;
};
