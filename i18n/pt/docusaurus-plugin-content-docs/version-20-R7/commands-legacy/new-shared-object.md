---
id: new-shared-object
title: New shared object
slug: /commands/new-shared-object
displayed_sidebar: docs
---

<!--REF #_command_.New shared object.Syntax-->**New shared object** {( *propriedade* ; *valor* {; *propriedade2* ; *valor2* ; ... ; *propriedadeN* ; *valorN*} )} : Object<!-- END REF-->
<!--REF #_command_.New shared object.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| propriedade | Text | &#8594;  | Nome de propriedade a criar |
| valor | Text, Date, Boolean, Pointer, Number, Object | &#8594;  | Valor da propriedade |
| Resultado | Object | &#8592; | Novo objeto compartido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New shared object.Summary-->O comando **New shared object** cria um novo objeto compartido vazio ou pré-preenchido e devolve sua referência.<!-- END REF--> Para agregar ou editar uma propriedade a este objeto deve estar rodeado pela estrutura *Use...End use*, do contrário, se devolve um erro. Entretanto é possível ler uma propriedade fora de uma estrutura *Use...End use*. 

**Nota:** para mais informação sobre objetos compartidos, consulte a página *Objetos compartidos e Coleções compartidas*.

Se não passar nenhum parâmetro, **New shared object** cria um objeto vazio e devolve sua referência. Deve assignar esta referência a uma variável 4D declarada com o comando [C\_OBJECT](c-object.md).

**Nota:** [C\_OBJECT](c-object.md) declara uma variável de tipo [Objeto](# "Estruturas de dados como objetos 4D nativos") mas não é criado um objeto.

Opcionalmente, pode preencher o novo objeto passando um ou vários pares de *propriedad*e/*valor* como parâmetros:

* No parâmetro *propriedad*e, passe a etiqueta da propriedad que se criará (até 255 caracteres). Lembre que o parâmetro de propriedade é sensível a maiúsculas e minúsculas
* .No parámetro *valor*, passe o valor que desejar definir para a propriedade. Os objetos compartidos só podem conter valores dos tipos abaixo:  
   * número (real, inteiro longo...) Os valores numéricos sempre são armazenados como reais.  
   * texto  
   * booleano  
   * data  
   * hora (armazenado como número de milissegundos - real)  
   * null  
   * objeto compartido(\*)  
   * coleção compartida(\*)  
**Nota:** diferente dos objetos padrão (não compartidos), os objetos compartidos não são compatíveis com imagens, ponteiros e objetos ou coleções que não são compartidos.  
    
(\*) Quando agregar um objeto ou uma coleção compartido a um objeto compartido, compartem o mesmo identificador de bloqueio. Para saber mais sobre este ponto, consulte *Identificador de bloqueio (Locking identifier)*.

#### Exemplo 1 

Se quiser criar um novo objeto compartido pré-preenchido:

```4d
 var $contact : Object
 $contact:=New shared object("name";"Smith";"firstname";"John")
```

#### Exemplo 2 

Se quiser criar e modificar um objeto compartido. A estrutura deve ser chamada para este objeto:

```4d
 var $s_obj : Object
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End use
```

#### Ver também 

[New object](new-object.md)  
[New shared collection](new-shared-collection.md)  
*Objetos compartidos e Coleções compartidas*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1526 |
| Thread-seguro | &check; |
| Proibido no servidor ||


