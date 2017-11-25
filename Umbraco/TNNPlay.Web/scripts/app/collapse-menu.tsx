namespace App {
    const ancestorSectionClassName = 'cm__section--ancestor';
    const openClassName = 'cm--open';
    const sectionClassName = 'cm__section';
    const childrenClassName = 'cm__children';
    const ancestorOrCurrentClassName = 'cm__children--ancestor-or-current';
    const linkClassName = 'cm__link';
    const openBtnClassName = 'cm__btn--open';

    export class CollapseMenu {

        constructor(_element: HTMLElement) {
            this.expand(_element);
            this.slideToLevel(_element);
            this.backToLevel(_element);
        }

        expand(_element: HTMLElement) {
            let _this = this;
            let expandBtns = _element.querySelectorAll('.cm__btn--expand') as NodeListOf<HTMLElement>;

            for (let i = 0; i < expandBtns.length; i++) {
                let btn = expandBtns[i];

                btn.addEventListener('click', function (event) {

                    let section = this.closest(`.${sectionClassName}`) as HTMLElement;
                    let children = section.querySelector(`.${childrenClassName}`) as HTMLElement;
                    let link = section.querySelector(`.${linkClassName}`) as HTMLElement;
                    let classResets = [ancestorSectionClassName, ancestorOrCurrentClassName, openBtnClassName]

                    event.preventDefault();

                    if (!_element.classList.contains(openClassName))
                        _element.classList.add(openClassName);

                    if (!section.classList.contains(ancestorSectionClassName)) {
                        //If clicking new expander, reset all ancestors and styles
                        _this.resetClassQuery(_element, classResets);
                        //Adjust new height
                        section.classList.add(ancestorSectionClassName);
                        children.classList.add(ancestorOrCurrentClassName);
                        this.classList.add(openBtnClassName)
                        _this.adjustHeight(children, link, section);

                    } else {
                        _this.adjustHeight(children, link, section, true);
                        _this.resetClassQuery(_element, classResets);
                    }
                });
            }
        }

        slideToLevel(_element: HTMLElement) {
            let _this = this;
            let slideBtns = _element.querySelectorAll('.cm__btn--slide') as NodeListOf<HTMLElement>;

            for (let i = 0; i < slideBtns.length; i++) {
                let btn = slideBtns.item(i);
                btn.addEventListener('click', function (event) {
                    let ancestor = this.closest(`.${ancestorSectionClassName}`) as HTMLElement;
                    let section = this.closest(`.${sectionClassName}`) as HTMLElement;
                    let children = section.querySelector(`.${childrenClassName}`) as HTMLElement;

                    event.preventDefault();

                    children.classList.add(ancestorOrCurrentClassName);

                    _this.adjustHeight(children, this, ancestor);
                });
            }
        }

        backToLevel(_element: HTMLElement) {
            let _this = this;
            let backBtns = _element.querySelectorAll('.cm__btn--back') as NodeListOf<HTMLElement>;

            for (let i = 0; i < backBtns.length; i++) {
                let btn = backBtns.item(i);

                btn.addEventListener('click', function (event) {
                    let ancestor = this.closest(`.${ancestorSectionClassName}`) as HTMLElement;
                    let ancestorLink = ancestor.querySelector(`.${linkClassName}`) as HTMLElement;
                    let section = this.closest(`.${sectionClassName}`) as HTMLElement;
                    let thisSlide = section.closest(`.${ancestorOrCurrentClassName}`) as HTMLElement;
                    let prevSlide = thisSlide.closest(`.${sectionClassName}`).closest(`.${ancestorOrCurrentClassName}`) as HTMLElement;
                    event.preventDefault();

                    thisSlide.classList.remove(ancestorOrCurrentClassName);
                    _this.adjustHeight(prevSlide, ancestorLink, ancestor);
                });
            }
        }

        adjustHeight(_childElement: HTMLElement, _targetElement: HTMLElement, _addHeightToo: HTMLElement, resetHeight = false) {
            let height = _targetElement.offsetHeight;

            if (resetHeight)
                height -= this.getHeightFromChilds(_childElement);
            else
                height += this.getHeightFromChilds(_childElement);

            _addHeightToo.style.minHeight = `${height}px`;
            console.log(`Height adjusted: ${height}`);
        }

        getHeightFromChilds(_element: HTMLElement) {
            let children = _element.childNodes as NodeListOf<HTMLElement>;
            let combinedHeight = 0;

            for (let i = 0; i < children.length; i++) {
                let element = children.item(i);
                if (element.classList != undefined && element.classList.contains(sectionClassName))
                    combinedHeight += element.offsetHeight;
            }

            return combinedHeight;
        }

        resetClassQuery(_fromElement: HTMLElement, _classToRemoveList: string[]) {

            _classToRemoveList.forEach((classToRemove) => {
                let classQuery = _fromElement.querySelectorAll(`.${classToRemove}`) as NodeListOf<HTMLElement>;

                for (let i = 0; i < classQuery.length; i++) {
                    let ancestor = classQuery.item(i);
                    ancestor.removeAttribute('style');
                    ancestor.classList.remove(classToRemove);
                }
            });
        }
    }
}

(function () {
    var elements = document.querySelectorAll('.cm') as NodeListOf<HTMLElement>;
    
    for (let i = 0; i < elements.length; i++) {
        let init = new App.CollapseMenu(elements[i]);
    }
})();
