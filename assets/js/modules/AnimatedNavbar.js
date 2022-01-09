export class AnimatedNavbar {
    constructor (navId,buttonId,linksClass){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.links = document.querySelectorAll(linksClass);
        this.status = 'closed';
        this.lgWidth = '100vw';
        this.smWidth = '100vw';
        this.breakpoint = 768;
        this.init();
    }
    init () {
        this.button.addEventListener('click', () => this.action());
        for(let link of this.links){
            link.addEventListener('click', () => this.close());
        }
    }
    action (){
        if (this.status == 'closed') {
            this.open();
        }else{
            this.close();
        }
    }
    open () {
        if(this.viewportWidthObtain() < this.breakpoint){
            this.navbar.style.width = this.smWidth;
        }else{
            this.navbar.style.width = this.lgWidth;
        }
        this.navbar.style.height = '200px';
        this.status = 'open';
        this.changeButtonToClose();
    }
    close () {
        this.navbar.style.width = '100vw';
        this.navbar.style.height = '0';
        this.status = 'closed';
        this.changeButtonToOpen();
    }
    changeButtonToOpen () { 
        this.button.innerHTML = '<i class="bi bi-list"></i>';
    }
    changeButtonToClose () {
        this.button.innerHTML = '<i class="bi bi-x-lg"></i>';
    }
    viewportWidthObtain(){
        return document.documentElement.clientWidth;
    }
}