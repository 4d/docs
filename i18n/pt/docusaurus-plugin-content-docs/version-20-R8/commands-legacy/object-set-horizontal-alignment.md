---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( {* ;} *objeto* ; *alinhamento* )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| alinhamento | Integer | &#8594;  | Código de alinhamento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->O comando **OBJECT SET HORIZONTAL ALIGNMENT** permite determinar o tipo de alinhamento aplicado ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, não passe uma string, mas a referência de um campo ou de variável (campo ou variável de tipo objeto unicamente).

Passe no parâmetro *alinhamento* uma das constantes do tema *Propriedades dos objetos* :

| Constante     | Tipo          | Valor | Comentário                                                        |
| ------------- | ------------- | ----- | ----------------------------------------------------------------- |
| Align center  | Inteiro longo | 3     |                                                                   |
| Align default | Inteiro longo | 1     |                                                                   |
| Align left    | Inteiro longo | 2     |                                                                   |
| Align right   | Inteiro longo | 4     |                                                                   |
| wk justify    | Inteiro longo | 5     | Disponível para áreas 4D Write Pro e áreas de introdução de texto |

**Nota:** a constante wk justify está disponível no tema "*4D Write Pro*".

Os objetos de formulário aos quais pode aplicar este comando são os seguintes:

* Áreas de rolagem
* Combo boxes
* Textos estáticos
* Áreas de grupos
* Menus suspensos/Listas suspensas
* Campos
* Variáveis
* List box
* Colunas de list box
* Cabeçalhos de list box
* Rodapés de list box
* áreas *Referência 4D Write Pro*

#### Ver também 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 706 |
| Thread-seguro | &cross; |


