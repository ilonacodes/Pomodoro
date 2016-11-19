(function () {
    "use strict";

    describe("Settings", function () {
        it("can be created with defaults", function () {
            var settings = new Settings();

            expect(settings.sessionTime()).toEqual(25);
            expect(settings.pauseTime()).toEqual(5);
        });

        it("increases session time", function () {
            var settings = new Settings();

            settings.increaseSessionTime();

            expect(settings.sessionTime()).toEqual(26);
        });

        it("decreases session time", function () {
            var settings = new Settings();

            settings.decreaseSessionTime();

            expect(settings.sessionTime()).toEqual(24);
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