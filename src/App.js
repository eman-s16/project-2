import React from 'react';
import './App.css';
import Article from './article.js';

import TimerMnger from './TimerMnger.js';
const articles = [
	{
		title: ' Dwayne Johnson',
		content:
			'Dwayne Johnson, nicknamed “The Rock”, is the most famous person in the world as of 2022. Dwayne who was WWE champion wrestler earlier is now an actor and producer. He is one of the greatest professional wrestlers the game has ever witnessed.',
		image: 'https://cdn.thetealmango.com/wp-content/uploads/2021/07/dwaynejohnson-1920x1219.jpg'
	},
	{
		title: ' Elon Musk',
		content:
			'Elon Musk, celebrity CEO of Tesla Inc and SpaceX is the world’s richest man with an estimated net worth of $239.6 billion as of 2022. He is very active on microblogging social media platform Twitter.',
		image: 'https://cdn.thetealmango.com/wp-content/uploads/2021/11/elon-musk-new.jpg'
	},
	{
		title: '  Joe Biden',
		content:
			'Joe Biden, the 46th and current president of the United States is not only among the most famous personalities but also the most googled person of 2021. In the history of the United States of America, Joe Biden became the sixth youngest senator when he was just 30 years old.',
		image: 'https://cdn.thetealmango.com/wp-content/uploads/2021/06/Joe-Biden-1-1920x1440.jpg'
	}
];

function App() {
	return (
		<div className="App">
			{articles.map((article) => (
				
					<Article
						key={article.title}
						title={article.title}
						content={article.content}
						image={article.image}
					/>
				
      ))}
      <hr />
			<TimerMnger />
		</div>
	);
}

export default App;
