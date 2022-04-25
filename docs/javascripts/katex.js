(function() {
  'use strict';

  var katexMath = (function() {
    var maths = document.querySelectorAll('.arithmatex'),
      tex;

    const macros = {
      '\\xn': 'x_1, \\ldots, x_n',
      '\\Xn': 'X_1, \\ldots, X_n',
      '\\mean': '\\overline{#1}',
      '\\med': '\\operatorname{Med}',
      '\\cov': '\\operatorname{Cov}',
      '\\var': '\\operatorname{Var}',
      '\\abs': '\\lvert #1 \\rvert',
      '\\given': '\\,\\vert\\,',
      '\\P': '\\operatorname{P}'
    }

    for (var i = 0; i < maths.length; i++) {
      tex = maths[i].textContent || maths[i].innerText;
      if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
        katex.render(tex.slice(2, -2), maths[i], { 'displayMode': false, 'globalGroup': true, macros });
      } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
        katex.render(tex.slice(2, -2), maths[i], { 'displayMode': true, 'globalGroup': true, macros });
      }
    }
  });

  (function() {
    var onReady = function onReady(fn) {
      if (window.document$) {
        window.document$.subscribe(fn)
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
      } else {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "interactive") {
            fn();
          }
        });
      }
    };

    onReady(function() {
      if (typeof katex !== "undefined") {
        katexMath();
      }
    });
  })();

}());
