Ext.define('SampleWebApp.Application', {
    name: 'SampleWebApp',

    requires: [
        'Ext.Viewport',
        'SampleWebApp.Viewport',
        'SampleCommonApp.service.LocalizeService',
        'SampleCommonApp.service.LoginService',
        'SampleCommonApp.model.UserModel'
    ],

    extend: 'Ext.app.Application',

    launch: function() {
        Deft.Injector.configure({
            version: 1.00,
            localize: {
                className: 'SampleCommonApp.service.LocalizeService',
                eager: true
            },
            loginService: 'SampleCommonApp.service.LoginService',
            userModel: 'SampleCommonApp.model.UserModel'
        });

        Deft.Injector.resolve('localize').on('loaded', function() {
            // Initialize the main view
            Ext.create('SampleWebApp.Viewport');
        }, this);
    }
});
