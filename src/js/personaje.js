export class Personaje {
    name;
    house;
    age;
    state = 'alive';
    alias;
    static serie = 'Game of Thrones';
    constructor(name, house, age, alias) {
        this.name = name;
        this.house = house;
        this.age = age;
        this.alias = alias;
    }

    thumbsUpOrDown() {
        if (this.state === 'alive') {
            return '<i class="fas fa-thumbs-up"></i>';
        } else {
            return '<i class="fas fa-thumbs-down"></i>';
        }
    }

    characterActions() {
        return `
            <button class="character__action btn btn-talk-${this.name}">
                habla
            </button>
            <button class="character__action btn btn-die-${this.name}">
                muere
            </button>
        `;
    }

    speak() {
        if (this.state === 'alive') {
            document.querySelector('.comunications').remove();
            const body = document.querySelector('body');
            const speakCard = document.createElement('div');
            speakCard.classList.add('comunications');
            speakCard.innerHTML = `
            <p class="comunications__text display-1">
                 ${this.sentence}
            </p>
            <img
                class="comunications__picture"
                src="./src/img/${this.alias}.jpg"     
                alt="Nombre y familia del que habla"
            />
        `;
            body.appendChild(speakCard);
            speakCard.classList.toggle('on');
            setTimeout(() => {
                speakCard.classList.toggle('on');
            }, 2000);
        }
    }

    die() {
        this.state = 'dead';
        const ageAndState = document.querySelector(`.thumbs-${this.alias}`);
        ageAndState.innerHTML = `
                <ul class="list-unstyled">
                    <li>Edad: ${this.age} años</li>
                    <li>
                        Estado:
                        ${this.thumbsUpOrDown()}
                    </li>
                </ul>
            `;

        const img = document.querySelector(`.img-${this.alias}`);
        img.style.transform = 'rotate(180deg)';
    }
}
