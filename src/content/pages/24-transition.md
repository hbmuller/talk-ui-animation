## `transition`

* Lets you decide how one or more (or all) CSS properties will behave when changed
* Basically, tells how an element goes from one state to another (or many others)

```CSS
:root {
  --duration: 400ms;
}

.my-modal {
  opacity: 0;
  visibility: hidden;
  transition: visibility 0ms var(--duration), opacity var(--duration) 0ms;
}

.my-modal.open {
  opacity: 1;
  visibility: visible;
  transition: visibility 0ms 0ms, opacity var(--duration) 0ms;
}
```
