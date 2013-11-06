
describe('A Basic Test', function() {
    var service;

    beforeEach(function() {
        Deft.Injector.configure({
            userModel: 'SampleCommonApp.model.UserModel'
        });
        service = Ext.create('SampleCommonApp.service.LoginService');
    });

    afterEach(function() {
        Deft.Injector.reset();
    });

    it('should instantiate', function() {
        expect(service).toBeDefined();
    });

    describe('isValidCredentials()', function() {
        it('should return true if the correct user/pass are passed in', function() {
            var result = service.isValidCredentials('fitc', '2013');
            expect(result).toBe(true);
        });

        it('should return false if the incorrect user/pass are passed in', function() {
            var result = service.isValidCredentials('wrong', 'creds');
            expect(result).toBe(false);
        });
    });
});