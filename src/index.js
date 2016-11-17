var $round = $("#round");
var $lessPause = $("#lessPause");
var $morePause = $("#morePause");
var $lessWork = $("#lessWork");
var $moreWork = $("#moreWork");

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

$lessWork.click(function () {
    settings.decreaseWorkTime();
});

$morePause.click(function () {
    settings.increasePauseTime();
});

$moreWork.click(function () {
    settings.increaseWorkTime();
});

setInterval(function () {
    tomato.update(now());
    $round.find(".time").text(tomato.minutesLeft());
    $round.toggleClass("work", tomato.status() === "work");
    $round.toggleClass("pause", tomato.status() === "pause");
    $round.toggleClass("pulsating", tomato.started);
    $(".settings #work").text(settings.workTime());
    $(".settings #pause").text(settings.pauseTime());
}, 100);



