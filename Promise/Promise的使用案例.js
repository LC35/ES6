<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>迭代器</title>
</head>
<body>
  <script>
     //声明一个对象
     const  zhandui = {
       name: "IG",
       stus: [
               'baonan',
               'ning',
               'jacklove',
               'thyshy',
               'rookie'
       ],
       [Symbol.iterator](){
         //索引变量
         let index = 0;
         let _this = this;
         return {
           next: function (){
             if (index < _this.stus.length){
               const  result = {value: _this.stus[index], done: false}
               index++;
               return result
             }else {
               return {value:undefined,done: true}
             }
           }
         }
       }
     }

     //遍历这个对象
     for (let v of zhandui){
       console.log(v)
     }
  </script>
</body>
</html>