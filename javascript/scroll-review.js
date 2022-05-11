const reviewCon = document.getElementsByClassName('reviews')


setInterval(() => {
    reviewCon[0].scrollBy(370,0)
    var maxScrollLeft = reviewCon[0].scrollWidth - reviewCon[0].clientWidth;
    if(reviewCon[0].scrollLeft == maxScrollLeft) {
        reviewCon[0].scrollTo(0,0)
    }
    if(isElementVisible(reviewCon[0])) 
    {}
}, 2000)

function isElementVisible(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}

