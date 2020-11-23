let menuElement = document.getElementsByClassName('offer_menu_element');
let details = document.getElementsByClassName('offer_details');

for (let i in menuElement) {
    menuElement[i].onclick = function () {
        for (let j in menuElement) {
            if (menuElement[j].classList) {
                menuElement[j].classList.remove('active');
            }
        }
        menuElement[i].classList.add('active');

        for (let j in details) {
            if (details[j].classList) {
                details[j].classList.remove('active');
            }
        }
        document.querySelector('.offer_details[data-cat="' + menuElement[i].dataset.cat + '"]').classList.add('active');
    }
}