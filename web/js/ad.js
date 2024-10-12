const url = "http://127.0.0.1:8000";

class Slider {
    constructor(imgSrc, url) {
        this.imgSrc = imgSrc;
        this.url = url;
    }
}

// 获取所有的swiper-slide元素
const slides = document.querySelectorAll('.swiper-slide');

// 遍历每个swiper-slide元素
slides.forEach(function(slide, index) {
    slide.remove()
});

const swiperWrapper = document.querySelector('.swiper-wrapper');

const swiperPagination = document.querySelector('.swiper-pagination');


// 发送 GET 请求
fetch(url + '/ad?type=1')  // 确保 URL 正确
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        // data 现在是一个数组，每个元素都是一个对象
        data.forEach((item,i) => {
            const newSlide = document.createElement('div');
            newSlide.className = 'swiper-slide';
            newSlide.setAttribute("style", "width: 720px;")
            newSlide.setAttribute("data-swiper-slide-index", i)
            newSlide.innerHTML = '<a target="_blank" href="'+item.jump_url+'"><img src="' + item.img_url + '" alt=""></a>';
            swiperWrapper.appendChild(newSlide);

            const span = document.createElement('span');
            span.className = 'swiper-pagination-bullet'
            swiperPagination.appendChild(span)
        });

        if (window.Swiper) {
            var swiper = new Swiper('.banner', {
                loop: true,
                slidesPerview: 'auto',
                loopedSlides: 2,
                autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.banner-dot',
            },
        });
            swiper.update();
        }
    })
    .catch(error => {
        // 处理错误
        console.error('There has been a problem with your fetch operation:', error);
    });


class Ad {
    constructor(imgSrc, url) {
        this.imgSrc = imgSrc;
        this.url = url;
    }
}


const adList = document.querySelectorAll('.box.ad-pic ul');
adList.forEach(function(ad) {
    ad.childNodes.forEach(function(node){
        node.remove()
    })
})

fetch(url + '/ad?type=2')  // 确保 URL 正确
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        // data 现在是一个数组，每个元素都是一个对象
            adList.forEach(function(ad){
                data.forEach((item,i) => {
                const newAd = document.createElement('li');
                newAd.innerHTML = '<a target="_blank" href="'+item.jump_url+'"><img src="' + item.img_url + '" alt=""></a>';
                ad.appendChild(newAd);
            })
        });

    })
    .catch(error => {
        // 处理错误
        console.error('There has been a problem with your fetch operation:', error);
    });


const tableOneList = document.querySelectorAll('#con_ily520_1 > div:nth-child(2) > div > ul > li')
const ul = document.querySelector('#con_ily520_1 > div:nth-child(2) > div > ul')
fetch(url + '/table?type=1')  // 确保 URL 正确
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        tableOneList.forEach(function(li){
            const dtElements = li.querySelectorAll('dt');
            const index = dtElements[0].innerText.match(/\d+/g)[0];
            data.forEach((item,i) => {
                if (item.index == index) {
                    dtElements[1].firstChild.innerHTML = item.fix_first;
                    dtElements[2].childNodes[1].innerHTML = item.fix_last;
                    return;
                }
            })
        })
        lastIndex = tableOneList[0].querySelector('dt').innerHTML.match(/\d+/g)[0];
        data.forEach((item,i) => {
            if (item.index > lastIndex) {
                const newLi = document.createElement('li');
                newLi.innerHTML = '<dt class="l">'+item.fix_index+'</dt><dt class="c"><span>'+item.fix_first+'</span></dt><dt class="r">開:<font>'+item.fix_last+'</font>准</dt>';
                ul.prepend(newLi);
            }
        })
    })
    .catch(error => {
        // 处理错误
        console.error('There has been a problem with your fetch operation:', error);
    });


const tableTwoList = document.querySelectorAll('#con_ily520_1 > div:nth-child(4) > div > ul > li')
const ulTwo = document.querySelector('#con_ily520_1 > div:nth-child(4) > div > ul')
fetch(url + '/table?type=2')  // 确保 URL 正确
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        tableTwoList.forEach(function(li){
            const dtElements = li.querySelectorAll('dt');
            const index = dtElements[0].innerText.match(/\d+/g)[0];
            data.forEach((item,i) => {
                if (item.index == index) {
                    dtElements[1].firstChild.innerHTML = item.fix_first;
                    dtElements[2].childNodes[1].innerHTML = item.fix_last;
                    return;
                }
            })
        })
        lastIndex = tableTwoList[0].querySelector('dt').innerHTML.match(/\d+/g)[0];
        data.forEach((item,i) => {
            if (item.index > lastIndex) {
                const newLi = document.createElement('li');
                newLi.innerHTML = '<dt class="l">'+item.fix_index+'</dt><dt class="c"><span>'+item.fix_first+'</span></dt><dt class="r">開:<font>'+item.fix_last+'</font>准</dt>';
                ulTwo.prepend(newLi);
            }
        })
    })
    .catch(error => {
        // 处理错误
        console.error('There has been a problem with your fetch operation:', error);
    });

const tableThreeList = document.querySelectorAll('#con_ily520_1 > div:nth-child(6) > div > ul > li')
const ulThree = document.querySelector('#con_ily520_1 > div:nth-child(6) > div > ul')
fetch(url + '/table?type=3')  // 确保 URL 正确
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        tableThreeList.forEach(function(li){
            var dtElements = li.querySelectorAll('dt');
            var index = dtElements[0].innerText;
            data.forEach((item,i) => {
                if (item.fix_index == index) {
                    dtElements[1].firstChild.innerHTML = item.fix_first;
                    dtElements[2].childNodes[1].innerHTML = item.fix_last;
                    return;
                }
            })
        })
    })
    .catch(error => {
        // 处理错误
        console.error('There has been a problem with your fetch operation:', error);
    });