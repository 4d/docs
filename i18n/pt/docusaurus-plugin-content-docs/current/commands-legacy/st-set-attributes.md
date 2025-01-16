---
id: st-set-attributes
title: ST SET ATTRIBUTES
slug: /commands/st-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST SET ATTRIBUTES.Syntax-->**ST SET ATTRIBUTES** ( {* ;} *objeto* ; *inicioSel* ; *fimSel* ; *nomeAtrib* ; *valorAtributo* {; *nomeAtrib2* ; *valorAtributo2* ; ... ; *nomeAtribN* ; *valorAtributoN*} )<!-- END REF-->
<!--REF #_command_.ST SET ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou campo ou variável texto (se * for omitido) |
| inicioSel | Integer | &#8594;  | Início da nova seleção de texto |
| fimSel | Integer | &#8594;  | Fim da nova seleção de texto |
| nomeAtrib | Text | &#8594;  | Atributo a definir |
| valorAtributo | Text, Integer | &#8594;  | Novo valor do atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST SET ATTRIBUTES.Summary-->O comando ST SET ATTRIBUTES permite modificar um ou mais atributos de estilo no(s) objeto(s) de formulário designado(s) por *objeto*.<!-- END REF-->   
  
  
##### 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução, se o objeto tem o foco, o comando só se aplica ao objeto que está sendo editado e não a sua fonte de dados (campo ou variável). As mudanças só se transferem a fonte (e a qualquer outro objeto com esta mesma fonte) quando o objeto que se está editando se valida, seja por perder o foco ou com a tecla **Intro**. Quando o objeto não tem o foco, o comando se aplica diretamente a fonte de dados e as mudanças são imediatamente transferidos a outros objetos com a mesma fonte.  
Se omitido o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável e se passa uma referencia de campo ou variável em vez de uma cadeia. O comando se aplica diretamente ao campo ou a variável e as mudanças são transferidas imediatamente a todos os objetos que utilizam esta fonte, incluindo o objeto com o foco.

##### 

**Nota**: Só pode utilizar os atributos de estilo com campos de tipo texto. Dado que os campos de tipo Alfa tem uma longitude pré-definida, a adição de etiquetas de estilo poderia produzir uma perda de dados.   
  
A definição de um atributo é realizada através da inserção o modificação de etiquetas HTML de estilo ao interior de texto (para mais informação sobre este ponto, consulte o *Manual de Desenho*). Leve em consideração que ST SET ATTRIBUTES insere etiquetas de estilo em todos os casos, mesmo que objeto designe os objetos texto do formulário que não tenham a propriedade Multi estilo.   
  
Os parâmetros *inicioSel* e *fimSel* podem ser utilizados para designar a seleção de texto a que deseja aplicar a modificação de estilo ao interior do objeto. Em *inicioSel* passe a posição do primeiro caractere a ser modificado e em *fimSel*, passe a posição do último caractere a modificar mais uno (o último caractere passado não foi incluído na modificação). Pode passar 0 em *finSel* para designar automaticamente o último caractere do texto (passe 1 em *inicioSel* para designar o primeiro caractere do texto).  
Se o valor de *inicioSel* for superior ao número de caracteres do objeto, todos os caracteres entre *inicioSel* e o final do texto são modificados. Se o valor de *inicioSel* for maior que o de *fimSel* (exceto quando *fimSel* vale 0, ver acima), o comando não faz nada e a variável ok toma o valor 0.  
Os valores de *inicioSel* e *fimSel* não consideram as etiquetas de estilo presentes na área. São avaliadas sobre a base de texto sem formato (texto onde as etiquetas de estilo foram filtradas).  
  
4D oferece constantes predefinidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*": 

| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

 (\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
Passe nos parâmetros *nomAtrib* e *valorAtrib* respectivamente o nome e o valor do atributo a modificar. Pode passar tantos pares de atributos/valores como queira. Para definir o parâmetro *nomAtrib*, utilize as constantes predefinidas do tema . O valor a passar no parâmetro *valorAtrib* depende do parâmetro *nomAtrib*:  
  
| Constante                     | Tipo          | Valor |
| ----------------------------- | ------------- | ----- |
| Attribute background color    | Inteiro longo | 8     |
| Attribute bold style          | Inteiro longo | 1     |
| Attribute font name           | Inteiro longo | 5     |
| Attribute italic style        | Inteiro longo | 2     |
| Attribute strikethrough style | Inteiro longo | 3     |
| Attribute text color          | Inteiro longo | 7     |
| Attribute text size           | Inteiro longo | 6     |
| Attribute underline style     | Inteiro longo | 4     |
  
  
**Cores**  
Se passa as constantes Attribute text color ou Attribute background em *nomAtrib*, deve passar em *valorAtrib* uma cadeia que contenha um nome de color HTML ou um valor de cor hexadecimal:  

| **Nome de cor** **HTML** | **Valor hexadecimal** |
| ------------------------ | --------------------- |
| Aqua                     | #00FFFF               |
| Black                    | #000000               |
| Blue                     | #0000FF               |
| Fushia                   | #FF00FF               |
| Gray                     | #808080               |
| Green                    | #008000               |
| Lime                     | #00FF00               |
| Maroon                   | #800000               |
| Navy                     | #000080               |
| Olive                    | #808000               |
| Purple                   | #800080               |
| Red                      | #FF0000               |
| Silver                   | #C0C0C0               |
| Teal                     | #008080               |
| White                    | #FFFFFF               |
| Yellow                   | #FFFF00               |

#### Exemplo 

Neste exemplo, modificamos o tamanho e a cor do texto como também os atributos negrito e sublinhado dos caracteres 2 a 4 do campo:

```4d
 ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")
```

#### Variáveis e conjuntos do sistema 

Depois de executar este comando, a variável OK toma o valor 1 se não é apresento nenhum erro; do contrário, toma o valor 0\. Este é o caso particularmente quando as etiquetas de estilo não são avaliados corretamente (etiquetas incorretas ou faltantes).   

No caso de erro, não modifica a variável. Quando ocorre um erro em uma variável quando se está avaliando o texto, 4D transforma o texto em texto plano; como resultado, os caracteres <, > e & são convertidas em entidades HTML.

#### Ver também 

[FONT LIST](font-list.md)  
[ST GET ATTRIBUTES](st-get-attributes.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1093 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


