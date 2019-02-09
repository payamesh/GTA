let leftColumn = document.getElementById('left-column');
let rightColumn = document.getElementById('right-column');
let bothColumns = document.getElementsByClassName('menu__content')
let menu= document.getElementById('menu');
let iframeDoc =  document.getElementById('doc');
let footer = document.getElementById('footer');
function linkContent1(){

    leftColumn.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorum quam enim et nobis blanditiis nihil error sit quia. Repellat ab similique perferendis, quasi laboriosam corrupti fugiat aspernatur rem! Placeat dignissimos rem modi error explicabo, vitae molestiae ipsum, minus sapiente animi reprehenderit, corrupti laboriosam tenetur. Unde rem minima voluptatibus eius. Autem repudiandae reprehenderit dignissimos voluptatum veniam aperiam dolor ipsum maiores possimus odio ipsam eaque repellat explicabo voluptate nam, minima tenetur est eum itaque, ex voluptatibus expedita? Odit expedita, eum, sapiente facere numquam architecto in ut magni aspernatur vero, voluptas praesentium ab distinctio fugit quidem eos amet fuga cumque explicabo quasi!";
    rightColumn.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit maxime cum excepturi nihil assumenda doloribus tempore amet, ab reiciendis repellat facere modi harum beatae recusandae consequatur in soluta, corrupti vitae explicabo minus neque. Sunt ut error illo commodi. Veniam debitis veritatis perferendis in fuga dolor reprehenderit, ratione et quibusdam aspernatur optio ab hic temporibus minus saepe, mollitia aliquam facilis nulla dolorem ad harum perspiciatis accusamus ipsum! Sapiente officiis possimus corporis minus odit. Quasi tempore ipsam velit pariatur eius facere sunt. Ipsam ab, beatae debitis cupiditate saepe, dolorem quae amet hic asperiores ratione laudantium illum explicabo sed harum animi officiis.";

        //reset
        if(menu.clientHeight>452){
            menu.style.cssText = 'height:70vh;'
        }
        leftColumn.style.cssText = 'display:block;';
        rightColumn.style.cssText = 'display:block;';
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';

}
function linkContent2(){

    leftColumn.innerHTML = "kiarman";
    rightColumn.innerHTML = "taklif.";

        //reset
        if(menu.clientHeight>452){
            menu.style.cssText = 'height:70vh;'
        }
        leftColumn.style.cssText = 'display:block;';
        rightColumn.style.cssText = 'display:block;';
        iframeDoc.style.cssText ='display:none;';
        footer.style.cssText = 'display:flex;';

}
function linkContent3(){

    leftColumn.innerHTML = "Hej";
    rightColumn.innerHTML = "då.";

    //reset
    if(menu.clientHeight>452){
        menu.style.cssText = 'height:70vh;'
    }
    leftColumn.style.cssText = 'display:block;';
    rightColumn.style.cssText = 'display:block;';
    iframeDoc.style.cssText ='display:none;';
    footer.style.cssText = 'display:flex;';

}
function linkContent4(){
    if(menu.clientHeight>452){
        menu.style.cssText = 'height:70vh;'
    }
   
    leftColumn.innerHTML = "Hej";
    rightColumn.innerHTML = "då.";

    //reset
    leftColumn.style.cssText = 'display:block;'
rightColumn.style.cssText = 'display:block;'
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