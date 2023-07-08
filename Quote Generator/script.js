const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Whoever is happy will make others happy too. -Anne Frank",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about. -Marilyn Monroe",
    "Life is a long lesson in humility. -James M. Barrie",
    "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
    "Love the life you live. Live the life you love. -Bob Marley",
    "Life is either a daring adventure or nothing at all. -Helen Keller",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
    "Life is made of ever so many partings welded together. -Charles Dickens",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking. -Steve Jobs",
    "Life is trying things to see if they work. -Ray Bradbury",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
  ];
  const quoteEl = document.querySelector('.quote');

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteEl.textContent = randomQuote;
    
    // Change the background image
    const images = [
      "url('img/image1.jpg')",
      "url('img/image2.jpg')",
      "url('img/image3.jpg')",
      "url('img/image4.jpg')",
      "url('img/image5.jpg')"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Add animate class to trigger the animation
    quoteEl.classList.add('animate');

    // Add slide-in class to trigger the transition
    document.body.classList.add('slide-in');

    // Wait for the animation and transition to end before removing classes and changing the background image
    setTimeout(() => {
      quoteEl.classList.remove('animate');
      document.body.style.backgroundImage = randomImage;
      document.body.classList.remove('slide-in');
    }, 500); // Use the same duration as the transition
  }

  // Generate the first quote immediately
  generateQuote();

  // Set the interval to 5 seconds (5000 milliseconds)
  const intervalId = setInterval(generateQuote, 5000);

  // Stop the interval after

