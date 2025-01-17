---
id: picture-codec-list
title: PICTURE CODEC LIST
slug: /commands/picture-codec-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE CODEC LIST.Syntax-->**PICTURE CODEC LIST** ( *arrayCodec* {; *arrayNomes*}{; *} )<!-- END REF-->
<!--REF #_command_.PICTURE CODEC LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayCodec | Text array | &#8592; | Identificadores de codecs de imagens disponíveis |
| arrayNomes | Text array | &#8592; | Nomes dos Codecs de imagens |
| * | Operador | &#8594;  | Retorna a lista de Codecs de leitura |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PICTURE CODEC LIST.Summary-->O comando PICTURE CODEC LIST preenche o array *arrayCodec* com a lista dos identificadores dos codecs de imagens que estão disponíveis na máquina onde se executa.<!-- END REF--> Esta lista inclui os codecs dos formatos de imagens que são geridos nativamente por 4D.  

Os identificadores dos codecs podem ser devolvidos no array *arrayCodec* de duas formas diferentes:

* como uma extenão (por exemplo, “.gif”)
* como um tipo Mime (por exemplo, “Imagem/jpeg”)

**Nota de compatibilidade**: Se QuickTime foi ativado na base (ver a seção *Imagens*), os códigos QuickTime de 4 caracteres também podem ser devolvidos (por exemplo "PNTG").

A forma retornada pelo comando depende do modo de declaração do codec ao nível do sistema operativo. O array opcional *arrayNoms* permite recuperar o nome de cada codec. Estes nomes são mais explícitos que os identificadores. Este array pode ser utilizado, por exemplo, para criar e mostrar um menu que liste os codecs disponíveis.

Por padrão, se não passa o parâmetro *\**, o comando devolve unicamente os codecs que podem ser utilizados para codificar (escrever) as imagens. Estes identificadores podem ser utilizados no parâmetro *formato* dos comandos de exportação de imagens [WRITE PICTURE FILE](write-picture-file.md) e [PICTURE TO BLOB](picture-to-blob.md).  
 Se passa o parâmetro *\**, o comando também devolve a lista de codecs utilizados para decodificar (ler) as imagens. As duas listas não são exclusivas, certos codecs de leitura e de escrita são idênticos. Os codecs destinados a codificação das imagens podem ser utilizadas para a decodificação. Por outro lado, os codecs de decodificação não necessariamente podem ser utilizados para a codificação. Por exemplo, o codec ".jpg" se encontrará em ambas listas, enquanto o ".xbmp" estará presente na lista de codecs de leitura mas não na de escritura.

#### Ver também 

*Imagens*  
[Is picture file](is-picture-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 992 |
| Thread-seguro | &check; |


