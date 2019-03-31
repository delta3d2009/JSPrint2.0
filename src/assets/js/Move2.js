export default function (e) {
    var pnode = e.target;
    var _left = 0;
    var _top = 0;
    if (e.target.classList.contains('mPrint-left-bot-ticket-drag')) {
        pnode = e.target.parentNode.parentNode;
        _left = 305;
        _top = 5;
    }
    var e = e || window.event;
    var diffX = e.clientX - pnode.offsetLeft;
    var diffY = e.clientY - pnode.offsetTop;
    if (typeof pnode.setCapture != 'undefined') {
        pnode.setCapture();
    }
    document.onmousemove = function (e) {
        var e = e || window.event;
        var left = e.clientX - diffX;
        var top = e.clientY - diffY;
        if (left < _left) {
            left = _left;
        } else if (left > pnode.parentNode.offsetWidth - pnode.offsetWidth) {
            left = pnode.parentNode.offsetWidth - pnode.offsetWidth;
        }
        if (top < _top) {
            top = _top;
        } else if (top > pnode.parentNode.offsetHeight - pnode.offsetHeight) {
            top = pnode.parentNode.offsetHeight - pnode.offsetHeight;
        }
        pnode.style.left = left + 'px';
        pnode.style.top = top + 'px';
    };
    document.onmouseup = function (e) {
        this.onmousemove = null;
        this.onmouseup = null;
        if (typeof pnode.releaseCapture != 'undefined') {
            pnode.releaseCapture();
        }
    };
}