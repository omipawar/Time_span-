function calculate(){
    let first = document.getElementById('first').value;
    console.log(first);
    let second = document.getElementById('second').value;
    console.log(second);

    first = first.split(':');
    console.log(first.toString());
    firsthr = first.slice(0,1).toString();
    console.log('1st hr '+firsthr);
    firstmin = first.slice(1,3).toString();
    console.log("1st min "+firstmin);

    second = second.split(':');
    console.log(second.toString());
    secondhr = second.slice(0,1).toString();
    console.log('2st hr '+secondhr);
    secondmin = second.slice(1,3).toString();
    console.log("2st min "+secondmin);

    let minutes = (Math.abs(firsthr-secondhr)*60);
    console.log(minutes);
    let min = (Math.abs(firstmin-secondmin));;
    console.log(min);

    let totalminutes = minutes+ min;
    console.log("Total minutes "+totalminutes);
    

    let hours = totalminutes/60;
    hours = Math.round(hours);
    console.log(hours);
     

    let sec = minutes * 60;
    console.log(sec);


    document.getElementById('hours').innerHTML = 'Total hours ='+ hours +' hrs';
    document.getElementById('min').innerHTML = 'Total Minutes ='+ totalminutes + ' min';
    document.getElementById('seconds').innerHTML = 'Total Seconds =' + sec + ' sec';


}