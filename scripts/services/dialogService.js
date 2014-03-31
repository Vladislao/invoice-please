game.factory('dialogService', [function(){
	
	// текущий бот
	var current = null;
	// список ботов
	var bots = [
	{ name: "Json Fedor", age: 15, result:{ real:true }, answers:[
			{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, debitis, repudiandae libero sit aut quae est ut. Hic, consequuntur, culpa.", player: false, question: 0},
			{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, mollitia tempora officia a officiis dolor aperiam animi molestias. Eveniet, nobis.", player: false, question:1 },
			{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, debitis, repudiandae libero sit aut quae est ut. Hic, consequuntur, culpa.", player: false, question:2 },
			{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, debitis, repudiandae libero sit aut quae est ut. Hic, consequuntur, culpa.", player: false, question:3 },
			{ text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, debitis, repudiandae libero sit aut quae est ut. Hic, consequuntur, culpa.", player: false, question:4 }
		]}
	];

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

		model.dialog.push(current.answers[message.id]);
	}
	// сброс текущего диалога
	function reset(){
		model.choices = [
			{ id: 1, text:'Lorem ipsum dolor sit amet.', player: true}, 
			{ id: 2, text:'Lorem ipsum dolor sit amet.', player: true}, 
			{ id: 3, text:'Lorem ipsum dolor sit amet.', player: true}, 
			{ id: 4, text:'Lorem ipsum dolor sit amet.', player: true}
		];
		current = bots[0];
		model.dialog = [
			current.answers[0]
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