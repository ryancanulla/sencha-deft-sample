Ext.define("SampleWebApp.login.LoginMobileController", {
    extend: "Deft.mvc.ViewController",

    requires: [ 'SampleCommonApp.service.LoginService' ],
    inject: [ 'loginService' ],

    control: {
        userField: true,
        passField: true,
        loginButton: {
            tap: 'onLogin'
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
