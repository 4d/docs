---
id: is-in-set
title: Is in set
slug: /commands/is-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Is in set.Syntax-->**Is in set** ( *conjunto* : Text ) : Boolean<!-- END REF-->
<!--REF #_command_.Is in set.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto | Text | &#8594; | Nome do conjunto a testar |
| Resultado | Boolean | &#8592; | Registro atual está no conjunto (TRUE) ou Registro atual não está no conjunto (FALSE) |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.Is in set.Summary-->Is in set testa se o registro atual da tabela está em *conjunto*.<!-- END REF--> A função Is in set retorna TRUE se o registro atual da tabela está em conjunto, e FALSE se o registro atual da tabela não está em *conjunto*.

## Exemplo 

O seguinte exemplo é um método de objeto de um botão que testa se o registro atual está no conjunto dos melhores clientes:  

```4d
 If(Is in set("Melhores")) // Testar se é um bom cliente
    ALERT("É um dos melhores clientes.")
 Else
    ALERT("Não é um dos melhores clientes.")
 End if
```
  
  

## Ver também 

[ADD TO SET](../commands/add-to-set)  
[REMOVE FROM SET](../commands/remove-from-set)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 273 |
| Thread-seguro | yes |


