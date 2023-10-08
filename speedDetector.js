//function takes speed as input
function speedDetector(speed) {
    if (speed < 70) {
        console.log("Ok");
//if the speed is less than 70 then it prints ok
    } else {
        let points = (speed-70/5);
        if (points > 12) {
            console.log("License Suspended");
        } else {
            console.log(points);
        }
    }
}