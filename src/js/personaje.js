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
            <button class="character__action btn btn-talk-${this.alias}">
                habla
            </button>
            <button class="character__action btn btn-die-${this.alias}">
                muere
            </button>
        `;
    }

    renderComunications() {
        document.querySelector('.comunications').remove();
        const body = document.querySelector('body');
        const speakCard = document.createElement('div');
        speakCard.classList.add('comunications', `comunication-${this.alias}`);
        speakCard.innerHTML = `
            <p class="comunications__text display-1">
                 ${this.sentence}
            </p>
            <img
                class="comunications__picture"
                src="./src/img/${this.alias}.jpg"     
                alt="${this.name} ${this.house}"
            />
        `;
        body.appendChild(speakCard);
    }

    speak() {
        if (this.state === 'alive') {
            this.renderComunications();
            const speakCard = document.querySelector(
                `.comunication-${this.alias}`
            );
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
