
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
      