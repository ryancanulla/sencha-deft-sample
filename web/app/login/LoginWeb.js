Ext.define("SampleWebApp.login.LoginWeb", {
    extend: "Ext.container.Container",
    alias: 'widget.app-login',

    requires: [
        'SampleCommonApp.LocalizeService',
        'Ext.form.Label',
        'Ext.form.field.Text'
    ],

    inject: ['localize'],

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
                    fieldLabel: this.localize.map('login.username')
                },
                {
                    xtype: 'textfield',
                    fieldLabel: this.localize.map('login.password')
                },
                {
                    xtype: 'button',
                    text: this.localize.map('login.buttonLabel')
                }
            ]
        });
        return this.callParent(arguments);
    }
});