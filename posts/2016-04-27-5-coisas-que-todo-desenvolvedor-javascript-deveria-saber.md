---
title: 5 coisas que todo desenvolvedor JavaScript deveria saber
description: >-
  A cada dia que passa novos frameworks JavaScript são lançados fazendo com que
  muitas pessoas negligenciem conceitos básicos da linguagem.
date: '2016-04-27 10:00:00 -0300'
thumbnail: /assets/img/javascript.jpg
category: JS
---

### Introdução

A cada dia que passa novos frameworks JavaScript são lançados fazendo com que muitas pessoas (inclusive eu) negligenciem conceitos básicos da linguagem. Como parte do meu estudo, resolvi fazer esse "resumão" de alguns conceitos que considero fundamentais para um desenvolvedor JavaScript.

### 1. Escopos

Escopos em JavaScript são diferentes da maioria das outras linguagens cuja sintaxe é influenciada pela linguagem C. Nessas linguagens, o escopo é delimitado por blocos (geralmente criados por meio de chaves).

Em JavaScript, escopos são declarados por **funções**, e não por blocos. O escopo de uma declaração que é criado dentro de um bloco não é encerrado (como ocorre em outras linguagens) no fim do bloco.

Considere o seguinte código:

```javascript
if (window) {
  var x = 123
}
console.log(x)
```

Se você veio de outras linguagens e começou a estudar JavaScript agora, provavelmente vai esperar que o valor resultante seja **_undefined_**. Mas se executarmos o código, o valor resultante será **123**, pois o JavaScript não encerra escopos ao final de blocos.

### 2. Hoisting

Vejamos o seguinte exemplo:

```javascript
var x = 123
function f() {
  console.log(x)
  var x = 321
  console.log(x)
}
f()
```

Você provavelmente espera que será impresso **123** no primeiro log e **321** no segundo. No entanto, o primeiro log será **_undefined_**. Isso ocorre porque, dentro da função, o **escopo local** é mais importante que o **escopo global**. Variáveis locais sobrescrevem qualquer variável global com o mesmo nome. No primeiro log, a variável **x** ainda não foi definida ainda, mas existe no espaço local devido ao comportamento especial denominado **_hoisting_**.

Quando novas funções são declaradas, todas as variáveis declaradas dentro da função (não importando onde estejam) são **movidas** (_hoisted_ – que significa içar, suspender) para o topo da função. No entanto, apenas a variável é movida para o topo, o que significa que quaisquer atribuições permanecem onde estão. No exemplo, a declaração da variável local foi içada para o topo, mas sua atribuição não. Portanto, o código equivalente seria:

```javascript
var x = 123
function f() {
  var x
  console.log(x) // undefined
  x = 321
  console.log(x) // 321
}
f()
```

### 3. Invocações

No JavaScript, há quatro maneiras de invocarmos uma função, onde cada tipo de invocação tem enorme impacto sobre como o código dentro dela opera, principalmente no parâmetro **_this_**. Tais maneiras são:

- Como uma **função**, na qual é invocada de modo direto;
- Como um **método**, o que associa a invocação a um objeto, habilitando a programação orientada a objetos;
- Como um **construtor**, no qual um novo objeto é instanciado;
- Por meio de seus métodos <code>apply()</code> ou <code>call()</code>.

<!-- Antes de analisarmos essas quatro formas, é importante ressaltar alguns detalhes. -->

JavaScript permite que o número de argumentos seja diferente do número de parâmetros. Argumentos fornecidos em quantidade maior que o número de parâmetros são ignorados. Se houver mais parâmetros que argumentos, os parâmetros que não possuem argumentos serão definidos como **_undefined_**.

Além disso, todas as invocações de funções também recebem dois parâmetros implícitos: **_arguments_** e **_this_**. Eles podem ser referenciados dentro da função da mesma maneira que qualquer outro parâmetro nomeado explicitamente.

### 4. Closures

Closure é o escopo criado quando a função é declarada que permite a função acessar e manipular variáveis externas a ela. Isso permite que uma função declarada seja chamada a qualquer momento do futuro, mesmo depois de o escopo no qual ela foi declarada ter ido embora.

Vamos analisar o seguinte exemplo:

```javascript
var outerValue = '123'
var later

function outerFunction() {
  var innerValue = '321'

  function innerFunction() {
    console.log(outerValue)
    console.log(innerValue)
  }

  later = innerFunction
}

outerFunction()
later()
```

No exemplo, a função interna é executada depois da função interna por meio de uma referência feita a variável global **_later_**. Quando a função interna é executada, o escopo da função externa terá desaparecido e não estará visível no momento que invocarmos a função <code>later()</code>. Isso faz acreditarmos que será impresso **_undefined_** pela variável **_innerValue_**. No entanto, a resposta será **321**. Isso acontente pois, ao declaramos <code>innerFunction()</code>, uma **closure** foi criada.

Clousures abrangem não somente a declaração da função, mas também todas as variáveis que estão em escopo no momento da declaração. Mesmo que o escopo no qual ela foi declarada tenha desaparecido, ela tem acesso ao escopo original no qual foi declarada por meio de sua closure.

Portanto, a closure cria uma espécie de "bolha de segurança" da função e das variáveis que estão em escopo no momento da declaração, de modo que a função tenha tudo que necessite para ser executada.

### 5. Prototype

Protótipo representa uma forma conveniente de definirmos tipos de objetos. Ele permite definir propriedades e funcionalidades que serão aplicadas as instâncias de objetos. Em outras palavras, protótipos se assemelham a classes em linguagens orientadas a objetos. Quando você usa o **_prototype_**, você permite que todas as instâncias tenham acesso aos métodos criados. Tais instâncias devem ser inicializadas por meio do comando **_new_**,.

### Referências

1. RESIG, John; BIBEAULT, Bear. **Secrets of the JavaScript Ninja**. Manning, 2013.
2. STEFANOV, Stoyan. **Object-Oriented JavaScript**. Packt Publishing Ltd, 2008.
