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
                template: '<h1>main</h1>main header<div ui-view=navigation></div><div ui-view=content></div>main footer'
            })
            .state('main.homepage', {
                url: '/',
                views: {
                    'navigation': {
                        template: '<h1>navigation</h1>'
                    },
                    'content': {
                        template: '<h1>content</h1>'
                    }
                }
            })
        ;

    })
;


