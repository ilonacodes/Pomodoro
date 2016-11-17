(function () {
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

    describe("Settings", function () {
        it("can be created with defaults", function () {
            var settings = new Settings();

            expect(settings.workTime()).toEqual(25);
            expect(settings.pauseTime()).toEqual(5);
        });

        it("increases work time", function () {
            var settings = new Settings();

            settings.increaseWorkTime();

            expect(settings.workTime()).toEqual(26);
        });

        it("decreases work time", function () {
            var settings = new Settings();

            settings.decreaseWorkTime();

            expect(settings.workTime()).toEqual(24);
        });

        it("increases pause time", function () {
            var settings = new Settings();

            settings.increasePauseTime();

            expect(settings.pauseTime()).toEqual(6);
        });

        it("decreases pause time", function () {
            var settings = new Settings();

            settings.decreasePauseTime();

            expect(settings.pauseTime()).toEqual(4);
        });
    });
})();