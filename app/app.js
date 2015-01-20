angular.module("app", [
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<h1>login</h1>'
            })
            .state('main', {
                template: '<h1>main</h1><div ui-view=header></div><div ui-view=body></div><div ui-view=footer></div>'
            })
            .state('main.homepage', {
                url: '/',
                views: {
                    'header': {
                        template: '<h2>header</h2>'
                    },
                    'body': {
                        template: '<h2>body</h2>'
                    },
                    'footer': {
                        template: '<h2>footer</h2>'
                    }
                }
            })
        ;

    })
;


