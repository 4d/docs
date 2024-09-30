---
id: c-variant
title: C_VARIANT
slug: /commands/c-variant
displayed_sidebar: docs
---

<!--REF #_command_.C_VARIANT.Syntax-->**C_VARIANT** ( {*metodo* ;} *variável* {; *variável2* ; ... ; *variávelN*} )<!-- END REF-->
<!--REF #_command_.C_VARIANT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | nome opcional do método |
| variável | Variável | &#x1F852; | Nome das variáveis a declarar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.C_VARIANT.Summary-->**C\_VARIANT** torna cada variável especificada para o tipo de variável Variant.<!-- END REF--> Variáveis Variant podem conter qualquer um desses tipos de dados 4D : BLOB, Booleano, Coleção, Data, InteiroLongo, Objeto, Imagem, Ponteiro, Real, Texto, Hora, Null, Undefined.

A primeira forma do comendo, na qual o parâmetro opcional *método* NAO é passado, é usada para declarar e dar tipo para qualquer processo, interprocesso ou variaável local.  

**Nota:** Esta forma pode ser usada em bancos de dados interpretados e compilados.  

A segunda forma do comando, na qual o parâmetro opcional *método* É passado, é usada para pré-declarar ao compilador o resultado ou os parâmetros ($0, $1, $2 etc) para um método. Use este formulário do comando para pular a fase de digitação de variáveis enquanto compila um banco dedos, poupando tempo de compilação

**AVISO** Usar o tipo Variant ao invés de um tipo fixo pode reduzir a  performance.

##### Advanced Use 

The syntax **C\_VARIANT**(${...}) lets you declare a variable number of parameters of the same type, if they are the last parameters for the method. For example, the declaration **C\_VARIANT**(${5}) tells 4D and the compiler that beginning with the fifth parameter, the method can receive a variable number of parameters of that type. For more information, see the *Parameter indirection* section.

#### Exemplo 

Para verificar o tipo e valor de uma variável variant:

```4d
 C_VARIANT($var)
 C_LONGINT($vt)
 $var:="test"
 $vt:=Type($var) //$vt="Is variant"
 $vt:=Value type($var) //$vt="Is text"
```
