var src = './popup/'
// liên kết css
;[`${src}css/variable.css`, `${src}css/default.css`, `${src}css/style.css`, `${src}css/phone.css`].forEach(src => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
})