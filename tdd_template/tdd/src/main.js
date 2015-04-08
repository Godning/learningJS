//TODO: Please write code in this file.
//player
function player(life,attack)
{
	this.life=life;
	this.attack=attack;
	this.alive=true;

	this.fight=function(object)
	{
		object.life-=this.attack;
	}

	this.getlife=function()
	{
		return this.life;
	}

	this.is_alive=function()
	{
		if(this.life>0)
			return true;
		else
		{
			this.alive=false;
			return false;
		}
	}
}

//who is winner
function player_win(player_a, player_b)
{
	if(!player_a.is_alive())
		return 'B win';
	else
		return 'A win';
}

//fight progress
function fight_player(player_a, player_b)
{
	var process="fight start!\n";
	while(1)
	{
		if(!player_a.is_alive())
			break;
		else
			player_a.fight(player_b);
			process+="A attack B ,B's life:"+player_a.getlife()+"  B's life:"+player_b.getlife()+"\n";

		if(!player_b.is_alive())
			break;
		else
			player_b.fight(player_a);
			process+="B attack A ,A's life:"+player_a.getlife()+"  B's life:"+player_b.getlife()+"\n";
	}
	
	return process+player_win(player_a, player_b);

	//return 'A win';
}
