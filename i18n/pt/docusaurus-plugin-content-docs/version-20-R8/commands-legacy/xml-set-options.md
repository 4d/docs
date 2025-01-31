---
id: xml-set-options
title: XML SET OPTIONS
slug: /commands/xml-set-options
displayed_sidebar: docs
---

<!--REF #_command_.XML SET OPTIONS.Syntax-->**XML SET OPTIONS** ( elemRef|documento ; *seletor* ; *valor* {; *seletor2* ; *valor2* ; ... ; *seletorN* ; *valorN*} )<!-- END REF-->
<!--REF #_command_.XML SET OPTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| elemRef&#124;documento | Texto | &#8594;  | Elemento de referencia raiz XML ou Referência de documento aberto |
| seletor | Integer | &#8594;  | Opção a estabelecer |
| valor | Integer | &#8594;  | Valor da opção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.XML SET OPTIONS.Summary-->O comando XML SET OPTIONS é utilizado para modificar o valor de um ou mais parâmetros XML para estrutura passada no primeiro parâmetro.<!-- END REF-->

Este comando se aplica às estruturas XML de tipo "árvore" (DOM) ou "document" (SAX). No primeiro parâmetro, pode passar uma referência do elemento raiz (*refElement*), ou a referência de um documento SAX aberto (*document*).

Passe em *seletor* a opção a modificar e em *valor* o novo valor da opção. Pode passar tantos pares seletor/valor como queira. Deve utilizar as constantes descritas abaixo, localizadas no tema "*XML*":

As opções definidas por este comando são utilizadas unicamente no sentido 4D a XML (não tem efeito na leitura de valores XML em 4D). Os seguintes comandos utilizam as seguintes opções:

* [DOM SET XML ATTRIBUTE](dom-set-xml-attribute.md)
* [DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)
* [SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)

| Constante            | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML binary encoding  | Inteiro longo | 5     | Especifica a maneira como os dados binários são convertidos. <br/>**Valores possíveis:** XML Base64 (valor padrão): os dados binários são convertidos simplesmente em base64 XML Data URI scheme: os dados binários são convertidos em base64 e são adicionados ao cabeçalho "data:;base64". Este formato permite principalmente a um navegador decodificar automáticamente uma imagen, e também é necessário para inserir imagens . Para maior informação, consulte <http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| XML date encoding    | Inteiro longo | 2     | Especifica a forma na qual se convertes as datas 4D. Por exemplo, !01/01/2003! no fuso horária de Paris.<br/>**Valores possíveis:** XML ISO (valor padrão): uso de formato xs:datetime sem indicação de fuso horária. Resultado: "2003-01-01". A parte hora, se estiver presente no valor 4D (via SQL) é perdida. XML Local: uso de formato xs:date com indicación de fuso horário. Resultado: "2003-01-01 +01:00". A parte hora, se estiver presente no valor 4D (via SQL) é perdida. XML Datetime local: uso de formato xs:dateTime (ISO 8601). Indicação do fuso horário. Este formato permite conservar a parte hora, se estiver presente no valor 4D (via SQL). Resultado: "<Date>2003-01-01T00:00:00 +01:00</Date>". XML UTC: uso de formato xs:date. Resultado: "2003-01-01Z". A parte hora, se estiver presente no valor 4D (via SQL) é perdida. XML Datetime UTC: uso de formato xs:dateTime (ISO 8601). Este formato permite conservar a parte hora, se estiver presente no valor 4D (via SQL). Resultado: "<Date>2003-01-01T00:00:00Z</Date>".                                                |
| XML indentation      | Inteiro longo | 4     | Define a indentação de *document* XML. <br/>**Valores possíveis:** XML With indentation (valor padrão): o documento está indentado. XML No indentation: o documento não está indentado; seu conteúdo se localiza em uma única linha.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| XML picture encoding | Inteiro longo | 6     | Especifica a forma na qual as imagens devem ser convertidas (antes de codificar em base64).<br/>**Valores possíveis:** XML Convert to PNG (valor normal): as imagens são convertidas em PNG antes de ser codificadas em base64. XML Native codec: as imagenes são convertidas em seu primeiro CODEC nativo de armazenamento antes de ser codificadas em base64\. Deve utilizar estas opções para codificar imagenes SVG (ver exemplo de comando XML SET OPTIONS).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| XML string encoding  | Inteiro longo | 1     | Especifica a forma como as strings 4D são convertidas em valores de elementos. Não se refere às conversões em atributos para as quais XML impõe o uso de caracteres de escape.<br/>**Valores possíveis:** XML With escaping (valor normal): conversão das strings 4D em valores de elementos XML com substituição de caracteres. Os dados de tipo texto são analisados automaticamente de maneira que os caracteres proibidos (<&>’) são substituidos pelas entidades XML (\[#&/\]amp;\[#&/\]lt;\[#&/\]gt; \[#&/\]apos;\[#&/\]quot;). XML Raw data: as strings 4D são enviadas como dados brutos; 4D não efetua codificação nem análise. Os valores 4D são convertidos se for possível em fragmentos XML e são inseridos como filho do elemento objetivo. Se um valor não puder ser considerado como fragmento XML, se insere em forma de dado bruto em um novo nodo CDATA.                                                                                                                                                                                                                              |
| XML time encoding    | Inteiro longo | 3     | Define a forma como as horas 4D são convertidas. Por exemplo, ?02/00/46? (hora de Paris). A codificação difere dependendo de se quiser expressar uma hora ou uma duração.<br/>**Valores possíveis para as horas:** XML Datetime UTC: hora expressa em UTC (Universal Time Coordinated). Note que a conversão a UTC é automática. Resultado: "<Duration>0000-00-00T01:00:46Z</Duration>". XML Datetime local: hora expressa com a diferenã horária da máquina de motor de 4D. Resultado: "<Duration>0000-00-00T02:00:46+01:00</Duration>". XML Datetime local absolute (valor padrão): hora expressa sem indicação da zona horária. Sem modificação de valor. Resultado: "<Duration>0000-00-00T02:00:46</Duration>". **Valores possíveis para as durações:** XML Seconds: número de segundos desde a meia noite; sem modificação de valor porque expressa uma duração. Resultado: "<Duration>7246</Duration>". XML Duration: duração expressa conforme a XML Schema Part 2: Datatypes Second Edition. Sem modificação de valor a que expressa uma duração. Resultado: "<Duration>PT02H00M46S</Duration>". |
  
  
**Notas**: 
* Os valores XML Local e XML Datetime local não oferecem datas expressas em UTC (Universal Time Coordinated); são convertidas sem modificação mas indicam a diferença horária. Estes formatos são úteis no caso de conversões sucessivas e recíprocas (round tripping).
* Os valores XML UTC e XML Datetime UTC são equivalentes aos precedentes desde o ponto de vista do formato, mas são expressas em UTC. Estes formatos devem ter prioridade para ter certeza da inter-operabilidade. Os valores não são modificáveis.

As opções abaixo permitem que modifique algumas das propriedades padrão xml parser:

| Constante                      | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------ | ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML BOM                        | Inteiro longo | 9     | Especifica se os documentos XML incluem BOM.<br/>**Valores possíveis:** XML por padrão (por padrão): utiliza a configuração atual do banco de dados. Por padrão, BOM não é incluído - exceto em bancos de dados/projetos criados com versões 4D anteriores a v19.x, nas quais BOM era incluído. Veja configurações de Compatibilidad. *XML enabled*: inclui BOM *XML disabled*: não inclui BOM                                                                                                            |
| XML DOM case sensitivity       | Inteiro longo | 8     | Especifica a sensibilidade à maiúsculas e minúsculas em relação aos nomes dos elementos dos comandos [DOM Get XML element](dom-get-xml-element.md) e [DOM Count XML elements](dom-count-xml-elements.md).<br/>Valores possíveis: XML case sensitive (valor predeterminado): os comandos distinguem entre maiúsculas e minúsculas XML case insensitive: os comandos não distinguen entre maiúsculas e minúsculas.                                                                                          |
| XML external entity resolution | Inteiro longo | 7     | Controla se as entidades externas são resolvidas em documentos XML. De forma pré-determinada, por razões de segurança, os analisadores XML DOM e SAX 4D não permitem a resolução de entidades externas.<br/>**<br/>Valores possíveis:**<br/>XML enabled: permite a resolução de entidades externas em documentos XMLXML disabled (valor predeterminado): não permite a resolução de entidades externas (uma declaração de entidade externa gera um erro de análise)                       |
| XML line ending                | Inteiro longo | 10    | Caracteres de final de linha em documentos XML escritos.<br/>**Valores possíveis:** XML por padrão (por padrão): utiliza a configuração atual do banco de dados. Por padrão é LF em macOS e CRLF em Windows. Entretanto, em macOS, nos bancos/projetos criados com versões de 4D antes de v19,x, por padrão era CR para DOM e CRLF para SAX. Ver também Parâmetros de compatibilidade. XML LF: utiliza LF (quebra de linha) XML CR: utiliza CR (carriage return/retorno de carro) XML CRLF: utiliza CR+LF |

#### Exemplo 

Inserir uma imagem SVG:

```4d
 XML SET OPTIONS($pictElemRef;XML binary encoding;XML data URI scheme)
 XML SET OPTIONS($pictElemRef;XML picture encoding;XML native codec)
 DOM SET XML ATTRIBUTE($pictElemRef;"xlink:href";PictVar)
```

#### Ver também 

[DOM SET XML ATTRIBUTE](dom-set-xml-attribute.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  
[DOM SET XML ELEMENT VALUE](dom-set-xml-element-value.md)  
[SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)  
[XML GET OPTIONS](xml-get-options.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1090 |
| Thread-seguro | &check; |


