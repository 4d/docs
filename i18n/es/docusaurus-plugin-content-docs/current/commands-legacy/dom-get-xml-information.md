---
id: dom-get-xml-information
title: DOM Get XML information
slug: /commands/dom-get-xml-information
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML information.Syntax-->**DOM Get XML information** ( *elementRef* ; *infoXML* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML information.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML raíz |
| infoXML | Integer | &#8594;  | Tipo de información a obtener |
| Resultado | Text | &#8592; | Valor de la información XML |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Get XML information.Summary-->El comando DOM Get XML information permite recuperar diversa información sobre el elemento XML designado por *refElement*.<!-- END REF--> 

En *infoXML*, pase un código indicando el tipo de información a recuperar. Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema “”:

| Constante    | Tipo         | Valor | Comentario                                                                                                                  |
| ------------ | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| PUBLIC ID    | Entero largo | 1     | Identificador público (FPI) de la DTD a la cual el documento es conforme (si la etiqueta DOCTYPE xxx PUBLIC está presente). |
| SYSTEM ID    | Entero largo | 2     | Identificador sistema                                                                                                       |
| DOCTYPE Name | Entero largo | 3     | Nombre del elemento raíz tal como se definió en el marcador DOCTYPE                                                         |
| Encoding     | Entero largo | 4     | Codificación utilizada (UTF-8, ISO...)                                                                                      |
| Version      | Entero largo | 5     | Versión de XML aceptada                                                                                                     |
| Document URI | Entero largo | 6     | URI de la DTD                                                                                                               |

Estas constantes indican la siguiente información:

* PUBLIC ID: identificador público (FPI) de la DTD a la cual el documento se conforma (si la etiqueta DOCTYPE xxx PUBLIC está presente).
* SYSTEM ID: identificador sistema.
* Nombre DOCTYPE: nombre del elemento raíz tal como se definió en la etiqueta DOCTYPE.
* Encoding: codificación utilizada (UTF-8, ISO...).
* Version: versión de XML aceptada.
* Document URI: URI de la DTD.

#### Ver también 

[XML GET ERROR](xml-get-error.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 721 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


