---
id: st-get-url
title: ST GET URL
slug: /commands/st-get-url
displayed_sidebar: docs
---

<!--REF #_command_.ST GET URL.Syntax-->**ST GET URL** ( {* ;} *objeto* ; *textoURL* ; *enderecoURL* {; *inicioSel* {; *fimSel*}} )<!-- END REF-->
<!--REF #_command_.ST GET URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| textoURL | Text | &#8592; | Texto visível do URL |
| enderecoURL | Text | &#8592; | Endereço do URL |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST GET URL.Summary-->O comando **ST GET URL** devolve a etiqueta e o endereço da primeira URL detectada no campo ou a variável de texto multi estilo designado pelo parâmetro *objeto*.<!-- END REF--> 

A etiqueta e o endereço se devolvem nos parâmetros *textoURL* e *endereçoURL*. Se a seleção não contém um URL, se devolvem cadeias vazias nestes parâmetros.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução, se o objeto tem o foco, o comando devolve a informação do objeto que se está editando, e se o objeto não tem o foco, o comando devolve a informação da fonte de dados do objeto (variável ou campo).  
Se omitido o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável em lugar de uma cadeia. Durante a execução, o comando devolve a informação da variável ou do campo.

Os parâmetros opcionais *inicioSel* e *fimSel* designam uma seleção de texto em *objeto*. Os valores *inicioSel* e *fimSel* expressam uma seleção de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes.  
* Se passar *inicioSel* e *fimSel*, **ST GET URL** procura o URL dentro desta seleção.
* Se passar unicamente *inicioSel* ou se o valor de *fimSel* é maior que o número total de caracteres no *objeto*, o comando procura o URL entre *inicioSel* e o final do texto .
* Se omitir *inicioSel* e *fimSel*, o comando procura o URL dentro da seleção de texto atual.

4D oferece constantes pré definidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":  
  
| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
**Nota**: se *inicioSel* é maior que *fimSel* (exceto quando *fimSel* é 0) , o comando não faz nada e a variável OK toma o valor 0.

#### Exemplo 

Quando há um evento de duplo clique, se comprova que não existe em realidade um URL, e se é assim, se mostra um diálogo no que recuperou seus valores para que o usuário pode modificar eles:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST URL type) //URL
          ST GET URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
          $winRef:=Open form window("Dial_InsertURL";Movable form dialog box;Horizontally centered;Vertically centered;*)
          SET WINDOW TITLE("URL settings")
          DIALOG("Dial_InsertURL")
          If(OK=1)
             ST INSERT URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;startSel+1)
          End if
       End if
 End case
```

#### Ver também 

[ST INSERT URL](st-insert-url.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1288 |
| Thread-seguro | &cross; |


