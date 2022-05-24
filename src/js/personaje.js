export class Personaje {
    name;
    family;
    age;
    state = 'alive';
    alias;
    static serie = 'Game of Thrones';
    constructor(name, family, age, alias) {
        this.name = name;
        this.family = family;
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

    speak() {
        //NO ACABADA
        console.log('Inside speak function');
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
                src="./src/img/${this.alias}.jpg"        //IMPORTANT FALTA ARREGLAR
                alt="Nombre y familia del que habla"
            />
        `;
        body.appendChild(speakCard);
        speakCard.classList.toggle('on');
        setTimeout(() => {
            speakCard.classList.toggle('on');
        }, 2000);
    }

    die() {
        this.state = 'dead';
    }
}
