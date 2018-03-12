## `animation`

* Lets you do pretty much the same as `transition`, but setting steps along the Raleway
* Allows looping, reversing animation, etc

```CSS
.my-button {
  background-image: linear-gradient(30deg, transparent, rgba(255, 255, 255, 0.15));
  background-position: -100% 0;
  background-repeat: no-repeat;
}

.my-button:hover {
  animation: hover-effect 1.5s infinite;
}

@keyframes hover-effect {
  0% { background-position: -100% 0; }
  15% { background-position: 100% 0; }
  100% { background-position: 100% 0; }
}
```
