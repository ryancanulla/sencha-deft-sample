Ext.define("SampleWebApp.login.LoginWebController", {
    extend: "Deft.mvc.ViewController",

    requires: [ 'SampleCommonApp.service.LoginService' ],
    inject: [ 'loginService' ],

    control: {
        userField: true,
        passField: true,
        loginButton: {
            click: 'onLogin'
        }
    },

    init: function() {
        this.callParent(arguments);
    },

    onLogin: function() {
        var user = this.getUserField().getValue(),
            pass = this.getPassField().getValue();

        this.loginService.login(user, pass).then({
            scope: this,
            success: function() {

            },
            failure: function() {

            }
        }).done();
    }
});
