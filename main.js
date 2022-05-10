
const balloon = document.querySelector('#air-balloon')
const cloudOne = document.querySelector('#cloud-one')
const cloudTwo = document.querySelector('#cloud-two')
const cloudThree = document.querySelector('#cloud-three')
const cloudFour = document.querySelector('#cloud-four')
const cloudFive = document.querySelector('#cloud-five')

const jsEl = document.querySelector('#js')
const reactEl = document.querySelector('#react')
const gqlEl = document.querySelector('#gql')

//style bottom: 10%  for the balloon for readability as other developers might not look in css so to keep things in one file
balloon.style.bottom = 10 + '%'

function move(){
    const incrementer = window.scrollY;
    //console.log(incrementer);
    //bottom in css position has to be the same starting point here or if we do not have this is the css we style it here -look above comment
    balloon.style.bottom = 10 + incrementer * 0.1 + "%"

    cloudOne.style.bottom = 40 + incrementer * 0.12 + "%"
    cloudOne.style.left = 75 + incrementer * 0.1 + "%"

    cloudTwo.style.bottom = 80 + incrementer * 0.14 + "%"
    cloudTwo.style.left = 70 + incrementer * 0.15 + "%"

    cloudThree.style.bottom = 60 + incrementer * 0.12 + "%"
    cloudThree.style.left = 0 + incrementer * -0.1 + "%"

    cloudFour.style.bottom = 70 + incrementer * 0.13 + "%"
    cloudFour.style.left = 20 + incrementer * -0.11 + "%"

    cloudFive.style.bottom = 60 + incrementer * 0.13 + "%"
    cloudFive.style.left = 60 + incrementer * 0.12 + "%"

    jsEl.style.left = 20 + incrementer * -0.11 + "%"
    reactEl.style.left = 26 + incrementer *   -0.11 + "%"
    gqlEl.style.left = 32 + incrementer * -0.11 + "%" 
    
}

window.addEventListener("scroll", move)
