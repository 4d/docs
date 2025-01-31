---
id: st-set-plain-text
title: ST SET PLAIN TEXT
slug: /commands/st-set-plain-text
displayed_sidebar: docs
---

<!--REF #_command_.ST SET PLAIN TEXT.Syntax-->**ST SET PLAIN TEXT** ( {* ;} *objeto* ; *novoTexto* {; *inicioSel* {; *fimSel*}} )<!-- END REF-->
<!--REF #_command_.ST SET PLAIN TEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se não, objeto é uma variável ou campo |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Variável ou campo (se * for omitido) |
| novoText | Text | &#8594;  | Texto a inserir |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | final da seleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST SET PLAIN TEXT.Summary-->O comando [ST SET PLAIN TEXT](st-set-plain-text.md) insere o texto passado no parâmetro *novTexto* no campo ou a variável de texto com estilo designado pelo parâmetro *objeto* .<!-- END REF--> Este comando aplica unicamente ao texto plano do parâmetro *objeto*, sem modificar as possíveis etiquetas de estilo que contenha. 

A diferença do comando [ST SET TEXT](st-set-text.md), [ST SET PLAIN TEXT](st-set-plain-text.md) insere unicamente texto plano. Não deve passar texto com etiquetas de estilo em *novTexto*. Se conter os caracteres <, > ou &, se consideram como caracteres normais e são convertidos em entidades HTML:

* '&' se converte em &amp;
* '<' se converte em &lt;
* '>' se converte em &gt;

##### 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução, se o objeto tem o foco, o comando só se aplica ao objeto que está sendo editado e não a sua fonte de dados (campo ou variável). As mudanças só se transferem a fonte (e a qualquer outro objeto com esta mesma fonte) quando o objeto que se está editando se valida, seja por perder o foco ou com a tecla **Intro**. Quando o objeto não tem o foco, o comando se aplica diretamente a fonte de dados e as mudanças são imediatamente transferidos a outros objetos com a mesma fonte.  
Se omitido o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável e se passa uma referencia de campo ou variável em vez de uma cadeia. O comando se aplica diretamente ao campo ou a variável e as mudanças são transferidas imediatamente a todos os objetos que utilizam esta fonte, incluindo o objeto com o foco.

##### 

Em *novTexto*, passe o texto plano a inserir.

Os parâmetros opcionais *inicioSel* e *fimSel* permitem designar uma seleção de texto em *objeto*. Os valores de *inicioSel* e *fimSel* dão uma seleção de texto sem formato, sem considerar nenhum tipo de etiquetas de estilo no texto. A ação do comando varia segundo os parâmetros opcionais *inicioSel* e *fimSel*:

* Se omite *inicioSel* e *fimSel*, [ST SET PLAIN TEXT](st-set-plain-text.md) substitui todo o texto de *objeto* por *novTexto* ,
* Se passa unicamente *inicioSel* ou se os valores de *inicioSel* e *fimSel* são iguais, [ST SET PLAIN TEXT](st-set-plain-text.md) insere o texto *novTexto* em *objeto* a partir de *inicioSel*,
* Se passa *inicioSel* e *fimSel*, [ST SET PLAIN TEXT](st-set-plain-text.md) substitui o texto sem formato definido por estes limites pelo texto *novTexto*.
* Pode passar 0 em *fimSel*para designar automaticamente o último caractere do texto (passe 1 em *inicioSel* para designar o primeiro caractere do texto).

4D oferece constantes pré definidas que pode utilizar para designar automaticamente os limites da seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes estão disponíveis no tema "*Texto multi estilo*": 

| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência de variável ou de campo, o comando se aplica a todo o texto do objeto.

O estilo do primeiro caractere substituído se utilizará para todo o texto *novoTexto*. 

Se o valor de *inicioSel* é superior ao valor de *fimSel*, o texto não é modificado e a variável OK toma o valor 0\. 

#### Exemplo 

Dada a seguinte variável texto multiestilo:

![](../assets/en/commands/pict572269.en.png)

Você quer inserir nomes de empresas guardadas em um campo texto. Estes nomes podem conter, por exemplo o caractere "&". Neste caso, deverá utilizar o comando [ST SET PLAIN TEXT](st-set-plain-text.md):

```4d
 ST SET PLAIN TEXT(meuTextoEstilo;[Empresa]Nome;33;34)
```

Este é o resultado:

![](../assets/en/commands/pict572271.en.png)

Este é o texto sem formato conteúdo na variável:

![](../assets/en/commands/pict572279.en.png)

Pode constatar que o texto inserido se encapsulou dentro de um par de etiquetas de estilo adicionais. Estas etiquetas correspondem ao estilo dos caracteres antes da inserção. Este mecanismo permite garantir uma visualização correta dos campos multiestilos em todos os casos. 

**Nota:** se utiliza o comando [ST SET TEXT](st-set-text.md) neste caso, 4D no insere nada porque a presença do caractere "&" não codificado evita a interpretação das etiquetas de estilo presentes na variável. Para maior informação, consulte a descrição de este comando. 

#### Variáveis e conjuntos do sistema 

Depois da execução deste comando, a variável OK toma o valor 1 se não houver erros, do contrário toma o valor 0\. Este é o caso em particular quando as etiquetas de estilo não são avaliadas corretamente (etiqueta incorreta ou faltando).  
  
No caso de um erro, a variável não muda. Quando se produz um erro em uma variável quando o texto está sendo avaliado, 4D transforma o texto em texto sem formato, como resultado, os caracteres <, > e & são convertidos em entidades HTML.

#### Ver também 

[ST Get plain text](st-get-plain-text.md)  
[ST SET TEXT](st-set-text.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1136 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


