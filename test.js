const test = "\
Hi there, Nice to meet you. And Hello there and hi.\n\
I love grey(gray) color not a gry, graay and graaay.\n\
Ya ya YaYaYa Ya\n\
\n\
abcdefghijklmnopqrstuvwxyz\n\
ABSCEFGHIJKLMNOPQRSTUVWZYZ\n\
1234567890\n\
\n\
.[]{}()\^$|?*+\n\
\n\
010-898-0893\n\
010-405-3412\n\
02-878-8888\n\
\n\
dream.coder.ellie@gmail.com\n\
hello@daum.net\n\
hello@daum.co.kr\n\
\n\
https://www.youtu.be/-ZClicWm0zM\n\
https://youtu.be/-ZClicWm0zM\n\
youtu.be/-ZClicWm0zM";

console.log(test)

const re = /\d{2,3}[-. ]\d{3,4}[-. ]\d{4}/gm
console.log(test.match(re))

const text = "won1jong2bin3";

const re2 = /\d/g;

console.log(text.match(re2));