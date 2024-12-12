---
id: st-get-attributes
title: ST GET ATTRIBUTES
slug: /commands/st-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST GET ATTRIBUTES.Syntax-->**ST GET ATTRIBUTES** ( {* ;} *objeto* ; *inicioSel* ; *fimSel* ; *nomeAtributo* ; *valorAtrib* {; *nomeAtributo2* ; *valorAtrib2* ; ... ; *nomeAtributoN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.ST GET ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string) se omitido, objeto é uma variável ou campo |
| objeto | any | &#8594;  | Nome de objeto (se * é específico) ou variável ou campo (se * é omitido) |
| inicioSel | Integer | &#8594;  | início da seleção de texto |
| fimSel | Integer | &#8594;  | Fim da seleção de texto |
| nomeAtributo | Integer | &#8594;  | Atributo a ser lido |
| valorAtrib | Variable | &#8592; | Valor atual do atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST GET ATTRIBUTES.Summary-->O comando ST GET ATTRIBUTES é utilizado para recuperar o valor atual de um atributo de estilo em uma selección de texto do objeto de formulário designado por *objeto*.<!-- END REF-->  
  
##### 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução se o objeto tem o foco, o comando devolve informação sobre o objeto que está sendo editado, no entanto, quando o objeto não tem o foco, o comando devolve informação sobre a fonte de dados (campo ou variável) do objeto.

Se omite o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, passe uma referencia campo ou variável em vez de uma cadeia e durante a execução, o comando devolve informação sobre este campo ou variável.

##### 

Os parâmetros *inicioSel* e *fimSel* são utilizados para designar a seleção de texto da qual ler o atributo de estilo. Passe a posição do primeiro caractere da seleção em *inicioSel* e a posição mais um do último caractere da seleção em *fimSel*. Pode passar 0 em *finSel* para designar automaticamente o último caractere do texto (passe 1 em *inicioSel* para designar o primeiro caractere do texto).  
Se os valores de *inicioSel* e *fimSel* são iguais ou se *inicioSel* é maior que *fimSel*, se devolve um erro.  
Os valores *inicioSel* e *fimSel* não consideram nenhum tipo de etiquetas de estilo já presentes na área. São avaliadas sobre a base de texto sem formato (texto da qual foram filtradas as etiquetas de estilo).  
  
4D oferece constantes predefinidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":  
  
| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |
  
  
(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
Passe o nome do atributo a obter no parâmetro *nomAtrib* e passe uma variável que deve recuperar o valor atual do atributo no parâmetro *valorAtrib*. Para definir o parâmetro *nomAtrib*, deve utilizar uma das constantes do tema *Multistyle Text Attributes*.  
  
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
  
  
Pode passar tantos pares de atributos/valores como queira.  
  
Se o valor do atributo *nomAtrib* é o mesmo para todos os da seleção, se devolve em *valorAtrib*. Se este valor for diferente ou se *objeto* não contiver etiquetas SPAN, sao devolvidos os seguintes valores:  

| **nomAtrib**                  | **valorAtrib** **se atributo heterogêneo na seleção ou não houver etiquetas SPAN** |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| Attribute background color    | FFFFFFFF                                                                           |
| Attribute bold style          | 2                                                                                  |
| Attribute font name           | "" (string vazia)                                                                  |
| Attribute italic style        | 2                                                                                  |
| Attribute strikethrough style | 2                                                                                  |
| Attribute text color          | FFFFFFFF                                                                           |
| Attribute text size           | \-1                                                                                |
| Attribute underline style     | 2                                                                                  |

#### Exemplo 

Dado um campo \[Table\_1\]StyledText mostrado em um formulário. O objeto tem a propriedade Multi estilo e se chama "StyledText\_t". Você quer obter o texto ressaltado assim como também o estado de atributo de estilo Negrito. Pode proceder de duas formas diferentes dependendo de se utilizar o nome do objeto ou a referência do campo. 

* Utilizando o nome do objeto:

```4d
 $text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)
 ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)
```

* Utilizando o nome do campo:

```4d
 GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)
 $text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)
 ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)
```

#### Variáveis e conjuntos do sistema 

Depois de executar este comando, a variável OK toma o valor 1 se não é apresento nenhum erro; do contrário, toma o valor 0\. Este é o caso particularmente quando as etiquetas de estilo não são avaliados corretamente (etiquetas incorretas ou faltantes).   

No caso de erro, não modifica a variável. Quando ocorre um erro em uma variável quando se está avaliando o texto, 4D transforma o texto em texto plano; como resultado, os caracteres <, > e & são convertidas em entidades HTML.

#### Ver também 

[ST SET ATTRIBUTES](st-set-attributes.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1094 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


