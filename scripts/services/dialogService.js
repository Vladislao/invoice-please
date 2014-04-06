game.factory('dialogService', ["botService", function(botService){

	// диалог
	var model = {
		dialog: [],
		choices: []
	};
	// получение модели
	function get(){
		return model;
	}
	// задание вопроса
	function ask(message){
		model.dialog.push(message);

		var i = model.choices.indexOf(message);
		if(i > -1){
			model.choices.splice(i, 1);
		}

		model.dialog.push(botService.getCurrent().answers[message.id]);
	}
	// сброс текущего диалога
	function reset(){
		model.choices = [
			{ id: 1, text:'Какой кредит вы хотели бы получить?', player: true}, 
			{ id: 2, text:'На какую сумму?', player: true}, 
			{ id: 3, text:'Есть ли у вас семья, дети?', player: true},
			{ id: 4, text:'Каков ваш ежемесячный доход?', player: true},
			{ id: 5, text:'Предъявите необходимые документы.', player: true}
		];
		botService.getNext();

		model.dialog = [
			{text:'Добрый день!', player: true},
			botService.getCurrent().answers[0]
		];
	}
	// инициализируем
	reset();

	return {
		'get': get,
		'ask': ask,
		'reset': reset
	};
}]);