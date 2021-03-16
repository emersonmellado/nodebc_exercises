/*
let products = [1,2,3,4];
console.log("ALL", products); // [1,2,3,4]
products[1] = 6;
console.log("UPDATED", products); //[1,6,3,4]
*/

let products = [
    { id: 1, name: "Book 1" }, //0
    { id: 2, name: "Book 2" }, //1
    { id: 3, name: "Book 3" }  //2
]

function app_post(req) {
    const body = req.body;
    products.push(body);
}

function app_put(idToUpdate) {
    // const productIndex = products.findIndex(function (product) {
    //     if (product.id == idToUpdate) {
    //         return true;
    //     }
    // })

    // const productIndex = products.findIndex((product) => {
    //     if (product.id == idToUpdate) {
    //         return true
    //     }
    // })

    // const productIndex = products.findIndex((product) => {
    //     return (product.id == idToUpdate);
    // })

    const productIndex = products.findIndex(product => product.id == idToUpdate);
    products[productIndex] = { id: 4, name: "Book 4" }
}

function app_delete(idToDelete){
    const productIndex = products.findIndex(p => p.id == idToDelete)
    products.splice(productIndex, 1);
}

function app_get(idToGet){
    const product = products.find(p => p.id == idToGet)
    console.log("Product", product);
}

//Example calls
console.log("BEFORE", products);
app_post({ body: { id: 5, name: "Book 5" } })
app_put(2);
app_post({ body: { id: 6, name: "Book 6" } })
app_delete(1)
console.log("AFTER", products);
app_get(3)
app_get(6)