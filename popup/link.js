var src = './popup/'
// liên kết css
;[`${src}css/variable.css`, `${src}css/default.css`, `${src}css/style.css`, `${src}css/phone.css`].forEach(src => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
})

var firstScriptTag = document.getElementsByTagName('script')[0]
// liên kết js
;[`${src}data.js`, `${src}setup.js`, `${src}render.js`].forEach(src => {
    const script = document.createElement('script')
    script.src = src
    firstScriptTag.parentNode.appendChild(script)
})
;[`${src}popup.js`, `${src}openDialog.js`].forEach(src => {
    const script = document.createElement('script')
    script.src = src
    script.defer = true
    firstScriptTag.parentNode.appendChild(script)
})