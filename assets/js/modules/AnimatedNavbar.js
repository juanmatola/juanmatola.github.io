export class AnimatedNavbar {
    constructor (navId,buttonId,linksClass){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.links = document.querySelectorAll(linksClass);
        this.status = 'closed';
        this.lgWidth = '70%';
        this.smWidth = '100%';
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
            this.navbar.style.width = this.lgWidth;
        }else{
            this.navbar.style.width = this.smWidth;
        }
        this.navbar.style.height = '100%';
        this.status = 'open';
        this.changeButtonToClose();
    }
    close () {
        this.navbar.style.width = '0%';
        this.navbar.style.height = '0%';
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