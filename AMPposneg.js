define(['pipAPI', 'https://rawcdn.githack.com/mikivezzoli/AMP/9c09a10ff0695e49e815399d768056f9437c2519/AMP.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'amore'}, 
					{word : 'pace'}, 
					{word : 'bello'}, 
					{word : 'buono'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'odio'}, 
					{word : 'guerra'}, 
					{word : 'brutto'}, 
					{word : 'cattivo'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});
