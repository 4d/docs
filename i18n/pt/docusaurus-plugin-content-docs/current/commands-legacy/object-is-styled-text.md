---
id: object-is-styled-text
title: OBJECT Is styled text
slug: /commands/object-is-styled-text
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Is styled text.Syntax-->**OBJECT Is styled text** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Is styled text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou<br/>Campo ou variável (se omitido *) |
| Resultado | Boolean | &#8592; | True se o objeto é um texto multi estilo, False em caso contrário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Is styled text.Summary-->O comando **OBJECT Is styled text** devolve **True** se a opção "Multiestilo" está selecionada para o(s) objeto(s) designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->

A opção "Multiestilo" permite utilizar áreas de texto enriquecido incluindo variações de estilo individuais. Para obter mais informação, consulte a seção *Multiestilo (área Rich text)* no manual de *Desenho*. 

Os objetos multiestilo se podem administrar por programação utilizando os comandos do tema "*Texto multi estilo*":

Ao passar o parâmetro opcional *\** se indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referencia de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).

**Nota:** o comando **OBJECT Is styled text** devolve **True** quando se aplica a uma área 4D Write Pro.

#### Exemplo 

Um formulário contém um campo representado por dois objetos diferentes, um dos objetos tem a propriedade "Multi-estilo" marcada, e o outro não. Você pode escrever:

```4d
 $Style:=OBJECT Is styled text(*;"Styled_text")
  // devolve True ( se a opção "Multi-estilo" está selecionada)
 
 $Style:=OBJECT Is styled text(*;"Plain_text")
  // devolve False (se a opção "Multi-estilo" não está selecionada)
```

#### Ver também 

*Texto multi estilo*  