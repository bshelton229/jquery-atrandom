## JQuery-atRandom

Select a single random element from a selector.

Provide a callback function

```js
$(".hero-container .hero-unit").atRandom(function() {
  $(this).addClass('hero-selected').show();
});
```

Or, you can pass a single method as a string
to be called on $(this)

```js
$("ul.myul li").atRandom('show');
```

atRandom() returns the original selector
```js
// This will add the class red to a random li and .show() all of them.
$("li").atRandom(function() { $(this).addClass('red'); }).show();
```
