var myArray = [
	{
		blog: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
		writer: 'Helen Keller'
	},
	{
		blog: 'The best preparation for tomorrow is doing your best today.',
		writer: 'H. Jackson Brown, Jr.'
	},
	{
		blog: 'Put your heart, mind, and soul into even your smallest acts. This is the secret of success.',
		writer: 'Swami Sivananda'
	},
	{
		blog: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
		writer: 'Jimmy Dean'
	},
	{
		blog: "Happiness is not something you postpone for the future; it is something you design for the present.",
		writer: 'Jim Rohn'
	},
	{
		blog: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
		writer: 'Francis of Assisi'
	},
	{
		blog: "Nothing is impossible, the word itself says 'I'm possible'!",
		writer: 'Audrey Hepburn'
	},
	{
		blog: "It is during our darkest moments that we must focus to see the light. ",
		writer: 'Aristotle'
	},
	{
		blog: 'No act of kindness, no matter how small, is ever wasted. ',
		writer: 'Aesop'
	},
	{
		blog: 'A hero is someo life to something bigger than oneself.',
		writer: 'Joseph Campbell'
	},
	{
		blog: "Believe you can and you're halfway there.",
		writer: 'Theodore Roosevelt'
	},
	{
		blog: "Change your thoughts and you change your world.",
		writer: 'Norman Vincent Peale'
	},
	{
		blog: "Keep your face always toward the sunshine - and shadows will fall behind you.",
		writer: 'Walt Whitman'
	},
	{
		blog: "If opportunity doesn't knock, build a door.",
		writer: 'Milton Berle'
	},
	{
		blog: "Let us sacrifice our today so that our children can have a better tomorrow. ",
		writer: 'A. P. J. Abdul Kalam'
	},
	{
		blog: "We know what we are, but know not what we may be. ",
		writer: 'William Shakespeare'
	},
	{
		blog: "What we think, we become.",
		writer: 'Buddha'
	},
	{
		blog: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
		writer: 'Robert Louis Stevenson'
	},
	{
		blog: "No matter what people tell you, words and ideas can change the world.",
		writer: 'Robin Williams'
	},
	{
		blog: "The bird is powered by its own life and by its motivation. ",
		writer: 'A. P. J. Abdul Kalam'
	},
	{
		blog: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
		writer: 'Muhammad Ali'
	},
	{
		blog: "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.",
		writer: 'Bruce Lee'
	},
	{
		blog: "In a gentle way, you can shake the world.",
		writer: 'Mahatma Gandhi'
	},
	{
		blog: "Tears of joy are like the summer rain drops pierced by sunbeams.",
		writer: 'Hosea Ballou'
	},
	{
		blog: "I am not afraid of tomorrow, for I have seen yesterday and I love today!",
		writer: 'William Allen White'
	},
	{
		blog: "Great hopes make great men.",
		writer: 'Thomas Fuller'
	}
];


var div = document.createElement('div'),
	h = document.createElement('h1'),
	span =	document.createElement('span'),
	wrapper = document.querySelector('.wrapper'),
	center = document.querySelector('.center'),
	event = new Event('keydown'),
	autoRun = false,
	mouseout = false,
	c = 0;
	

div.classList.add('single-blog')
h.innerHTML = 'Press Spacebar'
div.prepend(h,span)
wrapper.append(div)

document.addEventListener('keydown', getBlockquote)

function getBlockquote(e){
	if(e.keyCode == 32){
		var data = myArray[Math.floor(Math.random() * myArray.length)]
		h.innerHTML = data.blog
		span.innerHTML = "- "+data.writer

		wrapper.append(div)
		var imgNum = Math.floor(Math.random() * myArray.length);
		var url = 'https://source.unsplash.com/random?sig=' + imgNum + '&landscape'
		wrapper.style.background = 'url(' + url+ ') center/cover no-repeat'
		center.classList.remove('animated')
		setTimeout("center.classList.add('animated')",.1)

		autoRun = true
		mouseout = true
		c = 0
	}else{
		console.log('pressed other key')
	}
}

function changeQuote(){
	if(autoRun){
		c++
		console.log(c)
		if(c == 10){
			event.keyCode = 32
			document.dispatchEvent(event)
			c = 0
		}
	}
}
setInterval(changeQuote,1000)

div.addEventListener('mouseover', function(e) {
	if(autoRun){
		center.classList.add('pause')
		autoRun = false
	}
})
div.addEventListener('mouseout', function(e){
	if(mouseout){
		center.classList.remove('pause')
		autoRun = true
	}

})