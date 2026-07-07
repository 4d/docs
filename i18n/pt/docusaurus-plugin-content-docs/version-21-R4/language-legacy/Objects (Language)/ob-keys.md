---
id: ob-keys
title: OB Keys
slug: /commands/ob-keys
displayed_sidebar: docs
---

<!--REF #_command_.OB Keys.Syntax-->**OB Keys** ( *objeto* : Object ) : Collection<!-- END REF-->
<!--REF #_command_.OB Keys.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594; | Objeto a retornar os nomes de propriedade |
| Resultado | Collection | &#8592; | Coleção de nomes de propriedade (strings) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|18 R3|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OB Keys.Summary-->O comando **OB Keys** retorna uma coleção de strings contendo todos os nomes de propriedade enumeráveis do *objeto*.<!-- END REF--> 

Apenas os nomes de propriedade de primeiro-nível são retornados (nomes de propriedade de sub-objetos não são retornados). A ordem dos nomes dentro da coleção retornada seguem a ordem de definição das propriedades

## Exemplo 

Se quiser uma coleção com todos os nomes de propriedade de primeiro-nível de um objeto:

```4d
 var $person : Object
 var $col : Collection

 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Keys($person)

 //$col[0]="lastName"
  //$col[1]="firstName"
  //$col[2]="children"


```

## Ver também 

[OB Entries](../commands/ob-entries)  
[OB Values](../commands/ob-values)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1719 |
| Thread-seguro | no |


