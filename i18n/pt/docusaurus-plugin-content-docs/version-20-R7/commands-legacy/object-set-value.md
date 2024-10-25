---
id: object-set-value
title: OBJECT SET VALUE
slug: /commands/object-set-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VALUE.Syntax-->**OBJECT SET VALUE** ( *nomObjeto* ; *valor* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomObjeto | Text | &#8594;  | Nome de objeto |
| valor | any | &#8594;  | Novo valor para a fonte de dados do objeto formulário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Exemplo 1 

<!--REF #_command_.OBJECT SET VALUE.Summary-->**OBJECT SET VALUE** estabelece *valor* da fonte de dados atual para os objetos formulário determinados pelo parâmetro *nomObjeto*.<!-- END REF-->.

No parâmetro *nomObjeto*, passe o nome de um objeto formulário (uma string). Pode estabelecer o valor de objetos formulário múltiplos usando um caractere coringa (“@”).

O parâmetro *value* permite que passe um novo valor (qualquer tipo) para a fonte de dados do objeto de formulário.

**Nota**: Se a fonte de dados for uma expressão não atribuível **OBJECT SET VALUE** não faz nada. Para saber mais veja *assignable vs non-assignable expressions*.

#### Exemplo 2 

Se quiser o valor da data source de um objeto formulário, obtenha seu nome e estabeleça um novo valor:

```4d
 var $value : Variant
 
 $value:=OBJECT Get value(OBJECT Get name(Object current))&NBSP; //verifique o valor estabelecido 
 
 OBJECT SET VALUE(OBJECT Get name(Object current);$value+10)&NBSP; //encontre o nome do objeto formulário e estabeleça o valor para 50
```

#### Ver também 

[OBJECT Get value](object-get-value.md)  