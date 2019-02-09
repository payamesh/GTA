let leftColumn = document.getElementById('left-column');
let rightColumn = document.getElementById('right-column');
let bothColumns = document.getElementsByClassName('menu__content')
let menu= document.getElementById('menu');
let iframeDoc =  document.getElementById('doc');
let footer = document.getElementById('footer');
function linkContent1(){

    leftColumn.innerHTML = "Hej";
    rightColumn.innerHTML = "då.";

        //reset
        leftColumn.style.cssText = 'display:block;';
        rightColumn.style.cssText = 'display:block;';
        menu.style.cssText = 'height:70vh;';
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';

}
function linkContent2(){

    leftColumn.innerHTML = "kiarman";
    rightColumn.innerHTML = "taklif.";

        //reset
        leftColumn.style.cssText = 'display:block;';
        rightColumn.style.cssText = 'display:block;';
        menu.style.cssText = 'height:70vh;';
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';

}
function linkContent3(){

    leftColumn.innerHTML = "Hej";
    rightColumn.innerHTML = "då.";

    //reset
    leftColumn.style.cssText = 'display:block;';
    rightColumn.style.cssText = 'display:block;';
    menu.style.cssText = 'height:70vh;';
    iframeDoc.style.cssText ='display:none;';
    footer.style.cssText = 'display:flex;';

}
function linkContent4(){
    if(!menu.clientHeight=='70vh'){
        menu.style.cssText = 'height:70vh;'
    }
    leftColumn.innerHTML = "Hej";
    rightColumn.innerHTML = "då.";

    //reset
    leftColumn.style.cssText = 'display:block;'
rightColumn.style.cssText = 'display:block;'
    menu.style.cssText = 'height:70vh;'
    iframeDoc.style.cssText ='display:none;'
footer.style.cssText = 'display:flex;';


}
function linkContent5(){

   

leftColumn.style.cssText = 'display:none;'
rightColumn.style.cssText = 'display:none;'
 iframeDoc.style.cssText = 'display:block; height:80vh;';
footer.style.cssText = 'display:none;';
menu.style.cssText = 'height:100vh;';

   



}
function linkContent6(){

    leftColumn.innerHTML = "Hej";
    rightColumn.innerHTML = "då.";

}