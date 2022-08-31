const path = document.querySelector('.path')


console.log(path.getAttribute('d'))

function lerp(start, end, t){
    return start * (1 - t) + end * t;
}

let toggle = false;

//start svg at bottom of screen as menu is not active
let y = 100;
let c = 100;

function animate(){

    if(toggle){
        y = lerp(y, 0, .065)
        c = lerp(c, 0, .085)
        path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, 50 ${c}, 0 ${y}`)

    }else{
        y = lerp(y, 100, .065)
        c = lerp(c, 100, .085)
        path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, 50 ${c}, 0 ${y}`)
    }

    requestAnimationFrame(animate)
}

animate()

const menuToggle = document.querySelector('.menu-tog')
const ul = document.querySelector('ul')
menuToggle.addEventListener('click', () => {
    setTimeout(() => {
        toggle = !toggle

    }, 300);

    if(toggle){
        ul.classList.remove('active')

    }else{
        setTimeout( () => {
            ul.classList.add('active')
        }, 1000)
    }

    menuToggle/classList.toggle('active')
})

