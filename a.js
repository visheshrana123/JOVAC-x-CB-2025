const data = [2, 5, 3, 6];

const calculateDouble = function (data) 
{
    let output = [];
    for (let i = 0; i < data.length; i++){
           output.push(data[i] * data[i]); 
        }
    return output;
}
 console.log(calculateDouble(data));