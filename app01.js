const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/", (req, res)=>{
    const pwd = "test";
    const changePwd = bcrypt.hashSync(pwd, 10);
    // 10 -> salt 값 (높아지면 높을수록 암호화처리를 어렵게함)
    console.log("평문 비밀번호: ", pwd);
    console.log("변경 비밀번호: ", changePwd);
    console.log("비밀번호 비교: ", pwd == changePwd); //false
    
    // compareSync(평문, 암호화된 값): 암호화된 비밀번호와 비교해줌
    const result = bcrypt.compareSync(pwd, changePwd);
    console.log("비밀번호 비교: ", result); // true

    res.send("비밀번호");
});

app.listen(3000, ()=>{console.log("3000연동")});