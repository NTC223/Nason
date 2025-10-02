const image = src + 'image/'
const btnImg = {
    close: image + 'btn/close.png',
    'close-click': image + 'btn/close-click.png',
    add: image + 'btn/add.png',
    reload: image + 'btn/reload.png',
    login: image + 'btn/login.png',
    logout: image + 'btn/logout.png',
    addImg: image + 'btn/add-img.png',
    write: image + 'btn/write.png',
    fullscreen: image + 'btn/fullscreen.png',
    help: image + 'btn/help.png',
    info: image + 'btn/info.png',
    map: image + 'btn/map.png',
    mute: image + 'btn/mute.png',
    setting: image + 'btn/setting.png',
    share: image + 'btn/share.png',
    auto: image + 'btn/auto.png',
    btn: image + 'btn/btn.png',
    'btn-click': image + 'btn/btn-click.png'
}
const iconImg = {
    address: image + 'icon/address.png',
    phone: image + 'icon/phone.png',
    website: image + 'icon/website.png',
    email: image + 'icon/email.png',
    link: image + 'icon/share_link.png',
    facebook: image + 'icon/share_facebook.png',
    google: image + 'icon/share_google.png',
    youtube: image + 'icon/share_youtube.png',
    360: image + 'icon/360.png',
    video: image + 'icon/video.png',
    shopping: image + 'icon/shopping-cart.png',
    contact: image + 'icon/contact.png'
}
const img = {
    intro: image + 'intro.png',
    library: image + 'library.png',
    contact: image + 'contact.png',
    shopping: image + 'shopping.png'
}

var productTabs = {
    360: 'Xoay 360',
    video: 'Video',
    shopping: 'Giỏ hàng',
    contact: 'Liên hệ ngay'
}
var productData = {
    360: {
        img: image + 'product.png',
        text: [
            {
                title: 'Đôi Bình Thạch Anh Vẽ Chàm Kim 24K',
                id: 'title'
            },
            {
                info: [
                    'Tên sản phẩm: Đôi bình thạch anh vẽ chàm kim 24K.',
                    'Thương hiệu: Gốm sứ tâm linh Nason.',
                    'Cơ sở sản xuất: tại vùng thiêng Đất tổ Vua Hùng.',
                    'Chất liệu: Sứ cao cấp có thành phần trên 82% là Ngọc Thạch Anh, vàng 24K.',
                    'Hoa văn: chim công – hoa mẫu đơn – hoa đào.',
                    'Công năng: trưng bày phòng khách, phòng làm việc, làm quà tăng, quà biếu, mang ý nghĩa phong thủy…'
                ],
                id: 'info'
            },
            { 
                id: 'mean',
                mean: 'Đôi bình thạch anh vẽ chàm kim 24K có điểm nhấn là họa tiết chim công, cùng với họa tiết hoa mẫu đơn, hoa đào giúp tô điểm cho bố cục nghệ thuật hoàn mỹ hơn và tạo nên sự cộng hưởng về phong thủy “Công danh tài lộc – Giàu sang phú quý – Hạnh phúc viên mãn”.' },
            { 
                cost: 26800000 ,
                id: 'cost'
            },
            {
                id: 'iButton',
                image: btnImg.btn,
                text: 'Mua ngay',
                link: 'https://www.nason.com.vn/den-nang-luong-treo-tran-ve-vang-heraeus',
            }
        ],
        id: 'info'
    },
    video: {
        playVideo: 'https://www.youtube.com/embed/Sr6quKyZEp8',
        id: 'video'
    },
    shopping: {
        iLink: {
            image: img.shopping,
            link: 'https://www.nason.com.vn/order/cart-info'
        },
        id: 'shopping'
    },
    contact: {
        iLink: {
            image: img.contact,
            link: 'https://www.nason.com.vn/lien-he'
        },
        id: 'contact'
    }
}
const sanpham = {
    title: 'Đôi Bình Thạch Anh Vẽ Chàm Kim 24K',
    video: 'https://www.youtube.com/watch?v=Sr6quKyZEp8',
    shopping: 'https://www.nason.com.vn/den-nang-luong-treo-tran-ve-vang-heraeus',
    cost: 26800000,
    info: [
        'Tên sản phẩm: Đôi bình thạch anh vẽ chàm kim 24K.',
        'Thương hiệu: Gốm sứ tâm linh Nason.',
        'Cơ sở sản xuất: tại vùng thiêng Đất tổ Vua Hùng.',
        'Chất liệu: Sứ cao cấp có thành phần trên 82% là Ngọc Thạch Anh, vàng 24K.',
        'Hoa văn: chim công – hoa mẫu đơn – hoa đào.',
        'Công năng: trưng bày phòng khách, phòng làm việc, làm quà tăng, quà biếu, mang ý nghĩa phong thủy…'
    ],
    mean: 'Đôi bình thạch anh vẽ chàm kim 24K có điểm nhấn là họa tiết chim công, cùng với họa tiết hoa mẫu đơn, hoa đào giúp tô điểm cho bố cục nghệ thuật hoàn mỹ hơn và tạo nên sự cộng hưởng về phong thủy “Công danh tài lộc – Giàu sang phú quý – Hạnh phúc viên mãn”.'
}


var generalData = {
    // thong tin
    'Thông tin': {
        img: img.intro,
        text: [
            'NASON là thương hiệu của một dòng Gốm sứ Tâm linh độc đáo và khác biệt, lần đầu tiên xuất hiện tại Việt Nam và thế giới. Sản phẩm được kết tinh chủ yếu trên 82% là ngọc thạch anh có tên khoa học là (Sio2), mà xưa nay trên thế giới chưa từng có nơi đâu làm được sứ thạch anh. Chính điều đó đã giúp NASON lập cú đúp kỷ lục Việt Nam và Kỷ lục thế giới. Được Hội đồng giáo sư Đại học Kỷ lục Thế giới tại Hoa Kỳ chính thức công nhận và cấp văn bằng Tiến sỹ Danh dự cho Nhà sáng nghiệp CCB Doanh nhân Lê Duy Hảo. Trong nước cũng đã đạt giải Sao Vàng Đất Việt và nhiều Huân, huy chương lao động. Sản phẩm được trao giải Thương hiệu nổi tiếng chất lượng ASIA năm 2018 và nhiều giải thưởng khác.',
            {
                id: 'contact',
                address: 'Tòa nhà 132 Phố Lạc Nghiệp, Phường Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội, Việt Nam',
                phone: 'Hotline: 0868.971.236',
                website: 'nason.com.vn',
                email: 'nasonvietnam@gmail.com'
            }
        ],
        id: 'info'
    },
    // video
    'Video': {
        video: [
            'EV-91JV4Fws',
            'EV-91JV4Fws',
            'EV-91JV4Fws',
            'EV-91JV4Fws',
            'EV-91JV4Fws',
            'EV-91JV4Fws',
        ],
        id: 'video'
    },
    // chung nhan
    'Chứng nhận': {
        iList: [
            [
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti1.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti2.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti3.png'}
            ],
            [
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti4.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti5.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti6.png'}
            ],
            [
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti7.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti8.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti9.png'}
            ],
            [
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti10.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti11.png'}
            ],
            [
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti4.png'}, 
                {link: 'https://www.nason.com.vn/chung-nhan-chat-luong', image: image + 'ceti5.png'}
            ],
        ],
        id: 'cetificate'
    },
    // hinh anh
    'Hình ảnh': {
        iLink: {
            image: img.library,
            link: 'https://www.nason.com.vn/thu-vien-anh1'
        },
        id: 'image'
    },
    // tin tuc
    'Tin tức': {
        iNews: [
            {
                imgs: [image + 'news1.png'],
                title: 'Sức sống một con người',
                time: '31/08/2025',
                content: `Nhân 80 Năm: Đất Nước – Con Người Việt Nam
                <br>Có những cuộc đời đi qua lịch sử, không chỉ để ghi dấu một con người, mà còn để soi sáng một phần hồn thiêng sông núi. Trong hành trình 80 năm của đất nước và con người Việt Nam, câu chuyện của Lê Duy Hảo cũng chính là một biểu tượng lặng lẽ nhưng kiêu hùng: từ chiến trường máu lửa đến thương trường khốc liệt, từ gian khó của đời thường đến sự thăng hoa trong sáng tạo và cống hiến
                <br>Sinh ra và lớn lên trong vòng tay gia đình, được nuôi dưỡng bằng cơm ăn áo mặc và bằng niềm tin yêu của cha mẹ, Lê Duy Hảo bước vào đời với hành trang của một người con đất Việt: giản dị, kiên cường nhưng luôn ấp ủ khát vọng vượt lên
                <br>Ngày 7-5-1978, ông rời mái ấm để khoác ba lô lên đường nhập ngũ. Vùng đất Vị Xuyên – Hà Giang, nơi núi non hùng vĩ cũng là nơi khốc liệt của chiến tranh, đã khắc vào tuổi trẻ ông những vết thương cả thể xác lẫn tinh thần. Ở đó, cái chết và sự sống chỉ cách nhau gang tấc, nhưng cũng chính nơi ấy, ông học được giá trị của sự kiên định và lòng tin không bao giờ gục ngã
                <br>Khi tiếng súng chiến tranh lắng xuống, ông rời chiến trường, mang theo cả thương tích lẫn ký ức bi tráng để bước vào một chiến tuyến khác: thương trường. Nếu chiến trường đòi hỏi sự dũng cảm hy sinh, thì thương trường lại đòi hỏi trí tuệ, bản lĩnh và sự sáng tạo không ngừng. Trên vùng đất Hà Giang – nơi từng đẫm máu của đồng đội – ông dựng nên thành tựu cho đời, như một minh chứng rằng từ đau thương có thể nảy mầm sức sống
                <br>Trong hành trình ấy, sức sống của con người hiện lên không chỉ là sức chịu đựng, mà còn là khả năng tái sinh. Từ chiến sĩ thành doanh nhân, từ người lính giữ biên cương thành người gieo hạt giống an lành qua những sản phẩm tâm linh, Lê Duy Hảo đã chọn cho mình con đường sống vì người khác
                <br>80 năm đất nước – 80 năm một đời người hòa quyện – chính là minh chứng cho một chân lý giản dị:
                <br>Con người Việt Nam có thể ngã xuống, nhưng không bao giờ gục ngã
                <br>Từ chiến tranh đến hòa bình, từ máu lửa đến thịnh vượng, vẫn luôn có những con người lặng thầm gánh vác và thắp sáng
                <br>Và trong đó, câu chuyện của Lê Duy Hảo là một hạt sáng, góp phần vào bức tranh rộng lớn của Tổ quốc:
                <br>• Một con người đi qua chiến tranh không tàn phế tâm hồn
                <br>• Một doanh nhân đi qua thương trường không lạc mất lương tâm
                <br>• Một người con đất Việt sống trọn chữ “nhân” để kết nối “đất” với “trời”
                <br>Sức sống ấy, không chỉ của riêng ông, mà còn là sức sống của cả một dân tộc – dân tộc Việt Nam kiêu hùng, bất khuất và đầy tình người
                `
            },
            {
                imgs: [image + 'news2.png'],
                time: '31/08/2025',
                title: 'Sức sống một con người',
                content: `Nhân 80 Năm: Đất Nước – Con Người Việt Nam
                Có những cuộc đời đi qua lịch sử, không chỉ để ghi dấu một con người, mà còn để soi sáng một phần hồn thiêng sông núi. Trong hành trình 80 năm của đất nước và con người Việt Nam, câu chuyện của Lê Duy Hảo cũng chính là một biểu tượng lặng lẽ nhưng kiêu hùng: từ chiến trường máu lửa đến thương trường khốc liệt, từ gian khó của đời thường đến sự thăng hoa trong sáng tạo và cống hiến
                Sinh ra và lớn lên trong vòng tay gia đình, được nuôi dưỡng bằng cơm ăn áo mặc và bằng niềm tin yêu của cha mẹ, Lê Duy Hảo bước vào đời với hành trang của một người con đất Việt: giản dị, kiên cường nhưng luôn ấp ủ khát vọng vượt lên
                Ngày 7-5-1978, ông rời mái ấm để khoác ba lô lên đường nhập ngũ. Vùng đất Vị Xuyên – Hà Giang, nơi núi non hùng vĩ cũng là nơi khốc liệt của chiến tranh, đã khắc vào tuổi trẻ ông những vết thương cả thể xác lẫn tinh thần. Ở đó, cái chết và sự sống chỉ cách nhau gang tấc, nhưng cũng chính nơi ấy, ông học được giá trị của sự kiên định và lòng tin không bao giờ gục ngã
                Khi tiếng súng chiến tranh lắng xuống, ông rời chiến trường, mang theo cả thương tích lẫn ký ức bi tráng để bước vào một chiến tuyến khác: thương trường. Nếu chiến trường đòi hỏi sự dũng cảm hy sinh, thì thương trường lại đòi hỏi trí tuệ, bản lĩnh và sự sáng tạo không ngừng. Trên vùng đất Hà Giang – nơi từng đẫm máu của đồng đội – ông dựng nên thành tựu cho đời, như một minh chứng rằng từ đau thương có thể nảy mầm sức sống
                Trong hành trình ấy, sức sống của con người hiện lên không chỉ là sức chịu đựng, mà còn là khả năng tái sinh. Từ chiến sĩ thành doanh nhân, từ người lính giữ biên cương thành người gieo hạt giống an lành qua những sản phẩm tâm linh, Lê Duy Hảo đã chọn cho mình con đường sống vì người khác
                80 năm đất nước – 80 năm một đời người hòa quyện – chính là minh chứng cho một chân lý giản dị:
                    Con người Việt Nam có thể ngã xuống, nhưng không bao giờ gục ngã
                    Từ chiến tranh đến hòa bình, từ máu lửa đến thịnh vượng, vẫn luôn có những con người lặng thầm gánh vác và thắp sáng
                Và trong đó, câu chuyện của Lê Duy Hảo là một hạt sáng, góp phần vào bức tranh rộng lớn của Tổ quốc:
                • Một con người đi qua chiến tranh không tàn phế tâm hồn
                • Một doanh nhân đi qua thương trường không lạc mất lương tâm
                • Một người con đất Việt sống trọn chữ “nhân” để kết nối “đất” với “trời”
                Sức sống ấy, không chỉ của riêng ông, mà còn là sức sống của cả một dân tộc – dân tộc Việt Nam kiêu hùng, bất khuất và đầy tình người
                `
            },
            {
                imgs: [image + 'news3.png'],
                time: '31/08/2025',
                title: 'Sức sống một con người',
                content: `Nhân 80 Năm: Đất Nước – Con Người Việt Nam
                Có những cuộc đời đi qua lịch sử, không chỉ để ghi dấu một con người, mà còn để soi sáng một phần hồn thiêng sông núi. Trong hành trình 80 năm của đất nước và con người Việt Nam, câu chuyện của Lê Duy Hảo cũng chính là một biểu tượng lặng lẽ nhưng kiêu hùng: từ chiến trường máu lửa đến thương trường khốc liệt, từ gian khó của đời thường đến sự thăng hoa trong sáng tạo và cống hiến
                Sinh ra và lớn lên trong vòng tay gia đình, được nuôi dưỡng bằng cơm ăn áo mặc và bằng niềm tin yêu của cha mẹ, Lê Duy Hảo bước vào đời với hành trang của một người con đất Việt: giản dị, kiên cường nhưng luôn ấp ủ khát vọng vượt lên
                Ngày 7-5-1978, ông rời mái ấm để khoác ba lô lên đường nhập ngũ. Vùng đất Vị Xuyên – Hà Giang, nơi núi non hùng vĩ cũng là nơi khốc liệt của chiến tranh, đã khắc vào tuổi trẻ ông những vết thương cả thể xác lẫn tinh thần. Ở đó, cái chết và sự sống chỉ cách nhau gang tấc, nhưng cũng chính nơi ấy, ông học được giá trị của sự kiên định và lòng tin không bao giờ gục ngã
                Khi tiếng súng chiến tranh lắng xuống, ông rời chiến trường, mang theo cả thương tích lẫn ký ức bi tráng để bước vào một chiến tuyến khác: thương trường. Nếu chiến trường đòi hỏi sự dũng cảm hy sinh, thì thương trường lại đòi hỏi trí tuệ, bản lĩnh và sự sáng tạo không ngừng. Trên vùng đất Hà Giang – nơi từng đẫm máu của đồng đội – ông dựng nên thành tựu cho đời, như một minh chứng rằng từ đau thương có thể nảy mầm sức sống
                Trong hành trình ấy, sức sống của con người hiện lên không chỉ là sức chịu đựng, mà còn là khả năng tái sinh. Từ chiến sĩ thành doanh nhân, từ người lính giữ biên cương thành người gieo hạt giống an lành qua những sản phẩm tâm linh, Lê Duy Hảo đã chọn cho mình con đường sống vì người khác
                80 năm đất nước – 80 năm một đời người hòa quyện – chính là minh chứng cho một chân lý giản dị:
                    Con người Việt Nam có thể ngã xuống, nhưng không bao giờ gục ngã
                    Từ chiến tranh đến hòa bình, từ máu lửa đến thịnh vượng, vẫn luôn có những con người lặng thầm gánh vác và thắp sáng
                Và trong đó, câu chuyện của Lê Duy Hảo là một hạt sáng, góp phần vào bức tranh rộng lớn của Tổ quốc:
                • Một con người đi qua chiến tranh không tàn phế tâm hồn
                • Một doanh nhân đi qua thương trường không lạc mất lương tâm
                • Một người con đất Việt sống trọn chữ “nhân” để kết nối “đất” với “trời”
                Sức sống ấy, không chỉ của riêng ông, mà còn là sức sống của cả một dân tộc – dân tộc Việt Nam kiêu hùng, bất khuất và đầy tình người
                `
            },
            {
                imgs: [image + 'news4.png'],
                time: '31/08/2025',
                title: 'Sức sống một con người',
                content: `Nhân 80 Năm: Đất Nước – Con Người Việt Nam
                Có những cuộc đời đi qua lịch sử, không chỉ để ghi dấu một con người, mà còn để soi sáng một phần hồn thiêng sông núi. Trong hành trình 80 năm của đất nước và con người Việt Nam, câu chuyện của Lê Duy Hảo cũng chính là một biểu tượng lặng lẽ nhưng kiêu hùng: từ chiến trường máu lửa đến thương trường khốc liệt, từ gian khó của đời thường đến sự thăng hoa trong sáng tạo và cống hiến
                Sinh ra và lớn lên trong vòng tay gia đình, được nuôi dưỡng bằng cơm ăn áo mặc và bằng niềm tin yêu của cha mẹ, Lê Duy Hảo bước vào đời với hành trang của một người con đất Việt: giản dị, kiên cường nhưng luôn ấp ủ khát vọng vượt lên
                Ngày 7-5-1978, ông rời mái ấm để khoác ba lô lên đường nhập ngũ. Vùng đất Vị Xuyên – Hà Giang, nơi núi non hùng vĩ cũng là nơi khốc liệt của chiến tranh, đã khắc vào tuổi trẻ ông những vết thương cả thể xác lẫn tinh thần. Ở đó, cái chết và sự sống chỉ cách nhau gang tấc, nhưng cũng chính nơi ấy, ông học được giá trị của sự kiên định và lòng tin không bao giờ gục ngã
                Khi tiếng súng chiến tranh lắng xuống, ông rời chiến trường, mang theo cả thương tích lẫn ký ức bi tráng để bước vào một chiến tuyến khác: thương trường. Nếu chiến trường đòi hỏi sự dũng cảm hy sinh, thì thương trường lại đòi hỏi trí tuệ, bản lĩnh và sự sáng tạo không ngừng. Trên vùng đất Hà Giang – nơi từng đẫm máu của đồng đội – ông dựng nên thành tựu cho đời, như một minh chứng rằng từ đau thương có thể nảy mầm sức sống
                Trong hành trình ấy, sức sống của con người hiện lên không chỉ là sức chịu đựng, mà còn là khả năng tái sinh. Từ chiến sĩ thành doanh nhân, từ người lính giữ biên cương thành người gieo hạt giống an lành qua những sản phẩm tâm linh, Lê Duy Hảo đã chọn cho mình con đường sống vì người khác
                80 năm đất nước – 80 năm một đời người hòa quyện – chính là minh chứng cho một chân lý giản dị:
                    Con người Việt Nam có thể ngã xuống, nhưng không bao giờ gục ngã
                    Từ chiến tranh đến hòa bình, từ máu lửa đến thịnh vượng, vẫn luôn có những con người lặng thầm gánh vác và thắp sáng
                Và trong đó, câu chuyện của Lê Duy Hảo là một hạt sáng, góp phần vào bức tranh rộng lớn của Tổ quốc:
                • Một con người đi qua chiến tranh không tàn phế tâm hồn
                • Một doanh nhân đi qua thương trường không lạc mất lương tâm
                • Một người con đất Việt sống trọn chữ “nhân” để kết nối “đất” với “trời”
                Sức sống ấy, không chỉ của riêng ông, mà còn là sức sống của cả một dân tộc – dân tộc Việt Nam kiêu hùng, bất khuất và đầy tình người
                `
            },
            {
                imgs: [image + 'news3.png'],
                time: '31/08/2025',
                title: 'Sức sống một con người',
                content: `Nhân 80 Năm: Đất Nước – Con Người Việt Nam
                Có những cuộc đời đi qua lịch sử, không chỉ để ghi dấu một con người, mà còn để soi sáng một phần hồn thiêng sông núi. Trong hành trình 80 năm của đất nước và con người Việt Nam, câu chuyện của Lê Duy Hảo cũng chính là một biểu tượng lặng lẽ nhưng kiêu hùng: từ chiến trường máu lửa đến thương trường khốc liệt, từ gian khó của đời thường đến sự thăng hoa trong sáng tạo và cống hiến
                Sinh ra và lớn lên trong vòng tay gia đình, được nuôi dưỡng bằng cơm ăn áo mặc và bằng niềm tin yêu của cha mẹ, Lê Duy Hảo bước vào đời với hành trang của một người con đất Việt: giản dị, kiên cường nhưng luôn ấp ủ khát vọng vượt lên
                Ngày 7-5-1978, ông rời mái ấm để khoác ba lô lên đường nhập ngũ. Vùng đất Vị Xuyên – Hà Giang, nơi núi non hùng vĩ cũng là nơi khốc liệt của chiến tranh, đã khắc vào tuổi trẻ ông những vết thương cả thể xác lẫn tinh thần. Ở đó, cái chết và sự sống chỉ cách nhau gang tấc, nhưng cũng chính nơi ấy, ông học được giá trị của sự kiên định và lòng tin không bao giờ gục ngã
                Khi tiếng súng chiến tranh lắng xuống, ông rời chiến trường, mang theo cả thương tích lẫn ký ức bi tráng để bước vào một chiến tuyến khác: thương trường. Nếu chiến trường đòi hỏi sự dũng cảm hy sinh, thì thương trường lại đòi hỏi trí tuệ, bản lĩnh và sự sáng tạo không ngừng. Trên vùng đất Hà Giang – nơi từng đẫm máu của đồng đội – ông dựng nên thành tựu cho đời, như một minh chứng rằng từ đau thương có thể nảy mầm sức sống
                Trong hành trình ấy, sức sống của con người hiện lên không chỉ là sức chịu đựng, mà còn là khả năng tái sinh. Từ chiến sĩ thành doanh nhân, từ người lính giữ biên cương thành người gieo hạt giống an lành qua những sản phẩm tâm linh, Lê Duy Hảo đã chọn cho mình con đường sống vì người khác
                80 năm đất nước – 80 năm một đời người hòa quyện – chính là minh chứng cho một chân lý giản dị:
                    Con người Việt Nam có thể ngã xuống, nhưng không bao giờ gục ngã
                    Từ chiến tranh đến hòa bình, từ máu lửa đến thịnh vượng, vẫn luôn có những con người lặng thầm gánh vác và thắp sáng
                Và trong đó, câu chuyện của Lê Duy Hảo là một hạt sáng, góp phần vào bức tranh rộng lớn của Tổ quốc:
                • Một con người đi qua chiến tranh không tàn phế tâm hồn
                • Một doanh nhân đi qua thương trường không lạc mất lương tâm
                • Một người con đất Việt sống trọn chữ “nhân” để kết nối “đất” với “trời”
                Sức sống ấy, không chỉ của riêng ông, mà còn là sức sống của cả một dân tộc – dân tộc Việt Nam kiêu hùng, bất khuất và đầy tình người
                `
            }
        ],
        id: 'news'
    },
    // lien he
    'Liên hệ': {
        iLink: {
            image: img.contact,
            link: 'https://www.nason.com.vn/lien-he'
        },
        id: 'contact'
    }
}