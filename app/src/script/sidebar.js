class SideBar{

    constructor(){
        this.content = document.querySelector('.header__content');
        this.layout = document.querySelector('.header__content-layout');
        this.sideBarBtn = document.querySelector('.header__content-icon');
        this.sideBar = document.querySelector('.sideBar');
        this.sideBarElems = [...this.sideBar.children];
        
        
        
        this.content.addEventListener('click', (e) => {
            this.hideOrShow(e.target);
        })
        
        
        
    }

   
    hideOrShow(element){

        if(element == this.sideBarBtn){
            this.layout.classList.add('disabled');
            this.sideBar.classList.add('active');
        } else if(element == this.content && this.sideBar.classList.contains('active')){

            this.layout.classList.remove('disabled');
            this.sideBar.classList.remove('active');
            
        }
}

    

    
}

const sideBar = new SideBar();

