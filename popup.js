function popUp(){
    document.getElementsByClassName('poper')[0].classList.add('pop')
    document.getElementsByClassName('blur')[0].classList.add('activeblur')
}
function popDown(){
    location.reload()
}
// FACEBOOK
function setFacebook(){
    const APPNAME = 'FACEBOOK';
    const IMG = 'https://www.facebook.com/images/fb_icon_325x325.png';
    const URL = 'https://www.facebook.com/';
    console.log(APPNAME, IMG, URL)
}
document.getElementsByClassName('facebook')[0].addEventListener("click", popUp)
document.getElementsByClassName('facebook')[0].addEventListener("click", setFacebook)
document.getElementsByClassName('close')[0].addEventListener("click", popDown)



// INSTAGRAM
document.getElementsByClassName('instagram')[0].addEventListener("click", popUp)
document.getElementsByClassName('close')[0].addEventListener("click", popDown)


// TWITTER
document.getElementsByClassName('twitter')[0].addEventListener("click", popUp)
document.getElementsByClassName('close')[0].addEventListener("click", popDown)