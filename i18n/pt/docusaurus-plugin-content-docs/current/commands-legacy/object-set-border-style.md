---
id: object-set-border-style
title: OBJECT SET BORDER STYLE
slug: /commands/object-set-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET BORDER STYLE.Syntax-->**OBJECT SET BORDER STYLE** ( {* ;} *objeto* ; *estiloBorde* )<!-- END REF-->
<!--REF #_command_.OBJECT SET BORDER STYLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| estiloBorde | Integer | &#8594;  | Estilo de linha de borde |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET BORDER STYLE.Summary-->O comando **OBJECT SET BORDER STYLE** modifica o estilo de linha do borde do objeto(s) designada pelos parâmetros   *objeto* e *\** .<!-- END REF-->  
  
A propriedade "Border Line Style" modifica a aparência dos contornos de objetos. Para obter mais informação, consulte *Estilo da Borda* no manual de *Desenho*.  
  
Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em lugar de uma cadeia (campo ou variável de objeto unicamente).  
  
No parâmetro *estiloBorde*, passe o valor do estilo da linha fronteira que deseja aplicar ao objeto. Pode passar uma das seguintes constantes, que se encontra no tema "*Propriedades dos objetos* ":

| Constante     | Tipo          | Valor | Comentário                                                                                                       |
| ------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| Border Dotted | Inteiro longo | 2     | Os objetos aparecem moldados com uma linha pontilhada de 1-pt.                                                   |
| Border Double | Inteiro longo | 5     | Os objetos aparecem moldados com uma linha dupla, ou seja, duas linhas contínuas de 1-pt. separadas por um píxel |
| Border None   | Inteiro longo | 0     | Os objetos aparecem sem borde                                                                                    |
| Border Plain  | Inteiro longo | 1     | Os objetos aparecem moldado com uma linha de borde contínua de 1-pt.                                             |
| Border Raised | Inteiro longo | 3     | Os objetos aparecem com um efeito 3D (relieve)                                                                   |
| Border Sunken | Inteiro longo | 4     | Os objetos aparecem moldados com um efeito 3D afundado (releve inverso)                                          |
| Border System | Inteiro longo | 6     | A linha do borde se desenha em função das especificações gráficas do sistema                                     |

#### Ver também 

[OBJECT Get border style](object-get-border-style.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1262 |
| Thread-seguro | &check; |
| Proibido no servidor ||


