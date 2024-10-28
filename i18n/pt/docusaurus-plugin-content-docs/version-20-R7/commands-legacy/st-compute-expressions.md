---
id: st-compute-expressions
title: ST COMPUTE EXPRESSIONS
slug: /commands/st-compute-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Syntax-->**ST COMPUTE EXPRESSIONS** ( {* ;} *objeto* {; *inicioSel* {; *fimSel*}} )<!-- END REF-->
<!--REF #_command_.ST COMPUTE EXPRESSIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Summary-->O comando **ST COMPUTE EXPRESSIONS** atualiza as expressões dinâmicas 4D encontradas no campo ou variável com multi-estilo ou 4D Write Pro definido pelo parâmetro *objeto*.<!-- END REF--> 

Para obter mais informação sobre as expressões 4D utilizadas em áreas de texto de multi estilo ou 4D Write Pro, consulte a descrição do comando [ST INSERT EXPRESSION](st-insert-expression.md).  
  
O comando torna a avaliar o resultado das expressões presentes no *objeto* em função do contexto atual e mostra o resultado obtido. Por exemplo, se a expressão introduzida é a hora, o valor se modifica cada vez que se chama ao comando **ST COMPUTE EXPRESSIONS**. As expressões também se calculam:

* quando se inserem
* cuando se carrega o objeto
* quando estão "congeladas" com o comando [ST FREEZE EXPRESSIONS](st-freeze-expressions.md), se passar o segundo parâmetro *\**.
**ST COMPUTE EXPRESSIONS** Não modifica o texto com estilo (que contém etiquetas *span*), e sim só o texto sem formato mostrado em *objeto*. Os valores calculados não se armazenam no texto com estilo, só sua referência se armazena ali.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou de variável no lugar de uma cadeia.  
  
Não é necessário que *objeto* tenha o foco, no entanto, o objeto deve estar incluído em um formulário, ou caso contrário o comando **ST COMPUTE EXPRESSIONS** não tem nenhum efeito.  
  
Nota: Se o objeto designar um documento 4D Write Pro, será computado pelo comando mesmo se não tiver sido aberto em um objeto de formulário (ver *Expressões de Imagem*).   
  
Os parâmetros opcionais *inicioSel* e *fimSel* designam uma seleção de texto em *objeto*. Os valores *inicioSel* e *fimSel* expressam uma seleção de texto plano, sem ter em conta as etiquetas de estilo ou referências que possam estar presentes. Tenha em conta que uma referência é equivalente a um único caractere.  
  
* Se passar *inicioSel* e *fimSel*, **ST COMPUTE EXPRESSIONS** só atualiza as expressões situadas dentro desta seleção.
* Se passar unicamente *inicioSel* ou se o valor de *fimSel* é maior que o número total de caracteres no objeto, todas as expressões entre *inicioSel* e o final do texto se calculam.
* Se omite *inicioSel* e *fimSel*, todas as expressões incluídas na seleção usuário de *objeto* se calculam.
4D oferece constantes pré definidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":  
  
| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |
  
  
(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência de campo ou de variável, o comando se aplica a todo o texto do objeto.  
  
**Nota**: se *inicioSel* é maior que *fimSel* (exceto quando *fimSel* é 0), o comando não faz nada e a variável *OK* toma o valor 0.

#### Exemplo 

Você deseja atualizar as referências incluídas na seleção de texto:

```4d
 ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)
```

#### Ver também 

[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  