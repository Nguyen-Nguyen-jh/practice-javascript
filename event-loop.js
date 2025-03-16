setTimeout(function () {
  console.log('Set timeout');
}, 0);
var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 0);
});
setTimeout(function () {
  console.log('setTimeout 2');
}, 0);
for (var i = 0; i < 10; i++) {
  (function (j) {
    p1.then(function (value) {
      console.log('promise then - ' + j);
    });
  })(i);
}

/* 
  *** Kết quả:
  Set timeout
  promise then - 0
  ...
  promise then - 9
  setTimeout 2

  *** Giải thích: Các microtask queue sẽ được xử lý trước callback queue (trừ khi các callback queue đc đưa vào 
                  trước microtask queue thì nó vẫn sẽ đc chạy trước).
  - Khi JavaScript bắt đầu thực thi đoạn mã, các setTimeout được đưa vào callback queue.
  - Promise p1 được khởi tạo và các .then() của nó được thêm vào microtask queue khi promise được giải quyết.
  - Event loop sẽ tiếp tục chạy và xử lý từng tác vụ:
    + setTimeout đầu tiên sẽ vào callback queue trước các .then().
    + Sau khi call stack trống, event loop sẽ xử lý callback queue, nên Set timeout được in ra đầu tiên (vì lúc
      nay các microtask queue vẫn chưa được thêm vào).
    + Sau đó, microtask queue được xử lý và các promise then - j sẽ in ra.
    + Cuối cùng, callback queue sẽ tiếp tục với setTimeout 2.
*/
