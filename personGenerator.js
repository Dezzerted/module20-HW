const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Ванесса",
            "id_4": "Артемида",
            "id_5": "Диана",
            "id_6": "Нина",
            "id_7": "Миранда",
            "id_8": "Даниэла",
            "id_9": "Елена",
            "id_10": "Адриана"
        }
    }`,

    monthOfBirth: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    occupationMale: `{
        "count": 10,
        "list": {
            "id_1": "Банкир",
            "id_2": "Бизнесмен",
            "id_3": "Программист",
            "id_4": "Дипломат",
            "id_5": "Депутат",
            "id_6": "Строитель",
            "id_7": "Курьер",
            "id_8": "Музыкант",
            "id_9": "Коллектор",
            "id_10": "Риэлтор"
        }
    }`,

    occupationFemle: `{
        "count": 10,
        "list": {
            "id_1": "Певица",
            "id_2": "Домохозяйка",
            "id_3": "Программист",
            "id_4": "Стилист",
            "id_5": "Парикмахер",
            "id_6": "Учитель",
            "id_7": "Массажист",
            "id_8": "Клининг",
            "id_9": "Организатор свадеб",
            "id_10": "Бухгалтер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function () {
        const gender = (this.randomIntNumber(3, 0) >= 2) ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },

    randomSurname: function(gender) {
        return (gender === this.GENDER_MALE) ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а'; 
    },

    randomFirstName: function(gender) {       
        return this.randomValue((gender === this.GENDER_MALE) ? this.firstNameMaleJson : this.firstNameFemaleJson); 
    },

    randomMiddleName: function (gender) {
        let maleName = this.randomValue(this.firstNameMaleJson);
        let nameEnd = maleName.slice(-3);
        const nameEndArr = ['ндр', 'сим', 'ван', 'тем', 'иил', 'гор'];
        if (gender === this.GENDER_MALE) {
            // if (maleName.slice(-3) === 'ндр' || maleName.slice(-3) === 'сим' || maleName.slice(-3) === 'ван' || maleName.slice(-3) === 'тем' || maleName.slice(-3) === 'иил' || maleName.slice(-3) === 'гор') {
            // return maleName + 'ович'        
            // };
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
            // if (maleName.slice(-3) === 'ндр' || maleName.slice(-3) === 'сим' || maleName.slice(-3) === 'ван' || maleName.slice(-3) === 'тем' || maleName.slice(-3) === 'иил' || maleName.slice(-3) === 'гор') {
            // return maleName + 'овна'        
            // };
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
    },

    randomYearOfBirth: function () {
        const yOfB = this.randomIntNumber(2023, 1985);
        return yOfB;
    },

    randomMonthOfBirth: function () {
        const mOfB = this.randomValue(this.monthOfBirth);
        return mOfB;
    },

    randomDayOfBirth: function (mOfB) {
        let dOfB;
        if (mOfB === 'февраля') {
            dOfB = this.randomIntNumber(28, 1);
        } else if (mOfB === 'апреля' || mOfB === 'июня' || mOfB === 'сентября' || mOfB === 'ноября') {
            dOfB = this.randomIntNumber(30, 1);
        } else {return dOfB = this.randomIntNumber(31, 1)};
        return dOfB;
    },

    randomOccupation: function (gender, yOfB) {
        if (gender === this.GENDER_MALE && yOfB >= 2004) {
            return 'Ещё рано'
        } else if (gender === this.GENDER_MALE && yOfB < 2004) {
            return this.randomValue(this.occupationMale)
        } else if (gender === this.GENDER_FEMALE && yOfB >= 2004) {
            return 'Ещё рано'
        } else if (gender === this.GENDER_FEMALE && yOfB < 2004) {
            return this.randomValue(this.occupationFemle)
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.yob = this.randomYearOfBirth();
        this.person.mob = this.randomMonthOfBirth();
        this.person.dob = this.randomDayOfBirth(this.person.mob);
        this.person.occup = this.randomOccupation(this.person.gender, this.person.yob);
        return this.person;
    },

};
