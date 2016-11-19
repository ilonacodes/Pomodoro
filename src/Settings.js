window.Settings = (function () {
    "use strict";

    function Settings() {
        this.sessionTimeValue = 25;
        this.pauseTimeValue = 5;
    }

    Settings.prototype.sessionTime = function () {
        return this.sessionTimeValue;
    };

    Settings.prototype.pauseTime = function () {
        return this.pauseTimeValue;
    };

    Settings.prototype.increaseSessionTime = function () {
        this.sessionTimeValue++;
    };

    Settings.prototype.decreaseSessionTime = function () {
        this.sessionTimeValue--;
    };

    Settings.prototype.increasePauseTime = function () {
        this.pauseTimeValue++;
    };

    Settings.prototype.decreasePauseTime = function () {
        this.pauseTimeValue--;
    };

    return Settings;
})();