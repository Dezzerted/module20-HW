## 1. Принцип DRY

<br>Проект по верстке сайта. Вместо повторения одних и тех же функций для кнопок перелистывания в десктопной и мобильной версиях вывел функции отдельно. Непонятно, почему сразу так не сделал. <br>Было:

``` js
prevBtn.addEventListener("click", prevImg = () => {
    imgNum--;
    showImg (imgNum);
})

nxtBtn.addEventListener("click", nxtImg = () => {
    imgNum++;
    showImg (imgNum);
})

prevBtnMob.addEventListener("click", prevImg = () => {
    imgNum--;
    showImg (imgNum);
})

nxtBtnMob.addEventListener("click", nxtImg = () => {
    imgNum++;
    showImg (imgNum);
})
```
Стало:
``` js
prevBtn.addEventListener("click", prevImg)

function prevImg () {
    imgNum--;
    showImg (imgNum);
}

nxtBtn.addEventListener("click", nxtImg)

function nxtImg () {
    imgNum++;
    showImg (imgNum);
}

prevBtnMob.addEventListener("click", prevImg)

nxtBtnMob.addEventListener("click", nxtImg)
```


## 2. Принцип KISS

<br>Проект по созданию генератора случайных пользовательских данных из Модуля 9. Вместо использования большого количества `||` создал массив `nameEndArr` с вариантами, при которых к мужским именам будут добавляться окончания "ович" и "овна". <br>Также задал переменную `nameEnd` для результатов использования метода `.splice`. <br>Было:

``` js
randomMiddleName: function (gender) {
        let maleName = this.randomValue(this.firstNameMaleJson);
        if (gender === this.GENDER_MALE) {
            if (maleName.slice(-3) === 'ндр' || maleName.slice(-3) === 'сим' || maleName.slice(-3) === 'ван' || maleName.slice(-3) === 'тем' || maleName.slice(-3) === 'иил' || maleName.slice(-3) === 'гор') {
            return maleName + 'ович'        
            };
            if (maleName.slice(-3) === 'рий') {
            return maleName.replace('рий', 'риевич')
            };
            if (maleName.slice(-3) === 'рей') {
            return maleName.replace('рей', 'реевич')
            };
            if (maleName.slice(-3) === 'ита') {
            return maleName.replace('ита', 'итич')
            };
            if (maleName.slice(-3) === 'аил') {
            return maleName.replace('аил', 'айлович')
            };
        } else if (gender === this.GENDER_FEMALE) {
            if (maleName.slice(-3) === 'ндр' || maleName.slice(-3) === 'сим' || maleName.slice(-3) === 'ван' || maleName.slice(-3) === 'тем' || maleName.slice(-3) === 'иил' || maleName.slice(-3) === 'гор') {
            return maleName + 'овна'        
            };
            if (maleName.slice(-3) === 'рий') {
            return maleName.replace('рий', 'риевна')
            };
            if (maleName.slice(-3) === 'рей') {
            return maleName.replace('рей', 'реевна')
            };
            if (maleName.slice(-3) === 'ита') {
            return maleName.replace('ита', 'итична')
            };
            if (maleName.slice(-3) === 'аил') {
            return maleName.replace('аил', 'айловна')
            };
        }
    }
```
Стало:

``` js
    randomMiddleName: function (gender) {
        let maleName = this.randomValue(this.firstNameMaleJson);
        let nameEnd = maleName.slice(-3);
        const nameEndArr = ['ндр', 'сим', 'ван', 'тем', 'иил', 'гор'];
        if (gender === this.GENDER_MALE) {
            if(nameEndArr.indexOf(nameEnd) != -1) {
                return maleName + 'ович'
            };
            if (nameEnd === 'рий') {
            return maleName.replace('рий', 'риевич')
            };
            if (nameEnd === 'рей') {
            return maleName.replace('рей', 'реевич')
            };
            if (nameEnd === 'ита') {
            return maleName.replace('ита', 'итич')
            };
            if (nameEnd === 'аил') {
            return maleName.replace('аил', 'айлович')
            };
        } else if (gender === this.GENDER_FEMALE) {
            if(nameEndArr.indexOf(nameEnd) != -1) {
                return maleName + 'овна'
            };
            if (nameEnd === 'рий') {
            return maleName.replace('рий', 'риевна')
            };
            if (nameEnd === 'рей') {
            return maleName.replace('рей', 'реевна')
            };
            if (nameEnd === 'ита') {
            return maleName.replace('ита', 'итична')
            };
            if (nameEnd === 'аил') {
            return maleName.replace('аил', 'айловна')
            };
        }
    }
```


## 3. Принцип YAGNI

Данный принцип подразумевает, что разработчик не прописывает функции, которые не требуются по ТЗ. Все задания, которые нам давали в процессе обучения, и так были насыщенными по содержанию, поэтому просто не оставалось сил на добавление чего-то "лишнего" и "своего". Единственное, при верстке сайта в модуле 18 я, как мне кажется, слишком заморочился, чтобы элементы плавно изменяли размер и положение при постепенном уменьшении размера экрана в десктопной версии вплоть до мобильной верссии и далее до разных размеров экранов смартфонов. Но менять я этого не буду, слишком много времени потратил 😄. 

## 4. Принцип SOLID

Задание №5 из Модуля 19 сделано, как мне кажется, с соблюдением принципа SOLID. Есть класс, который обладает зоной ответстенности, открыт для расширения. В перспективе при появлении множества устройств можно дообавлять интерфейсы с разными методами.

``` js

class NewDevice {
    constructor(name, weight){
        this.name = name,
        this.weight = weight + 'g'
    }

    action(onoff) {
        if(onoff === 'on' || onoff === 'off') {
            console.log(`${this.name} is ${onoff}`)
        } else console.log ('Status unknown')
    }
}

class NewComputer extends NewDevice {
    constructor(name, weight, watts, color) {
        super(name, weight);
        this.power = watts + 'W',
        this.color = color
    }

    popularity(popular){
        console.log(`${this.name} is ${popular}`)
    } 

}
```

## Линтеры

У меня установлен ряд линтеров для проверки кода на наличие ошибок и "кривого" написания:
1. HTMLHint
2. Prettier - Code formatter
3. JS Parameter Annotations
4. Image Preview 
5. ESLint
6. CSS Peek
7. CSS Navigation
8. Beautify css/sass/scss/less
9. Auto Rename Tag
10. Auto Close Tag

## Семантика и валидность верстки сайта

Проверено через https://validator.w3.org/.<br> Все выявленные ошибки были исправлены.
