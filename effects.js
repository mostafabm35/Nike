               (function addit(){
                    var munu = document.querySelector(".MunuIcon"),
                      canseleBtn = document.querySelector('.canseleIt'),
                      drop = document.querySelector(".drop-down"),
                      container = document.querySelector(".container"),
                    fillter = document.querySelector(".fillter"),
                    hh  = document.querySelector('.hh');
                    hh2  = document.querySelector('.hh2');
                    hh3  = document.querySelector('.hh3');
                    hh4  = document.querySelector('.hh4');
                    hh5  = document.querySelector('.hh5');

                    munu.onclick =()=>{ drop.classList.add("dropActive");
                    container.style.position = "fixed";
                    fillter.style.background = "rgb(26, 29, 29)";
                    fillter.style.opacity = "0.8";
                    hh.style.display = "block";
                    hh2.style.display = "block";
                    hh3.style.display = "block";
                    hh4.style.display = "block";
                    hh5.style.display = "block";

                            }
                    canseleBtn.onclick =()=>{ drop.classList.remove("dropActive");
                    container.style.position = "unset";
                    fillter.style.background = "none";
                    fillter.style.transition = "0.4s";
                    hh.style.display = "none";
                    hh2.style.display = "none";
                    hh3.style.display = "none";
                    hh4.style.display = "none";
                    hh5.style.display = "none";
                           }
               })();

               window.onload = function Effects(){

                  var  ballit = document.querySelector(".ball1"),
                    tchImg = document.querySelector(".tchImg"),
                    h1t = document.querySelector(".h1t"),
               like = document.querySelector(".tcu");

                    ballit.classList.add("chowBall");
                    tchImg.classList.add("chowBallslow");
                    h1t.classList.add("textmargin");
                    like.classList.add("textmargin");     
                    }


                    var contwo = document.querySelector(".cont2");
                    window.onscroll = function(){

                      if( this.scrollY >= 300 ){
                        contwo.classList.add("activecont");
                      }

                    } 

