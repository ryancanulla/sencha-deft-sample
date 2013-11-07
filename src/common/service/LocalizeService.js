/**
 * Used to provide localized strings to the UI
 * @singleton
 */
Ext.define('SampleCommonApp.service.LocalizeService', {
    mixins: { observable: 'Ext.util.Observable' },
    localizedData: {},

    requires: ['Ext.Ajax'],

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
        this.loadLocalizedHash();
    },

    loadLocalizedHash:function() {
        Ext.Ajax.request({
            url: 'resources/i18n/en-US.json',
            success: function(response){
                this.localizedData = Ext.JSON.decode(response.responseText);
                this.fireEvent('loaded');
            },
            scope: this
        });
    },

    /**
     * Maps key to localized string.
     * @param {String} key the key for the localized string.
     * @return {String} the localized string to display in the UI
     */
    map: function(key) {
        return this.localizedData[key];
    }
});