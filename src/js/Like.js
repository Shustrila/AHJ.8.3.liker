import heartImg from '../images/heart.png';

class Like {
    constructor(button) {
        this.button = button;
        this.srcImg = heartImg;
        this.arr = ['--as', '--as-reverse', '--ac', '--ac-reverse'];

        this.init();
    }



    imageHeart() {
        return new Promise(resolve => {
            const heart = document.createElement('img');
            const random = Math.floor(Math.random() * this.arr.length);

            heart.className = 'like__heart like__heart' + this.arr[random];
            heart.src = this.srcImg;

            heart.addEventListener('animationend', (e) => e.target.remove());

            resolve(heart);
        })
    }

     async onClickButton(e) {
        e.preventDefault();

        const heart = await this.imageHeart();

        e.currentTarget.appendChild(heart);
    }

    init() {
        const button = document.querySelector(this.button);

        button.addEventListener('click', (e) => this.onClickButton(e))
    }
}

export default Like;
