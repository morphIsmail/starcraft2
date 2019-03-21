$(function () {
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
      $('div.ques').html('<h2>Я река…</h2><input checked type="radio" name="q2" value="protos">А я звёздный охотник<br><input type="radio" name="q2" value="primal">Враги плывущие обломки<br><input type="radio" name="q2" value="terran">Ты моё море<br>');
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
      $('div.ques').html('<h2>С кем вы поговорите на копье Адуна?</h2><input checked type="radio" name="q20" value="protos-1">С Абатуром (мастер эволюции)<br><input type="radio" name="q20" value="protos-1">Со Свонном (инженер)<br><input type="radio" name="q20" value="protos">С Караксом (фазовый кузнец)<br>');
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
      $('div.ques').html('<h2>Перед вами хорошо укреплённый терранский бункер</h2><input checked type="radio" name="q4" value="primal">Я ассимилирую эссенцию тиранозора, который обитает в этих местах и эволюционирую<br><input type="radio" name="q4" value="protos">Запрошу орбитальный удар если они первые проявят агрессию<br><input type="radio" name="q4" value="terran">Подойду поговорить с морпехами<br>');
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
      $('div.ques').html('<h2>Как насчёт свалить со мной, ковбой?</h2><input checked type="radio" name="q12" value="terran">Чёрт, давно пора<br><input type="radio" name="q12" value="terran">Чёрт, давно пора<br><input type="radio" name="q12" value="terran">Чёрт, давно пора<br>');
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
      $('div.ques').html('<h2>На вас напали</h2><input checked type="radio" name="q5" value="zerg">Нам нужны роевики, споровики и плёточники<br><input type="radio" name="q5" value="protos">Нужно вызвать кайдариновые монолиты и фотонные пушки<br><input type="radio" name="q5" value="terran">Возвести планетарную крепость, бункеры и подвести осадные танки<br>');
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
      $('div.ques').html('<h2>Королева приказывает вам обрушить свой гнев на миры доминиона</h2><input checked type="radio" name="q1" value="zerg">Должен подчиниться<br><input type="radio" name="q1" value="primal">Пока она собирает, я следую<br><input type="radio" name="q1" value="protos">Её псионная сила на меня не действует<br>');
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
      $('div.ques').html('<h2>Перед вами высший тамплиер</h2><input checked type="radio" name="q6" value="primal">Сильная эссенция, но я не могу её собрать<br><input type="radio" name="q6" value="zerg">Уничтожить протоссов<br><input type="radio" name="q6" value="protos">Стать архонтом<br><input type="radio" name="q6" value="terran">Спросить как дела у Артаниса<br>');
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
      $('div.ques').html('<h2>Вы заметили морпеха который не подчиняется вашему приказу</h2><input checked type="radio" name="q8" value="terran1">Уничтожить мимикрида<br><input type="radio" name="q8" value="terran-1">Сделать ему выговор<br>');
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
      $('div.ques').html('<h2>На вас движется стая саранчидов</h2><input checked type="radio" name="q10" value="primal">Много эссенции, можно собрать<br><input type="radio" name="q10" value="zerg">Приказать им лететь дальше<br><input type="radio" name="q10" value="protos">Попытаться уничтожить фениксами пока они в воздухе<br>');
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
      $('div.ques').html('<h2>Вы видите изначальный омут рождения, что вы сделаете?</h2><input checked type="radio" name="q3" value="primal">Соберу много эссенции<br><input type="radio" name="q3" value="zerg">Моё тело не выдержит такую мощь<br><input type="radio" name="q3" value="protos">Попытаюсь уничтожить это место<br>');
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
      $('div.ques').html('<h2>Вы сильно устали сегодня</h2><input checked type="radio" name="q11" value="terran">Пойду в бар у Джо Рея<br><input type="radio" name="q11" value="zerg">Рой не знает усталости<br><input type="radio" name="q11" value="taldarim">Слабые, падут первыми<br>');
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
      $('div.ques').html('<h2>Перед вами иерарх протоссов</h2><input checked type="radio" name="q19" value="taldarim">Вызвать на Рак-шир<br><input type="radio" name="q19" value="protos">Поприветствовать фразой «Эн Таро Тассадар»<br><input type="radio" name="q19" value="zerg">Отправить рой в атаку<br>');
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
      $('div.ques').html('<h2>Зератул и Воразун</h2><input checked type="radio" name="q23" value="protos-1">Связаны Кхалой<br><input type="radio" name="q23" value="protos-2">Муж и жена<br><input type="radio" name="q23" value="protos">Тёмные тамплиеры<br><input type="radio" name="q23" value="protos-3">Новый вид зергов<br>');
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
      $('div.ques').html('<h2>В этих местах много источников тирозина</h2><input checked type="radio" name="q13" value="taldarim">Защищать месторождения от инопланетных захватчиков<br><input type="radio" name="q13" value="terran">Добыть как можно больше, пока эти Талдаримские живчики не успели ничего понять<br>');
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
      $('div.ques').html('<h2>В лаборатории ставят опыты над бруталиском</h2><input checked type="radio" name="q7" value="zerg">Бруталиск – вершина эволюции, нужен рою<br><input type="radio" name="q7" value="terran">Поинтересоваться у парней что интересного они узнали<br><input type="radio" name="q7" value="protos">Бруталиск очень опасен лучше уничтожить его вместе с терранской лабораторией<br>');
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
      $('div.ques').html('<h2>Как зовут Свонна?</h2><input checked type="radio" name="q14" value="terran-1">Гэбриэль<br><input type="radio" name="q14" value="terran-1">Джеймс<br><input type="radio" name="q14" value="terran">Рори<br>');
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
      $('div.ques').html('<h2>Феникс - </h2><input checked type="radio" name="q24" value="protos-1">Тамплиер<br><input type="radio" name="q24" value="protos-1">Неразим<br><input type="radio" name="q24" value="protos">Чистильщик<br><input type="radio" name="q24" value="protos-1">Талдарим<br>');
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
      $('div.ques').html('<h2>Вам необходимо догнать материнский корабль протоссов</h2><input checked type="radio" name="q15" value="terran">Использую гиперпрыжок<br><input type="radio" name="q15" value="zerg">Перехвачу его, внедрив паразит<br><input type="radio" name="q15" value="protos">Отправлю челнок с посланием<br>');
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
      $('div.ques').html('<h2>Зерги заразили командные центры Вирофагами</h2><input checked type="radio" name="q16" value="protos">Нужно уничтожить всех, чтобы эпидемия не распространилась<br><input type="radio" name="q16" value="terran">Сжечь только зараженные строения и спасти как можно больше людей<br>');
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
      $('div.ques').html('<h2>Пустота…</h2><input checked type="radio" name="q18" value="protos-1">Лучший друг человека<br><input type="radio" name="q18" value="protos">Холодна<br>');
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
      $('div.ques').html('<h2>Как вы поприветствуете Джеймса Рейнора</h2><input checked type="radio" name="q22" value="protos">Друг Рейнор<br><input type="radio" name="q22" value="terran">Привет, ковбой<br><input type="radio" name="q22" value="primal">Мне нужна твоя эссенция<br>');
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
      $('div.ques').html('<h2>Вы собрали много кредитов на продаже тирозина</h2><input checked type="radio" name="q17" value="terran">Нанять лучших головорезов доминиона<br><input type="radio" name="q17" value="terran2">Усовершенствовать технологии<br><input type="radio" name="q17" value="terran-1">Отправить их в фонд Мёбиуса для изучения гибридов<br>');
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
      $('div.ques').html('<h2>Амун собирается уничтожить Айур</h2><input checked type="radio" name="q21" value="zerg">Помочь протоссам, а потом перебить тех, кто остался<br><input type="radio" name="q21" value="protos">Попытаться отправить Амуна в стазис<br><input type="radio" name="q21" value="protos">Послать челноки на Шакурас и запросить помощь Золотой Армады<br><input type="radio" name="q21" value="taldarim">Вызвать Флот Смерти и дать Амуну бой<br>');
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
      $('div.ques').html('<h2>Зачем вы прилетели на Чар?</h2><input checked type="radio" name="q9" value="protos">Выследить и убить королеву клинков<br><input type="radio" name="q9" value="terran">Найти Керриган и убедить вернуться на Мар-Сару<br><input type="radio" name="q9" value="zerg">Искупаться в слизи<br>');
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
         })
         //Изначальный
      } else if (primal > protos && primal > terran && primal >= 7) {
         $('.results .primal').css({
            'display': 'flex'
         })
         //Протосс
      } else if (protos > zerg && protos > terran && taldarim < 4 && Math.abs(protos - zerg) > 3) {
         $('.results .protos').css({
            'display': 'flex'
         })
         //Талдарим
      } else if (protos > zerg && protos > terran && taldarim >= 4) {
         $('.results .taldarim').css({
            'display': 'flex'
         })
         //Терран
      } else if (terran > zerg && terran > protos) {
         $('.results .terran').css({
            'display': 'flex'
         })
         //Гибрид
      } else if (Math.abs(protos - zerg) <= 3) {
         $('.results .hybrid').css({
            'display': 'flex'
         })
         //Заражённый терран
      } else {
         $('.results .infested_terran').css({
            'display': 'flex'
         })
      }
   }

   $('button').click(function () {
      switch ($('button').attr('q')) {
         case '1':
            q1();
            break;
         case '2':
            q2();
            break;
         case '3':
            q3();
            break;
         case '4':
            q4();
            break;
         case '5':
            q5();
            break;
         case '6':
            q6();
            break;
         case '7':
            q7();
            break;
         case '8':
            q8();
            break;
         case '9':
            q9();
            break;
         case '10':
            q10();
            break;
         case '11':
            q11();
            break;
         case '12':
            q12();
            break;
         case '13':
            q13();
            break;
         case '14':
            q14();
            break;
         case '15':
            q15();
            break;
         case '16':
            q16();
            break;
         case '17':
            q17();
            break;
         case '18':
            q18();
            break;
         case '19':
            q19();
            break;
         case '20':
            q20();
            break;
         case '21':
            q21();
            break;
         case '22':
            q22();
            break;
         case '23':
            q23();
            break;
         case '24':
            q24();
            $(this).text('Результат');
            break;
         case '25':
            q25();
            break;
      }
      console.log('Зерг: ' + zerg + '\nИзначальный: ' + primal + '\nПротосс: ' + protos + '\nТалдарим: ' + taldarim + '\nТерран: ' + terran);
   })
})