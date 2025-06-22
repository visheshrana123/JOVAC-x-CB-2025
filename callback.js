function placeOrder(product, callback) 
{
    console.log(`Placing order for: ${product}`);
    setTimeout(() => {
        callback(`${product} has been successfully ordered.`);
    }, 2000);
}
placeOrder("Mobile Phone", function(message) {
    console.log("Callback Result:", message);
});

