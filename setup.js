function popup({
    id,
    title,
    innerHTML,
    tab,
    innerTab,
    underTab,
}) {
    const dialog = createElement({
        type: 'dialog',
        className: 'popup',
        attributes: {
            id: id
        }
    })
    const popupTitle = createElement({
        type: 'div',
        className: 'popup-title',
        child: [
            createElement({
                type: 'button',
                className: 'close',
                child: [ createElement({ type: 'img', attributes: {src: btnImg.close}}) ],
                events: {
                    click: () => { closeDialog(id) }
                }
            }),
            createElement({
                type: 'h1',
                className: 'popup-title__h1',
                text: title
            })
        ]
    })

    dialog.appendChild(createElement({
        type: 'div',
        className: 'popup-content',
        child: [
            popupTitle,
            tab,
            createElement({
                type: 'div',
                className: 'popup-main scrollbar-style1',
                child: [ createElement({ 
                    type: 'div', 
                    className: 'popup-main__content', 
                    child: innerTab, 
                    text: innerHTML,
                }) ]
            }),
            underTab
        ]
    }))

    return dialog
}

function select(list, data) {
    let num = 0
    return {
        get() {return num},
        set(newNum) {num = newNum},
        value() {return list.length > num && list[num]},
        data() {return list.length > num && data[list[num]]},
        setdata(newData) {data = newData}
    }
}
function selectTab(list, index, s, popup) {
    list[s.get()].classList.remove('select')
    s.set(index)
    list[index].classList.add('select')
    renderPopup(s.data(), popup, s.value() == 'Video' || s.value() == 'Tin tức')
}

function getYtbImg(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

function closeDialog(id) {
    document.querySelector(`dialog#${id}`).close()
}

function reload() {

}
function add(tab) {
    const data = tab == 'Video' ? 
    {
        title: 'Thêm video YouTube',
        data : [
            {
                name: 'video-title',
                label: 'Tiêu đề',
                type: 'text',
                placeholder: 'Tiêu đề ảnh'
            },
            {
                name: 'video-link',
                label: 'URL YouTube',
                type: 'text',
                placeholder: 'https://www.youtube.com/watch?v...'
            },
            {
                name: 'video-content',
                label: 'Nội dung',
                isArea: true,
                placeholder: 'Mô tả chi tiết cho video'
            },
        ],
        uploadVideo
    } : tab == 'Tin tức' ?
    {
        title: 'Tạo tin tức mới',
        data : [
            {
                name: 'news-title',
                label: 'Tiêu đề',
                type: 'text',
                placeholder: 'Tiêu đề ảnh'
            },
            {
                name: 'news-content',
                label: 'Nội dung',
                isArea: true,
                placeholder: 'Nội dung chi tiết'
            },
            {
                name: 'news-image',
                label: 'Hình ảnh',
                type: 'file'
            },
        ],
        uploadVideo
    } : {}
    gContent.setAttribute('id', 'upload-form')
    
    gContent.innerHTML = ''
    gContent.appendChild(renderForm(data))
}
function uploadVideo() {
    
}
function seeMore(news) {
    gContent.setAttribute('id', 'news-detal')
    
    gContent.innerHTML = ''
    gContent.appendChild(renderInnerTab())
    gContent.appendChild(renderDetal(news))
}
function logout() {

}

function createElement({
    type,
    child,
    underChild,
    className,
    attributes,
    events,
    text
}) {
    const element =  type ? document.createElement(type) : document.createDocumentFragment()
    child?.forEach(e => e && element.appendChild(e))
    if(className)  element.className = className
    if(text) element.innerHTML += text
    underChild?.forEach(e => e && element.appendChild(e))
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
    for (const ev in events) {
        element.addEventListener(ev, events[ev])
    }
    return element
}