const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Dream big and dare to fail. - Norman Vaughan",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Act as if what you do makes a difference. It does. - William James",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The secret of getting ahead is getting started. - Mark Twain",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson"
];

const emojis = ["😊", "🚀", "🌟", "💪", "🔥", "🌈", "✨", "🎯", "🌻", "🎉"];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomEmojiIndex];

    const quoteElement = document.getElementById('quote');

    // Hide previous quote with fade-out effect
    quoteElement.classList.remove('show');

    // Wait for fade-out animation, then change the quote
    setTimeout(() => {
        quoteElement.textContent = randomQuote + " " + randomEmoji;
        quoteElement.classList.add('show'); // Show new quote with fade-in
    }, 400);
}
