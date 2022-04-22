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
});
// setTimeout(function() {
//   katexMath()
//   console.log("math rendered")
// }, 4000)
let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (!mutation.addedNodes) return
    katexMath()
  })
})

observer.observe(document.body, {
  childList: true
  , subtree: true
  , attributes: false
  , characterData: false
})
