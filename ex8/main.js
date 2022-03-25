const imgItemNodes = document.querySelectorAll('.photo-wrapper > .photo-inner .img-item img');
const zoomOutView = document.querySelector('.photo-wrapper > .zoom-out');
for (let i = 0; i < imgItemNodes.length; i++) {
    console.log(imgItemNodes[i]);
    const imgItemNode = imgItemNodes[i];
    imgItemNode.addEventListener('mouseenter', function (event) {
        console.log("Test");
        zoomOutView.classList.remove('hidden');
        zoomOutView.querySelector('img').setAttribute('src', event.target.src);
        let photoZoomWidth = zoomOutView.querySelector('img').getBoundingClientRect().width;
        let photoZoomHeight = zoomOutView.querySelector('img').getBoundingClientRect().height;
        let mouseClientX = event.clientX - photoZoomWidth / 2;
        let mouseClientY = event.clientY - photoZoomHeight - 8;

        zoomOutView.style.left = `${mouseClientX}px`;
        if (event.clientY < photoZoomHeight) {
            zoomOutView.style.top = event.clientY+15+'px';
            console.log(event.clientY);
            console.log("test");
        }else {
            zoomOutView.style.top = `${mouseClientY}px`;
            console.log("test2");
        }

    });
    imgItemNode.addEventListener('mouseleave', () => {
        if (!event.target.classList.contains('zoom-out')) {
            zoomOutView.classList.add('hidden');
        }

    })
}

//mouseenter >< mouseover
//mouseleave >< mouseout
