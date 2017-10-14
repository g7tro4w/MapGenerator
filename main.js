function GenerateMap(){
	var elem = document.getElementById('myCanvas');
	if (elem && elem.getContext) 
	{
		var context = elem.getContext('2d');
		context.clearRect(0, 0, 900, 600);
		var iRandDirection, 
			iSeedPos = [], 
			size = document.generator.seedSize.value, 
			iNumSeeds = document.generator.numSeeds.value, 
			iNumUpdates = document.generator.numUpdates.value;

		function generation()
			{
				for(var j = 0; j < iNumSeeds; j++) 
				{
			    	if(iSeedPos[j][0] == 0 || iSeedPos[j][0] == 899 || iSeedPos[j][1] == 0 || iSeedPos[j][1] == 599)
			    	{
			        	iSeedPos[j] = [Math.floor(Math.random() * (900 + 1)), Math.floor(Math.random() * (600 + 1))]
			         	context.fillRect (iSeedPos[j][0], iSeedPos[j][1], size, size);
			         	continue;
			        }
			        iRandDirection = Math.floor(Math.random() * (4 + 1));
			        if(iRandDirection == 0) 
			        {
			            context.fillRect (iSeedPos[j][0], iSeedPos[j][1] + 1, size, size);
			            iSeedPos[j] = [iSeedPos[j][0], iSeedPos[j][1] + 1];  
			        }
			        else if(iRandDirection == 1) 
			        {
			            context.fillRect (iSeedPos[j][0] + 1, iSeedPos[j][1], size, size);
			            iSeedPos[j] = [iSeedPos[j][0] + 1, iSeedPos[j][1]]; 
			        }
			        else if(iRandDirection == 2) 
			        {
			            context.fillRect (iSeedPos[j][0], iSeedPos[j][1] - 1, size, size);
			            iSeedPos[j] = [iSeedPos[j][0], iSeedPos[j][1] - 1];
			        }
			        else if(iRandDirection == 3) 
			        {
			            context.fillRect (iSeedPos[j][0] - 1, iSeedPos[j][1], size, size);
			            iSeedPos[j] = [iSeedPos[j][0] - 1, iSeedPos[j][1]];
			        }
			    } 
			} 


		for(var i = 0; i < iNumSeeds; i++) 
		{
		    iSeedPos[i] = [Math.floor(Math.random() * (900 + 1)), Math.floor(Math.random() * (600 + 1))]
		    context.fillRect (iSeedPos[i][0], iSeedPos[i][1], size, size);
		}      
		for(var i = 0; i < iNumUpdates; i++) 
		{
			setTimeout(generation, 1);
		}  
	}
}