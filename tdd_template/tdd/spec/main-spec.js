describe('Describe of test', function () {

    it("Title of test",function(){
        
		//test two players a and b
		var player_a = new player(10,2);
		var player_b = new player(9,1);
		
		

		var result = fight_player(player_a, player_b);
		var expectResult = 'A win' ;
		

        expect(result).toBe(expectResult);
    });
});

