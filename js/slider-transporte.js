// SLIDER TRANSPORTE 

let $items = $('.slider .item');
let active = 2;

function loadShow() {
    $items.eq(active).css({
        transform: 'none',
        zIndex: 1,
        filter: 'none',
        opacity: 1
    });

    // show after
    let stt = 0;
    for (let i = active + 1; i < $items.length; i++) {
        stt++;
        $items.eq(i).css({
            transform: `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`,
            zIndex: -stt,
            filter: 'blur(5px)',
            opacity: stt > 2 ? 0 : 0.6
        });
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        $items.eq(i).css({
            transform: `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`,
            zIndex: -stt,
            filter: 'blur(5px)',
            opacity: stt > 2 ? 0 : 0.6
        });
    }
}

loadShow();

$('#next').on('click', function () {
    active = active + 1 < $items.length ? active + 1 : active;
    loadShow();
});

$('#prev').on('click', function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
});