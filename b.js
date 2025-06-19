const data1 = [2, 5, 3, 6];

const data2 = [23,34,56,78];

const calculateDouble = function (data) 
{
    let output = [];
    for (let i = 0; i < data.length; i++){
           output.push(data[i] * data[i]); 
        }
    return output;
}
 console.log(calculateDouble(data1));
 console.log(calculateDouble(data2));