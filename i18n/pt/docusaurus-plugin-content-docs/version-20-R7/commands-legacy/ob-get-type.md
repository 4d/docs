---
id: ob-get-type
title: OB Get type
slug: /commands/ob-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OB Get type.Syntax-->**OB Get type** ( *objeto* ; *propriedade* ) : Integer<!-- END REF-->
<!--REF #_command_.OB Get type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Nome da propriedade |
| Resultado | Integer | &#8592; | Tipo de valor da propriedade |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Get type.Summary-->O comando **OB Get type** devolve o tipo do valor associado a *propriedade* do *objeto*.<!-- END REF-->deve ter sido definido utilizando o comando [C\_OBJECT](c-object.md) ou designar um campo objeto 4D.

No parâmetro *propriedade*, passe a etiqueta da propriedade cujo tipo quer conhecer.  
Tenha em conta que o parâmetro *propriedade* leva em conta as maiúsculas e minúsculas.  
  
O comando devolve um inteiro longo que indica o tipo de valor. Pode comparar este valor com as seguintes constantes, que se encontram no tema "*Tipos de campos e variáveis*":

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is Boolean    | Inteiro longo | 6     |
| Is collection | Inteiro longo | 42    |
| Is date       | Inteiro longo | 4     |
| Is null       | Inteiro longo | 255   |
| Is object     | Inteiro longo | 38    |
| Is real       | Inteiro longo | 1     |
| Is text       | Inteiro longo | 2     |
| Is undefined  | Inteiro longo | 5     |
  
  
Nota: para os atributos imagem, o comando devolve Is object.

#### Exemplo 

Queremos obter o tipo de valores padrão:

```4d
 var $ref : Object
 OB SET($ref;"nome";"smith";"idade";42)
 $type:=OB Get type($ref;"nome") //$type devolve 2
 $type2:=OB Get type($ref;"idade") //$type2 devolve 1
```

#### Ver também 

[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[Value type](value-type.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1230 |
| Thread-seguro | &check; |


