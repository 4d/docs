---
id: uppercase
title: Uppercase
slug: /commands/uppercase
displayed_sidebar: docs
---

<!--REF #_command_.Uppercase.Syntax-->**Uppercase** ( *cadeia* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Uppercase.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cadeia | Text | &#8594;  | Cadeia a converter para maiúsculas |
| * | Operador | &#8594;  | Se passado: manter os acentos |
| Resultado | Text | &#8592; | Cadeia em letras maiúsculas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Uppercase.Summary-->Uppercase devolve uma cadeia de caracteres igual a *cadeia* com todos os caracteres alfabéticos convertidos em maiúsculas.<!-- END REF-->  
  
O parâmetro opcional *\**, se for passado, indica que os eventuais caracteres acentuados presentes em *cadeia* devem ser retornados como caracteres em maiúsculas acentuados. Como padrão, quando se omite este parâmetro, os caracteres acentuados “perdem” seus acentos depois de realizada a conversão.

#### Exemplo 1 

Este exemplo compara os resultados obtidos segundo se passe ou não o parâmetro *\**: 

```4d
 $cadeia:=Uppercase("andré") // $cadeia é igual a "ANDRÉ"
 $string:=Uppercase("andré";*) // $cadeia é igual a "ANDRÉ"
```

#### Exemplo 2 

Ver o exemplo para [Lowercase](lowercase.md "Lowercase").

#### Ver também 

[Lowercase](lowercase.md)  