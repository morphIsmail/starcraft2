$(function () {
   $('p.error').hide();
   var zerg = 0,
      primal = 0,
      protos = 0,
      taldarim = 0,
      terran = 0;

   function q1() {
      $('button[q="1"]').attr('q', '2');
      /*Вопрос 25*/
      var q25 = $('input[name="q25"]:checked').val();
      switch (q25) {
         case 'protos':
            protos++;
            break;
         case 'taldarim':
            taldarim++;
            break;
         case 'terran':
            terran++;
            break;
         case 'zerg':
            zerg++;
            break;
         case 'primal':
            primal++;
            break;
      }
      $('div.ques').html('<h2>Я река…</h2><input type="radio" name="q2" id="ans1" value="protos"><label for="ans1">А я звёздный охотник</label><br><input type="radio" name="q2" id="ans2" value="primal"><label for="ans2">Враги плывущие обломки</label><br><input type="radio" name="q2" id="ans3" value="terran"><label for="ans3">Ты моё море</label><br>');
   }

   function q2() {
      $('button[q="2"]').attr('q', '3');
      /*Вопрос 2*/
      var q2 = $('input[name="q2"]:checked').val();
      switch (q2) {
         case 'terran':
            terran++;
            protos--;
            break;
         case 'primal':
            primal++;
            protos--;
            terran--;
            break;
         case 'protos':
            protos++;
            terran--;
            break;
      }
      $('div.ques').html('<h2>С кем вы поговорите на копье Адуна?</h2><input type="radio" name="q20" id="ans1" value="protos-1"><label for="ans1">С Абатуром (мастер эволюции)</label><br><input type="radio" name="q20" id="ans2" value="protos-1"><label for="ans2">Со Свонном (инженер)</label><br><input type="radio" name="q20" id="ans3" value="protos"><label for="ans3">С Караксом (фазовый кузнец)</lable><br>');
   }

   function q3() {
      $('button[q="3"]').attr('q', '4');
      /*Вопрос 20*/
      var q20 = $('input[name="q20"]:checked').val();
      switch (q20) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos--;
            break;
      }
      $('div.ques').html('<h2>Перед вами хорошо укреплённый терранский бункер</h2><input type="radio" name="q4" id="ans1" value="primal"><label for="ans1">Я ассимилирую эссенцию тиранозора, который обитает в этих местах и эволюционирую</label><br><input type="radio" name="q4" id="ans2" value="protos"><label for="ans2">Запрошу орбитальный удар если они первые проявят агрессию</label><br><input type="radio" name="q4" id="ans3" value="terran"><label for="ans3">Подойду поговорить с морпехами</label><br>');
   }

   function q4() {
      $('button[q="4"]').attr('q', '5');
      /*Вопрос 4*/
      var q4 = $('input[name="q4"]:checked').val();
      switch (q4) {
         case 'primal':
            primal++;
            protos--;
            terran--;
            break;
         case 'protos':
            protos++;
            terran--;
            break;
         case 'terran':
            terran++;
            protos--;
            break;
      }
      $('div.ques').html('<h2>Как насчёт свалить со мной, ковбой?</h2><input type="radio" name="q12" id="ans1" value="terran"><label for="ans1">Чёрт, давно пора</label><br><input type="radio" name="q12" id="ans2" value="terran"><label for="ans2">Чёрт, давно пора</label><br><input type="radio" name="q12" id="ans3" value="terran"><label for="ans3">Чёрт, давно пора</label><br>');
   }

   function q5() {
      $('button[q="5"]').attr('q', '6');
      /*Вопрос 12*/
      var q12 = $('input[name="q12"]:checked').val();
      switch (q12) {
         case 'terran':
            terran++;
            break;
      }
      $('div.ques').html('<h2>На вас напали</h2><input type="radio" name="q5" id="ans1" value="zerg"><label for="ans1">Нам нужны роевики, споровики и плёточники</label><br><input type="radio" name="q5" id="ans2" value="protos"><label for="ans2">Нужно вызвать кайдариновые монолиты и фотонные пушки</label><br><input type="radio" name="q5" id="ans3" value="terran"><label for="ans3">Возвести планетарную крепость, бункеры и подвести осадные танки</label><br>');
   }

   function q6() {
      $('button[q="6"]').attr('q', '7');
      /*Вопрос 5*/
      var q5 = $('input[name="q5"]:checked').val();
      switch (q5) {
         case 'zerg':
            zerg += 2;
            protos--;
            terran--;
            break;
         case 'protos':
            protos++;
            terran--;
            zerg -= 2;
            break;
         case 'terran':
            terran++;
            protos--;
            zerg -= 2;
            break;
      }
      $('div.ques').html('<h2>Королева приказывает вам обрушить свой гнев на миры доминиона</h2><input type="radio" name="q1" id="ans1" value="zerg"><label for="ans1">Должен подчиниться</label><br><input type="radio" name="q1" id="ans2" value="primal"><label for="ans2">Пока она собирает, я следую</label><br><input type="radio" name="q1" id="ans3" value="protos"><label for="ans3">Её псионная сила на меня не действует</label><br>');
   }

   function q7() {
      $('button[q="7"]').attr('q', '8');
      /*Вопрос 1*/
      var q1 = $('input[name="q1"]:checked').val();
      switch (q1) {
         case 'zerg':
            zerg++;
            protos--;
            break;
         case 'primal':
            primal++;
            protos--;
            break;
         case 'protos':
            protos++;
            zerg--;
            break;
      }
      $('div.ques').html('<h2>Перед вами высший тамплиер</h2><input type="radio" name="q6" id="ans1" value="primal"><label for="ans1">Сильная эссенция, но я не могу её собрать</label><br><input type="radio" name="q6" id="ans2" value="zerg"><label for="ans2">Уничтожить протоссов</label><br><input type="radio" name="q6" id="ans3" value="protos"><label for="ans3">Стать архонтом</label><br><input type="radio" name="q6" id="ans4" value="terran"><label for="ans4">Спросить как дела у Артаниса</label><br>');
   }

   function q8() {
      $('button[q="8"]').attr('q', '9');
      /*Вопрос 6*/
      var q6 = $('input[name="q6"]:checked').val();
      switch (q6) {
         case 'primal':
            primal++;
            protos--;
            terran--;
            break;
         case 'zerg':
            zerg++;
            protos--;
            terran--;
            break;
         case 'protos':
            protos++;
            terran--;
            zerg--;
            break;
         case 'terran':
            terran++;
            protos--;
            zerg--;
            break;
      }
      $('div.ques').html('<h2>Вы заметили морпеха который не подчиняется вашему приказу</h2><input type="radio" name="q8" id="ans1" value="terran1"><label for="ans1">Уничтожить мимикрида</label><br><input type="radio" name="q8" id="ans2" value="terran-1"><label for="ans2">Сделать ему выговор</label><br>');
   }

   function q9() {
      $('button[q="9"]').attr('q', '10');
      /*Вопрос 8*/
      var q8 = $('input[name="q8"]:checked').val();
      switch (q8) {
         case 'terran1':
            terran++;
            break;
         case 'terran-1':
            terran--;
            break;
      }
      $('div.ques').html('<h2>На вас движется стая саранчидов</h2><input type="radio" name="q10" id="ans1" value="primal"><label for="ans1">Много эссенции, можно собрать</label><br><input type="radio" name="q10" id="ans2" value="zerg"><label for="ans2">Приказать им лететь дальше</label><br><input type="radio" name="q10" id="ans3" value="protos"><label for="ans3">Попытаться уничтожить фениксами пока они в воздухе</label><br>');
   }

   function q10() {
      $('button[q="10"]').attr('q', '11');
      /*Вопрос 10*/
      var q10 = $('input[name="q10"]:checked').val();
      switch (q10) {
         case 'zerg':
            zerg++;
            protos--;
            break;
         case 'protos':
            protos++;
            zerg--;
            break;
         case 'primal':
            primal++;
            protos--;
            break;
      }
      $('div.ques').html('<h2>Вы видите изначальный омут рождения, что вы сделаете?</h2><input type="radio" name="q3" id="ans1" value="primal"><label for="ans1">Соберу много эссенции</label><br><input type="radio" name="q3" id="ans2" value="zerg"><label for="ans2">Моё тело не выдержит такую мощь</label><br><input type="radio" name="q3" id="ans3" value="protos"><label for="ans3">Попытаюсь уничтожить это место</label><br>');
   }

   function q11() {
      $('button[q="11"]').attr('q', '12');
      /*Вопрос 3*/
      var q3 = $('input[name="q3"]:checked').val();
      switch (q3) {
         case 'zerg':
            zerg++;
            protos--;
            break;
         case 'primal':
            primal++;
            protos--;
            break;
         case 'protos':
            protos++;
            zerg--;
            break;
      }
      $('div.ques').html('<h2>Вы сильно устали сегодня</h2><input type="radio" name="q11" id="ans1" value="terran"><label for="ans1">Пойду в бар у Джо Рея</label><br><input type="radio" name="q11" id="ans2" value="zerg"><label for="ans2">Рой не знает усталости</label><br><input type="radio" name="q11" id="ans3" value="taldarim"><label for="ans3">Слабые, падут первыми</label><br>');
   }

   function q12() {
      $('button[q="12"]').attr('q', '13');
      /*Вопрос 11*/
      var q11 = $('input[name="q11"]:checked').val();
      switch (q11) {
         case 'zerg':
            zerg++;
            terran--;
            break;
         case 'terran':
            terran++;
            zerg--;
            break;
         case 'taldarim':
            taldarim++;
            terran--;
            zerg--;
            break;
      }
      $('div.ques').html('<h2>Перед вами иерарх протоссов</h2><input type="radio" name="q19" id="ans1" value="taldarim"><label for="ans1">Вызвать на Рак-шир</label><br><input type="radio" name="q19" id="ans2" value="protos"><label for="ans2">Поприветствовать фразой «Эн Таро Тассадар»</label><br><input type="radio" name="q19" id="ans3" value="zerg"><label for="ans3">Отправить рой в атаку</label><br>');
   }

   function q13() {
      $('button[q="13"]').attr('q', '14');
      /*Вопрос 19*/
      var q19 = $('input[name="q19"]:checked').val();
      switch (q19) {
         case 'taldarim':
            taldarim++;
            zerg--;
            break;
         case 'protos':
            protos++;
            zerg--;
            break;
         case 'zerg':
            zerg++;
            protos--;
            break;
      }
      $('div.ques').html('<h2>Зератул и Воразун</h2><input type="radio" name="q23" id="ans1" value="protos-1"><label for="ans1">Связаны Кхалой</label><br><input type="radio" name="q23" id="ans2" value="protos-2"><label for="ans2">Муж и жена</label><br><input type="radio" name="q23" id="ans3" value="protos"><label for="ans3">Тёмные тамплиеры</label><br><input type="radio" name="q23" id="ans4" value="protos-3"><label for="ans4">Новый вид зергов</label><br>');
   }

   function q14() {
      $('button[q="14"]').attr('q', '15');
      /*Вопрос 23*/
      var q23 = $('input[name="q23"]:checked').val();
      switch (q23) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos -= 1;
            break;
         case 'protos-2':
            protos -= 2;
            break;
         case 'protos-3':
            protos -= 3;
            break;
      }
      $('div.ques').html('<h2>В этих местах много источников тирозина</h2><input type="radio" name="q13" id="ans1" value="taldarim"><label for="ans1">Защищать месторождения от инопланетных захватчиков</label><br><input type="radio" name="q13" id="ans2" value="terran"><label for="ans2">Добыть как можно больше, пока эти Талдаримские живчики не успели ничего понять</label><br>');
   }

   function q15() {
      $('button[q="15"]').attr('q', '16');
      /*Вопрос 13*/
      var q13 = $('input[name="q13"]:checked').val();
      switch (q13) {
         case 'taldarim':
            taldarim++;
            terran--;
            break;
         case 'terran':
            terran++;
            break;
      }
      $('div.ques').html('<h2>В лаборатории ставят опыты над бруталиском</h2><input type="radio" name="q7" id="ans1" value="zerg"><label for="ans1">Бруталиск – вершина эволюции, нужен рою</label><br><input type="radio" name="q7" id="ans2" value="terran"><label for="ans2">Поинтересоваться у парней что интересного они узнали</label><br><input type="radio" name="q7" id="ans3" value="protos"><label for="ans3">Бруталиск очень опасен лучше уничтожить его вместе с терранской лабораторией</label><br>');
   }

   function q16() {
      $('button[q="16"]').attr('q', '17');
      /*Вопрос 7*/
      var q7 = $('input[name="q7"]:checked').val();
      switch (q7) {
         case 'zerg':
            zerg++;
            protos--;
            terran--;
            break;
         case 'protos':
            protos++;
            terran--;
            zerg--;
            break;
         case 'terran':
            terran++;
            protos--;
            zerg--;
            break;
      }
      $('div.ques').html('<h2>Как зовут Свонна?</h2><input type="radio" name="q14" id="ans1" value="terran-1"><label for="ans1">Гэбриэль</label><br><input type="radio" name="q14" id="ans2" value="terran-1"><label for="ans2">Джеймс</label><br><input type="radio" name="q14" id="ans3" value="terran"><label for="ans3">Рори</label><br>');
   }

   function q17() {
      $('button[q="17"]').attr('q', '18');
      /*Вопрос 14*/
      var q14 = $('input[name="q14"]:checked').val();
      switch (q14) {
         case 'terran-1':
            terran--;
            break;
         case 'terran':
            terran++;
            break;
      }
      $('div.ques').html('<h2>Феникс - </h2><input type="radio" name="q24" id="ans1" value="protos-1"><label for="ans1">Тамплиер</label><br><input type="radio" name="q24" id="ans2" value="protos-1"><label for="ans2">Неразим</label><br><input type="radio" name="q24" id="ans3" value="protos"><label for="ans3">Чистильщик</label><br><input type="radio" name="q24" id="ans4" value="protos-1"><label for="ans4">Талдарим</label><br>');
   }

   function q18() {
      $('button[q="18"]').attr('q', '19');
      /*Вопрос 24*/
      var q24 = $('input[name="q24"]:checked').val();
      switch (q24) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos--;
            break;
      }
      $('div.ques').html('<h2>Вам необходимо догнать материнский корабль протоссов</h2><input type="radio" name="q15" id="ans1" value="terran"><label for="ans1">Использую гиперпрыжок</label><br><input type="radio" name="q15" id="ans2" value="zerg"><label for="ans2">Перехвачу его, внедрив паразит</label><br><input type="radio" name="q15" id="ans3" value="protos"><label for="ans3">Отправлю челнок с посланием</label><br>');
   }

   function q19() {
      $('button[q="19"]').attr('q', '20');
      /*Вопрос 15*/
      var q15 = $('input[name="q15"]:checked').val();
      switch (q15) {
         case 'zerg':
            zerg++;
            protos--;
            terran--;
            break;
         case 'terran':
            terran++;
            zerg--;
            protos--;
            break;
         case 'protos':
            protos++;
            terran--;
            zerg--;
            break;
      }
      $('div.ques').html('<h2>Зерги заразили командные центры Вирофагами</h2><input type="radio" name="q16" id="ans1" value="protos"><label for="ans1">Нужно уничтожить всех, чтобы эпидемия не распространилась</label><br><input type="radio" name="q16" id="ans2" value="terran"><label for="ans2">Сжечь только зараженные строения и спасти как можно больше людей</label><br>');
   }

   function q20() {
      $('button[q="20"]').attr('q', '21');
      /*Вопрос 16*/
      var q16 = $('input[name="q16"]:checked').val();
      switch (q16) {
         case 'terran':
            terran++;
            protos--;
            break;
         case 'protos':
            protos++;
            terran--;
            break;
      }
      $('div.ques').html('<h2>Пустота…</h2><input type="radio" name="q18" id="ans1" value="protos-1"><label for="ans1">Лучший друг человека</label><br><input type="radio" name="q18" id="ans2" value="protos"><label for="ans2">Холодна</label><br>');
   }

   function q21() {
      $('button[q="21"]').attr('q', '22');
      /*Вопрос 18*/
      var q18 = $('input[name="q18"]:checked').val();
      switch (q18) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos--;
            break;
      }
      $('div.ques').html('<h2>Как вы поприветствуете Джеймса Рейнора</h2><input type="radio" name="q22" id="ans1" value="protos"><label for="ans1">Друг Рейнор</label><br><input type="radio" name="q22" id="ans2" value="terran"><label for="ans2">Привет, ковбой</label><br><input type="radio" name="q22" id="ans3" value="primal"><label for="ans3">Мне нужна твоя эссенция</label><br>');
   }

   function q22() {
      $('button[q="22"]').attr('q', '23');
      /*Вопрос 22*/
      var q22 = $('input[name="q22"]:checked').val();
      switch (q22) {
         case 'protos':
            protos++;
            terran--;
            break;
         case 'primal':
            primal++;
            protos--;
            terran--;
            break;
         case 'terran':
            terran++;
            protos--;
            break;
      }
      $('div.ques').html('<h2>Вы собрали много кредитов на продаже тирозина</h2><input type="radio" name="q17" id="ans1" value="terran"><label for="ans1">Нанять лучших головорезов доминиона</label><br><input type="radio" name="q17" id="ans2" value="terran2"><label for="ans2">Усовершенствовать технологии</label><br><input type="radio" name="q17" id="ans3" value="terran-1"><label for="ans3">Отправить их в фонд Мёбиуса для изучения гибридов</label><br>');
   }

   function q23() {
      $('button[q="23"]').attr('q', '24');
      /*Вопрос 17*/
      var q17 = $('input[name="q17"]:checked').val();
      switch (q17) {
         case 'terran':
            terran++;
            break;
         case 'terran2':
            terran += 2;
            break;
         case 'terran-1':
            terran--;
            break;
      }
      $('div.ques').html('<h2>Амун собирается уничтожить Айур</h2><input type="radio" name="q21" id="ans1" value="zerg"><label for="ans1">Помочь протоссам</label><br><input type="radio" name="q21" id="ans2" value="protos"><label for="ans2">Попытаться отправить Амуна в стазис</label><br><input type="radio" name="q21" id="ans3" value="protos"><label for="ans3">Послать челноки на Шакурас и запросить помощь Золотой Армады</label><br><input type="radio" name="q21" id="ans4" value="taldarim"><label for="ans4">Вызвать Флот Смерти и дать Амуну бой</label><br>');
   }

   function q24() {
      $('button[q="24"]').attr('q', '25');
      /*Вопрос 21*/
      var q21 = $('input[name="q21"]:checked').val();
      switch (q21) {
         case 'protos':
            protos++;
            zerg--;
            break;
         case 'taldarim':
            taldarim++;
            zerg--;
            break;
         case 'zerg':
            zerg++;
            protos--;
            break;
      }
      $('div.ques').html('<h2>Зачем вы прилетели на Чар?</h2><input type="radio" name="q9" id="ans1" value="protos"><label for="ans1">Выследить и убить королеву клинков</label><br><input type="radio" name="q9" id="ans2" value="terran"><label for="ans2">Найти Керриган и убедить вернуться на Мар-Сару</label><br><input type="radio" name="q9" id="ans3" value="zerg"><label for="ans3">Искупаться в слизи</label><br>');
   }

   function q25() {
      $('button[q="25"]').attr('q', '25');
      /*Вопрос 9*/
      var q9 = $('input[name="q9"]:checked').val();
      switch (q9) {
         case 'zerg':
            zerg += 2;
            protos--;
            terran--;
            break;
         case 'protos':
            protos++;
            terran--;
            zerg -= 2;
            break;
         case 'terran':
            terran++;
            protos--;
            zerg -= 2;
            break;
      }
      $('div.questions').html('');
      $('div.button').html('');
      //Зерг
      if (zerg > protos && zerg > terran && primal < 7 && Math.abs(protos - zerg) > 3) {
         $('.results .zerg').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/zerg_bg.jpg)'
         })
         //Изначальный
      } else if (primal > protos && primal > terran && primal >= 7) {
         $('.results .primal').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/primal_bg.jpg)'
         })
         //Протосс
      } else if (protos > zerg && protos > terran && taldarim < 4 && Math.abs(protos - zerg) > 3) {
         $('.results .protos').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/protos_bg.jpg)'
         })
         //Талдарим
      } else if (protos > zerg && protos > terran && taldarim >= 4) {
         $('.results .taldarim').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/taldarim_bg.jpg)'
         })
         //Терран
      } else if (terran > zerg && terran > protos) {
         $('.results .terran').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/terran_bg.jpg)'
         })
         //Гибрид
      } else if (Math.abs(protos - zerg) <= 3) {
         $('.results .hybrid').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/hybrid_bg.jpg)'
         })
         //Заражённый терран
      } else {
         $('.results .infested_terran').css({
            'display': 'flex'
         });
         $('.wrap').css({
            'background-image': 'url(img/infested_bg.jpg)'
         })
      }
   }

   $('button').click(function () {
      switch ($('button').attr('q')) {
         case '1':
            if ($('input:checked').val()) {
               q1();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '2':
            if ($('input:checked').val()) {
               q2();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '3':
            if ($('input:checked').val()) {
               q3();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '4':
            if ($('input:checked').val()) {
               q4();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '5':
            if ($('input:checked').val()) {
               q5();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '6':
            if ($('input:checked').val()) {
               q6();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '7':
            if ($('input:checked').val()) {
               q7();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '8':
            if ($('input:checked').val()) {
               q8();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '9':
            if ($('input:checked').val()) {
               q9();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '10':
            if ($('input:checked').val()) {
               q10();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '11':
            if ($('input:checked').val()) {
               q11();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '12':
            if ($('input:checked').val()) {
               q12();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '13':
            if ($('input:checked').val()) {
               q13();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '14':
            if ($('input:checked').val()) {
               q14();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '15':
            if ($('input:checked').val()) {
               q15();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '16':
            if ($('input:checked').val()) {
               q16();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '17':
            if ($('input:checked').val()) {
               q17();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '18':
            if ($('input:checked').val()) {
               q18();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '19':
            if ($('input:checked').val()) {
               q19();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '20':
            if ($('input:checked').val()) {
               q20();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '21':
            if ($('input:checked').val()) {
               q21();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '22':
            if ($('input:checked').val()) {
               q22();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '23':
            if ($('input:checked').val()) {
               q23();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '24':
            if ($('input:checked').val()) {
               q24();
               $(this).text('Результат');
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
         case '25':
            if ($('input:checked').val()) {
               q25();
               break;
            } else {
               $('.button button').slideUp(100).delay(1300).slideDown(200);
               $('p.error').slideDown(100).delay(1300).slideUp(200);
               break;
            }
      }
      //console.log('Зерг: ' + zerg + '\nИзначальный: ' + primal + '\nПротосс: ' + protos + '\nТалдарим: ' + taldarim + '\nТерран: ' + terran);
   })
})