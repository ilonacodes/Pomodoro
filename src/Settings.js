window.Settings = (function () {
    "use strict";

    function Settings() {
        this.workTimeValue = 25;
        this.pauseTimeValue = 5;
    }

    Settings.prototype.workTime = function () {
        return this.workTimeValue;
    };

    Settings.prototype.pauseTime = function () {
        return this.pauseTimeValue;
    };

    Settings.prototype.increaseWorkTime = function () {
        this.workTimeValue++;
    };

    Settings.prototype.decreaseWorkTime = function () {
        this.workTimeValue--;
    };

    Settings.prototype.increasePauseTime = function () {
        this.pauseTimeValue++;
    };

    Settings.prototype.decreasePauseTime = function () {
        this.pauseTimeValue--;
    };

    return Settings;
})();