Ext.define('SampleWebApp.Application', {
    name: 'SampleWebApp',

    requires: [
        'Ext.Viewport',
        'SampleWebApp.Viewport'
    ],

    extend: 'Ext.app.Application',

    launch: function() {
        Deft.Injector.configure({
            version: 1.00,
            localize: {
                className: 'SampleCommonApp.LocalizeService',
                eager: true
            }
        });

        Deft.Injector.resolve('localize').on('loaded', function() {
            // Initialize the main view
            Ext.create('SampleWebApp.Viewport');
        }, this);
    }
});
