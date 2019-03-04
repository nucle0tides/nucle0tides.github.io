---
layout: post
title: Experiments with Rust, WebAssembly, and JavaScript
excerpt:
modified: 2019-03-04
pinned: true
tags: [programming, wasm, rust, javascript]
categories: [programming, projects]
---

While on my journey to learn Rust, I've created a couple Rust and wasm projects!

The first is [Wasmdoro](https://github.com/nucle0tides/wasmdoro), a pomodoro application.
The Rust-side of this application defines a `WasmdoroTimer` struct that contains all of the timer logic.
This timer is exported as a wasm module. JavaScript is used to create a new WasmdoroTimer() from that and module defines all of the user interaction around that timer.
The UI was put together using Materialize.

Wasmdoro Timer:
![wasmdoro timer](https://gph.is/g/E3X9BNa)

Wasmdoro Timer stats:
![wasmdoro modal](https://gph.is/g/aQnblRZ)

The second is 🅱alls (yes, the emoji is important), a canvas animation.
