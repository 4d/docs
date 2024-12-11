---
id: method-resolve-path
title: METHOD RESOLVE PATH
slug: /commands/method-resolve-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD RESOLVE PATH.Syntax-->**METHOD RESOLVE PATH** ( *rota* ; *tipoMetodo* ; *prtTabela* ; *nomObjeto* ; *nomObjetoForm* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD RESOLVE PATH.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text | &#8594;  | Rota a resolver |
| tipoMetodo | Integer | &#8592; | Seletor tipo de objeto |
| prtTabela | Pointer | &#8592; | Referência de tabela |
| nomObjeto | Text | &#8592; | Nome de formulário ou método de base |
| nomObjetoForm | Text | &#8592; | Nome de objeto de formulário |
| * | Operador | &#8594;  | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD RESOLVE PATH.Summary-->O comando **METHOD RESOLVE PATH** analisa a rota de acesso interna passada no parâmetro *rota* e devolve seus diferentes componentes nos parâmetros *tipoMetodo*, *ptrTabela*, *nomObjeto* e *nomObjetoForm*.<!-- END REF-->  
  
No parâmetro *tipoMetodo* devolve um valor que indica o tipo do método. Pode comparar este valor com as seguintes constantes do tema *Design Object Access*:  
  
| Constante            | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                            |
| -------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | Inteiro longo | 2     |                                                                                                                                                                                                                                                                                       |
| Path project form    | Inteiro longo | 4     | Rota dos métodos formulário projeto e de todos seus métodos objeto. Exemplos:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                       |
| Path project method  | Inteiro longo | 1     | Nome do método.<br/>Exemplo: MeuMétodoProjeto                                                                                                                                                                                                                                 |
| Path table form      | Inteiro longo | 16    | Rota dos métodos formulário tabela e de todos seus métodos objeto. Exemplos:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist* |
| Path trigger         | Inteiro longo | 8     | Rota dos triggers da base. Exemplos:<br/>*\[trigger\]/tabela\_1<br/>\[trigger\]/tabela\_2*                                                                                                                                                                            |

**Nota**: O comando não verifica se o método realmente existe no banco de dados ou projeto. Um erro só é gerado se um nome de tabela inválido for passado 

  
O parâmetro *ptrTabla* contém um ponteiro a uma tabela da base quando a rota referencia um método formulário tabela ou um trigger.   
  
O parâmetro *nomObjeto* contém:

* um nome de formulário se a rota referencia um formulário tabela ou projeto.
* um nome de método base se a rota referencia um método base.

O parâmetro *nomObjetoForm* contém um nome de objeto de formulário se a rota referencia um método objeto.  
  
Se o comando se executa desde um componente, considera por padrão que a *via* designa um método do componente. Se passado o parâmetro *\**, se considera que a *via* designa um método da base local.

#### Exemplo 1 

Resolução de uma rota de método base:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 2
  // $tablePtr: Nil pointer
  // $objectName: "onStartup"
  // $formObjectName: ""
```

#### Exemplo 2 

Resolução de uma rota de método de formulário tabela:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 16
  // $tablePtr: -> [Table1]
  // $objectName: "output1"
  // $formObjectName: "Btn1"
```

#### Ver também 

[METHOD Get path](method-get-path.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1165 |
| Thread-seguro | &check; |
| Proibido no servidor ||


