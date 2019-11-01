window.onload = function(){
    let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;

    function reset(){
        for(let i=0;i<sliderImages.length;i++){
            sliderImages[i].style.opacity = 0;
        }
    }

    function initSlider(){
        reset();
        sliderImages[0].style.opacity =1;
    }

    function slideLeft(){
        reset();
        sliderImages[current - 1].style.opacity=1;
        current--;
    }
    function slideRight(){
        reset();
        sliderImages[current + 1].style.opacity=1;
        current++;
    }

    //click on right arrow
    arrowRight.addEventListener('click', function(){
        if (current === sliderImages.length-1){
            current = 0;
        }
        slideRight();
    });

    //click on left arrow
    arrowLeft.addEventListener('click',function(){
        if(current === 0){
            current = sliderImages.length;
        }
        slideLeft();
    });


    initSlider();
};
