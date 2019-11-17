//first task
function PropetyArray() {
    console.log("First task");
    let arr = [4, 12, 3, 80, 0, 22, 56];
    console.log("Initial array [" + arr + "]");
    let MaxValueArray = Math.max.apply(null, arr);
    let MinValueArray = Math.min.apply(null, arr);
    let IndexMaxValue = arr.indexOf(Math.max.apply(null, arr));
    let IndexMinValue = arr.indexOf(Math.min.apply(null, arr));
    let SumArray = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    console.log("Sum elements of array=" + SumArray);
    arr[ IndexMaxValue] = MinValueArray;
    arr[ IndexMinValue] = MaxValueArray;
    console.log("Max value array=" + MaxValueArray);
    console.log("Min value array=" + MinValueArray);
    console.log("Changed array[" + arr + "]");
}
PropetyArray();

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
function DeviderThreeSeven() {
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
}
DeviderThreeSeven();



//fourth task
console.log("Fourth task");
function WordsMatches() {
    let FirstWord=prompt();
    let SecondWord=prompt();
    let index=0;
    for (let j=0; j < SecondWord.length; j++) {
        for (let i = 0; i < FirstWord.length; i++)
        {
            if (FirstWord[i] == SecondWord[j]) {
                index++;
            }
        }
    }
    let percent=index/(FirstWord.length+SecondWord.length)*100;
    console.log("Your first word - " + FirstWord);
    console.log("Your second word - " + SecondWord);
    console.log("Percentage of matches=" + percent +"%");
}
WordsMatches();


