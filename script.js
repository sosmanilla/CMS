const AS_URL_BASE =
  "https://script.google.com/macros/s/AKfycbyxY-u5R3KR7gB8k8DrqGm18wFB0WkXTxak-liAXGnxhQooyjdfRvn1z9E6Ix8pzAZt/exec";

var url = document.location.href;
var k = url.substr(url.lastIndexOf("k=") + 2);

if (k) {
  fetch(AS_URL_BASE + "?k=" + k)
    .then((r) => r.text())
    .then((r) => {
      console.log(r);
      //document.write(r);
      if (r) {
        document.location.replace(r);
      }
    })
    .catch((err) => console.log(err));
}
