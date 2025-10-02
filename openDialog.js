function generalOpen() {
    general.showModal()
}
function productOpen() {
    product.showModal()
}
function mapOpen() {
    map.showModal()
}
function shareOpen() {
    share.showModal()
}
function guideOpen() {
    guide.showModal()
}

// nut goi ham
const btn = [generalOpen, productOpen, mapOpen, shareOpen, guideOpen].map((func, i) => createElement({
    type: 'button',
    events: {click: () => {func()}},
    text: `nut thu ${i+1}`
}))

main.appendChild(createElement({
    type: 'div',
    className: 'flex space-between',
    child: btn
}))