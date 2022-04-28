let subContainer = document.getElementById('subcontainer');

document.getElementById('main_block').onclick = () => {
    if (subContainer.hidden) {
        setTimeout(() => {subContainer.hidden = false}, 1000);
    } else {
        setTimeout(() => {subContainer.hidden = true}, 1000);
    }
}
