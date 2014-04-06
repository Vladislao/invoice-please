game.factory('botService', [function () {

    // текущий бот
    var current = null;
    var currentId = -1;
    // список ботов
    var bots = [
		{
		    id: "bot-1", name: "Максим Иванов", age: 35, result: { real: true }, img: "img/bots/man-1.png", answers: [
              { text: "Здравствуйте!", player: false, question: 0 },
              { text: "Потребительский кредит.", player: false, question: 1 },
              { text: "50 000.", player: false, question: 2 },
              { text: "Нет, я живу один.", player: false, question: 3 },
              { text: "Официальный доход 15000 в месяц.", player: false, question: 4 },
              { text: "Пожалуйста: <br/>- паспорт гражданина Российской Федерации;<br/>-  свидетельство государственного пенсионного страхования;<br/>- медицинская страховка;<br/>- справка о доходах формы 2 НДФЛ;<br/>- справка о доходах образца банка;<br/>- документы, подтверждающие наличие квартиры имущества;", player: false, question: 5 }
		    ]
		},
		{
		    id: "bot-2", name: "Александр Белов", age: 25, result: { real: false }, img: "img/bots/man-2.png", answers: [
              { text: "Хелло!", player: false, question: 0 },
              { text: "Потребительский кредит.", player: false, question: 1 },
              { text: "Двести тысяч рублей.", player: false, question: 2 },
              { text: "Женат на американке.", player: false, question: 3 },
              { text: "Тридцать тысяч рублей.", player: false, question: 4 },
              { text: "Пожалуйста: <br/>- паспорт гражданина США;<br/>-  свидетельство государственного пенсионного страхования;<br/>- медицинская страховка;<br/>- справка о доходах формы 2 НДФЛ;<br/>- справка о доходах образца банка;", player: false, question: 5 }
		    ]
		},
	    {
	        id: "bot-3", name: "Владислав Строев", age: 31, result: { real: true }, img: "img/bots/man-3.png", answers: [
              { text: "Добрый день!", player: false, question: 0 },
              { text: "Ипотека.", player: false, question: 1 },
              { text: "Пять миллионов рублей.", player: false, question: 2 },
              { text: "Cостою в браке, есть новорожденный ребенок.", player: false, question: 3 },
              { text: "Официальный доход 25000 в месяц.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> Заявление в двух экземплярах; <br/>Паспорта супругов и свидетельства о рождении детей;<br/>Свидетельство о заключении брака;<br/>Справки о доходах (либо наличие около 40% суммы кредита для первого взноса);<br/>Выписка из домовой книги;<br/>Сертификат на право улучшения жилищных условий.", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-4", name: "Виктор Бакурин", age: 44, result: { real: true }, img: "img/bots/man-4.png", answers: [
              { text: "Привет!", player: false, question: 0 },
              { text: "Кредит малому бизнесу без залога.", player: false, question: 1 },
              { text: "Три миллиона рублей.", player: false, question: 2 },
              { text: "Холост.", player: false, question: 3 },
              { text: "Доходность предприятия составляет 555000 в месяц.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> Копия свидетельства о внесении в Единый государственный реестр.<br/>Копия документа областного отдела статистики о присвоении кодов или выписка из Единого государственного реестра индивидуальных предпринимателей.<br/>Копия банковской карточки с образцами подписей и оттиском печати, заверенная банком (нужна, если кредит одобрен).<br/>Копия свидетельства о постановке на налоговый учет.<br/>Копия паспорта (все страницы, включая пустые).<br/>При наличии копии лицензий и патентов на деятельность.", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-5", name: "Владимир Владимирович Родионов", age: 66, result: { real: false }, img: "img/bots/man-5.png", answers: [
              { text: "Рад вас видеть!", player: false, question: 0 },
              { text: "Автокредит без первоначального взноса.", player: false, question: 1 },
              { text: "Пятьсот двадцать тысяч рублей.", player: false, question: 2 },
              { text: "Вдовец.", player: false, question: 3 },
              { text: "Пенсия 11 тысяч рублей в месяц.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> паспорт, <br/>трудовая книжка, <br/>справка о доходах по форме 2-НДФЛ<br/>", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-6", name: "Аастасия Кузнецова", age: 21, result: { real: true }, img: "img/bots/woman-1.png", answers: [
              { text: "Здравствуйте!", player: false, question: 0 },
              { text: "Кредитную карту без всяких справок.", player: false, question: 1 },
              { text: "Пятьдесят тысяч рублей. На айфон.", player: false, question: 2 },
              { text: "Не жената.", player: false, question: 3 },
              { text: "Стипендия 2 тысячи рублей в месяц.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> паспорт", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-7", name: "Альберт Былькаев", age: 41, result: { real: true }, img: "img/bots/man-7.png", answers: [
              { text: "Здравствуйте!", player: false, question: 0 },
              { text: "Я хочу получить кредитную карту вашего банка.", player: false, question: 1 },
              { text: "Два миллиона рублей.", player: false, question: 2 },
              { text: "Женат.", player: false, question: 3 },
              { text: "Официальная заработная плата на заводе состяавляет 50 тыс. рублей.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> Заявление;<br/>Паспорт;<br/>Дополнительный документ, удостоверяющий личность заемщика (это может быть: водительское удостоверение, военный билет, страховое свидетельство, загранпаспорт);<br/>Копия трудовой книжки, заверенная работодателем;Копия трудового договора, заверенная работодателем постранично;Справка о доходах по форме 2-НДФЛ<br/>", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-8", name: "Олег Спириков", age: 37, result: { real: false }, img: "img/bots/man-8.png", answers: [
              { text: "Здравствуйте!", player: false, question: 0 },
              { text: "Я хочу получить кредитную карту вашего банка. Без поручителя и залога.", player: false, question: 1 },
              { text: "Два миллиона рублей.", player: false, question: 2 },
              { text: "В разводе.", player: false, question: 3 },
              { text: "Я временно не работаю. Состою на бирже труда.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> Заявление;<br/>Паспорт;<br/>Дополнительный документ, удостоверяющий личность заемщика (это может быть: водительское удостоверение, военный билет, страховое свидетельство, загранпаспорт);<br/>Копия трудовой книжки, заверенная работодателем;Копия трудового договора, заверенная работодателем постранично;Справка о доходах по форме 2-НДФЛ<br/>", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-9", name: "Альбина Синякова", age: 19, result: { real: true }, img: "img/bots/woman-2.png", answers: [
              { text: "Здравствуйте!", player: false, question: 0 },
              { text: "Я хочу взять кредит на образование.", player: false, question: 1 },
              { text: "Триста тысяч рублей.", player: false, question: 2 },
              { text: "Не жената.", player: false, question: 3 },
              { text: "Студентка. Не работаю.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> Паспорт;<br/>Договор с ВУЗом;<br/>Заявление.", player: false, question: 5 }
	        ]
	    },
	    {
	        id: "bot-10", name: "Светлана Сидоровна Пермякова", age: 67, result: { real: true }, img: "img/bots/woman-3.png", answers: [
              { text: "Здравствуйте!", player: false, question: 0 },
              { text: "Хотелось бы получить потребительский кредит, внуку на ноутбук.", player: false, question: 1 },
              { text: "Двадцать тысяч рублей.", player: false, question: 2 },
              { text: "Жената, есть взрослые работающие дети. Один внук.", player: false, question: 3 },
              { text: "Пенсионерка, пенсия семь тысяч рублей.", player: false, question: 4 },
              { text: "Пожалуйста:<br/> Паспорт;<br/>Пенсионное удостоверение,:<br/> справка 2-НДФЛ, :<br/>справка по форме банка или иной документ<br/>Заявление.", player: false, question: 5 }
	        ]
	    }
    ];

    function isLast() {
        return currentId == bots.length - 1;
    }

    function getNext() {
        currentId++;
        current = bots[currentId];
    }

    function getBots() {
        return bots;
    }

    function getCurrent() {
        return current;
    }

    function getCount() {
        return bots.length;
    }

    return {
        'getCurrent': getCurrent,
        'getBots': getBots,
        'isLast': isLast,
        'getCount': getCount,
        'getNext': getNext
    };
}]);