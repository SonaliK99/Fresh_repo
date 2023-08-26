let a=10;
let b=20;

if(a>b){
    console.log('A is big');
}


if(a>b){
    console.log('A is big');
}
else{
    console.log('A is Small')
};

if(a==b){
    console.log('a and b are equal');
}

else if(a>b){
    console.log('A is larger');
}

else if(a<b){
    console.log('a is smaller');
}

else{
    console.log(Block);
}

let color='pink';
switch (color) {
    case 'black':
        console.log('Color is black');
        
        break;
        case 'blue':
            console.log('color is blue');
            break;

    default:
        console.log('block');
        break;
}

let alphabates='S'
switch (alphabates) {
    case 'R':
        console.log('Letter is same');
        break;

        case 'S':
            console.log('Letter is different');
        
        break;

    default:
        console.log('Block');
        break;
}

let marks='75';
switch (marks) {
    case 60:
        console.log('Fail'); 
        break;

        case 80:
            console.log('Pass');

    default:
        console.log('Equal');
        break;
}