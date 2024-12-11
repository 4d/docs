---
id: st-get-expression
title: ST Get expression
slug: /commands/st-get-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST Get expression.Syntax-->**ST Get expression** ( {* ;} *objeto* {; *inicioSel* {; *fimSel*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get expression.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |
| Resultado | Text | &#8592; | Etiqueta da expressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST Get expression.Summary-->O comando **ST Get expression** devolve a primeira expressão que se encontra na seleção atual do campo ou da variável de texto com estilo designada pelo parâmetro *objeto*.<!-- END REF--> 

O comando devolve a etiqueta da expressão, como foi inserida no objeto (por exemplo, "mymethod" ou "\[tabela1\]campo1"). Não se devolve o valor atual da expressão.

**Nota**: este comando devolve nomes "reais" para os campos e as tabelas, mesmo se tiver sido definida uma estrutura "virtual" utilizando os comandos [SET TABLE TITLES](set-table-titles.md) e [SET FIELD TITLES](set-field-titles.md).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução, se o objeto tem o foco, o comando devolve a informação do objeto que se está editando, e se o objeto não tem o foco, o comando devolve a informação da fonte de dados do objeto (variável ou campo).  
Se omitir o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia. Durante a execução, o comando devolve a informação da variável ou do campo.  
  
Os parâmetros opcionais *inicioSel* e *fimSel* designam uma seleção de texto em *objeto*. Os valores *inicioSel* e *fimSel* expressam uma seleção de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes no texto.

* Se passar *inicioSel* e *fimSel*, **ST Get expression** procura a expressão ao interior desta seleção.
* Se passar unicamente *inicioSel* ou se o valor de *fimSel* é maior que o número total de caracteres no *objeto*, o comando busca a expressão entre *inicioSel* e o final do texto .
* Se omitir *inicioSel* e *fimSel*, o comando busca a expressão dentro da seleção de texto atual.

4D oferece constantes pré definidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":  
  
| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
**Nota**: Se *inicioSel* é maior que *fimSel* (exceto quando *fimSel* é 0) , o comando não faz nada e a variável OK toma o valor 0.

Se não se encontra uma expressão na seleção, o comando devolve uma cadeia vazia.

#### Exemplo 1 

Quando há um evento clique duplo, você comprova que existe uma expressão, e assim é mostrado um diálogo no qual recuperaram seus valores para que o usuário possa modificar eles:

```4d
 Case of
    :(FORM Event=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)
          vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)
          $winRef:=Open form window("Dial_InsertExpr";Movable form dialog box;Horizontally centered;Vertically centered;*)
          DIALOG("Dial_InsertExpr")
          If(OK=1)
             ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)
          End if
       End if
 End case
```

#### Exemplo 2 

Você quer executar um método 4D quando é feito clique em um link de um usuário:

```4d
 Case of
    :(FORM Event=On Clicked)
  //recuperamos a seleção
       HIGHLIGHT TEXT(*;"myText";startSel;endSel)
       If(startSel#endSel) //há conteúdo selecionado
  //obtemos o tipo do conteúdo
          $CT_type:=ST Get content
          Type(*;"myText";startSel;endSel)
          If($CT_type=ST User type) //this is a user link
             MyMethod //executamos um método 4D
          End if
       End if
 End case
```

#### Ver também 

[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1287 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


