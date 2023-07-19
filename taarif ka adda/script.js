const quotes = {
  "- from your love":
    '"Our beautiful story is my favorite one to watch,I love you so much."',
  "- from your panda":
    '"You are my joy, the perfect complement to who I am.  Thank you my love.."',
  "- from your love":
    '"Because of your deep love for me, I will try to be a better man.  I love you so much, and I love our life!."',
  "- from your baby":
    '"I love you from the bottom of my heart, and I promise to always make you feel cherished and loved.  I love our magical life."',
  "- from your love":
    '"You’re my reason for everything, no matter what life throws at us.  I love you more deeply than you can imagine! ."',
  "- from your baby":
    '"o gori sach ho meain jannat ke nur laagelu, sona chandi nahi hira kohinur laagelu"',
  "- from your panda":
    '"Yrr tmhare jaisa sarv gun sampanna ladi, i have never seen in my life."',
  "- from your sona": '"You r not less than an angel"',
  "- from your baby":
    '"You’re so beautiful they need a new word for beautiful.."',
  "- Yours...":
    '" It is literally unfair how hot you look rn. This level of attractiveness should be illegal. Luckily it’s not though.."',
  "- from your darlo":
    '" I literally can’t focus at work rn because I keep thinking about how hot you looked in that saare."',
  "- from your d...": '" Baby, you are stunning."',
  "- from your love":
    '"I swear I straight up forget my name for a second every time I look into your eyes.."',
  "- from your baby": '"You know I can’t get enough of you? ."',
  "- from your love": '" I’m so obsessed with you"',
  "- from your d...": '"u are damn gorgeous yrr."',
  "- from your baby":
    '"What u know, your heart is the most beautiful treasure i have.."',
  "- from your darlo": '"My whole life changed the day u beacame mine."',
  "- from your baby":
    '" I hope you know CPR, because you just took my breath away!."',
  "- from your darlo":
    '" I ought to complain to Spotify for you not being named this week’s hottest single.."',
  "- from your d...":
    '"Your eyes are like the ocean; I could swim in them all day."',
  "- from your love": '"If you were a vegetable, you’d be a ‘cute-cumber.’."',
  "- from your darlo":
    '" Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you. "',
  "- from your panda":
    '"You’re like a fine wine. The more of you I drink in, the better I feel.."',
  "- from your d...":
    '"Whether you think you can or you think you can’t, you’re right."',
  "- from your love":
    '"You’ve got a lot of beautiful curves, but your smile is absolutely my favorite.."',
  "- from your d...":
    '"If being sexy was a crime, you’d be guilty as charged.."',
  "- from your panda":
    '"along with a gorgeous better half, u will be also a very good daughter in law"',
  "- from your love":
    '"In my opinion, there are three kinds of beautiful: Cute, pretty, and sexy. Somehow, tum tino ho"',
  "- from your darlo":
    '"I was going to say something really sweet about you, but when I saw you, I became speechless,beacause u r the queen of sweetness."',
  "- from your d...": '"Meri pranpriyaa......"',
  "- from your panda": '"I am Lucky to get u, Thank You."',
  "- from your sona":
    '"suna hai tmhe dekhne ka souk hai, mere sath jawani se budhapa dekhogi kyaa...?."',
};

document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate() {
  // grab all the keys in the dictionary (authors) and store in an array
  const authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  const author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  const quote = quotes[author];

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function () {
  generate();
};
