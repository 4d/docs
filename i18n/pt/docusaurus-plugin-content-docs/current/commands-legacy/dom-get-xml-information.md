---
id: dom-get-xml-information
title: DOM Get XML information
slug: /commands/dom-get-xml-information
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML information.Syntax-->**DOM Get XML information** ( *refElemento* ; *xmlInfo* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML information.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Elemento de referência raiz XML |
| xmlInfo | Integer | &#8594;  | Tipo de informação a conseguir |
| Resultado | Text | &#8592; | Valor da informação XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Get XML information.Summary-->O comando DOM Get XML information permite recuperar diversas informações sobre o elemento XML designado por *refElemento*.<!-- END REF-->  

Em *xmlInfo*, passe um código indicando o tipo de informação a ser recuperado. Pode utilizar as seguintes constantes predefinidas, localizadas no tema *XML*”:

| Constante    | Tipo          | Valor | Comentário                                                                                                    |
| ------------ | ------------- | ----- | ------------------------------------------------------------------------------------------------------------- |
| DOCTYPE Name | Inteiro longo | 3     | Nome de elemento raiz tal como foi definido no marcador DOCTYPE                                               |
| Document URI | Inteiro longo | 6     | URI da DTD                                                                                                    |
| Encoding     | Inteiro longo | 4     | Codificação utilizada (UTF-8, ISO...)                                                                         |
| PUBLIC ID    | Inteiro longo | 1     | Identificador público (FPI) da DTD que o documento segue (se a etiqueta DOCTYPE xxx PUBLIC estiver presente). |
| SYSTEM ID    | Inteiro longo | 2     | Identificador de sistema                                                                                      |
| Version      | Inteiro longo | 5     | Versão XML aceita                                                                                             |

#### Ver também 

[XML GET ERROR](xml-get-error.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 721 |
| Thread-seguro | &check; |
| Proibido no servidor ||


