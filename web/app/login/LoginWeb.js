Ext.define("SampleWebApp.login.LoginWeb", {
    extend: "Ext.container.Container",
    alias: 'widget.app-login',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.Text'
    ],

    initComponent: function() {
        Ext.applyIf(this, {

            layout: {
                type: 'vbox', align: 'center', pack: 'center',
                defaultMargins: { bottom: 10 }
            },

            items: [
                {
                    xtype: 'label',
                    text: 'please login'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'User',
                    value: ''
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Password',
                    value: ''
                },
                {
                    xtype: 'button',
                    text: 'Login'
                }

            ]
        });
        return this.callParent(arguments);
    }
});