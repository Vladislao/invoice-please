game.factory('botService', [function(){
	
	// текущий бот
	var current = null;
	var currentId = -1;
	// список ботов
	var bots = [
		{ id: "bot-1", name: "Json Fedor", age: 35, result:{ real:true }, img: "img/bots/man-2.png", answers:[
			{ text: "Здравствуйте!", player: false, question: 0},
			{ text: "Потребительский кредит.", player: false, question:1 },
			{ text: "50 000.", player: false, question:2 },
			{ text: "Нет, я живу один.", player: false, question:3 },
			{ text: "Официальный доход 15000 в месяц.", player: false, question:4 },
			{ text: "Пожалуйста: <br/>- паспорт гражданина Российской Федерации;<br/>-  свидетельство государственного пенсионного страхования;<br/>- медицинская страховка;<br/>- справка о доходах формы 2 НДФЛ;<br/>- справка о доходах образца банка;<br/>- документы, подтверждающие наличие квартиры имущества;", player: false, question:5 }
		]},
		{ id: "bot-2", name: "Json Fedor", age: 25, result:{ real:true }, img: "img/bots/man-3.png", answers:[
			{ text: "Здравствуйте!", player: false, question: 0},
			{ text: "Потребительский кредит.", player: false, question:1 },
			{ text: "50 000.", player: false, question:2 },
			{ text: "Нет, я живу один.", player: false, question:3 },
			{ text: "Официальный доход 15000 в месяц.", player: false, question:4 },
			{ text: "Пожалуйста: <br/>- паспорт гражданина Российской Федерации;<br/>-  свидетельство государственного пенсионного страхования;<br/>- медицинская страховка;<br/>- справка о доходах формы 2 НДФЛ;<br/>- справка о доходах образца банка;<br/>- документы, подтверждающие наличие квартиры имущества;", player: false, question:5 }
		]}
	];

	function isLast(){
		return currentId == bots.length - 1;
	}

	function getNext(){
		currentId++;
		current = bots[currentId];
	}

	function getBots(){
		return bots;
	}

	function getCurrent(){
		return current;
	}

	function getCount(){
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