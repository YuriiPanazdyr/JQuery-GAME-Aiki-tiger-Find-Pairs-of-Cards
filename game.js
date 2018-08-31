/*
	Copyright (C) 2018 YuriiPanazdyr. All rights reserved.
	Contacts: <panazdur@ukr.net>

	Aiki-tiger: Find Pairs of Cards
	https://github.com/YuriiPanazdyr/JQuery-GAME-Aiki-tiger-Find-Pairs-of-Cards
	Example: http://aiki-tiger.at.ua/multimedia/igru/
*/	

$(document).ready(function(){

// ---------------Overview---------------
// 1 - Variables, arrays and all for work.
// 2 - Creating and adds game elements.
// 3 - Functions and objects that are needed for work.
// 4 - Buttons clicking event.




// ---------------1 - Variables, arrays and all for work.---------------



// Multilanguage
// We have associative array for each language.
// key - element id.
// value - text to be added.
// In the function of language selection we have a loop that will add text to each element by id.

	var language_ru = {
		button_open_menu: "меню",
		main_menu_title: "меню",
		main_menu_button_start: "новая игра",
		main_menu_button_restart: "переиграть",
		main_menu_button_select_complexity: "cложность",
		main_menu_select_complexity_title: "cложность",
		game_on_time_label: "игра на время",
		game_on_moves_label: "игра на ходы",
		game_auto_cards_mixing_label: "автоматически перемешивать карты",
		main_menu_button_open_settings: "настройки",
		main_menu_settings_title: "настройки",
		main_menu_button_continue_game: "продолжить",
		sound_music_label: "музыка",
		sound_effects_label: "звуки",
		main_menu_button_close_settings: "назад",
		level_titel: "уровень",
		button_next_level: "следующий уровень",
		button_restart_level: "еще раз",
		time_container_title: "осталось времени:",
		moves_container_title: "осталось ходов:",
		victory_title: "вы выграли",
		lose_title: "вы проиграли"
	}
	var language_ua = {
		button_open_menu: "меню",
		main_menu_title: "меню",
		main_menu_button_start: "нова гра",
		main_menu_button_restart: "переграти",
		main_menu_button_select_complexity: "складність",
		main_menu_select_complexity_title: "складність",
		game_on_time_label: "гра на час",
		game_on_moves_label: "гра на ходи",
		game_auto_cards_mixing_label: "автоматично перемішувати карти",
		main_menu_button_open_settings: "налаштування",
		main_menu_settings_title: "налаштування",
		main_menu_button_continue_game: "продовжити",
		sound_music_label: "музика",
		sound_effects_label: "звуки",
		main_menu_button_close_settings: "назад",
		level_titel: "рівень",
		button_next_level: "наступний рівень",
		button_restart_level: "ще раз",
		time_container_title: "залишилося часу:",
		moves_container_title: "залишилося ходів:",
		victory_title: "ви перемогли",
		lose_title: "ви програли"
	}
	var language_eng = {
		button_open_menu: "menu",
		main_menu_title: "menu",
		main_menu_button_start: "new game",
		main_menu_button_restart: "restart level",
		main_menu_button_select_complexity: "complexity",
		main_menu_select_complexity_title: "complexity",
		game_on_time_label: "play on time",
		game_on_moves_label: "play on moves",
		game_auto_cards_mixing_label: "automatically mix cards",
		main_menu_button_open_settings: "settings",
		main_menu_settings_title: "setting",
		main_menu_button_continue_game: "continue",
		sound_music_label: "music",
		sound_effects_label: "effects",
		main_menu_button_close_settings: "back",
		level_titel: "level",
		button_next_level: "next level",
		button_restart_level: "restart",
		time_container_title: "time left:",
		moves_container_title: "moves left:",
		victory_title: "you won",
		lose_title: "you have lost"
	}
//In this variable storing the current level number
	var level = 1;
/*
	Array to store free space in rows
	At the beginning of each level in that array will be added values which mean how many cards will need add to each row.
	When the cards one by one are added to the row the value will decrease to zero. When the value is zero, cards will not be added in a row.
*/
	var level_free_cells_in_rows = [];

// In this array we have values which mean how many cards should be in each row for each level
	var cards_positions_in_levels = [0, // Added 0 item to make easier request to array
		5,5,0,0, // level 1 => 5 cards in 1 row, 5 cards in 2 row, 0 cards in 3 row, 0 cards in 4 row
		6,6,0,0, // level 2 => 6 cards in 1 row, 6 cards in 2 row, 0 cards in 3 row, 0 cards in 4 row
		7,7,0,0, // level 3 => 7 cards in 1 row, 7 cards in 2 row, 0 cards in 3 row, 0 cards in 4 row
		8,8,0,0, // level 4 => 8 cards in 1 row, 8 cards in 2 row, 0 cards in 3 row, 0 cards in 4 row
		6,6,6,0, // level 5 => 6 cards in 1 row, 6 cards in 2 row, 6 cards in 3 row, 0 cards in 4 row
		2,6,6,6, // level 6 => 2 cards in 1 row, 6 cards in 2 row, 6 cards in 3 row, 6 cards in 4 row
		4,6,6,6, // level 7 => 4 cards in 1 row, 6 cards in 2 row, 6 cards in 3 row, 6 cards in 4 row
		6,6,6,6, // level 8 => 6 cards in 1 row, 6 cards in 2 row, 6 cards in 3 row, 6 cards in 4 row
		2,8,8,8, // level 9 => 2 cards in 1 row, 8 cards in 2 row, 8 cards in 3 row, 8 cards in 4 row
		4,8,8,8, // level 10 => 4 cards in 1 row, 8 cards in 2 row, 8 cards in 3 row, 8 cards in 4 row
		6,8,8,8, // level 11 => 6 cards in 1 row, 8 cards in 2 row, 8 cards in 3 row, 8 cards in 4 row
		8,8,8,8  // level 12 => 8 cards in 1 row, 8 cards in 2 row, 8 cards in 3 row, 8 cards in 4 row
	];

// Sounds
//Create an object to work with sound.
	var audio_beep = new Audio();
//In this variable we save music status (on or off).
	var sound_music = "on";
//In this variable we save effects status (on or off).
	var sound_effects = "on";

/*
	Add cards to array what we already opened, but if the value will not coincide We close them later.
	In any event, the array will be cleared.
*/
	var cards_need_close = [];

/*
	At the beginning of any level in this variable we add the number of cards that player need to be opened in this level.
	The value is reduced by two when a pair of cards are opened.
*/
	var cards_need_open = 0;
//In this array, we save the number of cards that player need to open in each of the levels.
	var cards_in_level = [0, // Added 0 item to make easier request to array
		10, // level 1 => in level 1 we have 10 cards
		12, // level 2 => in level 2 we have 12 cards
		14, // level 3 => in level 3 we have 14 cards
		16, // level 4 => in level 4 we have 16 cards
		18, // level 5 => in level 5 we have 18 cards
		20, // level 6 => in level 6 we have 20 cards
		22, // level 7 => in level 7 we have 22 cards
		24, // level 8 => in level 8 we have 24 cards
		26, // level 9 => in level 9 we have 26 cards
		28, // level 10 => in level 10 we have 28 cards
		30, // level 11 => in level 11 we have 30 cards
		32 // level 12 => in level 12 we have 32 cards
	];
//In this variable, we will save the value of cards which are already added to the screen.
	var cards_put_on = 0;
/*
	In this array, we will save the id of cards which are already added to the screen.
	At each random generation in a cycle will be checked if the card already added.
*/
	var cards_put_on_id = [];
//Variable to save random value.
	var pos_random = 0;

//Variable to save how many steps are left before the cards are automatically mixed.
	var moves_to_auto_cards_mixing_left = 0;
//In this array, we save the number of moves that player have in each of the levels before the cards are automatically mixed.
	var moves_to_auto_cards_mixing_in_level = [0, // Added 0 item to make easier request to array
		5, // level 1 => in level 1 we have 5 moves left to auto cards mixing
		6, // level 2 => in level 2 we have 6 moves left to auto cards mixing
		7, // level 3 => in level 3 we have 7 moves left to auto cards mixing
		9, // level 4 => in level 4 we have 9 moves left to auto cards mixing
		11, // level 5 => in level 5 we have 11 moves left to auto cards mixing
		13, // level 6 => in level 6 we have 13 moves left to auto cards mixing
		16, // level 7 => in level 7 we have 16 moves left to auto cards mixing
		19, // level 8 => in level 8 we have 19 moves left to auto cards mixing
		22, // level 9 => in level 9 we have 22 moves left to auto cards mixing
		26, // level 10 => in level 10 we have 26 moves left to auto cards mixing
		30, // level 11 => in level 11 we have 30 moves left to auto cards mixing
		34 // level 12 => in level 12 we have 34 moves left to auto cards mixing
	];

//Variable to save how many steps are left before player is lose.
	var moves_left = 0;
//In this array, we save the number of moves that player have in each of the levels.	
	var moves_in_level = [0, // Added 0 item to make easier request to array
		20, // level 1 => in level 1 we have 20 moves
		24, // level 2 => in level 2 we have 24 moves
		28, // level 3 => in level 3 we have 28 moves
		32, // level 4 => in level 4 we have 32 moves
		36, // level 5 => in level 5 we have 36 moves
		40, // level 6 => in level 6 we have 40 moves
		44, // level 7 => in level 7 we have 44 moves
		48, // level 8 => in level 8 we have 48 moves
		52, // level 9 => in level 9 we have 52 moves
		56, // level 10 => in level 10 we have 56 moves
		60, // level 11 => in level 11 we have 60 moves
		64 // level 12 => in level 12 we have 64 moves
	];

//Variable to save how many time are left before player is lose.
	var time_left = 0;
//In this array, we save the time that player have in each of the levels.	
	var time_in_level = [0, // Added 0 item to make easier request to array
		20, // level 1 => in level 1 we have 20 seconds
		24, // level 2 => in level 2 we have 24 seconds
		28, // level 3 => in level 3 we have 28 seconds
		34, // level 4 => in level 4 we have 32 seconds
		38, // level 5 => in level 5 we have 36 seconds
		42, // level 6 => in level 6 we have 40 seconds
		48, // level 7 => in level 7 we have 44 seconds
		52, // level 8 => in level 8 we have 48 seconds
		58, // level 9 => in level 9 we have 52 seconds
		64, // level 10 => in level 10 we have 56 seconds
		70, // level 11 => in level 11 we have 60 seconds
		76 // level 12 => in level 12 we have 64 seconds
	];

//In this variable we save pause status (true or false).
	var pause = false;





// ---------------2 - Creating and adds game elements.---------------



/*
	Created and added to the game 32 cards (16 pairs). For two cards the same image.
	1) For each of cards will create a unique id. We will apply the formula:
		a) For odd values i*2-1. Example: i=1 >>> id=1; i=2 >>> id=3
		b) For even values i*2. Example: i=1 >>> id=1; i=2 >>> id=4
	2) For each pair of cards will create a value which is equal to the id first card and id second card. We apply the same formula as for id.
	3) We will paste 3 in the name of the image. For two cards will be used the same image.
*/
for (var i = 1; i < 17; i++) {
	$('#game').append('<div class="card"><div id="card_'+(i*2-1)+'" class="card_logo" value="'+(i*2-1)+''+(i*2)+'" style="background-image:url(img/card_logo.png)"></div><div class="card_image" style="background-image:url(img/card_image_'+i+'.png)"></div></div>');
	$('#game').append('<div class="card"><div id="card_'+(i*2)+'" class="card_logo" value="'+(i*2-1)+''+(i*2)+'" style="background-image:url(img/card_logo.png)"></div><div class="card_image" style="background-image:url(img/card_image_'+i+'.png)"></div></div>');
};




// ---------------3 - Functions and objects that are needed for work.---------------



/*
	Select languages.
	Create an object that will change the text of the each elements when the language will be selected (change).
	Loop that will add text to each element by id.
*/
	function Select_languages() {
		this.select=function(value){
			if(value==="english") {
				Object.keys(language_eng).forEach(function(key, id) {
					$('#'+key).text(language_eng[key]);
				});
				$('option[value="'+value+'"]').prop('selected', true);
			}
			else if(value==="українська") {
				Object.keys(language_ua).forEach(function(key, id) {
					$('#'+key).text(language_ua[key]);
				});
				$('option[value="'+value+'"]').prop('selected', true);
			}
			else if(value==="русский") {
				Object.keys(language_ru).forEach(function(key, id) {
					$('#'+key).text(language_ru[key]);
				});
				$('option[value="'+value+'"]').prop('selected', true);
			}
/*
	Each letter of the menu title is wrapped in div
	This is necessary in order to betray style for each letter.
*/
			var chars = $('#main_menu_title').text().split("");
			$('#main_menu_title').empty();
			$.each(chars, function(index, value) {
			    $('#main_menu_title').append("<div>"+value+"</div>");
			});
		}
	}
	var select_languages = new Select_languages();


/*
	Object for work with fade in and fade out cards animation.
	1) fadeIn - Here everything is simple. A cycle for 4 rows. And a cycle for all cards in the current row.
		ir - current row.
		i - current card in current ir row.
		Opacity of cards work smoothly (1000 ms) with a delay (700 ms + i_count * 25 ms).
		The animation begins with first card of first row.
	2) fadeOut - Here everything is simple. A cycle for 4 rows. And a cycle for all cards in the current row.
		ir - current row.
		i - current card in current ir row.
		Opacity of cards work smoothly (1000 ms) with a delay (700 ms + i_count * 25 ms).
		The animation begins with last card of last row.
*/
	function Cards_animation() {
		var i_count = 0;
		this.fadeIn=function(){
			i_count = 0;
			for (var ir = 0; ir < $('.row_for_cards').length ; ir++) {
				for (var i = 0; i < $('.row_for_cards').eq(ir).find('.card').length; i++) {
					$('.row_for_cards').eq(ir).find('.card').eq(i).css({'display':'inline-block'});
					$('.row_for_cards').eq(ir).find('.card').eq(i).delay(700+i_count*25).fadeTo(1000, 1);
					i_count++;
				};
			}
		}
		this.fadeOut=function(){
			i_count = 0;
			for (var ir = $('.row_for_cards').length-1; ir >= 0 ; ir--) {
				for (var i = $('.row_for_cards').eq(ir).find('.card').length-1; i >= 0; i--) {
					$('.row_for_cards').eq(ir).find('.card').eq(i).delay(700+i_count*25).fadeTo(1000, 0);
					if(ir===0 && i===0){
						$('#hide_cards').delay(700+i_count*25).fadeIn(1000);
					}
					i_count++;
				};
			}
		}
	}
	var cards_animation = new Cards_animation();
/*
	Object for work with music and effects
*/
	function Make_sound(){
		function check_sound_on_off() {
			if (sound_effects === "on") {
    			return true;
    		}
    		else {
    			return false;
    		}
    	}
		this.start=function(){
			if (check_sound_on_off()) {
				audio_beep.src = 'audio/start.mp3';
 				audio_beep.play();
			}
		}
		this.click=function(){
			if (check_sound_on_off()) {
				audio_beep.src = 'audio/click.mp3';
 				audio_beep.play();
			}
		}
		this.found_couple_of_cards=function(){
			if (check_sound_on_off()) {
				audio_beep.src = 'audio/found_couple_of_cards.mp3';
 				audio_beep.play();
			}
		}
		this.victory=function(){
			if (check_sound_on_off()) {
				audio_beep.src = 'audio/victory.mp3';
 				audio_beep.play();
			}
		}
	};
	var make_sound = new Make_sound();
/*
	Object for work with game status.
*/	
	function Game_over(){
		function hide_superfluous_items() {
			cards_animation.fadeOut();
    	}
		this.win=function(){
			make_sound.victory();
			hide_superfluous_items();
			$('#victory_title').fadeIn(1500);
			$('#button_next_level').fadeIn(1500);
		}
		this.winAllGame=function(){
			make_sound.victory();
			hide_superfluous_items();
			level=1;
			$('#victory_title').fadeIn(1500);
			$('#button_restart_level').fadeIn(1500);	
		}
		this.lose=function(){
			hide_superfluous_items();
			$('#lose_title').fadeIn(1500);
			$('#button_restart_level').fadeIn(1500);
		}
	};
	var game_over = new Game_over();
/*
	Object for work with main menu.
*/
	function Main_menu(){
		function animation_show_menu () {
			$("#main_menu").animate({'top': '0px'}, 2000);
		}
		function animation_hide_menu () {
			$("#main_menu").animate({'top': '-1000px'}, 1000);
		}
		this.first_start=function() {
			animation_show_menu();
			$("#sounds_container").animate({'top': '0px'}, 2000);
			$("#main_menu_button_continue_game, #main_menu_button_restart").hide();
		}
		this.close_complexity = function() {
			$('#main_menu_button_select_complexity').show();
			$('#main_menu_select_complexity').hide();
			$('#main_menu_select_complexity .must_hide').hide();
		}
		this.close_settings = function() {
			$('#main_menu_button_open_settings').show();
			$('#main_menu_settings').hide();
			$('#main_menu_settings .must_hide').hide();
		}
		this.open=function() {
			make_pause(true);
			animation_show_menu();
		}
		this.close=function() {
			animation_hide_menu();
			make_pause(false);
			$('#main_menu_button_continue_game:hidden').show(1000);
			if ($('#main_menu_button_open_settings').css("display")==="none") {
				this.close_settings();
			}
			if ($('#main_menu_button_select_complexity').css("display")==="none") {
				this.close_complexity();
				if ($('#main_menu_button_continue_game').css("display")==="block") {
					$('#main_menu_button_select_complexity').hide();
				}
			}
		}
		this.open_complexity=function() {
			if ($('#main_menu_button_open_settings').css("display")==="none") {
				this.close_settings();
			}
			$('#main_menu_button_select_complexity').hide();
			$('#main_menu_select_complexity').show();
			for (var i = 0; i < $('#main_menu_select_complexity .must_hide').length; i++) {
				$('#main_menu_select_complexity .must_hide').eq(i).delay(100+(i+1)*25).fadeIn(700);
			};

		}
		this.open_settings=function() {
			if ($('#main_menu_button_select_complexity').css("display")==="none" && $('#main_menu_button_continue_game').css("display")==="none") {
				this.close_complexity();
			}
			$('#main_menu_button_open_settings').hide();
			$('#main_menu_settings').show();
			for (var i = 0; i < $('#main_menu_settings .must_hide').length; i++) {
				$('#main_menu_settings .must_hide').eq(i).delay(100+(i+1)*25).fadeIn(700);
			};
		}
		this.restart=function() {
			if ($('#main_menu_button_select_complexity').css("display")==="block" || $('#main_menu_select_complexity').css("display")==="block") {
				$('#main_menu_button_select_complexity').hide();
				$('#main_menu_select_complexity').hide();
				$('#main_menu_select_complexity .must_hide').hide();
				start_restart_level();
			}
			else {
				$('#main_menu_button_continue_game').hide();
				$('#main_menu_button_select_complexity').show();
				this.open_complexity();
			}
		}
	};
	var main_menu = new Main_menu();
/*
	Function for work with Start/Restart level
*/
	function start_restart_level(){
		cards_need_close=[];
		cards_need_open = cards_in_level[level];
		moves_left = moves_in_level[level];
		time_left = time_in_level[level];
		moves_to_auto_cards_mixing_left = moves_to_auto_cards_mixing_in_level[level];
		
		$('#moves').text(moves_left);

		if ($('#game_on_time').is(':checked')) {
			if ($('#game_on_moves').is(':checked')) {
				$('#time_container').animate({'bottom': '49px'}, 1000);
			}
			else {
				$('#time_container').animate({'bottom': '17px'}, 1000);
			}
		}
		if ($('#game_on_moves').is(':checked')) {
			$('#moves_container').animate({'bottom': '17px'}, 1000);
		}
		$('.card').finish();
		$('.card').fadeTo(0, 0);
		$('.card').hide();
		$('.card_logo').css({'display':'block'});
		
		main_menu.close();

		$('#level').text(level);
		$("#level_container, #button_open_menu").animate({'top': '0px'}, 2000);
		make_sound.start();
		lay_out_mixed_cards();
		make_pause(false);
	};
/*
	Function for work with Start/Restart level
*/
	function lay_out_mixed_cards(){
		level_free_cells_in_rows = [];
		level_free_cells_in_rows.push(cards_positions_in_levels[level*4-3]);
		level_free_cells_in_rows.push(cards_positions_in_levels[level*4-2]);
		level_free_cells_in_rows.push(cards_positions_in_levels[level*4-1]);
		level_free_cells_in_rows.push(cards_positions_in_levels[level*4]);
		cards_put_on = 0;
		cards_put_on_id = [];
		pos_random = 0;
		run();

		function run() {
			pos_random = Math.floor(Math.random() * (cards_in_level[level] - 1 + 1)) + 1;
			if (cards_put_on!=cards_in_level[level]) {
				if ($.inArray(pos_random, cards_put_on_id) != -1) {
					run();
				}
				else {
					cards_put_on_id.push(pos_random);			
					cards_put_on++;
					if (level_free_cells_in_rows[0]!=0){
						level_free_cells_in_rows[0] = level_free_cells_in_rows[0]-1;
						$('#card_'+pos_random).parent().appendTo($('.row_for_cards').eq(0));
					}
					else if (level_free_cells_in_rows[1]!=0){
						level_free_cells_in_rows[1] = level_free_cells_in_rows[1]-1;
						$('#card_'+pos_random).parent().appendTo($('.row_for_cards').eq(1));
					}
					else if (level_free_cells_in_rows[2]!=0){
						level_free_cells_in_rows[2] = level_free_cells_in_rows[2]-1;
						$('#card_'+pos_random).parent().appendTo($('.row_for_cards').eq(2));
					}
					else if (level_free_cells_in_rows[3]!=0){
						level_free_cells_in_rows[3] = level_free_cells_in_rows[3]-1;
						$('#card_'+pos_random).parent().appendTo($('.row_for_cards').eq(3));
					}
					run();
				}
			}
		}
		if($('.card').eq(0).css("display")!=="inline-block") {
			cards_animation.fadeIn();
		}
	};
//	Function for work with moves left before player is lose the game and moves to auto cards mixing 
	function check_moves_and_cards() {
		if (cards_need_open===0) {
			if (level!=12) {
				game_over.win();
			}
			else {
				game_over.winAllGame();
			}
		}
		else {
			check_moves();
			check_moves_to_auto_cards_mixing();
		}		
		function check_moves(){
			if ($('#game_on_moves').is(':checked')) {
				if (moves_left<2) {
					if($('#game_on_time').is(':checked')){
						clearTimeout(timer);
					}
					moves_left--;
					$('#moves').text(moves_left);
					game_over.lose();
				}
				else {
					moves_left--;
					$('#moves').text(moves_left);
				}
			}
		}
		function check_moves_to_auto_cards_mixing(){
			if ($('#game_auto_cards_mixing').is(':checked')) {
				if (moves_to_auto_cards_mixing_left===1) {
					moves_to_auto_cards_mixing_left = moves_to_auto_cards_mixing_in_level[level];
					lay_out_mixed_cards();
				}
				else {
					moves_to_auto_cards_mixing_left--;
				}
			}
		}
	};
//	Function for work with time left before player is lose the game.
	var timer;
	function check_time() {
		$('#time').text(time_left);
		if (cards_need_open!=0 && !pause) {
			clearTimeout(timer);
			if (time_left>0) {
				timer = setTimeout(function() {
					time_left--;
					clearTimeout(timer);
					check_time();
				}, 1000);
			}
			else if(time_left < 1) {
				clearTimeout(timer);
				game_over.lose();
			}
		}
	};
//	Function for work with pause.	
	function make_pause(make_pause) {
		if(make_pause){
			pause=true;
			$('#hide_cards').fadeIn(1000);
		}
		else {
			pause=false;
			$('#hide_cards').fadeOut(1000);
			if ($('#game_on_time').is(':checked')) {
				check_time();
			}
		}
	};




// ---------------4 - Buttons clicking event.---------------



// OPEN the doors in the beginning of game.
// When the doors are open we show the select language menu.
	$('#doors').on("click touchstart", function() {
		make_sound.start();
		$('.door').eq(0).animate({'left': '-410px'}, 1000);		
		$('.door').eq(1).animate({'right': '-410px'}, 1000);
		$('#select_languages_container').animate({'top': '10px'}, 2000);
		$('#screen_size').delay(2000).fadeIn(1000);
	});
// Change size of user screen.
// Game started with standard screen 840x600 pixels. When user click on button with id "screen_size" the library "jquery.fullscreen-min.js" will work and the user's screen will be full.
	$('#screen_size').on("click touchstart", function() {
		$('#game').toggleFullScreen();
	/*
	Change fullscreen icon.
	The icon consists of four half squares. In different modes, we change position of four half squares.
	1 half squares - top left (standard) >>> bottom right (FullScreen)
	2 half squares - top right (standard) >>> bottom left (FullScreen)
	3 half squares - bottom left (standard) >>> top right (FullScreen)
	4 half squares - bottom right (standard)>>> top left (FullScreen)
	*/
		if ($('.screen_size_angle_square').eq(0).css("top")!=="19px") {
			$('.screen_size_angle_square').eq(0).css({"top":"19px", "left":"21px"});
			$('.screen_size_angle_square').eq(1).css({"top":"19px", "right":"21px"});
			$('.screen_size_angle_square').eq(2).css({"bottom":"19px", "left":"21px"});
			$('.screen_size_angle_square').eq(3).css({"bottom":"19px", "right":"21px"});
		}
		else {
			$('.screen_size_angle_square').eq(0).css({"top":"0px", "left":"0px"});
			$('.screen_size_angle_square').eq(1).css({"top":"0px", "right":"0px"});
			$('.screen_size_angle_square').eq(2).css({"bottom":"0px", "left":"0px"});
			$('.screen_size_angle_square').eq(3).css({"bottom":"0px", "right":"0px"});
		}
	});
	$('#select_select_languages').on("change", function() {
		select_languages.select($(this).find('option:selected').attr("value"));
	});
	$('.button_select_languages').on("click touchstart", function() {
		select_languages.select($(this).attr("value"));
		$('#select_languages_container').animate({'top': '-1000px'}, 2000);
		main_menu.first_start();
	});
	$('#button_next_level').on("click touchstart", function() {
		level++;
		$('#victory_title').hide();
		$('#lose_title').hide();
		$(this).hide();
		start_restart_level();
	});
	$('#button_restart_level').on("click touchstart", function() {
		$('#victory_title').hide();
		$('#lose_title').hide();
		$(this).hide();
		start_restart_level();
	});
	$('#button_open_menu').on("click touchstart", function (){
		main_menu.open();
	});
	/*
		Menu Buttons
	*/
	$('#main_menu_button_start').on("click touchstart", function() {
		start_restart_level();
		$(this).hide(1000);
		$('#main_menu_button_restart').show(1000);
		$('#main_menu_button_select_complexity').hide();
	});
	$('#main_menu_button_restart').on("click touchstart", function() {
		main_menu.restart();
	});
	$('#main_menu_button_continue_game').on("click touchstart", function() {
		main_menu.close();
	});
	$('#main_menu_button_select_complexity').on("click touchstart", function() {
		main_menu.open_complexity();
	});
	$('#main_menu_button_open_settings').on("click touchstart", function() {
		main_menu.open_settings();
	});
	$('#main_menu_button_close_settings').on("click touchstart", function() {
		main_menu.close_settings();
	});
	$('.sound_click, .main_menu_button, input').on("click touchstart", function (){
		make_sound.click();
	});
	/*
		Buttons sounds controls
	*/
	$('#sound_music, #sound_music_checkbox').on("click touchstart", function (){
		if (sound_music == "on"){
			$('#sound_music_on, #sound_music_off').toggle();
			$('#sound_music_checkbox').prop('checked', false);
			sound_music = "off";
		}
		else {
			$('#sound_music_on, #sound_music_off').toggle();
			$('#sound_music_checkbox').prop('checked', true);
			sound_music = "on";
		}
	});
	$('#sound_effects, #sound_effects_checkbox').on("click touchstart", function (){
		if (sound_effects == "on"){
			$('#sound_effects_on, #sound_effects_off').toggle();
			$('#sound_effects_checkbox').prop('checked', false);
			sound_effects = "off";
		}
		else {
			$('#sound_effects_on, #sound_effects_off').toggle();
			$('#sound_effects_checkbox').prop('checked', true);
			sound_effects = "on";
			make_sound.click();
		}
	});
	//CARD CLICK
	$('.card_logo').on("click touchstart", function() {
		if (cards_need_close.length<2) {
			make_sound.click();
			if (cards_need_close.length===1) {
				if ($(this).attr("value") != $("#"+cards_need_close[0]).attr("value")) {
					cards_need_close[1]=$(this).attr("id");
					$(this).hide();
					setTimeout(function() {	
						$('#'+cards_need_close[0]).show();
						$('#'+cards_need_close[1]).show();
						cards_need_close=[];
					}, 700);
				}
				else {
					make_sound.found_couple_of_cards();
					cards_need_open = cards_need_open-2;
					cards_need_close=[];
					$(this).hide();
				}
			}
			else {
				cards_need_close[0]=$(this).attr("id");
				$(this).hide();
			}
			check_moves_and_cards();
		}
	});
});