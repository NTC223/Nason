function generalOpen() {
    if (typeof rebuildGeneralTabs === 'function') rebuildGeneralTabs()
    general.showModal()
    selectTab(tabs, 0, gTabSelect, gContent, 'general')
}
function productOpen() {
    if (typeof rebuildProductUnderTabs === 'function') rebuildProductUnderTabs()
    product.showModal()
    selectTab(underTabs, 0, pTabSelect, pContent, 'product')
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