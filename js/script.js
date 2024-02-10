const gamburger = document.querySelector(".gamburger");
const navLink = document.querySelector(".nav__links");
const navTools = document.querySelector('.nav__tools');
const navLogo = document.querySelector('.nav__logo');
const linkAll = document.querySelectorAll('.nav__links a');
const buttonAll = document.querySelectorAll('.nav__tools button');
const cateoriesButtenAll = document.querySelectorAll('.categories__buttons button');

const categoriesCardListStore = [
    { img: '1', name: 'Luka 1', prise: '240 $', discription: 'Баскетбольные кроссовки', rating: '4.9', categories: 'women' },
    { img: '2', name: 'Phantom GX Pro', prise: '180 $', discription: 'Футбольные бутсы для игры на твердом грунте', rating: '4.2', categories: 'boots' },
    { img: '3', name: 'Nike Air Max Plus', prise: '240 $', discription: 'Мужские универсальные кросовки', rating: '4.9', categories: 'man' },
    { img: '4', name: 'LeBron XXI ‘Freshwater’', prise: '210 $', discription: 'Баскетбольные кроссовки', rating: '4.9', categories: 'women' },
    { img: '5', name: 'Phantom GX Pro', prise: '160 $', discription: 'Низкие бутсы для искусственного покрытия', rating: '4.0', categories: 'boots' },
    { img: '6', name: 'Phantom GX Academy', prise: '79 $', discription: 'Низкие бутсы для мягкого грунта', rating: '4.9', categories: 'boots' },
    { img: '7', name: 'Luka 2 ‘Trick Shot’', prise: '230 $', discription: 'Баскетбольные кроссовки', rating: '4.9', categories: 'man' },
    { img: '8', name: 'Mercurial Superfly', prise: '210 $', discription: 'Футбольные бутсы для игры на твердом грунте', rating: '4.9', categories: 'boots' },
    { img: '9', name: 'Zion 2', prise: '410 $', discription: 'Баскетбольные кроссовки', rating: '4.9', categories: 'man' },
    { img: '10', name: 'Pegasus Trail 4', prise: '290 $', discription: 'Водонепроницаемые  женские кроссовки для бега', rating: '4.9', categories: 'women' },
    { img: '11', name: 'Alphafly 3 Proto', prise: '210 $', discription: 'Женская обувь для шоссейных гонок', rating: '4.9', categories: 'women' },
    { img: '12', name: 'Nike Air Max 270', prise: '210 $', discription: 'Мужские универсальные кросовки', rating: '4.9', categories: 'man' },
]

const categoriesCardListDiv = document.querySelector('.categories__list');
function categoriesCardRender(categories) {
    categoriesCardListDiv.innerHTML = '';
    if (categories == 'all') {
        for (let i = 0; i < categoriesCardListStore.length; i++) {
            const categoriesCardDiv = document.createElement('div');
            categoriesCardDiv.className = 'categories-card';
            categoriesCardDiv.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path
                d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z"
                stroke="#FEFFF7" />
            </svg>
            <div class="categories-card__foto">
            <img src="./img/categories/${categoriesCardListStore[i].img}.png" alt="">
            </div>
            <div class="categories-card__info">
                <div class="categories-card__text">
                    <div class="categories-card__name">
                        <h3>${categoriesCardListStore[i].name}</h3>
                        <span>${categoriesCardListStore[i].prise}</span>
                    </div>
                    <p>${categoriesCardListStore[i].discription}</p>
                    <div class="caegories-card__rating">
                        <span>${categoriesCardListStore[i].rating}</span>
                        <hr>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            <button>Купить сейчас</button>
            `;
            categoriesCardListDiv.appendChild(categoriesCardDiv)
        }
    } else {
        for (let i = 0; i < categoriesCardListStore.length; i++) {
            if (categories == categoriesCardListStore[i].categories) {
                const categoriesCardDiv = document.createElement('div');
                categoriesCardDiv.className = 'categories-card';
                categoriesCardDiv.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path
                d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.905049 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902607 7.48646 0.241484 5.5628 0.592522C2.6113 1.08006 0.5 3.71936 0.5 6.76466Z"
                stroke="#FEFFF7" />
            </svg>
            <div class="categories-card__foto">
            <img src="./img/categories/${categoriesCardListStore[i].img}.png" alt="">
            </div>
            <div class="categories-card__info">
                <div class="categories-card__text">
                    <div class="categories-card__name">
                        <h3>${categoriesCardListStore[i].name}</h3>
                        <span>${categoriesCardListStore[i].prise}</span>
                    </div>
                    <p>${categoriesCardListStore[i].discription}</p>
                    <div class="caegories-card__rating">
                        <span>${categoriesCardListStore[i].rating}</span>
                        <hr>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            <button>Купить сейчас</button>
            `;
                categoriesCardListDiv.appendChild(categoriesCardDiv)
            }
        }
    }
}
categoriesCardRender('all');
gamburger.onclick = function () {
    gamburger.classList.toggle("gamburger_active");
    navLink.classList.toggle("nav__links_active");
    navTools.classList.toggle("nav__tools_active");
    navLogo.classList.toggle("nav__logo_active");
}
navLogo.onclick = function () {
    navLogo.classList.remove("nav__logo_active");
    gamburger.classList.remove("gamburger_active");
    navTools.classList.remove("nav__tools_active");
    navLink.classList.remove("nav__links_active");
}
for (let i = 0; i < linkAll.length; i++) {
    linkAll[i].onclick = function () {
        gamburger.classList.remove("gamburger_active");
        navLink.classList.remove("nav__links_active");
        navTools.classList.remove("nav__tools_active");
        navLogo.classList.remove("nav__logo_active");
    }
}
for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].onclick = function () {
        gamburger.classList.remove("gamburger_active");
        navLink.classList.remove("nav__links_active");
        navTools.classList.remove("nav__tools_active");
        navLogo.classList.remove("nav__logo_active");
    }
}
for (let i = 0; i < cateoriesButtenAll.length; i++) {
    cateoriesButtenAll[i].onclick = function () {
        cateoriesButtenAll[0].classList.remove('categories__button_active')
        cateoriesButtenAll[1].classList.remove('categories__button_active')
        cateoriesButtenAll[2].classList.remove('categories__button_active')
        cateoriesButtenAll[3].classList.remove('categories__button_active')
        cateoriesButtenAll[i].classList.add('categories__button_active');
        if (i == 0) {
            categoriesCardRender('all');
        }
        if (i == 1) {
            categoriesCardRender('boots');
        }
        if (i == 2) {
            categoriesCardRender('women')
        }
        if(i == 3){
            categoriesCardRender('man')
        }
    }
}