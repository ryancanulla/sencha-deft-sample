Ext.define('SampleWebApp.login.LoginMobile', {
    extend: 'Ext.Container',
    xtype: 'app-login',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'SampleCommonApp.service.LocalizeService',
        'SampleWebApp.login.LoginMobileController'
    ],
    inject: [ 'localize'],
    controller: 'SampleWebApp.login.LoginMobileController',

    config: {
        layout: {
            type: 'vbox', align: 'center', pack: 'center'
        },

        defaults: {
            margin: 10
        }
    },

    initialize: function() {
        this.setItems([
            {
                docked: 'top',
                xtype: 'titlebar',
                title: this.localize.map('login.title')
            },
            {
                xtype: 'label',
                html: this.localize.map('login.formTitle')
            },
            {
                xtype: 'textfield',
                itemId: 'userField',
                label: this.localize.map('login.username'),
                labelWidth: '35%'
            },
            {
                xtype: 'textfield',
                itemId: 'passField',
                label: this.localize.map('login.password'),
                labelWidth: '35%'
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                text: this.localize.map('login.buttonLabel')
            }
        ]);

        this.callParent();
    }
});
