//first task
console.log("First task");
let arr = [4,12,3,80,0,22,56];
console.log("Initial array [" + arr+"]");
let max_value = Math.max.apply(null, arr);
let min_value = Math.min.apply(null, arr);
let index_max=arr.indexOf(Math.max.apply(null, arr));
let index_min=arr.indexOf(Math.min.apply(null, arr));
let SumArray = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);
console.log( "Sum elements of array=" + SumArray );
arr[index_max]=min_value;
arr[index_min]=max_value;
console.log("Max value array=" + max_value);
console.log("Min value array=" + min_value);
console.log("Changed array[" + arr+"]");


//second task
console.log("Second task");
function WorldOfCat(cats, callback) {
    alert(`Do you like a  ${cats} cats.`);
    callback();
}

WorldOfCat('scotish', function() {
    alert('Hey, its catmafia for you!');
});
console.log("You must seen some message about cat!");


//third task
console.log("Third task");
let mass=[3,5,7,12,14,21,35,42];
console.log("Initial array[" + mass +"]");
for (let k=0; k< mass.length; k++) {
    if ((mass[k]% 3==0) && (mass[k]%7==0)) {
        mass[k]='foobar';
    }
    else
    if ((mass[k]%3)==0) {
        mass[k]='foo';

    }
    else
    if (mass[k]%7==0) {
        mass[k]='bar';
    }
}
console.log("Changed array[" + mass+"]");


//fourth task
console.log("Fourth task");
let first_word=prompt();
let second_word=prompt();
let index=0;
for (let j=0; j < second_word.length; j++) {
    for (let i = 0; i < first_word.length; i++)
    {
        if (first_word[i] == second_word[j]) {
            index++;
        }
    }
}
let percent=index/(first_word.length+second_word.length)*100;
console.log("Your first word - " + first_word);
console.log("Your second word - " + second_word);
console.log("Percentage of matches=" + percent +"%");


