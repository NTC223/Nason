const address = 'Tòa nhà 132 Phố Lạc Nghiệp, Phường Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội, Việt Nam'

var mapPopup, generalPopup, titleList

function select() {
    let num = 0
    return {
        get() {return num},
        set(x) {num = x}
    }
}
function addEvent() {
    let general = document.querySelector('#general-popup')
    let map = document.querySelector('#map-popup')
    mapPopup = document.querySelector('#map-popup .popup__main__content')
    generalPopup = document.querySelector('#general-popup .popup__main__content')
    titleList = document.querySelectorAll('#general-popup .popup__title__list .item')
    
    // chon tab hien thi trong popup Chung
    const titleSelect = select()
    selectTitle(titleList, 0, titleSelect, generalPopup)
    titleList.forEach((title, index) => {
        title.addEventListener('click', () => {
            selectTitle(titleList, index, titleSelect, generalPopup)
            setCss()
        })
    })

    // khoi tao gia tri mac dinh
    map != null && map.addEventListener('toggle', () => {
        
        mapPopup.innerHTML += 
        `<div>
            <img src='${icon.address}' alt='loi'/>
            <b>${address}</b>
        </div>`
    })
    // gan css
    window.onresize = setCss
    general != null && general.addEventListener('toggle', () => {
        general.open && setCss()
    })
}
