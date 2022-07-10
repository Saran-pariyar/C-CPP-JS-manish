//meta characters
let regex = /harry/;
    regex = /^har/; //if the string starts with 'har'..
    regex = /ry$/; //if the string ends with 'ry'
    regex = /ha.ry/; //it matches if any one char will come in place of dot
    regex = /h*rry/; //it matches if there is zero or many chars in place of star
    regex = /ha?rryi?/; //"a "and "i " are optional and matches if there is no "i" or "a"
    regex = /h\*rry/ ; //the backslash means we are not useing star as metachar but we are using it as a char 

//character sets We use []
//it is case sensitive too.
regex = /h[a-z]rry/; //if there is any char between a to z than it will match
regex = /h[asf0-9]rry/; //if there is a,s,f or from 0 to 9 than it will match
regex = /h[^bcd]rr[Yyvw]/; //if there is c,b or d than it will not  match , we can use two or more of this charsets
regex = /h[a-zA-z]rry/; //if there is any char between a to z in both upper or lowe case, then it match
regex = /h[a][r]ry/; //we can add more than one char set

//quantifiers We use {}
//measures the quantity
regex = /har{2}y/; // if 'r' comes exactly 2 times
regex = /har{0,2}y/; //if "r" comes zero or 2 times than match

//groupings We use = {}
regex = /(har){2}/; //har should come 2 times string should be like="harhar"
regex = /(har){2}([0-9]r){3}/; //frist 0-9 should come and than 3 times r...the string should be like this to match = "harhar1r2r3r4r"


//shorhand char classes
regex = /\woder/; // \w means word char or alphabet char or underscore..
regex = /\w+ry/; //word or alphabet that is 1 or more than one
regex = /\Woder/; //if we want non alphabet or number char than use capital W
regex = /\W+oder/; //if we want non alphabet or number char more than one , we use capital W!
regex = /\d999/; //one number and after that 999...string looks like "89999"
regex = /\d+999/; //more than one digit
regex = /\D999/; //one non digit item after 999..capital D means non digit...string looks "a9999"
regex = /\sharry/; //if there is white space after harry
regex = /\s+harry/; //more than one white space
regex = /\Sharry/; //capital s means non white space character
regex = /\S+harry/; //more than one non white space char
regex =/\bharry/; //if new word starts than
regex =/\Bharry/; //if new word does not start 


//assertions
regex = /h(?=y)/; //if there is 'h' and 'y' comes after h than
regex = /h(?!y)/; //if there is 'h' and 'y' does not after h than


let str = "the harry is a good #oder harry ";
let result = regex.exec(str);
console.log("the result from exec is" , result);

if (regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string does not  matches the expression ${regex.source}`)

}