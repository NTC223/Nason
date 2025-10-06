function renderPopup(content, popup, innerTab) {
    popup.innerHTML = ''
    const {id, ...data} = content
    id && popup.setAttribute('id', id)
    innerTab && popup.appendChild(renderInnerTab(gTabSelect.value(), checkLogin.get()))
    Object.keys(data).forEach(key => {
        const element = 
        key == 'img' ? renderImg(data[key])
        : key == 'text' ? renderText(data[key])
        : key == 'video' ? renderVideo(data[key], popup)
        : key == 'iList' ? renderList(data[key])
        : key == 'iLink' ? renderLink(data[key])
        : key == 'iNews' ? renderNews(data[key])
        : key == 'playVideo' ? playVideo(data[key])
        : createElement({type: 'div'})
        popup.appendChild(element)
    })
}
function renderInnerTab(tab, isLogin) {
    return isLogin ? createElement({
        type: 'div',
        className: 'inner-tab relative margin10 flex space-between',
        child: [
            createElement({
                type: 'div',
                className: 'flex gap10 align-center',
                child: tab == 'Tin tức' || tab == 'Video' ?
                [
                    createElement({ type: 'button', events: {click: () => {reload()}}, child: [createElement({ type: 'img', className: 'square-button', attributes: {src: btnImg.reload} })] }),
                    createElement({ type: 'button', events: {click: () => {add(tab)}}, child: [createElement({ type: 'img', className: 'square-button', attributes: {src: btnImg.add} })] })
                ] : 
                [ // tab: id cua bai viet
                    createElement({ type: 'button', events: {click: () => {addImg(tab)}}, child: [createElement({ type: 'img', className: 'square-button', attributes: {src: btnImg.addImg} })] }),
                    createElement({ type: 'button', events: {click: () => {write(tab)}}, child: [createElement({ type: 'img', className: 'square-button', attributes: {src: btnImg.write} })] })
                ]
            }),
            createElement({
                type: 'div',
                className: 'flex gap10 align-center',
                child: [
                    createElement({ type: 'p', text: 'nason@gmail.com' }),
                    createElement({ 
                        type: 'button', 
                        events: {click: () => {logout()}}, 
                        child: [createElement({ type: 'img', attributes: {src: btnImg.logout} })] 
                    })
                ]
            })
        ]
    }) : createElement({
        type: 'div',
        className: 'inner-tab relative margin10 flex justify-end',
        child: [
            createElement({ 
                type: 'button', 
                events: {click: () => {login()}}, 
                child: [
                    createElement({ type: 'img', attributes: {src: btnImg.login} })
                ] 
            })
        ]
    })
}
function playVideo(link) {
    const base = 'https://www.youtube.com/embed/'
    return createElement({
        type: 'iframe',
        className: 'iframe-video',
        attributes: {
            src: `${base}${link}?rel=0`,
        }
    })
}
function renderImg(src) {
    return createElement({
        type: 'img',
        attributes: {src: src}
    })
}
function renderText(text) {
    // class: text
    const productName = text.find(i => i.id == 'title') && (text.find(i => i.id == 'title').title).toLowerCase()
    return createElement({
        type: 'div',
        className: 'text',
        child: text.map(txt => {
            if(typeof(txt) == 'string') {
                return createElement({
                    type: 'p',
                    text: txt
                })
            }
            else if(typeof(txt) == 'object' && txt.id == 'contact') {
                const contact = createElement({
                    type: 'div',
                    className: 'contact',
                    child: [
                        createElement({ type: 'p', className: 'title', text: 'Thông tin liên hệ'})
                    ]
                })
                for (const key in txt) {
                    if(key=='id') continue
                    const info = createElement({
                        type: 'div',
                        text: `<img src='${iconImg[key]}' alt='loi'/>
                            <p>${txt[key]}</p>`
                    })
                    contact.appendChild(info)
                }
                return contact
            }
            else if(typeof(txt) == 'object' && txt.id == 'title') {
                return createElement({
                    type: 'p', 
                    className: 'name',
                    text: txt.title
                })
            }
            else if(typeof(txt) == 'object' && txt.id == 'info') {
                return createElement({
                    child: [
                        createElement({ type: 'p', className: 'title', text: `Thông tin ${productName}` }),
                        createElement({
                            type: 'ul',
                            child: txt.info.map(i => createElement({type: 'li', text: i}))
                        })
                    ]
                })
            }
            else if(typeof(txt) == 'object' && txt.id == 'mean') {
                return createElement({
                    child: [
                        createElement({ type: 'p', className: 'title', text: `Ý nghĩa phong thủy của ${productName}` }),
                        createElement({type: 'p', text: txt.mean})
                    ]
                })
            }
            else if(typeof(txt) == 'object' && txt.id == 'cost') {
                const format = new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'})
                return createElement({
                    type: 'p',
                    child: [
                        createElement({ type: 'span', className: 'title', text: 'Giá thành: '}),
                        createElement({
                            type: 'span',
                            className: 'cost',
                            text: format.format(Number(txt.cost))
                        })
                    ]
                })
            }
            else if(typeof(txt) == 'object' && txt.id == 'iButton') {
                return renderButton(txt, 'product-buy text-btn')
            }
        })
    })
}
function renderVideo(video, popup) {
    const base = 'https://noembed.com/embed?url=https://www.youtube.com/watch?v=';
    return createElement({
        type: 'div',
        child: video.map(vid => {
            const title = createElement({ type: 'p', className: 'text-start'})
            const url = base + vid
            fetch(url)
            .then(res => res.json())
            .then(data => { title.innerHTML = data.title })
            .catch(err => alert(err))
            return createElement({
                type: 'div',
                className: 'item',
                events: {
                    click: () => { renderPopup({playVideo: vid}, popup) }
                },
                child: [
                    createElement({ type: 'img', attributes: { src: getYtbImg(vid), alt: 'loi'} }),
                    title
                ]
            })
        }
        )
    })
}
function renderList(list) {
    return createElement({
        child: list.map((item, i) => 
            createElement({
                type: 'div',
                className: i == 0 ? 'first flex column gap20' : 'flex column gap20',
                child: item.map(c => createElement({
                    type: 'a',
                    className: 'cetificate',
                    attributes: {
                        href: c.image,
                        target: '_blank',
                        style: `background: url('${c.image}') center/cover`
                    }
                }))
            })
        )
    })
}
function renderLink(link, name) {
    return createElement({
        type: 'a',
        className: `${name} flex center align-center`,
        attributes: {
            href: link.link,
            target: '_blank'
        },
        child: [ createElement({ type: 'img', attributes: {src: link.image} }) ]
    })
}
function renderNews(news) {
    return createElement({
        type: 'div',
        className: 'grid auto200 gap10',
        child: news.map(n => 
            createElement({
                type: 'div',
                className: 'news-item item-style1',
                text: `
                    <img src='${n.imgs[0]}' alt='Không có ảnh'/>
                    <div>
                        <p class='title upper'>${n.title}</p>
                        <p class='time'>${n.time}</p>
                        <div class='content'>${n.content}</div>
                    </div>
                `,
                underChild: [createElement({
                    type: 'button', 
                    className: 'more upper bold',
                    text: 'Xem thêm',
                    events: {click: () => {seeMore(n)}}}
                )],
                events: {click: () => {seeMore(n)}}
            })
        )
    })
}
function renderForm({title, data, submit}, value) {
    const s = gTabSelect
    return createElement({
        child: [
            createElement({ 
                type: 'div', 
                className: 'form-title',
                child: [
                    createElement({ type: 'p', className: 'form-title__p', text: title }),
                    createElement({ 
                        type: 'button', 
                        className: 'form-close form-btn radius-button', 
                        attributes: {style: '--border-width: 1px'},
                        events: { click: () => { renderPopup(generalData[s.value()], gContent, true) }}, 
                        child: [createElement({type: 'div', child: [createElement({type: 'p', text: 'Hủy bỏ'})]})]
                    })
                ]
            }),
            createElement({
                type: 'div',
                className: 'scrollbar-style2',
                child: [
                    createElement({
                        type: 'div',
                        className: 'content',
                        child: [
                            ...data.map(item => 
                                createElement({
                                    type: 'div',
                                    className: 'form-input',
                                    child: [
                                        createElement({ type: 'label', attributes: {for: item.name}, text: item.label }),
                                        item.isArea ?
                                        createElement({ 
                                            type: 'div', 
                                            className: 'textarea', 
                                            attributes: {
                                                'data-key': '',
                                                id: item.name, 
                                                name: item.name, 
                                                contenteditable: true, 
                                                placeholder: item.placeholder,
                                            },
                                            text: value ? value[item.name] : ''
                                        })
                                        : createElement({ type: 'input', attributes: {type: item.type, id: item.name, name: item.name, placeholder: item.placeholder, value: value ? value[item.name] : ''} })
                                    ]
                                })
                            ), 
                            createElement({ 
                                type: 'button', 
                                className: 'form-submit form-btn radius-button', 
                                attributes: {
                                    style: '--height: 40px; --border-width: 3px;'
                                },
                                events: {click: () => {submit()}}, 
                                child: [createElement({type: 'div', child: [createElement({type: 'p', text: 'Tải lên'})]})]
                            })
                        ]
                    })
                ]
            }),
            
        ]
    })
}
function renderDetal({imgs, title, time, content}) {
    return createElement({
        type: 'div',
        className: 'scroll-y scrollbar-style1',
        child: [createElement({
            type: 'div',
            child: [ createElement({type: 'p', className: 'title', text: title}) ],
            text: `<div class='news-detal__content'>${content}</div>`
        })]
    })
}
function renderButton(btn, className) {
    const beforeClick = 
    (e) => {
        const img = e.target.tagName.toLowerCase() == 'img' ? e.target : e.target.firstElementChild
        img.src = btnImg['btn-click']
        setTimeout(() => {
            img.src = btnImg.btn
        }, 1000)
    }
    const afterOut = 
    (e) => {
        const img = e.target.tagName.toLowerCase() == 'img' ? e.target : e.target.firstElementChild
        img.src = btnImg.btn
    }
    return createElement({
        type: 'a',
        className: `${className} relative flex center align-center`,
        attributes: {
            href: btn.link,
            target: '_blank',
            'data-before': btn.text
        },
        events: {
            mousedown: beforeClick,
            touchstart: beforeClick,
            click: afterOut,
            mouseleave: afterOut,
            mouseover: (e) => {
                const img = e.target.tagName.toLowerCase() == 'img' ? e.target : e.target.firstElementChild
                img.src = btnImg['btn-click']
            },
        },
        child: [ createElement({ type: 'img', attributes: {src: btn.image} }) ]

    })
}