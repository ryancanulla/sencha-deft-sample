Ext.define('SampleCommonApp.model.UserModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'id', type: 'string'},
        {name:'name', type: 'string'}
    ],

    config: {
        fields: [
            {name:'id', type: 'string'},
            {name:'name', type: 'string'}
        ]
    }
});