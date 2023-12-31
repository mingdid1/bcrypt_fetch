const express = require("express");

const app = express();
console.log("dirname: ", __dirname);

//app.set("views", "./views");
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

// 전체 페이지를 주고받는 방식 (새로 고침이랑 똑같은 방식)
let cnt = 0;
app.get("/non_fetch", (req, res)=>{
    cnt++;
    console.log(cnt + " : non_fetch 서버 연동");
    res.render("non_fetch", { cnt });
});

// fetch : 데이터만 주고받는 방식(페이지를 주고 받지않음)
app.get("/fetch01", (req, res)=>{
    cnt++;
    console.log(cnt + " : fetch01 서버 연동");
    res.render("fetch01");
});


app.get("/get_count", (req, res)=>{
    cnt++;
    console.log(cnt + " : get_count 서버 연동");
    res.json({ cnt : cnt });
    // json: 데이터를 보내주는 방식 (문자열을 돌려주는 형식)
});

app.get("/fetch_count", (req, res)=>{
    res.render("fetch_count");
});

app.get("/rest", (req, res)=>{
    res.render("rest");
});

//get, post, put, delete
app.get("/test", (req, res)=>{
    res.json("get 데이터를 요청할 때");
});
app.post("/test", (req, res)=>{
    res.json("post 데이터를 추가할 때");
});
app.put("/test", (req, res)=>{
    res.json("put 데이터를 수정할 때");
});
app.delete("/test", (req, res)=>{
    res.json("delete 데이터를 삭제할 때");
});

app.listen(3000, ()=>{console.log("3000연동")});