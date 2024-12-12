---
id: st-freeze-expressions
title: ST FREEZE EXPRESSIONS
slug: /commands/st-freeze-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST FREEZE EXPRESSIONS.Syntax-->**ST FREEZE EXPRESSIONS** ( {* ;} *objeto* {; *inicioSel* {; *fimSel*}}{; *} )<!-- END REF-->
<!--REF #_command_.ST FREEZE EXPRESSIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |
| * | Operador | &#8594;  | Se passar = atualizar as expressões antes de congelar elas |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.ST FREEZE EXPRESSIONS.Summary-->O comando **ST FREEZE EXPRESSIONS** "congela" o conteúdo das expressões encontradas em texto mult-estilo ou no campo ou variável 4D Write Pro com estilo definido pelo parâmetro *objeto*.<!-- END REF--> Esta ação converte expressões dinâmicas em texto estático ou (apenas para áreas 4D Write Pro) converte imagens e remove as referências associadas ao *objeto*. 

Para mais informação sobre expressões 4D usadas em áreas de texto multi estilo, ou áreas 4D Write Pro, veja a descrição do comando [ST INSERT EXPRESSION](st-insert-expression.md).

O comando **ST FREEZE EXPRESSIONS** armazena os valores computados de uma expressão num dado momento. Esta operação é particuarlmente necessária antes de cada uso de *objeto* fora da aréa (exportação, armazenagem em um arquivo disco, impressão) já que a referência da expressão é mantida na própria área. 

Passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou variável. Neste caso, se passar uma referência de campo ou variável ao invés de uma string (apenas campo ou objeto variável).

Os parâmetros opcionais *startSel* e *endSel* designam uma seleção de texto em *objeto*. Os valores *startSel* e *endSel* expresam uma seleção de texto simples, sem levar em consideração tags de estilo ou referências presentes.

* se passar *startSel* e *endSel*, **ST FREEZE EXPRESSIONS** congela apenas as expressões localizadas dentro da seleção.
* Se passr apenas *startSel* ou se o valor de *endSel* for maior que o número total de caracteres no *objeto*, todas as expressões entre*startSel* e o final do texto são congeladas.
* Se omitir *startSel* e *endSel*, todas as expressões incluídas na seleção de usuário do *objeto* são congeladas.

4D oferece constantes pré-definidas para que possa designar a seleção de limites automaticamente nos parâmetros *startSel* e *endSel*.   
Estas constantes são encontradas no tema"*Texto multi estilo*": 

| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome objteo em *objeto* para poder usar esta constante. Se passar uma referência para um campo ou variável, o comando é aplicável a todos os textos do objeto.

**Nota:** Se *startSel* for maior que *endSel* (exceto quando *endSel for* 0), o comando não faz nada e a variável *OK* é estabelecida para 0.

Como padrão, expressões não são reavaliadas antes de serem congeladas. Se quiser que a expressão seja recalculada e depois congelada, pode passar o segundo parãmetro *\** .

**Nota:** **ST FREEZE EXPRESSIONS** não congela as expressões *4D Write Pro $wp\_pageNumber* e *$wp\_pageCount*. Para saber mais, veja a seção *Gestão de fórmulas*. 

#### Exemplo 

Você quer inserir a hora atual ao início do texto e logo congelar ela antes de guardar o registro:  
  
```4d
  //Inserir a hora ao ínicio do texto
 ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)
  //Congelamos a expressão
 ST FREEZE EXPRESSIONS(*;"StyledText_t";1)
```

#### Ver também 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  