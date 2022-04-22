var f = async function() {
  var katexMath = (function() {
    var maths = document.querySelectorAll('.arithmatex'),
      tex;

    for (var i = 0; i < maths.length; i++) {
      tex = maths[i].textContent || maths[i].innerText;
      if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
        katex.render(tex.slice(2, -2), maths[i], { 'displayMode': false });
      } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
        katex.render(tex.slice(2, -2), maths[i], { 'displayMode': true });
      }
    }
    console.log("math rendered")
  });

  while (document.body == null) {
    console.log("Still no body")
    await new Promise(r => setTimeout(r, 20));
  }
  // select the target node
  var target = document.querySelector('body');

  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    katexMath()
    console.log("Rendered math")
  });

  // configuration of the observer:
  var config = { attributes: false, childList: true, subtree: true, characterData: false };

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
}
f()
