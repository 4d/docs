---
id: st-get-text
title: ST Get text
slug: /commands/st-get-text
displayed_sidebar: docs
---

<!--REF #_command_.ST Get text.Syntax-->**ST Get text** ( {* ;} *objeto* {; *inicioSel* {; *fimSel*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se nao, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome de objeto (se * for especificada) ou campo texto ou variável (se * for omitida) |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | final da seleção |
| Resultado | Text | &#8592; | Texto incluindo etiquetas de estilo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.ST Get text.Summary-->O comando *OBJECT Get styled text* devolve o texto com estilo encontrado no campo ou variável de texto designado pelo parâmetro *objeto*.<!-- END REF-->   

##### 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução se o objeto tem o foco, o comando devolve informação sobre o objeto que está sendo editado, no entanto, quando o objeto não tem o foco, o comando devolve informação sobre a fonte de dados (campo ou variável) do objeto.

Se omite o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, passe uma referencia campo ou variável em vez de uma cadeia e durante a execução, o comando devolve informação sobre este campo ou variável.

##### 

O comando devolve o texto com as etiquetas de estilo associadas, o que significa, por exemplo, que pode copiar e colar texto, conservando os estilos.  

Os parâmetros opcionais *inicioSel* e *fimSel* permitem designar uma seleção de texto em *objeto*. Os valores de *inicioSel* e *fimSel* oferecem uma seleção de texto sem formato, sem considerar nenhum tipo de etiquetas de estilo no texto.

* Se omitir *inicioSel* e *fimSel*, ST Get text devolve todo o texto no objeto,
* Se passa *inicioSel* e *fimSel*, ST Get text devolve a seleção de texto definida por estes limites.

4D oferece constantes predefinidas para que possa designar automaticamente os limites da seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":   
  
| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |
  
  
(\*) Deve passar um nome de objeto em objeto para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.

Se os valores de *inicioSel* e *fimSel* são iguais ou se *inicioSel* é maior que *fimSel*, um erro é devolvido.

#### Variáveis e conjuntos do sistema 

Depois de executar este comando, a variável OK toma o valor 1 se não é apresento nenhum erro; do contrário, toma o valor 0\. Este é o caso particularmente quando as etiquetas de estilo não são avaliados corretamente (etiquetas incorretas ou faltantes).   

No caso de erro, não modifica a variável. Quando ocorre um erro em uma variável quando se está avaliando o texto, 4D transforma o texto em texto plano; como resultado, os caracteres <, > e & são convertidas em entidades HTML.

#### Ver também 

[ST Get plain text](st-get-plain-text.md)  
[ST SET TEXT](st-set-text.md)  
[TEXT TO ARRAY](text-to-array.md)  