(function() {
    var app = {
        'routes': {
            'vj1': {
                'rendered': function() {
                    console.log('view currently showing is "vj1"');
                    app.preventScroll();
                }
            },

            'vj2': {
                'rendered': function() {
                    console.log('view currently showing is "vj2"');
                    app.preventScroll();
                }
            },

            'vj3': {
                'rendered': function() {
                    console.log('view currently showing is "vj3"');
                    app.preventScroll();
                }
            },
            'vj4': {
                'rendered': function() {
                    console.log('view currently showing is "vj4"');
                    app.preventScroll();
                }
            },

            'def-view': {
                'rendered': function() {
                    console.log('view currently showing is "def-view"');
                    app.preventScroll();
                }
            }
        },


        'default': 'def-view',
        'preventScroll': function() {
            document.querySelector('html').scrollTop = 0;
            document.querySelector('body').scrollTop = 0;
        },
        'routeChange': function() {
            app.routeID = location.hash.slice(1);
            app.route = app.routes[app.routeID];
            app.routeElem = document.getElementById(app.routeID);
            app.route.rendered();
        },
        'init': function() {
            window.addEventListener('hashchange', function() {
                app.routeChange();
            });
            if (!window.location.hash) {
                window.location.hash = app.default;
            } else {
                app.routeChange();
            }
        }
    };

    window.app = app;
})();

app.init();