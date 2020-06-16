let Сalculator = function() {

    this.get = function() {
        this.a = +prompt('Введите чило а');
        this.b = +prompt('Введите чило b');
        this.oper = prompt('Введите операцию: +, -, *, /, %');

        this.operation();
    };

    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;    
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            case '%':
                this.result = this.a % this.b;
            break;
            default:
                this.result = 0;
            break;
        }

        this.show();
    };

    this.show = function() {
        alert(this.a + this.oper + this.b + '=' + this.result);
    };
};

let calc = new Сalculator();
console.log(calc);
calc.get();


let Lump = function() {

    this.get = function() {
        this.power = +prompt('Введите мощность(Вт) лампочки');
        this.price = +prompt('Cтоимость электроэнергии(1 кВт/ч) в руб.');
        this.on = confirm('Включить лампочку?');

        if(this.on) {
            this.time = +prompt('Сколько часов горит лампочка?'); 
            this.consup();
        } else {
            alert('Лампочка выключена');
        }
    };

    this.consup = function() {
        let kWtH = this.power / 1000;
        this.result = kWtH * this.time * this.price;

        this.show();
    };

    this.show = function() {
        alert('Расход за горение лампочки = ' + this.result + ' р.');
    };
};

let lump = new Lump();
console.log(lump);
lump.get();


let Teapot = function() {

    this.get = function() {
        this.power = +prompt('Введите мощность чайника (Вт)');
        this.teapotV = +prompt('Объём чайника (л)');
        this.waterV = +prompt('Количество воды (л)');
        this.on = confirm('Включить чайник ?');

        if (this.on) this.timeResult();
        else alert('Эх, чая не заварим(')
    };

    this.timeResult = function() {
        if(this.waterV > this.teapotV) {
            alert('Вы перелили воды в чайник, поэтому кол-во воды будет равняться объёму чайнику (' + this.teapotV + 'л)');
            this.waterV = this.teapotV;
        }

        let xPeremn = 5.33,
            kWtH = this.power / 1000;
        this.result = (xPeremn * this.waterV) / kWtH;

        this.show();
    };

    this.show = function() {
        alert('Чайник закепит через ' + Math.round(this.result * 100) / 100 + ' мин.')
    };
};

let teapot = new Teapot();
console.log(teapot);
teapot.get();


let Car = function() {

    this.get = function() {
        this.model = prompt('Введите марку автомобиля');
        this.carNumber = prompt('Регистрационный номер');
        this.engine = confirm('Завести двигатель ?');

        if (this.engine) this.trip();
    };

    this.trip = function() {
        this.transmis = prompt('Какую передачу включить: D, R, N ?');

        if (this.transmis == 'D' || this.transmis == 'd') {
            this.speed = +prompt('Введите скорость (км/ч)');
            this.time = +prompt('Введите время в пути (ч)');
        } else if (this.transmis == 'N' || this.transmis == 'n') {
            this.speed = 0;
            this.time = 0;
        } else if (this.transmis == 'R' || this.transmis == 'r') {
            this.speed = +prompt('Введите скорость заднего хода (км/ч)');
            this.time = +prompt('Введите время в пути (ч)');
        } else {
            let repeat = confirm('Это не космический корабль, такой передачи не существует.\nХотите пропустить этот шаг ?');
            if (!repeat) {
                this.trip();
            } else {
                this.speed = 0;
                this.time = 0;
            }
        }

        this.distance = this.speed * this.time;
        this.show();
    };

    this.show = function() {
        alert(
            'Марка автомобиля: ' + this.model +
            '\nРегистрационный номер: ' + this.carNumber +
            '\nПройденное растоение: ' + this.distance + ' км'
        );
    };
};

let car = new Car();
console.log(car);
car.get();


