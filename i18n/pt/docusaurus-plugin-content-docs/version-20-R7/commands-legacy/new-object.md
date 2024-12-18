---
id: new-object
title: New object
slug: /commands/new-object
displayed_sidebar: docs
---

<!--REF #_command_.New object.Syntax-->**New object** {( *propriedade* ; *valor* {; *propriedade2* ; *valor2* ; ... ; *propriedadeN* ; *valorN*} )} : Object<!-- END REF-->
<!--REF #_command_.New object.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| propriedade | Text | &#8594;  | Nome da propriedade a criar |
| valor | any | &#8594;  | Valor da propriedade |
| Resultado | Object | &#8592; | Novo objeto linguagem |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New object.Summary-->O comando **New object** cria um novo objeto vazio ou pré-recheado e devolve sua referência.<!-- END REF-->

Se não passar nenhum parâmetro, **New object** cria um objeto vazio e devolve sua referência. Deve atribuir esta referência a uma variável 4D declarada com [C\_OBJECT](c-object.md) ou um campo objeto 4D.

**Nota:** [C\_OBJECT](c-object.md) declara uma variável de tipo [Objeto](# "Estruturas de dados como objetos 4D nativos") mas não cria nenhum objeto.

Opcionalmente, pode prefixar o novo objeto passando um ou vários pares *propriedade*/*valor* como parâmetros:

* No parâmetro *propriedade*, passe a etiqueta da propriedad a criar. Note que o parâmetro *propriedade é* sensível a maiúsculas e minúsculas.
* No parâmetro *valor*, passe o valor que deseja definir para a propriedade. Vários tipos de dados são suportados. :
   * Número (real, inteiro...) Valores numéricos são guardados como reais
   * texto
   * booleano
   * ponteiro
   * blog (4D.Blob)
   * data
   * hora
   * null
   * imagem
   * objeto
   * coleção.

Note que:

Se passar um ponteiro, é mantido como tal e avaliado quando usar comandos como [JSON Stringify](json-stringify.md),

datas são armazenadas como "yyyy-mm-dd" ou strings com o formato "YYYY-MM-DDTHH:mm:ss.SSSZ", de acordo com as configurações de banco de dados "dates inside objects" (veja *Página Compatibilidade*). Quando converter datas em texto antes do armazenamento no objeto, por padrão o programa usa a hora local. Pode modificar esse comportamento usando o seletor Dates inside objects ou o comando [SET DATABASE PARAMETER](set-database-parameter.md).

Se passar uma hora, é armazenada como o número de milissegundos (Real).

#### Exemplo 1 

Este comando pode criar objeto vazios ou cheios:

```4d
 var $obj1 : Object
 var $obj2 : Object
 var $obj3 : Object
 $obj1:=New object
  // $obj1 = {}
 $obj2:=New object("name";"Smith")
  // $obj2 = {name:Smith}
 $obj3:=New object("name";"Smith";"age";40)
  // $obj3 = {name:Smith,age:40}
```

#### Exemplo 2 

Cria um novo objeto com um objeto como valor de parâmetro:

```4d
 var $Children;$Contact : Object
 
  //Criar um array objeto
 ARRAY TEXT($arrChildren;3)
 $arrChildren{1}:="Richard"
 $arrChildren{2}:="Susan"
 $arrChildren{3}:="James"
 OB SET ARRAY($Children;"Children";$arrChildren)
 
  //Inicializar o objeto
 $Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)
  // $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}
```

#### Exemplo 3 

Este comando é útil para passar objetos como parâmetros:

```4d
 var $measures : Object
 $measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))
```

#### Exemplo 4 

Com este comando, pode fácilmente manejar objetos em loops:

```4d
 ARRAY OBJECT($refs;0)
 var vCounter : Integer
 
 For(vCounter;1;100)
    APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))
 End for
```

#### Ver também 

  
[New shared object](new-shared-object.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1471 |
| Thread-seguro | &check; |


