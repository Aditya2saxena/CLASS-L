const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

const PORT = 3000;

app.use("/", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});