---
id: session-storage-by-id
title: Session storage by ID
slug: /commands/session-storage-by-id
displayed_sidebar: docs
---

<!--REF #_command_.Session storage by ID.Syntax-->**Session storage by ID** ( *id* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Session storage by ID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| id | Texto | &#x1F852; | Identificador Único (UUID) da sessão no servidor |
| Resultado | Objeto | &#x1F850; | Objeto de armazenagem da sessão |

<!-- END REF-->

#### Nota 

<!--REF #_command_.Session storage by ID.Summary-->O comando **Session storage by ID** devolve o objeto de armazenamento da sessão cujo identificador único foi passado no parâmetro *id*.<!-- END REF--> 

Em *id*, passe UUID da sessão para a que queira obter o armazenamento. O servidor o assigna automaticamente e se armazena na propriedade [**.id**](https://developer.4d.com/docs/API/SessionClass#id) do [objeto sessão](https://developer.4d.com/docs/API/SessionClass). Se a sessão não existir no servidor, o comando devolve **Null**. 

**Nota:** pode obter os identificadores de sessão utilizando o comando [Get process activity](get-process-activity.md).

O objeto retornado é a propriedade [**.storage**](https://developer.4d.com/docs/API/SessionClass#storage) da sessão. É um objeto compartido utilizado para armazenar informação disponível para todos os processos da sessão.

#### Exemplo 

Este método modifica o valor de uma propriedade "settings" armazenada no objeto de armazenamento de uma sessão específica:

```4d
  //Definir o armazenamento de uma sessão
  // A propriedade do método "Execute On Server" está definida
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage by ID($id)
 
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

  
[Get process activity](get-process-activity.md)  