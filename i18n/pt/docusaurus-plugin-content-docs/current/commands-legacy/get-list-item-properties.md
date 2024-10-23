---
id: get-list-item-properties
title: GET LIST ITEM PROPERTIES
slug: /commands/get-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PROPERTIES.Syntax-->**GET LIST ITEM PROPERTIES** ( {* ;} *lista* ; refElem | * ; *editavel* {; *estilos* {; *icone* {; *cor*}}} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| refElem &#124; * | Operador, Inteiro longo | &#8594;  | Número de referencia do elemento, ou 0 para o último elemento adicionado à lista ou * para o elemento da lista atualmente selecionada |
| editavel | Boolean | &#8592; | TRUE = Editável, FALSE = Não editável |
| estilos | Integer | &#8592; | Estilo de fonte do elemento |
| icone | Text, Integer | &#8592; | Número de recurso Mac OS ‘cicn’, ou 65536 + número de recurso Mac OS ‘PICT’, ou 131072 + número de referência de imagem |
| cor | Integer | &#8592; | Valor de cor RGB |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET LIST ITEM PROPERTIES.Summary-->O comando **GET LIST ITEM PROPERTIES** retorna o nome da fonte do caractere atual do elemento especificado pelo parâmetro *refElem* da lista cujo número de referência o nome de objeto se passa em *lista*.<!-- END REF-->

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (*RefLista*). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.

**Nota:** se utiliza o caractere @ no nome de objeto da lista e o formulário contém várias listas que correspondem a este nome, ou **GET LIST ITEM PROPERTIES** se aplicará ao primeiro objeto cujo nome corresponda.

Em *refElem*, pode passar um número de referência, ou o valor 0 com o objetivo de designar o último elemento adicionado à lista, ou \* para designar o elemento atual da lista. Se vários elementos forem selecionados, o elemento atual é o último a ser selecionado.

Se passa \* e nenhum elemento for selecionado ou se o número de referência do elemento não corresponde a nenhum elemento da lista, o comando deixa os parâmetros sem mudanças.

Se trabalhar com números de referência dos elementos, construa uma lista na qual os elementos tenham números de referencia únicos, do contrário não poderá diferenciar os elementos. Para maior informação, consulte a descrição do comando [APPEND TO LIST](append-to-list.md).

Depois de a chamar:

* *editavel* retorna TRUE se o elemento é editável.
* *estilos* retorna o estilo de fonte do elemento.
* *icone* retorna o ícone ou a imagem associada ao elemento, *0* se não houver nenhum.
* Se o ícone foi especificado como um arquivo de imagem, o comando retorna em ícone uma rota usando o padrão **path:<filesystem path>**.
* Se o ícone tiver sido especificado usando uma biblioteca de imagen (apenas em banco de dados bináriso), o comando retorna ou o número ou o nome da imagem, dependendo do tipo de variável passado no parâmetro. O padrão a seguir é usado para o nome : **pictlib:<name>**. Se não atribuir um tipo especifico para a variável *ícone*, como padrão, o nome da imagem é retornado (texto). Se nenhum ícone estiver associado com o ícone, o comando retorna um valor em branco.  
**Nota:** pode recuperar, em uma variável imagem, o ícone associado com um elemento utilizando o comando [GET LIST ITEM ICON](get-list-item-icon.md)
* *cor* retorna a cor do texto do elemento especificado.

Para maior informação sobre estas propriedades, consulte a descrição do comando [SET LIST ITEM PROPERTIES](set-list-item-properties.md).

#### Ver também 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM ICON](get-list-item-icon.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  