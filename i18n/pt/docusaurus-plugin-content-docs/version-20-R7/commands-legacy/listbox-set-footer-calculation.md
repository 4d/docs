---
id: listbox-set-footer-calculation
title: LISTBOX SET FOOTER CALCULATION
slug: /commands/listbox-set-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Syntax-->**LISTBOX SET FOOTER CALCULATION** ( {* ;} *objeto* ; *calculo* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| calculo | Integer | &#8594;  | Calculo para à área de rodapé |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Summary-->O comando **LISTBOX SET FOOTER CALCULATION** permite definir o cálculo automático associado à área de rodapé do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia.   
O parâmetro *objeto* pode designar:

* a variável ou o nome de uma área de rodapé de página. Neste caso, o comando aplica a esta área.
* a variável ou o nome de uma coluna de list box. Neste caso, o comando aplica à área de rodapé desta coluna.
* a variável ou o nome de um list box. Neste caso, o comando aplica as áreas de rodapé do listbox.

No parâmetro *calculo*, passe uma das seguintes constantes do tema *Listbox Footer Calculation*, com a finalidade de definir o cálculo a realizar:   
  
| Constante                    | Tipo          | Valor | Comentário                                                                                                                                            |
| ---------------------------- | ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Listbox footer std deviation | Inteiro longo | 7     | Utilizável com as colunas de tipo numérico, hora (list boxes de tipo array unicamente)<br/> Tipo de resultado por padrão: Real                |
| lk footer average            | Inteiro longo | 6     | Utilizável com as colunas de tipo numérico, hora<br/> Tipo de resultado por padrão:Real                                                       |
| lk footer count              | Inteiro longo | 5     | Utilizável com as colunas de tipo numérico, texto, data, hora, booleano, imagem<br/> Tipo de resultado por padrão: Inteiro longo              |
| lk footer custom             | Inteiro longo | 1     | Nenhum cálculo é realizado por 4D. A variável do rodapé deve ser calculada por programação. Tipo por padrão do resultado do cálculo: tipo da variável |
| lk footer max                | Inteiro longo | 3     | Utilizável com as colunas de tipo numérico, data, hora, booleano<br/>Tipo de resultado por padrão: tipo do array ou campo da coluna           |
| lk footer min                | Inteiro longo | 2     | Utilizável com as colunas de tipo numérico, data, hora, booleano<br/>Tipo por padrão do resultado: tipo do array ou campo da coluna           |
| lk footer sum                | Inteiro longo | 4     | Utilizável com as colunas de tipo numérico, data, hora, booleano<br/>Tipo de resultado por padrão: tipo do array ou campo da coluna           |
| lk footer sum squares        | Inteiro longo | 9     | Utilizável com as colunas de tipo numérico, hora (listbox de tipo array unicamente)<br/>Tipo por padrão do resultado: Real                    |
| lk footer variance           | Inteiro longo | 8     | Utilizável com as colunas de tipo numérico, hora (listbox de tipo array unicamente)<br/>Tipo por padrão do resultado: Real                    |
  
  
Note que os cálculos predefinidos tem em conta todos os valores da coluna do list box, incluindo os valores das possíveis linhas ocultas. Se deseja restringir um cálculo as linhas visíveis, deve utilizar a constante lk footer custom e realizar um cálculo personalizado.   
  
Se o tipo de dados da coluna ou de pelo menos uma coluna do list box (se objeto designa um list box) não é compatível com o *calculo* definido, o rodapé não será modificado e formará um erro 18\. Se uma coluna contém una fórmula (list box de tipo seleção), será gerado o erro 10.

**Nota:** As variáveis da área rodapé se definem automaticamente (quando não se definem por programação) em função do tipo de cálculo definido na Lista de propriedades (*List box footer specific properties*). Se o tipo da variável não corresponde ao resultado esperado pelo comando **LISTBOX SET FOOTER CALCULATION**, é gerado um erro. Por exemplo, para uma coluna que mostra datas, se o rodapé faz um cálculo 'Maximum', a variável roda*pé* será definida em data. Se executar a instrução **LISTBOX SET FOOTER CALCULATION** (rodapé;lk footer count), é gerado um erro pelo tipo do resultado esperado (inteiro largo) varia do tipo da variável.

#### Ver também 

[LISTBOX Get footer calculation](listbox-get-footer-calculation.md)  