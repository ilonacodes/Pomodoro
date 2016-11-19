(function () {
    "use strict";

    describe("Tomato", function () {
        it("initially is set to 25", function () {
            var tomato = new Tomato();
            expect(tomato.minutesLeft()).toEqual(25);
            expect(tomato.status()).toEqual("session");
        });

        it("initially is set to 25 even after update", function () {
            var tomato = new Tomato();
            tomato.update(1000);
            expect(tomato.minutesLeft()).toEqual(25);
        });

        it("is set to 24 when one minute passed after being started", function () {
            var tomato = new Tomato();
            tomato.start(1000);
            tomato.update(1060);
            expect(tomato.minutesLeft()).toEqual(24);
        });

        it("is set to 25 when 30 seconds passed after being started", function () {
            var tomato = new Tomato();
            tomato.start(1000);
            tomato.update(1030);
            expect(tomato.minutesLeft()).toEqual(25);
        });

        it("is set to 25 when it is stopped", function () {
            var tomato = new Tomato();
            tomato.start(1000);
            tomato.update(1060);
            tomato.stop();
            expect(tomato.minutesLeft()).toEqual(25);
        });

        it("is started after toggled once", function () {
            var tomato = new Tomato();
            tomato.toggle(1000);
            tomato.update(1060);
            expect(tomato.minutesLeft()).toEqual(24);
        });

        it("is stopped after toggled twice", function () {
            var tomato = new Tomato();
            tomato.toggle(1000);
            tomato.update(1060);
            tomato.toggle(1120);
            expect(tomato.minutesLeft()).toEqual(25);
        });

        it("is stopped after 25 minutes and switches to pause", function () {
            var message = "";
            var tomato = new Tomato(function () {
                message = tomato.status() + " time!";
            });

            tomato.start(1000);

            tomato.update(2499);
            expect(tomato.minutesLeft()).toEqual(1);
            expect(message).toEqual("");

            tomato.update(2500);
            expect(tomato.minutesLeft()).toEqual(5);
            expect(message).toEqual("pause time!");
            expect(tomato.status()).toEqual("pause");
        });

        it("is stopped after 50 minutes and switches to pause", function () {
            var message = "";
            var tomato = new Tomato(function () {
                message = tomato.status() + " time!";
            });

            tomato.start(1000);

            tomato.update(4000);
            expect(tomato.minutesLeft()).toEqual(5);
            expect(message).toEqual("pause time!");
            expect(tomato.status()).toEqual("pause");
        });

        it("is stopped after 5 minutes in pause and switches to session", function () {
            var tomato = new Tomato();
            tomato.start(1000);
            tomato.update(2500);

            tomato.start(2600);
            tomato.update(2900);

            expect(tomato.status()).toEqual("session");
        });

        it("can have custom session time", function () {
            var settings = new Settings();
            var tomato = new Tomato(null, settings);
            settings.decreaseSessionTime();

            tomato.start(1000);
            tomato.update(2440);

            expect(tomato.status()).toEqual("pause");
        });

        it("can have custom pause time", function () {
            var settings = new Settings();
            var tomato = new Tomato(null, settings);
            settings.decreasePauseTime();
            tomato.start(1000);
            tomato.update(2500);

            tomato.start(2600);
            tomato.update(2840);

            expect(tomato.status()).toEqual("session");
        });
        
    });
})();
