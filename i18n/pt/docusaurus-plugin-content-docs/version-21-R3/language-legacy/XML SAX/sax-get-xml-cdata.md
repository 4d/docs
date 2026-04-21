---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *documento* : Time ; *valor* : Text, Blob )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referência do documento aberto |
| valor | Text, Blob | &#8592; | Valor do elemento |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SAX GET XML CDATA.Summary-->O comando SAX GET XML CDATA permite recuperar o *valor* CDATA de um elemento XML existente no documento XML referenciado no parâmetro *documento*.<!-- END REF--> Este comando deve ser chamado com o evento SAX XML CDATA. Para maior informação sobre eventos SAX, consulte a descrição do comando [SAX Get XML node](../commands/sax-get-xml-node).

Passe a variável *valor* do tipo Texto se quiser recuperar dados que tenham um tamanho maior que 32Kb (o banco de dados deve rodar em modo Unicode).

**Nota de compatibilidade:** A partir de 4D v12, os conteúdos CDATA codificados em base64 são decodificados automaticamente pelo comando **SAX GET XML CDATA**, de modo que não é necessário chamar ao comando [BASE64 DECODE](../commands/base64-decode). 

## Exemplo 

No código XML abaixo: 

```XML
<ElementoRaiz>
   <Filho>Meu Texto<![CDATA[MyCData]]</Filho>
</ElementoRaiz>
```

O código 4D abaixo devolverá “MeuCData” em *vDadosTexto*: 

```4d
 var vDados : Blob
 var vDadosTexto : Text
 SAX GET XML CDATA(DocRef;vDados)
 vDadosTexto:=BLOB to text(vData;UTF8 C string)
```

## Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

## Ver também 

[SAX ADD XML CDATA](../commands/sax-add-xml-cdata)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 878 |
| Thread-seguro | yes |
| Modificar variáveis | OK |


