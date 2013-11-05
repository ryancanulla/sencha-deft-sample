Ext.define('SampleWebApp.login.LoginMobile', {
    extend: 'Ext.Container',
    xtype: 'app-login',
    requires: [
        'Ext.TitleBar',
        'Ext.Label'
    ],
    config: {
        layout: {
            type: 'vbox', align: 'center', pack: 'center'
        },

        defaults: {
            margin: 10
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Welcome'
            },
            {
                xtype: 'label',
                html: 'please login'
            },
            {
                xtype: 'textfield',
                label: 'User'
            },
            {
                xtype: 'textfield',
                label: 'Password',
                labelWidth: '35%'
            },
            {
                xtype: 'button',
                text: 'Login'
            }

        ]
    }
});
