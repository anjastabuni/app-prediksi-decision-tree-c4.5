const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.get("/admin", (req, res) =>{
    res.send("hello word")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
