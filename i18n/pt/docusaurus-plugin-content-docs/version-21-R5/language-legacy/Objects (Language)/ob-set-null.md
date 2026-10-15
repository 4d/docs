---
id: ob-set-null
title: OB SET NULL
slug: /commands/ob-set-null
displayed_sidebar: docs
---

<!--REF #_command_.OB SET NULL.Syntax-->**OB SET NULL** ( *objeto* : Object ; *propriedade* : Text )<!-- END REF-->
<!--REF #_command_.OB SET NULL.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594; | Objeto estruturado |
| propriedade | Text | &#8594; | Nome da propriedade onde o valor nulo será aplicado |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15|Modificado|
|14|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OB SET NULL.Summary-->O comando **OB SET NULL** armazena o valor **null** no objeto de linguagem designado pelo parâmetro *objeto* .<!-- END REF-->deve ter sido definido utilizando o comando *C\_OBJECT* ou designar um campo objeto 4D..  
  
No parâmetro *propriedade*, passe a etiqueta da propriedade na que deseja armazenar o valor **null**. Se a propriedade já existe em *objeto*, seu valor se atualiza. Se não existe, é criada.  
Tenha em conta que o parâmetro *propriedade* tem em conta as maiúsculas e minúsculas.

## Exemplo 

Queremos colocar o valor nulo na propriedade "idade" para Lea:

```4d
 var $ref : Object
 OB SET($ref;"nome";"Lea";"idade";4)
  // $ref = {"nome":"Lea","idade":4}
 ...
 OB SET NULL($ref ;"idade")
  // $ref = {"nome":"Lea","idade":null}
```

## Ver também 

[Null](../commands/null)  
[OB GET PROPERTY NAMES](../commands/ob-get-property-names)  
[OB SET](../commands/ob-set)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1233 |
| Thread-seguro | yes |


