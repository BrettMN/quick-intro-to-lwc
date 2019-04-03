@IsTest
public with sharing class LWCSamplesControllerTest {
    public LWCSamplesControllerTest() {

    }


    @IsTest
    static void testGetUserList() {
        User[] results = LWCSamplesController.getUserList();

        System.assertNotEquals(null, results);
        System.assert(results.size() > 0);
    }
    
}
