let timeout

const changeStyle = function (event) {

    // update the selected controls
    document.querySelector('.brb-ui-class-selector.brb-selected').classList.remove('brb-selected')
    event.target.classList.add('brb-selected')

    // update the body style
    const oldCssClass = document.body.dataset.brbClass
    document.body.classList.remove(oldCssClass)
    
    const cssClassToApply = event.target.dataset.brbClass
    document.body.dataset.brbClass = cssClassToApply
    document.body.classList.add(cssClassToApply)
}

const uiControls = document.querySelectorAll('.brb-ui-class-selector').forEach( (element) => {
    element.addEventListener('click', changeStyle)
})

const showUIControl = function (event) {
    const uiControl = document.getElementById('ui-control')
    uiControl.classList.add('active')
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(hideUIControl, 1000)
}

const hideUIControl = function () {
    const uiControl = document.getElementById('ui-control')
    uiControl.classList.remove('active')
}

document.body.addEventListener('mousemove', showUIControl)
