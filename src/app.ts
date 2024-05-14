class Atlagsebesseg{
    utInput : HTMLInputElement | null;
    idoInput : HTMLIFrameElement | null;
    atlagInput:  HTMLIFrameElement | null;
    szamitGomb: HTMLElement | null;
    atlag: number;
    constructor(){
        this.startBind();
        this.eventHandler();
    }
    startBind(){
        this.utInput= document.querySelector('#ut');
        this.idoInput = document.querySelector('#ido');
        this.atlagInput=document.querySelector('#atlag');
        this.szamitGomb=document.querySelector('#szamitGomb');

    }
    eventHandler(){
        this.szamitGomb?.addEventListener('click',() => {
            console.log('előbb');
            this.onClickCalcButton();
        });
    }
    onClickCalcButton(){
        if(this.utInput && this.idoInput){
            const ut = Number(this.utInput.value);
            const ido = Number(this.idoInput.value);
            this.atlag = this.calcAverageSpeed(ut,ido);
            this.renderResult();
        }
    }
    calcAverageSpeed(path:number, time: number):number{
        return path/time;
    }
    renderResult(){
        if(this.atlagInput){
        this.atlagInput.value = this.atlag; 
        }
    }
}

new Atlagsebesseg();