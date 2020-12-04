// ==UserScript==
// @name         Quizlet bot
// @namespace    https://pandapip1.tk/
// @version      0.1.4
// @description  A bot for Quizlet Live
// @author       Pandapip1
// @match        https://quizlet.com/live
// @downloadUrl  https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @updateUrl    https://pandapip1.github.io/quizlet-bot/quizlet-bot.user.js
// @grant        none
// ==/UserScript==
(() => {
    var qb_userTriggered = false;
    var qb_script_bot = document.createElement('script');
    qb_script_bot.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    $("button").click(() => {
        if (!qb_userTriggered){
            qb_userTriggered = true;
            setTimeout(() => {
                document.head.appendChild(qb_script_bot);
            }, 1000); // give it time to load
        }
    });
})();
