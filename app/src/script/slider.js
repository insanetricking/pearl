
// First Try//
// class Slider {
//     constructor(obj) {
//         this.slider = document.querySelector(obj.slider);
//         this.item = this.slider.querySelector(obj.item);
//         this.slides = [...(this.item.querySelectorAll(obj.slides))];
//         this.pagination = this.slider.querySelector(obj.pagination);
//         this.buttons = [...(this.pagination.querySelectorAll(obj.buttons))];

//         this.width = this.item.clientWidth;
//         this.height = this.item.clientHeight;

//         this.activeSlide = 0;
//         this.prevSlide = 0;

//         this.moveSize = this.width;





//         this.pagination.addEventListener('click', (e) => {
//             this.change(e);
//         })


//     }

//     change(e) {

//         this.buttons.forEach((button, i) => {
//             if (e.target != this.pagination) {
//                 button.classList.remove('active');
//                 if (button == e.target) {
//                     button.classList.add('active');

//                     console.log(i);
//                     console.log(this.width);

//                     if (i == 0) {
//                         this.item.style = `
//                     transition:0.6s;
//                     transform:translateX(0px)
//                     `;
//                     } else {
//                         this.item.style = `
//                     transition:0.6s;
//                     transform:translateX(-${i * 960}px)
//                     `;
//                     }

//                 }
//             }

//         })




//     }


// }




// const slider = new Slider({
//     sliderWrapper: '.slider__wrapper',
//     slider: '.slider',
//     item: '.slider__items',
//     buttons: '.slider__round',
//     slides: '.slider__slide',
//     pagination: '.slider__pagination'
// });


// Second Try//

class Slider {
    constructor(obj) {
        this.pagination = [...document.querySelectorAll(obj.pagination)];


        for (let i = 0; i < this.pagination.length; i++) {


            let slider = this.pagination[i].closest(obj.slider);
            let paginationBar = slider.querySelector(obj.pagination);
            let buttons = [...paginationBar.children];
            let slideItem = slider.querySelector(obj.item);
            let width = slideItem.clientWidth;
            let height = slideItem.clientHeight;




            paginationBar.addEventListener('click', (e) => {
                this.change(e, paginationBar, buttons, width, height, slideItem);
            })
        }



    }

    change(e, paginationBar, buttons, width, height,slideItem) {

    
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
                            transform:translateX(-${i * 960}px)
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
    slides: '.slider__slide',
    pagination: '.slider__pagination'
});