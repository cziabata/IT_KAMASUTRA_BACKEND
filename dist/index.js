"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const products = [
    {
        id: 1,
        title: "tomato"
    },
    {
        id: 2,
        title: "orange"
    },
];
app.get("/", (req, res) => {
    res.send("Hello World!!332");
});
app.get("/products", (req, res) => {
    if (req.query.title) {
        const searchQuery = req.query.title.toString();
        const searchResults = products.filter(i => i.title.indexOf(searchQuery) > -1);
        if (searchResults.length === 0) {
            res.send("Not found searched products");
        }
        res.send(searchResults);
    }
    res.send(products);
});
app.get("/products/:productTitle", (req, res) => {
    const title = req.params.productTitle;
    const requestedProduct = products.find(i => i.title === title);
    if (!requestedProduct) {
        res.send(404);
    }
    res.send(requestedProduct);
});
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id.toString() === id) {
            products.splice(i, 1);
        }
        res.send(204);
        return;
    }
    res.send(404);
});
app.listen(PORT, () => {
    console.log(`App started at port ${PORT}`);
});
