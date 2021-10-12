/* TOGGLER */

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () =>
{
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})


/* COUNTER */

const counters = 
document.querySelectorAll('.counter');
const speed = 40; //The lower the speed slower

counters.forEach(counter => {
    const updateCount = () =>{
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    //Lower inc to slow and higher to slow
    const inc = target / speed;

    //console.log(inc);
    //console.log(count);

    // Check if target is reached
    if(count < target){
        // Add inc to count and output in counter
        counter.innerText = count + inc;

        //call function every ms
        setTimeout(updateCount, 1);
    }
    else{
        counter.innerText = target;
    }
    };
    updateCount();
});