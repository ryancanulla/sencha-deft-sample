/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.Loader.setPath({
    'Deft': '../packages/deft/src/js'
});

Ext.syncRequire([
    'Deft.mixin.Injectable',
    'Deft.mixin.Controllable'
]);

Ext.application({
    name: 'SampleWebApp',
    extend: 'SampleWebApp.Application',
    autoCreateViewport: false
});
