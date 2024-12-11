---
id: set-list-item-properties
title: SET LIST ITEM PROPERTIES
slug: /commands/set-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PROPERTIES.Syntax-->**SET LIST ITEM PROPERTIES** ( {* ;} *lista* ; refElem | * ; *editavel* ; *estilos* {; *icone* {; *cor*}} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, lista é um nome de objeto (string). Se omitido, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número lista referência (se* for omitido) ou Nome do objeto tipo lista (se * for passado) |
| refElem &#124; * | Operador, Inteiro longo | &#8594;  | Número referência Item, ou 0 para o último item anexado a lista, ou * para o item de lista atual |
| editavel | Boolean | &#8594;  | True = editável, False = não editável |
| estilos | Integer | &#8594;  | Estilo de fonte para o item |
| icone | Text, Integer | &#8594;  | Nome da Imagem ou número ("" ou 0 se não houver ícone) |
| cor | Integer | &#8594;  | Valor de cor RGB ou -1 = volta para a cor original |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET LIST ITEM PROPERTIES.Summary-->O comando **SET LIST ITEM PROPERTIES** modifica o elemento designado pelo parâmetro *refElem* da lista cujo número de referência ou nome de objeto se passa em *lista*.<!-- END REF-->

Se passa o primeiro parâmetro opcional \*, indica que o parâmetro *lista* é um nome de objeto (string) correspondente a uma representação da lista no formulário. Se não passar este parâmetro, indica que o parâmetro *lista* é uma referência de lista hierárquica (RefLista). Se utiliza uma só representação de lista ou trabalha com elementos estruturais (o segundo \* é omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contrário, se utiliza várias representações de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), a sintaxe baseada no nome do objeto se necessita já que cada representação pode ter seu próprio elemento atual.

Pode passar um número de referência em *refElem*. Se este número não corresponde a nenhum elemento da lista, o comando não faz nada. Também pode passar 0 em *refElem* para obter a fonte do último elemento adicionado à lista (utilizando [APPEND TO LIST](append-to-list.md).).

Finalmente, pode passar \* em *refElem*: neste caso, o comando se aplicará ao elemento atual da lista. Se vários elementos são selecionados manualmente, o elemento atual é o último selecionado. Se nenhum elemento estiver selecionado, o comando não faz nada.

Se trabalha com os números de referência dos elementos, construa uma lista na qual os elementos tenham números de referência únicos, do contrário não poderá diferenciar os elementos. Para maior informação, consulte 

**Nota:** para modificar o texto do elemento ou sua sublista, utilize o comando [SET LIST ITEM](set-list-item.md).

Para fazer com que um elemento seja editável, passe TRUE em *editavel*; ou do contrário, passe FALSE.

**Importante**

Para que um elemento seja editável, deve pertenecer a uma lista que seja editável. Para fazer que uma lista seja editável, utilize o comando [OBJECT SET ENTERABLE](object-set-enterable.md) . Para fazer que um item individual seja editável, utilize SET LIST ITEM PROPERTIES. . A modificação da propriedade editável a nível da lista não afeta as propriedades individuais de cada elemento. Entretanto, um item pode ser editável só se sua lista for editável.

Para especificar o estilo de fonte do item use os parâmetros de estilo. Pase uma combinação (uma ou uma soma) das constantes pré-definidas abaixo tema (*Estilos de fonte*) :  
  
| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Bold      | Inteiro longo | 1     |
| Italic    | Inteiro longo | 2     |
| Plain     | Inteiro longo | 0     |
| Underline | Inteiro longo | 4     |

No parâmetro í*cone*, pode passar uma imagem a ser usada como ícone para o ítem. Pode usar a referência de arquivo de imagem ou (apenas em banco de dados binários) uma imagem de biblioteca.

* Referência de arquivo de imagem (texto): deve usar o padrão **path:<filesystem path>**. Para saber mais, veja o parágrafo *Nomes de rotas de Filesystem*.
* Imagem de biblioteca (inteiro longo ou texto, apenas para bancos de dados binários): pode pasasr ou o nome ou o número da imagem. É, em geral, melhor usar o número já que números de imagens são únicos, o que não é o caso com nomes. Se quiser usar um número, passe Use PicRef+*N* no parâmetro, onde N é o número de referência da imagem na biblioteca de imagens. Use PicRef é uma constante pré-definida localizada no tema *Listas hierárquicas*.
* Passe uma string vazia ("") ou zero (0) em *icone* se não quiser nenhum gráfico para o item.

**Notas:**

* Uso da rota de arquivo de imagem é recomendado já que a Biblioteca de Imagens está obsoleta e já não é mais compatível com projetos 4D
* Se quiser usar expressões de imagem 4D (campos, variáveis, etc) para especificar o ícone dos itens, use o comando [SET LIST ITEM ICON](set-list-item-icon.md).

O parâmetro *cor* (opcional) deixa que modifique a cor do texto item. A cor deve ser especificada no formato de cor RGB, ou seja, um inteiro longo de 4-byte no formato 0x00RRGGBB. Para saber mais sobre este formato, veja a descrição do comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Passe -1 no parâmetro *cor* para apagar a cor original do item.

#### Exemplo 1 

Ver o exemplo do comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Exemplo 2 

O exemplo a seguir modifica o texto do elemento atual de *lista* negrito e vermelho vivo:

```4d
 SET LIST ITEM PROPERTIES(list;*;True;Bold;0;0x00FF0000)
```

#### Ver também 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
*Listas hierárquicas*  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 386 |
| Thread-seguro | &check; |
| Proibido no servidor ||


