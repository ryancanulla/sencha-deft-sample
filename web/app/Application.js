Ext.define('SampleWebApp.Application', {
    name: 'SampleWebApp',

    requires: [ 'SampleWebApp.Viewport' ],

    extend: 'Ext.app.Application',

    launch: function() {
        Deft.Injector.configure({
            version: 1.00
        });

        Ext.create('SampleWebApp.Viewport');
    }
});
