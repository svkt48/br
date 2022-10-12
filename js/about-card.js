const cardData = [
    {
        name: 'Ярмухамедов Фаррух',
        prof: 'Маркетолог. Совладелец "BMARKETING"',
        img: './img/team/team1.jpg'
    },
    {
        name: 'Тилляев Бахтиёр',
        prof: 'Маркетолог. Менеджер проекта',
        img: './img/team/team2.jpg'
    },
    {
        name: 'Абдуллаев Жахонгир',
        prof: 'Оператор. Видео-монтажёр',
        img: './img/team/team3.jpg'
    },
    {
        name: 'Садриев Сардор',
        prof: 'Оператор. Видео-монтажёр',
        img: './img/team/team4.jpg'
    },
    {
        name: 'Ширинбаев Шохрух',
        prof: 'Графический дизайнер',
        img: './img/team/team5.jpg'
    },
    {
        name: 'Устинова Юлия',
        prof: 'СММ-специалист',
        img: './img/team/team6.jpg'
    }
]


cardData.forEach((item, id) => {
    let teamImgWrapper = document.querySelector('.team-img__wrapper')
    let outerDiv = document.createElement('div')
    outerDiv.classList.add('outer-div')

    let innerDiv = document.createElement('div')
    innerDiv.classList.add('inner-div')

    let front = document.createElement('div')
    front.classList.add('front')
    front.style.backgroundImage = `url(${item.img})`

    let frontText = document.createElement('div')
    frontText.classList.add('front__text')

    let h3 = document.createElement('h3')
    h3.classList.add('front__text-header')
    h3.innerHTML= item.name

    let p = document.createElement('p')
    p.classList.add('front__text-para')
    p.innerHTML= item.prof

    let black = document.createElement('div')
    black.classList.add('back')

    let socialMediaWrapper = document.createElement('div')
    socialMediaWrapper.classList.add('social-media-wrapper')

    let facebook = document.createElement('a')
    facebook.href = '#'
    facebook.classList.add('social-icon')

    let instagram = document.createElement('a')
    instagram.href = '#'
    instagram.classList.add('social-icon')

    let telegram = document.createElement('a')
    telegram.href = '#'
    telegram.classList.add('social-icon')

    let facebookIcon = document.createElement('i')
    facebookIcon.classList.add('fa-brands')
    facebookIcon.classList.add('fa-facebook')
    facebookIcon.classList.add('fab')

    let instagramIcon = document.createElement('i')
    instagramIcon.classList.add('fa-brands')
    instagramIcon.classList.add('fa-instagram')
    instagramIcon.classList.add('fab')

    let telegramIcon = document.createElement('i')
    telegramIcon.classList.add('fa-brands')
    telegramIcon.classList.add('fa-telegram')
    telegramIcon.classList.add('fab')


    teamImgWrapper.append(outerDiv)
    outerDiv.append(innerDiv)
    innerDiv.append(front)
    front.append(frontText)
    frontText.append(h3)
    frontText.append(p)

    innerDiv.append(black)
    black.append(socialMediaWrapper)
    socialMediaWrapper.append(facebook)
    socialMediaWrapper.append(instagram)
    socialMediaWrapper.append(telegram)

    facebook.append(facebookIcon)
    instagram.append(instagramIcon)
    telegram.append(telegramIcon)
})
