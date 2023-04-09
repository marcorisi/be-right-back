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