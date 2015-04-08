describe('Describe of test', function () {

    it("Title of test",function(){
        
		//test two players a and b
		var player_a = new player(10,2);
		var player_b = new player(9,1);
		
		

		var result = fight_player(player_a, player_b);
		var expectResult = "fight start!\n"+
			"A attack B ,A's life:10  B's life:7\n"+
			"B attack A ,A's life:9  B's life:7\n"+
			"A attack B ,A's life:9  B's life:5\n"+
			"B attack A ,A's life:8	 B's life:5\n"+
			"A attack B ,A's life:8	 B's life:3\n"+
			"B attack A ,A's life:7	 B's life:3\n"+
			"A attack B ,A's life:7	 B's life:1\n"+
			"B attack A ,A's life:6	 B's life:1\n"+
			"A attack B ,A's life:6	 B's life:-1\n" +
			"A win" ;
		

        expect(result).toBe(expectResult);
    });
});

