public with sharing class LWCSamplesController {
    public LWCSamplesController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<User> getUserList() {
        return [SELECT Id, Name, Title, Email FROM User LIMIT 100];
    }
}
