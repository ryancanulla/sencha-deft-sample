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

    map: function(key) {
        return this.localizedData[key];
    }
});