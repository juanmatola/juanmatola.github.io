export default class Functions{

    static linear(x) {
        return x;
    }
    
    static cuadratic(x){
        return x*x;
    }

    static sin(x){
        return Math.sin(x);
    }

    static crazy(x){
        return (this.sin(x)*(x*x*x) + 2*(x*x) + 3*x)*3/2;
    }

}