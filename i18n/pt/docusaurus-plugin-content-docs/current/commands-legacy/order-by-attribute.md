---
id: order-by-attribute
title: ORDER BY ATTRIBUTE
slug: /commands/order-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY ATTRIBUTE.Syntax-->**ORDER BY ATTRIBUTE** ( {*tabela* ;} *campoObjeto* ; *rotaAtrib* ; > ou < {; *campoObjeto2* ; *rotaAtrib2* ; > ou <2 ; ... ; *campoObjetoN* ; *rotaAtribN* ; > ou <N} {; *} )<!-- END REF-->
<!--REF #_command_.ORDER BY ATTRIBUTE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai ordenar registros selecionados, ou a tabela padrão, se omitido |
| campoObjeto | Object | &#8594;  | Campo Objeto contendo o atributo de ordenação |
| rotaAtrib | Text | &#8594;  | Nome ou rota do atributo para o qual vai estabelecer a ordem para cada nível |
| > ou < | Operador | &#8594;  | Direção de ordenação para cada nível: > para ordenar em ordem ascendente, ou < para ordenar em ordem descendente. |
| * | Operador | &#8594;  | Continuar a bandeira de ordem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ORDER BY ATTRIBUTE.Summary-->O comando **ORDER BY ATTRIBUTE** ordena (reordena) os registros da seleção atual de *tabela* para o processo atual baseado no conteúdo de *rotaAtrib* de *campoObjeto*.<!-- END REF--> Depois de terminada a ordenação, o novo primeiro registro da seleçãol se converte no registro atual. 

Se omitir o parâmetro *tabela*, o comando se aplica a tabela por padrão, se tiver sido especificado. Do contrário, 4D utiliza a tabla do primeiro campo passado como um parâmetro.

 Em *campoObjeto*, passe o campo Objeto cujo atributo deseja utilizar para a ordenação. Este campo pode pertencer a *tabela* ou a uma tabela relacionada com *tabela* com uma relação automática ou manual. Neste caso, a ordenação é sempre sequêncial.

Em *rotaAtrib*, passe a rota de atributo cujos valores desejar utilizar para ordenar os registros, por exemplo "criancas.genero.idade".

**Notas:** 

* Só os atributos que contém valores escalares (números, textos, booleanos, data) podem ser ordenados. Outros tipos de valores (objeto, imagem...) são considerados como valores null.
* Não é possível passar um elemento de um array em rotaAtrib (neste caso, se devolve um erro).
* Lembre que os nomes dos atributos são sensíveis às maiúsculas e minúsculas: pode ter diferentes nomes de atributos "Myatt" e "myatt" no mesmo registro.
* Não é possível usar atributos cujo nome contém caracteres específicos tais como "." ou "\[ \]", já que serão avaliados incorretamente como tokens na ordem por string. Para saber mais, veja o parágrafo *identificador notação objeto*.

Se os atributos campo contiverem valores em tipos de dados diferentes (ou seja, números, strings, booleanos), primeiro se agrupam por tipo, depois por valor.

Se o valor de atributo de campo for **nulo** para alguns registros (ou seja, o valor de atributo for nulo ou *rotaAtrib* não existir no campo):

* Se a ordem for **ascendente** (>), os registros com valor **nulo** se colocarão ao final da seleção.
* Se a ordem for **descendente** (<), os registros com valor **nulo** se colocarão ao principio da seleção.

Pode ordenar a seleção em um ou em vários níveis. Para cada nível de ordenação, se especifica um *campo*, um *rotaAtrib* e o sentido de ordenação em *\> ou <*. Se passar o símbolo (>) "maior que", a orden é ascendente. Se passar o símbolo (<) "menor que", a ordem é descendente. Se não for especificado o sentido de ordenação, a ordem ascendente é o valor predeterminado.   
Se só for especificado um campo (um nível de ordenação) e estiver indexado, o índice será utilizado para a orden. Se o campo não estiver indexado ou se houver mais de um campo, a orden é sequêncial.

Para várias ordenações (ordenações em vários campos), pode chamar a **ORDER BY ATTRIBUTE** tantas vezes quantas sejam necessárias e especificar o parâmetro opcional *\**, com exceção da última chamada **ORDER BY ATTRIBUTE**, que inicia a operação de ordenação. Esta funcionalidade é útil para a gestão de ordenações múltiplas em interfaces de usuário personalizadas. Lembre que pode combinar as chamadas **ORDER BY ATTRIBUTE** com chamadas [ORDER BY](order-by.md).

**Nota:** com esta sintaxe, pode passar um só nível de ordenação (campo) por chamada **ORDER BY ATTRIBUTE**.

Não importa que forma de ordenação tenha sido definido, se a operação de ordenação for demorar algum tiempo, 4D mostra automaticamente uma mensagem que contém um termômetro de progresso. Esta mensagem pode ser ativada e desativada mediante o uso dos comandos [MESSAGES ON](messages-on.md) e [MESSAGES OFF](messages-off.md). Se o termômetro de progresso é exibido, o usuário pode clicar no botão Stop para interromper a ordenação. Ok é estabelecido em 1\. Se a ordenação é interrompida, Ok é estabelecido como 0 (zero).

#### Exemplo 

Se desejar ordenar a seleção atual por idade (descendente) e depois por nome (ascendente), a ordem por padrão é:

```json
// [Customer]OB_Info contents partial export
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Mikken","age":"Forty-six","client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Hamp","age":"Sixty","client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Martin","client":true],
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Gordini","client":true},
{"LastName":"Delaferme","age":54,"client":true},
{"LastName":"Belami","age":"Forty-six","client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Smeldorf","age":70,"client":true}
```

Se executar:

```4d
 ORDER BY ATTRIBUTE([Customer];[Customer]OB_Info;"age";<;[Customer]OB_Info;"LastName";>)
```

Os registros estão na seguinte ordem:

```json
{"LastName":"Smeldorf","age":70,"client":true}
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Delaferme","age":54,"client":true},
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Hamp","age":"Sixty","client":true}, //valores string na idade
{"LastName":"Belami","age":"Forty-six","client":true}, //são lidados separadamente
 {"LastName":"Mikken","age":"Forty-six","client":true}
{"LastName":"Gordini","client":true}, //ao final porque
{"LastName":"Martin","client":true} //age (idade) é null (falta)
```

#### Ver também 

  