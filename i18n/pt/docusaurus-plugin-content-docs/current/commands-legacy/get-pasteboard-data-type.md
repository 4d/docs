---
id: get-pasteboard-data-type
title: GET PASTEBOARD DATA TYPE
slug: /commands/get-pasteboard-data-type
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Syntax-->**GET PASTEBOARD DATA TYPE** ( *assinaturas4D* ; *tiposNativos* {; *nomesFormatos*} )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA TYPE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| assinaturas4D | Text array | &#8592; | Assinaturas 4D de tipos de dados |
| tiposNativos | Text array | &#8592; | Tipos de dados nativos |
| nomesFormatos | Text array | &#8592; | Nomes de formato (apenas Windows), strings vazias em MacOS |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Summary-->O comando GET PASTEBOARD DATA TYPE permite obter a lista dos tipos de dados presentes na área de transferência.<!-- END REF--> Este comando geralmente deve ser utilizado no contexto de uma operação arrastar e soltar, nos eventos de formulário On Drop ou On Drag Over do objeto de destino. Mais particularmente, permite verificar a presença de um tipo de dados específico na área de transferência. 

Este comando devolve os tipos de dados em diferentes formas através de dois (ou três) arrays:

* O array *assinaturas4D* contém os tipos de dados expressos utilizando a assinatura 4D interna (por exemplo, “com.4d.picture.gif”). Se 4D não reconhece um tipo de dados encontrado, uma cadeia vazia (“”) se devolve no array.
* O array *tiposNativos* contém os tipos de dados expressos utilizando seu tipo nativo. O formato dos tipos nativos difere entre Mac OS e Windows:

\- Em Mac OS, os tipos nativos são expressos como UTIs (Uniform Tipo Identifier).

\- Em Windows, os tipos nativos são expressos como números, cada número está associado a um nome de formato. O array *tiposNativos* contém estes números em forma de cadeia (“3”, “12”, etc.). Se quer utilizar mais etiquetas explícitas, se recomenda utilizar o array opcional *nomesFormatos*, que contém o nome do formato dos tipos nativos em Windows.

O array *tiposNativos* permite suportar todo tipo de dados presentes na área de transferência, incluindo os dados cujo tipo não está referenciado por 4D.

* Em Windows, também pode passar o array *nomesFormatos*, que recebe os nomes dos tipos de dados encontrados na área de transferência. Os valores devolvidos neste array podem ser utilizados por exemplo para construir um menu suspenso de seleção de formato. Em Mac OS, o array *nomesFormatos* devolve as cadeias vazias.

Para maior informação sobre os tipos de dados suportados, consulte a seção *Gerenciar área de transferência*.

#### Ver também 

*Gerenciar área de transferência*  