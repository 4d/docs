---
id: get-picture-metadata
title: GET PICTURE METADATA
slug: /commands/get-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE METADATA.Syntax-->**GET PICTURE METADATA** ( *imagem* ; *nomeMeta* ; *conteudoMeta* {; *nomeMeta2* ; *conteudoMeta2* ; ... ; *nomeMetaN* ; *conteudoMetaN*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE METADATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Imagem cujos metadados você deseja conseguir |
| nomeMeta | Text | &#8594;  | Nome ou caminho do bloco a ser lido |
| conteudoMeta | Variable | &#8592; | Conteúdo do Metadado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PICTURE METADATA.Summary-->O comando **GET PICTURE METADATA** permite ler o conteúdo dos metadados (ou meta-tags) presentes em *imagem* (campo ou variável imagem 4D).<!-- END REF--> Para maior informação sobre metadados, consulte a descrição do comando [SET PICTURE METADATA](set-picture-metadata.md).

No parâmetro *nomMeta*, passe uma string especificando o tipo de metadado a recuperar. Pode passar:

* uma constante do tema *Picture Metadata Names* com uma rota de etiqueta,
* Ou nome de um bloco completo de metadados ("TIFF", "EXIF", "GPS" ou "IPTC"),
* Uma cadeia vazia ("").

Passe no parâmetro *ConteudoMeta* a variável destinada a receber os metadados. 

* Se passa uma rota de etiqueta em *nomMeta*, o parâmetro *ConteudoMeta* contém diretamente o valor a ser lido. O valor será convertido no tipo da variável. As variáveis de tipo texto serão formatadas em XML (padrão XMP). Pode passar um array quando o metadado contiver mais de um valor (este é o caso, particularmente, para as etiquetas IPTC Keywords).
* Se passa um nome de bloco ou uma string vazia em *nomMeta*, o parâmetro *ConteudoMeta* deve ser uma referência válida do elemento DOM XML. Neste caso, o conteúdo do bloco designado (ou de todos os blocos se passou uma string vazia em *nomMeta*) se copia novamente no elemento de referência.

#### Exemplo 1 

Uso de estruturas da árvore DOM

```4d
 $xml:=DOM Create XML Ref("Root") //Criação de uma árvore XML DOM
 
 \Recepção dos metadados TIFF
 $_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")
 GET PICTURE METADATA(vImagem;"TIFF";$_Xml_TIFF)
 
  //Recepção dos metadados GPS
 $_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")
 GET PICTURE METADATA(vImagem;"GPS";$_Xml_GPS)
```

#### Exemplo 2 

Uso de variáveis

```4d
 var $dataComoData : Date
 GET PICTURE METADATA(vImagem;TIFF DateTime;$dataComoData)
  //devolve unicamente a data já que $dataComoData é de tipo Data
 
 var $dataComoTexto : Text
 GET PICTURE METADATA(vImagem;TIFF/DateTime;$DataComoTexto)
  //devolve unicamente a data em formato XML
 
 C_INTEGER($urgency)
 GET PICTURE METADATA(vImagem;IPTC urgency;$urgência)
```

#### Exemplo 3 

Recepção de etiquetas com valores múltiplos em arrays

```4d
 ARRAY TEXT($tTkeywords;0)
 GET PICTURE METADATA(vImagem;IPTC keywords;$tTkeywords)
```

Depois da execução do comando, arrTkeywords contém por exemplo:   

```4d
 $arrTkeywords{1}="França"
 $arrTkeywords{2}="Europa"
```

#### Exemplo 4 

Recepção de etiquetas com valores múltiplos em uma variável Texto

```4d
 var $vTwords;0 : Text
 GET PICTURE METADATA(vImagem;IPTC keywords;$vTwords)
```

Depois da execução do comando, *vTwords* contém por exemplo "França;Europa".

#### Variáveis e conjuntos do sistema 

La variable sistema *OK* devolve 1 se a recuperación dos metadados es correta e 0 se for produzido um erro ou se não se encontra ao menos uma das etiquetas. Em todos os casos, se devolvem os valores legíveis.

#### Ver também 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
*Picture Metadata Names*  
*Picture Metadata Values*  
[SET PICTURE METADATA](set-picture-metadata.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1122 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


