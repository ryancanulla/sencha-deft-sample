Ext.define('SampleWebApp.login.LoginMobile', {
    extend: 'Ext.Container',
    xtype: 'app-login',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'SampleCommonApp.LocalizeService'
    ],
    inject: [ 'localize'],

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
                label: this.localize.map('login.username'),
                labelWidth: '35%'
            },
            {
                xtype: 'textfield',
                label: this.localize.map('login.password'),
                labelWidth: '35%'
            },
            {
                xtype: 'button',
                text: this.localize.map('login.buttonLabel')
            }
        ]);

        this.callParent();
    }
});
