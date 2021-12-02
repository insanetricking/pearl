
// Second Try//

class Slider {
    constructor(obj) {

        this.pagination = [...document.querySelectorAll(obj.pagination)];


        this.init(obj)

        window.addEventListener('resize', () => {
            location.reload();
            this.init(obj);
            
        }

        );

    }

    init(obj) {


        for (let i = 0; i < this.pagination.length; i++) {


            let slider = this.pagination[i].closest(obj.slider);
            let paginationBar = slider.querySelector(obj.pagination);
            let buttons = [...paginationBar.children];
            let slideItem = slider.querySelector(obj.item);
            let slideImages = [...slider.querySelectorAll(obj.slideImg)];
            let width = slider.offsetWidth;
            let height = slider.clientHeight;
            
            slider.style.height = width*76 /100 + 'px';


            slideImages.forEach(item => {
                item.style.width = width + 'px';
                item.style.height = 'auto';


            })


            paginationBar.addEventListener('click', (e) => {
                this.change(e, paginationBar, buttons, width, height, slideItem);
            })
        }


    }

    change(e, paginationBar, buttons, width, height, slideItem) {


        buttons.forEach((button, i) => {
            if (e.target != paginationBar) {
                button.classList.remove('active');
                if (button == e.target) {
                    button.classList.add('active');

                    if (i == 0) {
                        slideItem.style = `
                            transition:0.6s;
                            transform:translateX(0px)
                            `;
                    } else {
                        slideItem.style = `
                            transition:0.6s;
                            transform:translateX(-${i * width}px)
                            `;
                    }

                }
            }

        })




    }
}






const slider = new Slider({
    sliderWrapper: '.slider__wrapper',
    slider: '.slider',
    item: '.slider__items',
    buttons: '.slider__round',
    slideImg: '.slider__img',
    pagination: '.slider__pagination'
});