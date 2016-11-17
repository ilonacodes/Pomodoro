window.Tomato = (function () {
    "use strict";

    function Tomato(callback, settings) {
        this.callback = callback || function () {};
        this.settings = settings || new Settings();

        this.startTime = 0;
        this.currentTime = 0;
        this.started = false;
        this.currentStatus = "work";
    }

    Tomato.prototype.minutesLeft = function () {
        return this.minutesTotal() - this.minutesPassed();
    };

    Tomato.prototype.minutesTotal = function () {
        if (this.status() === "work") {
            return this.settings.workTime();
        }
        return this.settings.pauseTime();
    };

    Tomato.prototype.minutesPassed = function () {
        if (!this.started) return 0;
        return Math.floor((this.currentTime - this.startTime) / 60);
    };

    Tomato.prototype.start = function (time) {
        this.startTime = time;
        this.started = true;
    };

    Tomato.prototype.stop = function () {
        this.started = false;
    };

    Tomato.prototype.toggle = function (time) {
        if (this.started) this.stop();
        else this.start(time);
    };

    Tomato.prototype.update = function (time) {
        this.currentTime = time;

        if (this.minutesLeft() === 0) {
            this.stop();
            this.callback();
            this.currentStatus = this.nextStatus();
        }
    };

    Tomato.prototype.nextStatus = function () {
        if(this.status() === "work") {
            return "pause";
        } else {
            return "work";
        }
    };

    Tomato.prototype.status = function () {
        return this.currentStatus;
    };

    return Tomato;

})();
