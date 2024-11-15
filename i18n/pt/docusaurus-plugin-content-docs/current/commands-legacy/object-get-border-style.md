---
id: object-get-border-style
title: OBJECT Get border style
slug: /commands/object-get-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get border style.Syntax-->**OBJECT Get border style** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get border style.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especifica, objeto é um nome de objeto (cadeia) Se omite, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se for especificado *) ou<br/>Campo ou variável (se for omitido *) |
| Resultado | Integer | &#8592; | Estilo de linha de borde |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get border style.Summary-->O comando **OBJECT Get border style** devolve o estilo de linha de borde do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF-->

Pode definir o estilo de linha do borde para um objeto em modo de desenho utilizando a lista de propriedades, ou utilizando o comando [OBJECT SET BORDER STYLE](object-set-border-style.md).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).

O comando devolve um valor que corresponde ao estilo da linha fronteira. Pode comparar o valor recebido com as seguintes constantes, que se encontram no tema "*Propriedades dos objetos* ":

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

[OBJECT SET BORDER STYLE](object-set-border-style.md)  