<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
namskara guru
  helu guru "Hello bhai";
aythu guru

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```



<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>namskara guru</code> is the entrypoint for the program and all program must end with <code>aythu guru</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

namskara guru
// Write code here
aythu guru

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>nodu guru</code>.</p>

```

namskara guru
  nodu guru a = 10;
  nodu guru b = "two";
  nodu guru c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
aythu guru
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla. nija and sullu</code> are the boolean values.</p>

```

namskara guru
  nodu guru a = 10;
  nodu guru b = 10 + (15*20);
  nodu guru c = "two";
  nodu guru d = 'ok';
  nodu guru e = nalla;
  nodu guru f = nija;
  nodu guru g = sullu;
aythu guru
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>helu guru</code> to print anything to console.</p>

```

namskara guru
  helu guru "Hello World";
  nodu guru a = 10;
  {
    nodu guru b = 20;
    helu guru a + b;
  }
  helu guru 5, 'ok', nalla , nija , sullu;
aythu guru
```

<h3 align="center">Conditionals</h3>
<p align="center">GuruLang supports simple if else construct , <code>guru eega</code> block will execute if condition is <code>nija</code> and <code>illandre guru</code> block will execute if condition is <code>sullu</code>.</p>

```

namskara guru
  nodu guru a = 10;
  guru eega (a < 25) aadre{
   helu guru "a is less than 25";
  } illandre guru {
   helu guru "a is greater than or equal to 25";
  }
aythu guru
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>guru ellivargu</code> blocks are executed as long as a specified condition evaluates to nija. If the condition becomes <code>sullu</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>saak bidu guru</code> to break the loop and <code className="language-cpp">mundhe nodu guru</code> to continue within loop.</p>


```

namskara guru
  nodu guru a = 0;
  guru ellivargu (a < 10) {
   a += 1;
   guru eega (a == 5) aadre{
    helu guru "andar se helu guru ", a;
    mundhe nodu guru;
   }
   guru eega (a == 6) aadre{
    saak bidu guru;
   }
   helu guru a;
  }
  helu guru "done";
aythu guru
```



