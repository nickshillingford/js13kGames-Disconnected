# Post-Mortem
This is my post-mortem for the 2018 js13kGames competition, where participants are challenged to create a game with web technologies in just 13 kb. This is my first game jam and first post-mortem, so I apologize if it’s bad. This year’s theme was “offline”.

# Inspiration
I’d say this was the second most difficult task of the whole project. I wanted a unique visual style for my game. I told myself before the theme was even announced that I wasn’t going to make my game with the pixelated art style that you usually see in game jams. Not that there's anything wrong with it, I just wanted to do something different. I also knew that I wanted it to be a puzzle game.
A couple months earlier, I can across a game on codepen called “Copycat”. The game used a simple but brilliant mechanic and this is ultimately where the mechanic in my game would originate from.

I decided on the hand drawn sketched style after recalling my playthrough of the iOS and Android game “Florence” which I absolutely adore. It’s not so much a game as it is an interactive graphic novel but the art is gorgeous.

I wanted my game to resemble this style but had no idea how I was going to achieve this with HTML, CSS and JavaScript. Until I remembered a JavaScript library I came across, also a few months prior, called Rough JS.

# Design
With my game type, mechanic and art style decided, I began thinking about how I would interpret the “offline” theme. Drawing inspiration once again from “Florence”, I chose to make the game about a couple. I imagined a male and female in a long distance relationship, where each puzzle would be a text message conversation they were having that was cut short when their phones suddenly went offline. The goal would be to help them get back online so they could send their messages. The message bubbles would act as the barriers in the puzzle. I spent an unreasonable amount of time trying to pick a color palette for the game. I have an obsession with color. I love it. Especially pastel shades. My favorite browser to run the game in is Firefox because it seems to render much softer colors. I ultimately decided to make each level a different pair of colors, all on a plain white background for the document body, in order to make them pop more.

# Implementation
First order of business was creating the art assets. Rough JS supports SVG which was perfect because I could make the assets myself in Adobe Illustrator and then export the code instead of hand coding the path strings. For those that aren’t aware, Illustrator has an awesome feature to export the SVG code for vector images you make. Here is an example of what the phone assets looked like in Illustrator before they were transformed into the hand-sketched look.

I repeated this process for all of the assets. Lucy/Levi, Wi-Fi signals, hearts and message bubbles. I could then simply pass the exported strings to the Rough JS path function and it would transform it into the desired look. 

# Challenges
One major challenge of using SVG was that the output strings exported from Illustrator were massive. The strings for the characters Lucy and Levi were about 3-4 kb each! Same with the phones. Though, I was able to avoid having to use the string for the phones twice by creating a Phone class. Thankfully, the string for the hearts ended up being relatively small. But the large strings ended up being very limiting and kept me from adding a lot more details and stuff to the game. This is also why the game is so short, with only 3 levels.

Another challenge (that ended up not mattering because I ran out of byte room) was music. I initially wanted to use the Tiny Music library to make an in-game theme song but realized that the 8-bit sound did not fit with my chosen art style for the game. The music in “Florence” worked so well because the developers had a professional composer who worked with an orchestra to perform and record songs on actual stringed instruments. Unfortunately, this is not something I had the luxury of.

And the biggest challenge of all, that I’d say took about 90% of the entire development time, was learning the entire 98 kb Rough JS library so that I could cut out the parts I didn’t need and optimize the ones I did need in order for the whole thing to fit in 13 kb. I was able to bring it down to 24 kb (9 kb when minified), which brought my entire game to 12.4 kb when compressed. I was determined to use Rough JS. If I wasn’t able to make it work, I probably wouldn’t have submitted a game this year.

# Conclusion
I’m glad it all worked out in the end because I had a lot of fun making it. Thanks for reading and I hope you get some enjoyment out of the game.

