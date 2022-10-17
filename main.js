const images = document.querySelectorAll('img');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.image');

let count = 1;
let timeout;

left.addEventListener("click", () => {
    count--;
    clearTimeout(timeout)
    updateImg();
})

right.addEventListener("click", () => {
    count++;
    clearTimeout(timeout)
    updateImg();
})



updateImg();

function updateImg() {
    if (count > images.length) {
        count = 1
    }
    if (count < 1) {
        count = images.length
    }
    if (container.style.width = '700px') {
        container.style.transform = `translateX(${(count - 1) * (-700)}px)`;
        container.style.transition = 'transform 0.4s ease-in-out'
        // count * 700 (which is image width value)
    } 
    // else if (container.style.width = '340px') {
    //     container.style.transform = `translateX(${(count - 1) * (-340)}px)`;
    //     container.style.transition = 'transform 0.4s ease-in-out';
    //     container.style.objectFit = 'contain';
    // }


    timeout = setTimeout(() => {
        count++
        updateImg()
    }, 4000);
} 