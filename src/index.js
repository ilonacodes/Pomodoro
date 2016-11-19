var $round = $("#round");
var $lessPause = $("#lessPause");
var $morePause = $("#morePause");
var $lessSession = $("#lessSession");
var $moreSession = $("#moreSession");

function onStatusChange() {
    alert("It's time for a " + tomato.status() + "!");
}

var settings = new Settings();
var tomato = new Tomato(onStatusChange, settings);

function now() {
    return new Date().getTime() / 1000;
}

$round.click(function () {
    tomato.toggle(now());
});

$lessPause.click(function () {
    settings.decreasePauseTime();
});

$lessSession.click(function () {
    settings.decreaseSessionTime();
});

$morePause.click(function () {
    settings.increasePauseTime();
});

$moreSession.click(function () {
    settings.increaseSessionTime();
});

setInterval(function () {
    tomato.update(now());
    $round.find(".time").text(tomato.minutesLeft());
    $round.toggleClass("session", tomato.status() === "session");
    $round.toggleClass("pause", tomato.status() === "pause");
    $round.toggleClass("pulsating", tomato.started);
    $(".settings #session").text(settings.sessionTime());
    $(".settings #pause").text(settings.pauseTime());
}, 100);
