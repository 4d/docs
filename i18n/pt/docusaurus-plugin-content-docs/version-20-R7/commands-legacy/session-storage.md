---
id: session-storage
title: Session storage
slug: /commands/session-storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->
<!--REF #_command_.Session storage.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| id | Text | &#8594;  | Identificador Único (UUID) da sessão no servidor |
| Resultado | Object | &#8592; | Objeto de armazenagem da sessão |

<!-- END REF-->

#### Nota 

<!--REF #_command_.Session storage.Summary-->O comando **Session storage** devolve o objeto de armazenamento da sessão cujo identificador único foi passado no parâmetro *id*.<!-- END REF--> 

Em *id*, passe UUID da sessão para a que queira obter o armazenamento. O servidor o assigna automaticamente e se armazena na propriedade [**.id**](../API/SessionClass.md#id) do [objeto sessão](../API/SessionClass.md). Se a sessão não existir no servidor, o comando devolve **Null**. 

**Nota:** pode obter os identificadores de sessão utilizando o comando [Process activity](../commands/process-activity.md).

O objeto retornado é a propriedade [**.storage**](../API/SessionClass.md#storage) da sessão. É um objeto compartido utilizado para armazenar informação disponível para todos os processos da sessão.

#### Exemplo 

Este método modifica o valor de uma propriedade "settings" armazenada no objeto de armazenamento de uma sessão específica:

```4d
  //Definir o armazenamento de uma sessão
  // A propriedade do método "Execute On Server" está definida
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage($id)
 
 If($obj.settings=Null)
    Use($obj)
       $obj.settings:=New shared object("text";$text)
    End use
 Else
    Use($obj.settings)
       $obj.settings.text:=$text
    End use
 End if
```

#### Ver também 

  
[Process activity](../commands/process-activity.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1839 |
| Thread-seguro | &cross; |


