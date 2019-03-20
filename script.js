$(function () {
   var zerg = 0,
      primal = 0,
      protos = 0,
      taldarim = 0,
      terran = 0;

   $('button').click(function () {
      /*Вопрос 1*/
      q1 = $('input[name="q1"]:checked').val();
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
      /*Вопрос 2*/
      q2 = $('input[name="q2"]:checked').val();
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
      /*Вопрос 3*/
      q3 = $('input[name="q3"]:checked').val();
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
      /*Вопрос 4*/
      q4 = $('input[name="q4"]:checked').val();
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
      /*Вопрос 5*/
      q5 = $('input[name="q5"]:checked').val();
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
      /*Вопрос 6*/
      q6 = $('input[name="q6"]:checked').val();
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
      /*Вопрос 7*/
      q7 = $('input[name="q7"]:checked').val();
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
      /*Вопрос 8*/
      q8 = $('input[name="q8"]:checked').val();
      switch (q8) {
         case 'terran1':
            terran++;
            break;
         case 'terran-1':
            terran--;
            break;
      }
      /*Вопрос 9*/
      q9 = $('input[name="q9"]:checked').val();
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
      /*Вопрос 10*/
      q10 = $('input[name="q10"]:checked').val();
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
      /*Вопрос 11*/
      q11 = $('input[name="q11"]:checked').val();
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
      /*Вопрос 12*/
      q12 = $('input[name="q12"]:checked').val();
      switch (q12) {
         case 'terran':
            terran++;
            break;
      }
      /*Вопрос 13*/
      q13 = $('input[name="q13"]:checked').val();
      switch (q13) {
         case 'taldarim':
            taldarim++;
            terran--;
            break;
         case 'terran':
            terran++;
            break;
      }
      /*Вопрос 14*/
      q14 = $('input[name="q14"]:checked').val();
      switch (q14) {
         case 'terran-1':
            terran--;
            break;
         case 'terran':
            terran++;
            break;
      }
      /*Вопрос 15*/
      q15 = $('input[name="q15"]:checked').val();
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
      /*Вопрос 16*/
      q16 = $('input[name="q16"]:checked').val();
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
      /*Вопрос 17*/
      q17 = $('input[name="q17"]:checked').val();
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
      /*Вопрос 18*/
      q18 = $('input[name="q18"]:checked').val();
      switch (q18) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos--;
            break;
      }
      /*Вопрос 19*/
      q19 = $('input[name="q19"]:checked').val();
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
      /*Вопрос 20*/
      q20 = $('input[name="q20"]:checked').val();
      switch (q20) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos--;
            break;
      }
      /*Вопрос 21*/
      q21 = $('input[name="q21"]:checked').val();
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
      /*Вопрос 22*/
      q22 = $('input[name="q22"]:checked').val();
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
      /*Вопрос 23*/
      q23 = $('input[name="q23"]:checked').val();
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
      /*Вопрос 24*/
      q24 = $('input[name="q24"]:checked').val();
      switch (q24) {
         case 'protos':
            protos++;
            break;
         case 'protos-1':
            protos--;
            break;
      }
      /*Вопрос 25*/
      q25 = $('input[name="q25"]:checked').val();
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

      /*Результаты опроса*/
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

      /*Вывод в консоль для отладки */
      console.log('Зерг: ' + zerg + '\nИзначальный зерг: ' + primal + '\nПротос: ' + protos + '\nТалдарим: ' + taldarim + '\nТерран: ' + terran);
   })
})