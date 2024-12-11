---
id: storage
title: Storage
slug: /commands/storage
displayed_sidebar: docs
---

<!--REF #_command_.Storage.Syntax-->**Storage**  : Object<!-- END REF-->
<!--REF #_command_.Storage.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Catálogo de objetos compartidos e coleções compartidas registrados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Storage.Summary-->O método **Storage** devolve um catálogo de objetos compartidos registrados ou coleções compartidas disponíveis para todos os processos na máquina ou componente atual.<!-- END REF--> 

O catálogo devolvido por **Storage** é criado automaticamente por 4D e está disponível para todos os processos do banco de dados, incluídos os processos preemptivos. Existe um catálogo **Storage** por máquina e componente: em uma aplicação cliente/servidor, há um objeto compartido **Storage** no servidor e um objeto compartido **Storage** em cada aplicação 4D remota; se o banco de dados usar componentes, há um objeto **Storage** por componente.

Utilize o catálogo **Storage** para fazer referência a qualquer objeto compartido ou coleção compartida que deseje utilizar desde qualquer processo preemptivo ou padrão. Para registrar um objeto compartido ou uma coleção compartida no catálogo, agregue su a referência ao objeto compartido devolvido por **Storage**.

Como o catálogo devolvido por **Storage** é um o*bjeto compartido*, segue as regras descritas na seção *Objetos compartidos e Coleções compartidas*, mas com algumas características específicas:

* Este objeto só pode conter objetos compartidos e coleções compartidas. Tentar agregar outros tipos de valores (objetos não compartidos ou coleções, nulos, valores escalares) gerará um erro.
* Para agregar uma propriedade a este objeto deve estar rodeado pela estrutura *Use...End use*, do contrário, se devolve um erro. Entretanto, é possível ler um atributo fora de uma estrutura *Use...End use*.
* Quando estiver rodeado pela estrutura *Use...End use*, os atributos de primeiro nível de **Storage** estão bloqueados para outros processos.
* Diferente dos objetos compartidos padrão, o objeto devolvido por **Storage** NAO compartirá seu *identificador de bloqueio* com objetos compartidos ou coleções agregadas como atributos (para mais informação, consulte *Identificador de bloqueio (Locking identifier)*).

#### Exemplo 1 

Una prática comum poderia ser inicializar o objeto **Storage** em : 

```4d
 Use(Storage)
    Storage.counters:=New shared object("customers";0;"invoices";0)
 End use
```

#### Exemplo 2 

Este exemplo mostra uma forma padrão de estabelecer valores de **Armazenamento**:

```4d
 Use(Storage)
    Storage.mydata:=New shared object
    Use(Storage.mydata)
       Storage.mydata.prop1:="Smith"
       Storage.mydata.prop2:=100
    End use
 End use
```

#### Exemplo 3 

**Storage** permite implementar um singleton com uma *inicialização lenta*, como é mostrada no exemplo abaixo.

**Nota:** para mais informação sobre os padrões de singleton, pode consultar esta página de [Wikipedia](https://en.wikipedia.org/wiki/Singleton%5Fpattern).

```4d
 var $0 : Integer
 var $counterValue : Integer
 var counter : Object //cria uma referência ao contador para o processo
 
 If(counter=Null) //Se esta referência for nula, obtenha if de Storage
    Use(Storage) // O uso de armazenamento só é necessário uma vez!
       If(Storage.counter=Null)
          Storage.counter:=New shared object("operation";0)
       End if
       counter:=Storage.counter //Obter a referência de objeto compartido contador
    End use
 End if
 Use(counter) //use diretamente o contador de objetos compartidos (não necessita usar Storage!)
    counter.operation:=counter.operation+1
    $counterValue:=counter.operation
 End use
 
 $0:=$counterValue
```

#### Ver também 

*Objetos compartidos e Coleções compartidas*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1525 |
| Thread-seguro | &check; |
| Proibido no servidor ||


