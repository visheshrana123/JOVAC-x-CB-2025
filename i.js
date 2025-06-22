const visheshAssignment = new Promise(function(resolve, reject) 
{
    setTimeout(() => {
        console.log("I am VISHESH My Work is Done.");
        resolve("Assignment Submitted"); 
    }, 5000);
});
function ranaTask() {
    visheshAssignment.then((visheshDocs) => {
        console.log("DATA", visheshDocs);
        console.log("BYE");
    });
}
ranaTask();
