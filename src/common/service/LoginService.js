/**
 * Manage the business logic required to authenticate
 * a user.
 * @singleton
 */
Ext.define('SampleCommonApp.service.LoginService', {
    mixins: { observable: 'Ext.util.Observable' },
    localizedData: {},

    requires: [
        'Deft.Deferred',
        'Ext.Ajax',
        'SampleCommonApp.model.UserModel'
    ],

    inject: ['userModel'],

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
    },

    /**
     * Handles login authentication.
     * @param {String/Number} user The users username
     * @param {String} pass The users password
     * @return {Promise} the promise for the method call.
     */
    login: function(user, pass) {
        var deferred = Ext.create('Deft.Deferred');

        if (this.isValidCredentials(user, pass)) {
            this.userModel.set('name', 'Ryan Canulla');
            deferred.resolve();
        } else {
            deferred.reject("Error loading Companies.");
        }
        return deferred.promise;
    },

    isValidCredentials: function(user, pass) {
        return user === 'fitc' && pass === '2013';
    }

});