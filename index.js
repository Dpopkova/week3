<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Попкова Дарья - Задание 3</title>
</head>
<body>
<div>
    <label for="inp">Введите текст</label>
    <input type="text" id="inp">
    <button id="bt">Отправить</button>
    <script type="text/javascript">

        const button = document.querySelector('#bt');
        button.addEventListener('click', (evt) => {
            const url = document.querySelector('#inp').value;
            fetch(url).then((res) => res.text()).then((res) => {
                document.querySelector('#inp').value  = res;
            })
        });
    </script>
</div>
</body>
</html> 
 26  index.js 
@@ -1,3 +1,5 @@
const fs = require('fs')
const path = require('path');
require('http')
.Server((req, res) => {
    const CORS = {
@@ -7,17 +9,31 @@ require('http')
        'Access-Control-Allow-Methods': 'GET,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
    };
    

    res.writeHead(200, CORS);

    if (req.url === '/login/') {
        return res.end('itmo283528');
      } else if(req.url === '/sample/') {
      } else if(req.url === '/promise/') {
        return res.end((function task(x) {
          return x * this ** 2
          return new Promise((resolve, reject) => {
            if (x < 18) { resolve('yes')} else { reject('no') }
          })
        }).toString())
      } else if (req.url === '/fetch/') {
        const filePath = path.join(__dirname, 'index.html');

        res.writeHead(200, {
          ...CORS,
          'Content-Type': 'text/html'
        });

        fs.readFile(filePath, (err, html) => {
          res.write(html);
          res.end();
        });
      } else {
        res.end('itmo283528');
      }

    res.end('itmo283528');
})
.listen(process.env.PORT)
