var ListSize = document.querySelectorAll('.block .size');

function getSize(size) {

    let Lenght = size.innerHTML;
    let time = 200;
    let step = Lenght / time;
    let count = 0;

    setInterval(function () {
        if (count < Lenght) {
            count += step;
            size.innerText = Math.round(count);
        }
        else{
            return;
        }
    }, 1)
}

ListSize.forEach(function (size) {
    getSize(size)
})