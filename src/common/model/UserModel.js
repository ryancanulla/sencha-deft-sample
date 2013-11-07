/**
 * The model used to store user information
 *
 * - **Fields**
 * - id {String}
 * - name {String}
 */
Ext.define('SampleCommonApp.model.UserModel', {
    extend: 'Ext.data.Model',

    mapping: [
        {name:'id', type: 'string'},
        {name:'name', type: 'string'}
    ],

    constructor: function(data, id, raw, convertedData) {

        this.fields.items = this.mapping;

        this.config = {
            fields: this.mapping
        };

        this.callParent(data, id, raw, convertedData);
    }
});