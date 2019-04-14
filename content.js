/*
====================================================================================================================================================
 .----------------.  .----------------.  .----------------.  .----------------.                                         
| .--------------. || .--------------. || .--------------. || .--------------. |                                        
| |    ______    | || |  _________   | || |  _________   | || |  ___  ____   | |                                        
| |  .' ___  |   | || | |_   ___  |  | || | |_   ___  |  | || | |_  ||_  _|  | |                                        
| | / .'   \_|   | || |   | |_  \_|  | || |   | |_  \_|  | || |   | |_/ /    | |                                        
| | | |    ____  | || |   |  _|  _   | || |   |  _|  _   | || |   |  __'.    | |                                        
| | \ `.___]  _| | || |  _| |___/ |  | || |  _| |___/ |  | || |  _| |  \ \_  | |                                        
| |  `._____.'   | || | |_________|  | || | |_________|  | || | |____||____| | |                                        
| |              | || |              | || |              | || |              | |                                        
| '--------------' || '--------------' || '--------------' || '--------------' |                                        
 '----------------'  '----------------'  '----------------'  '----------------'                                         
 .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| | _____  _____ | || |     _____    | || |    _______   | || |  ________    | || |     ____     | || | ____    ____ | |
| ||_   _||_   _|| || |    |_   _|   | || |   /  ___  |  | || | |_   ___ `.  | || |   .'    `.   | || ||_   \  /   _|| |
| |  | | /\ | |  | || |      | |     | || |  |  (__ \_|  | || |   | |   `. \ | || |  /  .--.  \  | || |  |   \/   |  | |
| |  | |/  \| |  | || |      | |     | || |   '.___`-.   | || |   | |    | | | || |  | |    | |  | || |  | |\  /| |  | |
| |  |   /\   |  | || |     _| |_    | || |  |`\____) |  | || |  _| |___.' / | || |  \  `--'  /  | || | _| |_\/_| |_ | |
| |  |__/  \__|  | || |    |_____|   | || |  |_______.'  | || | |________.'  | || |   `.____.'   | || ||_____||_____|| |
| |              | || |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 

http://patorjk.com/software/taag/#p=display&h=0&v=0&f=Blocks&t=Geek%0AWisdom

Really !, you want to cheat and look at the code ?

Really ???

#GeekWisdom
=====================================================================================================================================================
*/

var Inspirational=[
"A person who has never made a mistake never tried anyting new",
"Life is about making an impact, not making an income",
"We become what we think about",
"Every strike brings me closer to the next home run",
"Strive not to be a succcess, but rather to be of value",
"Don't forget to take the time to learn something new!",
"The best revenge is massive success",
"People often say that motiviation doesn't last. Well neither does bathing. That is why we recommend it daily.",
"The only person you are destined to become is the person you decide to be",
"Happiness is not something you postpone for the future; it is something you design for the present",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
"Your present circumstances don't determine where you can go; they merely determine where you start.",
]

var rndquote=Math.floor((Math.random() * Inspirational.length));
var thequote=Inspirational[rndquote]
document.getElementById("swml").textContent=thequote + " - GeekWisdom.org";