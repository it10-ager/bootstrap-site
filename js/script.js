$(document).ready(function() {
	var article_1 = {
		'photo': './img/old-lang.jpg',
		'title': 'Устаревшие языки, которые уже не стоит изучать',
		'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
	};

	var article_2 = {
		'photo': './img/C++.png',
		'title': 'Что выбрать C++ или C#? С чего лучше начать?',
		'intro': 'Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам.'
	};

	var article_3 = {
		'photo': './img/rust.png',
		'title': 'Зачем нужен язык программирования Rust?',
		'intro': 'Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимущества языка программирования Rust.'
	};

	var article_4 = {
		'photo': './img/logic.jpg',
		'title': '3 логические задачи для настоящего программиста',
		'intro': 'Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься.'
	};

	var article_5 = {
		'photo': './img/crypt.jpg',
		'title': 'Как создать свою криптовалюту?',
		'intro': 'Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм!'
	};

	var article_6 = {
		'photo': './img/ceo.png',
		'title': 'CEO-продвижение - верный способ улучшить свой бизнес',
		'intro': 'Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы CEO-продвижения, позволяющие раскрутить сайт!'
	};

	var article_7 = {
		'photo': './img/hobbie.jpg',
		'title': 'ТОП10: Подборка хобби для программиста',
		'intro': 'Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, а также улучшить логические и креативные способности мозга.'
	};

	var article_8 = {
		'photo': './img/Django.png',
		'title': '10 самых популярных сайтов написанных на Django',
		'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
	};
	
	var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];
	var currentIndex = 0;

	function addToBlock(blockId) {
		//Добавляем два элемента в блок
		for (var i = 0; i < 2; i++) {
			if (currentIndex >= articles.length) {break;}

			//Проверяем, чтобы элементы не повторялись в двух блоках
			if (!$("#block1:contains('" + articles[currentIndex] + "')").length && !$("#block2:contains('" + articles[currentIndex] + "')").length) {
				var articleHTML = `
        			<div class="card mb-5 rounded-2">
         		 		<img src="${articles[currentIndex].photo}" alt="photo" class="h-25 card-img-top">
         		 		<div class="card-body">
          		  			<h3 class="mb-3">${articles[currentIndex].title}</h3>
          		  			<p class="card-text mb-3">${articles[currentIndex].intro}</p>
           			 		<button type="button" class="btn btn-warning">Читать далее</button>
          				</div>
      				</div>`;
				$("#" + blockId).append(articleHTML);
			}
			currentIndex++;
		}

		//Проверяем, есть ли элементы для добавления
		if (currentIndex >= articles.length) {
			//Если все элементы уже были добавлены, скрываем кнопку
			$("#load-more-btn").hide();
			return;
		}
	}

	//Скрываем показываем элемент
	function toggleParagraph(){
		if($(window).width() <= 950)
			$('.more-info').removeClass('d-none');
		else if($(window).width() > 950){
			$('.more-info').addClass('d-none');
		}
	}

	//Добавляем по два элемента в каждый блок при нажатии на кнопку
	$("#load-more-btn").click(function () {
		toggleParagraph(); 
		addToBlock("block1");
		addToBlock("block2");
	});
	
	//Функции для работы поиска
	$('#search-input-custom').click(function () {
		$(this).hide();
		$('.search-overlay').fadeIn();
	});

	$('.search-overlay .btn').click(function () {
		$('#search-input-custom').show();
		$('.search-overlay').fadeOut();
	});

	//Возможность скрыть форму при нажатии в любом месте
	$(document).mouseup(function (e) {
		var container = $('.search-overlay .input-group-custom');
		$('#search-input-custom').show();
		//Находится ли "клик" внутри блока поиска 
		if (!container.is(e.target) && container.has(e.target).length === 0)	//чтобы не исчезал при клике внутри поиска
			$('.search-overlay').fadeOut();
		else $('#search-input-custom').hide();
	});
});