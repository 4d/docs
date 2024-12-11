---
id: get-highlight
title: GET HIGHLIGHT
slug: /commands/get-highlight
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHT.Syntax-->**GET HIGHLIGHT** ( {*Objeto* ;} *area* ; *inicioSel* ; *fimSel* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Objeto | * | &#8594;  | Se especificado, objeto é um nome de objeto (string=. Se omitido, objeto é um campo ou variável |
| area | Field, Variable, any | &#8594;  | Nome de objeto (se * for especificado) ou Campo ou variável (se * for omitido) |
| inicioSel | Integer | &#8592; | Posição inicial da seleção atual de texto |
| fimSel | Integer | &#8592; | Posição final da seleção atual de texto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET HIGHLIGHT.Summary-->O comando GET HIGHLIGHT permite determinar o texto selecionado atualmente em *objeto*.<!-- END REF-->  

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passa o parâmetro \*, indica que o parâmetro *objeto* é um campo ou variável. Neste caso, passe a referencia do campo ou variável (campos ou variáveis de formulário apenas) ao invés de uma cadeia.

**Nota**: Este comando não pode ser utilizado com campos localizados no formulário listado de um subformulário.  
  
O texto pode ser selecionado pelo usuário ou pelo comando [HIGHLIGHT TEXT](highlight-text.md).  
  
O parâmetro *inicioSel* retorna a posição do primeiro caractere selecionado.  
O parâmetro *finalSel* retorna a posição do último caractere selecionado mais um.  
  
Se os valores retornados de *inicioSel* e *finalSel* são iguais, o usuário não selecionou nenhum texto, e o ponto de inserção está localizado antes do caractere especificado por *inicioSel*.

Se o objeto designado pelo parâmetro *objeto* não é encontrado no formulário, o comando devolve -1 em *inicioSel* e -2 em *finalSel*. 

#### Exemplo 1 

O exemplo abaixo obtém o texto selecionado no campo \[Produtos\]Comentarios:

```4d
GET HIGHLIGHT([Products]Comments;vFirst;vLast)
If(vFirst < vlast)
    ALERT("The selected text is:"+Substring([Products]Comments;vFirst;vLast-vFirst))
End if
```

#### Exemplo 2 

Ver exemplo para o comando [FILTER KEYSTROKE](filter-keystroke.md).

#### Exemplo 3 

Modificação do estilo do texto ressaltado:

```4d
 GET HIGHLIGHT(*;"meuTexto";$startsel,$endsel)
 ST SET ATTRIBUTES(*;"meuTexto";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)
```

#### Ver também 

[FILTER KEYSTROKE](filter-keystroke.md)  
[HIGHLIGHT TEXT](highlight-text.md)  
[Keystroke](keystroke.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 209 |
| Thread-seguro | &check; |
| Proibido no servidor ||


