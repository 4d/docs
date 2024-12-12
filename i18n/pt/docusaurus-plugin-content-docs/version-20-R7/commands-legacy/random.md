---
id: random
title: Random
slug: /commands/random
displayed_sidebar: docs
---

<!--REF #_command_.Random.Syntax-->**Random**  : Integer<!-- END REF-->
<!--REF #_command_.Random.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número inteiro aleatório |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Random.Summary-->Random retorna um valor inteiro aleatório entre 0 e 32 767 (inclusive).<!-- END REF-->

Para definir uma faixa de inteiros, utilize esta fórmula:

```4d
 (Random%(vEnd-vStart+1))+vStart
```

O valor *vStart* é o primeiro número do intervalo, e o valor *vEnd* é o último.

#### Exemplo 

O exemplo a seguir atribui um valor aleatório entre 10 e 30 à variável *vlResult*:

```4d
 vlResult:=(Random%21)+10
```
