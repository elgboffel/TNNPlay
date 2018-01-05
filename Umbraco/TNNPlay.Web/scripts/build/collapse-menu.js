"use strict";
var App;
(function (App) {
    var ancestorSectionClassName = 'cm__section--ancestor';
    var openClassName = 'cm--open';
    var sectionClassName = 'cm__section';
    var childrenClassName = 'cm__children';
    var ancestorOrCurrentClassName = 'cm__children--ancestor-or-current';
    var linkClassName = 'cm__link';
    var openBtnClassName = 'cm__btn--open';
    var CollapseMenu = (function () {
        function CollapseMenu(_element) {
            this.expand(_element);
            this.slideToLevel(_element);
            this.backToLevel(_element);
        }
        CollapseMenu.prototype.expand = function (_element) {
            var _this = this;
            var expandBtns = _element.querySelectorAll('.cm__btn--expand');
            for (var i = 0; i < expandBtns.length; i++) {
                var btn = expandBtns[i];
                btn.addEventListener('click', function (event) {
                    var section = this.closest("." + sectionClassName);
                    var children = section.querySelector("." + childrenClassName);
                    var link = section.querySelector("." + linkClassName);
                    var classResets = [ancestorSectionClassName, ancestorOrCurrentClassName, openBtnClassName];
                    event.preventDefault();
                    if (!_element.classList.contains(openClassName))
                        _element.classList.add(openClassName);
                    if (!section.classList.contains(ancestorSectionClassName)) {
                        _this.resetClassQuery(_element, classResets);
                        section.classList.add(ancestorSectionClassName);
                        children.classList.add(ancestorOrCurrentClassName);
                        this.classList.add(openBtnClassName);
                        _this.adjustHeight(children, link, section);
                    }
                    else {
                        _this.adjustHeight(children, link, section, true);
                        _this.resetClassQuery(_element, classResets);
                    }
                });
            }
        };
        CollapseMenu.prototype.slideToLevel = function (_element) {
            var _this = this;
            var slideBtns = _element.querySelectorAll('.cm__btn--slide');
            for (var i = 0; i < slideBtns.length; i++) {
                var btn = slideBtns.item(i);
                btn.addEventListener('click', function (event) {
                    var ancestor = this.closest("." + ancestorSectionClassName);
                    var section = this.closest("." + sectionClassName);
                    var children = section.querySelector("." + childrenClassName);
                    event.preventDefault();
                    children.classList.add(ancestorOrCurrentClassName);
                    _this.adjustHeight(children, this, ancestor);
                });
            }
        };
        CollapseMenu.prototype.backToLevel = function (_element) {
            var _this = this;
            var backBtns = _element.querySelectorAll('.cm__btn--back');
            for (var i = 0; i < backBtns.length; i++) {
                var btn = backBtns.item(i);
                btn.addEventListener('click', function (event) {
                    var ancestor = this.closest("." + ancestorSectionClassName);
                    var ancestorLink = ancestor.querySelector("." + linkClassName);
                    var section = this.closest("." + sectionClassName);
                    var thisSlide = section.closest("." + ancestorOrCurrentClassName);
                    var prevSlide = thisSlide.closest("." + sectionClassName).closest("." + ancestorOrCurrentClassName);
                    event.preventDefault();
                    thisSlide.classList.remove(ancestorOrCurrentClassName);
                    _this.adjustHeight(prevSlide, ancestorLink, ancestor);
                });
            }
        };
        CollapseMenu.prototype.adjustHeight = function (_childElement, _targetElement, _addHeightToo, resetHeight) {
            if (resetHeight === void 0) { resetHeight = false; }
            var height = _targetElement.offsetHeight;
            if (resetHeight)
                height -= this.getHeightFromChilds(_childElement);
            else
                height += this.getHeightFromChilds(_childElement);
            _addHeightToo.style.minHeight = height + "px";
            console.log("Height adjusted: " + height);
        };
        CollapseMenu.prototype.getHeightFromChilds = function (_element) {
            var children = _element.childNodes;
            var combinedHeight = 0;
            for (var i = 0; i < children.length; i++) {
                var element = children.item(i);
                if (element.classList != undefined && element.classList.contains(sectionClassName))
                    combinedHeight += element.offsetHeight;
            }
            return combinedHeight;
        };
        CollapseMenu.prototype.resetClassQuery = function (_fromElement, _classToRemoveList) {
            _classToRemoveList.forEach(function (classToRemove) {
                var classQuery = _fromElement.querySelectorAll("." + classToRemove);
                for (var i = 0; i < classQuery.length; i++) {
                    var ancestor = classQuery.item(i);
                    ancestor.removeAttribute('style');
                    ancestor.classList.remove(classToRemove);
                }
            });
        };
        return CollapseMenu;
    }());
    App.CollapseMenu = CollapseMenu;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.cm');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.CollapseMenu(elements[i]);
    }
})();
//# sourceMappingURL=collapse-menu.js.map