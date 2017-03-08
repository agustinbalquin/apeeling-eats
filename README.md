#apeeling-eats

We were brainstorming on what we could possibly make and we came up with implementing sentiment analysis in current applications. We thought of one of the best platforms has reviews and the first that came to mind is yelp. In yelp, there are millions of reviews where the actual feelings about specific foods from specific restaurants go unexplored because nobody has enough time to read it all. We thought if we could use their comments to create a ranking of the food offered at the restaurant it will be easy for first timers to figure out what to eat.

When the user searches for surrounding restaurants, the algorithm collects yelp reviews for each of those restaurants if not already calculated. Then the application scans the reviews for the mention of specific foods. Then it analyzes user sentiment about each food and creates a table of positive, neutral, and negative. Then it drafts a menu for a restaurant based on popularity of how much it is mentioned and the culmination of the user ratings of the food.

IBM Watson only allows 1000 free API calls and yelp reviews per restaurant can have from 50 to 1000 reviews. It was clear IBM Watson was not going to work out so we decided to create our own sentiment analyzer but the downside is the time spent training the analyzer.
Accuracy was a problem because IBM Watson is optimized for everything rather than just food related sentiment so the accuracy was at maximum of 80% for test cases.
Domain.com rejected our attempts to use a domain of our choice making us unable to have a domain.
Google Maps API was deprecated and restricted our options in API usage.

We are proud that we created a working convolution neural network for sentiment analysis using python and tensorflow within a 24 hour hackathon. Creating an application that helps with a legitimate issue and has business applications. We are also proud of overcoming all the issues, big and small, that we faced along the way.


<br>
<img  src="https://github.com/agustinbalquin/apeeling-eats/blob/master/Apeeling_map.png" height=500/>
<br>
Startup Map

<br>
<img  src="https://github.com/agustinbalquin/apeeling-eats/blob/master/Apeeling_chart.png" height=500/>
<br>
Restaurant Chart
