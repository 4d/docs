---
id: st-get-content-type
title: ST Get content type
slug: /commands/st-get-content-type
displayed_sidebar: docs
---

<!--REF #_command_.ST Get content type.Syntax-->**ST Get content type** ( {* ;} *objeto* {; *inicioSel* {; *fimSel* {; *inicioBloq* {; *fimBloq*}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.ST Get content type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |
| inicioBloq | Integer | &#8592; | Inicio de posição do primeiro tipo da seleção |
| fimBloq | Integer | &#8592; | Fim de posição do primeiro tipo da seleção |
| Resultado | Integer | &#8592; | Tipo de conteúdo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST Get content type.Summary-->O comando **ST Get content type** devolve o tipo de conteúdo encontrado no campo ou a variável de texto multi estilo designada pelo parâmetro *objeto* .<!-- END REF--> 

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução, se o objeto tem o foco, o comando devolve a informação do objeto que se está editando, e se o objeto não tem o foco, o comando devolve a informação da fonte de dados do objeto (variável ou campo).  
Se omitir o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia. Durante a execução, o comando devolve a informação da variável ou do campo.  
  
Os parâmetros opcionais *inicioSel* e *fimSel* designam uma seleção de texto em *objeto*. Os valores *inicioSel* e *fimSel* expressam uma seleção de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes.

* Se passar *inicioSel* e *fimSel*, **ST Get content type** avalia o conteúdo localizado ao interior desta seleção.
* Se passar unicamente *inicioSel* ou se o valor de *fimSel* é maior que o número total de caracteres no *objeto*, o conteúdo localizado entre *inicioSel* e o final do texto.
* Se omitir *inicioSel* e *fimSel*, o conteúdo dentro localizado ao interior da seleção atual de texto se avalia.
4D oferece constantes pré definidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":

| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
**Nota**: Se *inicioSel* é maior que *fimSel* (exceto quando *fimSel* é 0) , o comando não faz nada e a variável OK toma o valor 0.

Os parâmetros opcionais *inicioBloq* e *fimBloq* recuperam a posição do primeiro e último caractere do primeiro bloqueio homogêneo identificado no objeto ou a seleção do objeto. Por exemplo, se a seleção contém uma expressão e a continuação texto plano, *inicioBloq* e *fimBloq* devolverão os limites da expressão. Você pode fazer um bucle para processar todos os bloqueios da seleção.  
  
O comando devolve um valor que designa o tipo de conteúdo identificado. Pode comparar este valor com as seguintes constantes, que se encontram no tema "*Texto multi estilo*": 

| Constante           | Tipo          | Valor | Comentário                                                     |
| ------------------- | ------------- | ----- | -------------------------------------------------------------- |
| ST Expression type  | Inteiro longo | 2     | A seleção contém só uma referência de expressão                |
| ST Mixed type       | Inteiro longo | 3     | A seleção contém pelo menos dois tipos de conteúdos diferentes |
| ST Picture type     | Inteiro longo | 6     | A seleção contém só uma imagem (áreas 4D Write Pro unicamente) |
| ST Plain type       | Inteiro longo | 0     | A seleção contém texto e nenhuma referência                    |
| ST Unknown tag type | Inteiro longo | 4     | A seleção contém só uma etiqueta de tipo desconhecido          |
| ST URL type         | Inteiro longo | 1     | A seleção contém só uma referência de URL                      |
| ST User type        | Inteiro longo | 5     | A seleção contém apenas uma referência personalizada           |

#### Exemplo 

Você deseja mostrar os comandos de um menu contextual baseado no tipo de conteúdo selecionado na área.

```4d
 Case of
    :(Form event code=On Clicked)
  //recuperamos a seleção
       GET HIGHLIGHT(*;"myText";startSel;endSel)
       If(Contextual click&(Macintosh control down=False)) //chama o menu contextual
          If(startSel=endSel) // sem conteúdo selecionado
  //ativamos unicamente certos comandos
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;2)
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;4)
             ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
             ...
          Else // obtemos o tipo de conteúdo
             CT_Texttype:=ST Get content type(*;"myText";startSel;endSel)
             Case of // processamento de tipos diferentes
                :(CT_Texttype=ST URL type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                :(CT_Texttype=ST Expression type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                Else
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
             End case
          End if
          MOUSE POSITION($xCoord;$yCoord;$ButtonState)
          $AlphaVar:=Dynamic pop up menu(<>menu_STYLEDTEXT;"";$xCoord;$yCoord)
          startSel:=-3
          endSel:=-3
       End if
       ...
    End if
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1286 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


