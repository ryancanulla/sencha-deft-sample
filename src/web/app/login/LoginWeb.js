Ext.define("SampleWebApp.login.LoginWeb", {
    extend: "Ext.container.Container",
    alias: 'widget.app-login',

    requires: [
        'SampleCommonApp.service.LocalizeService',
        'SampleWebApp.login.LoginWebController',
        'Ext.form.Label',
        'Ext.form.field.Text'
    ],

    inject: ['localize'],

    controller: 'SampleWebApp.login.LoginWebController',

    initComponent: function() {
        Ext.applyIf(this, {

            layout: {
                type: 'vbox', align: 'center', pack: 'center',
                defaultMargins: { bottom: 10 }
            },

            items: [
                {
                    xtype: 'label',
                    text: this.localize.map('login.formTitle')
                },
                {
                    xtype: 'textfield',
                    itemId: 'userField',
                    fieldLabel: this.localize.map('login.username')
                },
                {
                    xtype: 'textfield',
                    itemId: 'passField',
                    fieldLabel: this.localize.map('login.password')
                },
                {
                    xtype: 'button',
                    itemId: 'loginButton',
                    text: this.localize.map('login.buttonLabel')
                }
            ]
        });
        return this.callParent(arguments);
    }
});