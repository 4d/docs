---
id: object-get-vertical-alignment
title: OBJECT Get vertical alignment
slug: /commands/object-get-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get vertical alignment.Syntax-->**OBJECT Get vertical alignment** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get vertical alignment.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| Resultado | Integer | &#8592; | Tipo de alienação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get vertical alignment.Summary-->O comando **OBJECT Get vertical alignment** devolve um valor indicando o tipo de alinhamento vertical aplicada ao objeto designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.

**Nota**: se aplica este comando a um conjunto de objetos, só é devolvido o valor de alinhamento do último objeto.  
  
O valor devolvido corresponde a uma das seguintes constantes, do tema *Propriedades dos objetos* :

| Constante    | Tipo          | Valor |
| ------------ | ------------- | ----- |
| Align bottom | Inteiro longo | 4     |
| Align center | Inteiro longo | 3     |
| Align top    | Inteiro longo | 2     |

  
O alinhamento vertical pode ser aplicado aos seguintes tipos de objetos de formulário:
* list boxes,
* colunas de list box,
* cabeçalhos e rodapés de list box.

#### Ver também 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1188 |
| Thread-seguro | &check; |
| Proibido no servidor ||


