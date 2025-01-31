---
id: st-insert-expression
title: ST INSERT EXPRESSION
slug: /commands/st-insert-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT EXPRESSION.Syntax-->**ST INSERT EXPRESSION** ( {* ;} *objeto* ; *expressao* {; *inicioSel* {; *fimSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT EXPRESSION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | Object | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| expressao | Text | &#8594;  | Expressão e (opcional) formato a inserir |
| inicioSel | Integer | &#8594;  | Início da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST INSERT EXPRESSION.Summary-->O comando **ST INSERT EXPRESSION** insere uma referência a expressão no campo ou a variável de texto multi estilo designada pelo parâmetro *objeto*.<!-- END REF-->

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se omitir o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em vez de uma cadeia (variável ou campo objeto unicamente).

No parâmetro *expressao*, se passar a expressão 4D a avaliar no *objeto*. A expressão deve ser posta entre aspas duplas ("").

Uma expressão válida 4D é uma cadeia que retorna um valor. A *expressao* pode ser um campo, uma variável, um comando 4D, uma instrução que retorne um valor, um método de projeto,uma expressão especial 4D Write Pro (ver *Gestão de fórmulas*), etc.

**Notas:**

* Inserir expresões de imagem (por exemplo variáveis do tipo Imagem) é compatível com áreas 4D Write Pro (ver *Inserir expressões de imagem*) mas não é compatível com áreas multi-estilo.
* Este comando espera nomes "reais" para os campos e as tabelas, mesmo se tiver sido definida uma estrutura "virtual" usando os comandos [SET TABLE TITLES](set-table-titles.md) e [SET FIELD TITLES](set-field-titles.md).

Se *expressao* retorna um valor que contém retornos de carro e tabulações, 4D formata o texto de acordo ao objeto que alberga a expressão; caracteres de retorno de carro se interpretam como rupturas de linha.

Pode dar formato a expressão mediante a inclusão de informação de formato no parâmetro de expressão. Neste caso, o parâmetro deve ser na forma:  

```RAW
 "String(valor;formato)"
```
  
  
... onde *valor* contém a expressão mesma e *formato* contém o formato a aplicar. O parâmetro *formato* pode ter os seguintes valores: 
* para os números: por exemplo "###,##" qualquer formato de visualização do número (existente ou não).
* para datas: um número que designa um formato de data existente. Pode utilizar as constantes do tema "*Formatos de saída de datas*" , por exemplo, System date short .
* para os tempos: um número que designa um formato de hora existente. Pode utilizar as constantes do tema "*Formatos de saída de hora*" , por exemplo, System time short .

Por exemplo:  
  
```4d
 "String ([tabla_1]Campo_1;System date short)"
```
  
  
Por padrão, os **valores** de expressão são mostrados nas áreas de texto multiestilo. Pode forçar a visualização das **referências** utilizando o comando [ST SET OPTIONS](st-set-options.md). 

Os parâmetros opcionais *inicioSel* e *fimSel* designam uma seleção de texto em *objeto*. Os valores *inicioSel* e *fimSel* expressam uma seleção de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes.

* Se passar unicamente *inicioSel*, o resultado da expressão se insere na localização especificada.
* Se omitir *inicioSel* e *fimSel*, o resultado da expressão se insere na localização do cursor.
* Se passar *inicioSel* e *fimSel*, **ST INSERT EXPRESSION** substitui o texto nesta seleção com o resultado da *expressao*. Se o valor de *fimSel* é maior que o número total de caracteres no objeto, todos os caracteres entre *inicioSel* e o final do texto são substituídos pelo resultado da *expressao*.

4D oferece constantes predefinidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":

| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
**Nota**: se *inicioSel* é maior que *fimSel* (exceto quando *fimSel* é 0) , o comando não faz nada e a variável OK toma o valor 0.K toma o valor 0.

#### Exemplo 

Deseja substituir o texto selecionado com o resultado de um método projeto:

```4d
 ST INSERT EXPRESSION(*;"meuTexto";"meuMetodo";ST Start highlight;ST End highlight)
```

#### Ver também 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST Get expression](st-get-expression.md)  
[ST INSERT URL](st-insert-url.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1281 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


