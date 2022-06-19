var blocks = document.querySelectorAll('.block')
var target = document.querySelector('.target')



blocks.forEach(function (block) {
    block.addEventListener('dragover', function (e) {
        e.preventDefault();
        block.appendChild(target)
    })
})