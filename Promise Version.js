function processPayment(amount) {
    return new Promise((resolve, reject) => {
        console.log("Processing payment...");
        setTimeout(() => {
            if (amount > 0) {
                resolve("Payment successful!");
            } else {
                reject("Payment failed: Invalid amount.");
            }
        }, 3000);
    });
}
processPayment(500)
    .then((msg) => console.log("Promise Result:", msg))
    .catch((err) => console.log("Promise Error:", err));
