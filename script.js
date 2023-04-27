if(document.querySelector('.carrousel')){
    let carrousel = document.querySelector('.carrousel');
    let reglette = document.querySelector('.carrousel .reglette');
    let figures = document.querySelectorAll('.carrousel .reglette figure');
    let nbFigures = figures.length;
    let vitesse = carrousel.dataset.vitesse || 3000;

    let tabOrganisation = new Array(nbFigures); 


    reglette.style.width = 100 * nbFigures +'%';

    for(let i=0; i<nbFigures; i++){
        figures[i].style.order = i;
        figures[i].style.width = (100/nbFigures)+'%';
        tabOrganisation[i] = i;
    }

    function attribOrder(){
        for( let i=0 ; i< nbFigures ; i++){
            figures[i].style.order = tabOrganisation[i];
        }
    }

    function nextImage(){
        let element = tabOrganisation.pop();
        tabOrganisation.unshift(element);
        attribOrder();
    }

    function previousImage(){
        let element = tabOrganisation.shift();
        tabOrganisation.push(element);
        attribOrder();
    }

    let timer = setInterval(carrouselNext,vitesse);

    function carrouselNext(){
        reglette.classList.add('animavance');
        setTimeout(function(){
            nextImage();
            reglette.style.left = 0;
            reglette.classList.remove('animavance');
        },1000)
    }

    function carrouselPrevious(){
        previousImage();
        reglette.style.left = '-100%';
        reglette.classList.add('animrecule');
        setTimeout(function(){
            reglette.classList.remove('animrecule');
            reglette.style.left = 0;
        },1000)
    }

    carrousel.addEventListener('mouseenter',function(){
        clearInterval(timer);
    });

    carrousel.addEventListener('mouseleave',function(){
        timer = setInterval(carrouselNext,3000);
    });

    let previous = document.querySelector('.previous');
    let next = document.querySelector('.next');
    previous.addEventListener('click',carrouselPrevious);
    next.addEventListener('click',carrouselNext);
}




