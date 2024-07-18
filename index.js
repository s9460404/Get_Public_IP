const express = require('express');
const requestIp = require('request-ip');

const app = express();
const port = 3000;

// 設置靜態文件夾（可選）
app.use(express.static('public'));

// 中間件，獲取客戶端的 IP 地址
app.use(requestIp.mw());

// 路由，返回公共 IP 地址
app.get('/', (req, res) => {
    const ipAddress = req.clientIp; // 從中間件獲取 IP 地址
    res.send(`<h1>Your Public IP Address:</h1><p>${ipAddress}</p>`);
});

// 監聽端口
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});