Ext.define('SampleWebApp.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'SampleWebApp.login.LoginWeb'
    ],

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'panel',
            title: 'Welcome',
            items: [
                {
                    xtype: 'app-login'
                }
            ]
        }
    ]
});
