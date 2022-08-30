$(function() {
    var _menuId = "mobileNavGroup-main";
    var _menu = null;
    var _mobMenuLink = null;
    var _lastMenuTarget = null;
    var _closeInterval = 0;
    var doc = document;

    var _eventHandler = function(e) {
        var target = e.target;

        clearTimeout(_closeInterval);

        // ignore mouse events when mobile menu is open
        if ((e.type === "mouseover") && (doc.body.classList.contains("menuOpen"))) {
            e.preventDefault();
            return;
        }

        var href = target.getAttribute("href");
        var ariaControls = target.getAttribute("aria-controls");
        var controlId = null;

        if (ariaControls !== null) {
            controlId = ariaControls;
        } else if ((href !== null) && (href[0] === "#")) {
            controlId = href.substring(1);
        }

        if (controlId !== null) {
            var list = doc.getElementById(controlId);
            var isClosed = (list.getAttribute("aria-hidden") === "true");

            if (controlId === _menuId) {
                _collapseMenu(_menu.parentNode.parentNode);
            } else {
                _collapseMenu(target.parentNode.parentNode);
            }

            if (isClosed) {
                list.classList.add("expanded");
                list.setAttribute("aria-hidden", "false");
                doc.querySelectorAll("[aria-controls='" + controlId + "']").forEach(function(el) {
                    el.setAttribute("aria-expanded", "true");
                });
                _lastMenuTarget = target;
            } else if (controlId === _menuId) {
                doc.body.classList.remove("menuOpen");
            }

            e.preventDefault();
        } else {
            if (e.type === "mouseover") {
                clearInterval(_closeInterval);
                _closeInterval = setTimeout(function() {
                    _collapseMenu(target);
                }, 500);
            } else {
                _collapseMenu(target);
            }
            _lastMenuTarget = null;
        }
    };

    var _init = function() {
        _menu = doc.getElementById(_menuId);
        _mobMenuLink = doc.querySelector("a[href='#" + _menuId + "']");

        _menu.addEventListener("click", _eventHandler);
        _menu.addEventListener("mouseover", _eventHandler);

        doc.body.addEventListener("mouseout", function(e) {
            if (!doc.body.classList.contains("menuOpen") && !_menu.contains(e.target) && !_mobMenuLink.contains(e.target)) {
                clearInterval(_closeInterval);
                _closeInterval = setTimeout(function() {
                    _collapseMenu(doc.body);
                }, 500);
            }
        });

        doc.body.addEventListener("click", function(e) {
            if (!_menu.contains(e.target) && !_mobMenuLink.contains(e.target)) {
                _collapseMenu(doc);
                _lastMenuTarget = null;
                doc.body.classList.remove("menuOpen");
                return;
            }
        });

        _mobMenuLink.addEventListener("click", function(e) {
            clearTimeout(_closeInterval);

            if (_menu.classList.contains("expanded")) {
                _collapseMenu(_menu.parentNode.parentNode);
                _lastMenuTarget = null;
            }

            doc.body.classList.toggle("menuOpen");
            _menu.classList.toggle("expanded");
            _menu.setAttribute("aria-hidden", "false");
            doc.querySelectorAll("[aria-controls='" + _menuId + "']").forEach(function(el) {
                el.setAttribute("aria-expanded", "true");
            });

            e.preventDefault();
        });
    };

    var _collapseMenu = function(parent) {
        parent.querySelectorAll(".expanded").forEach(function(el) {
            el.classList.remove("expanded");
            el.setAttribute("aria-hidden", "true");
        });
        parent.querySelectorAll("[aria-expanded=true]").forEach(function(el) {
            el.setAttribute("aria-expanded", "false");
        });
    };

    _init();
});