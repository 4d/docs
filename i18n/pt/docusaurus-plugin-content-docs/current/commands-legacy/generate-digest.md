---
id: generate-digest
title: Generate digest
slug: /commands/generate-digest
displayed_sidebar: docs
---

<!--REF #_command_.Generate digest.Syntax-->**Generate digest** ( *param* ; *algoritmo* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Generate digest.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| param | Blob, Text | &#8594;  | Blob o texto para o qual obter uma chave digest |
| algoritmo | Integer | &#8594;  | Algoritimo utilizado para retornar a chave: 0 = MD5 Digest, 1 = SHA1 Digest |
| * | Operador | &#8594;  | Encode digest in Base64URL |
| resultado | Text | &#8592; | Valor da chave digest |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Generate digest.Summary-->O comando **Generate digest** retorna a chave digest (ou chave de resumo) de um BLOB ou texto depois da aplicação de um algoritmo de criptografia.<!-- END REF-->

Passe um Text ou então um campo ou variável BLOB no parâmetro *param*. A função **Generate digest**  retorna a chave digest como uma string.

No parâmetro *algoritimo*, passe um valor designando qual função hash vai usar. Use uma das constantes abaixo, encontradas no tema *Tipo Digest* :

| Constante           | Tipo          | Valor | Comentário                                                                                                 |
| ------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------- |
| \_o\_4D REST digest | Inteiro longo | 2     | \*\*\* Constante obsoleta \*\*\*                                                                           |
| MD5 digest          | Inteiro longo | 0     | Utilizar o algoritmo MD5                                                                                   |
| SHA1 digest         | Inteiro longo | 1     | Utilizar o algoritmo SHA-1                                                                                 |
| SHA256 digest       | Inteiro longo | 3     | (Familia SHA-2) SHA-256 é uma série de 256 bits devolvidos como uma string de 64 caracteres hexadecimais.  |
| SHA512 digest       | Inteiro longo | 4     | (Família SHA-2) SHA-512 é uma série de 512 bits devolvidos como uma string de 128 caracteres hexadecimais. |

**Nota:** Não é recomendado usar algoritmos MD5 e SHA para manejar senhas. Se precisar checar senhas, é recomendado usar os comandos [Generate password hash](generate-password-hash.md) e [Verify password hash ](verify-password-hash.md).

Por padrão, se o parâmetro *\** for omitido, o digest retornado é codificado em hexadecimal. Passe o parâmetro *\** se quiser que seja codificado em Base64URL. 

O valor retornado para o mesmo objeto é o mesmo em todas as plataformas (MacOS/Windows). O cálculo é realizado baseado na representação em UTF-8 do texto passado no parâmetro.

**Nota:** se usar o comando com um texto/BLOB vazio, não retorna void, e sim um valor de string (por exemplo "d41d8cd98f00b204e9800998ecf8427e" para MD5).

#### Exemplo 1 

Este exemplo compara duas imagens utilizando o algoritmo MD5: 

```4d
 var $vPict1;$vPict2 : Picture
 var $FirstBlob;$SecondBlob : Blob
 READ PICTURE FILE("c:\\myPhotos\\photo1.png")
 If(OK=1)
    READ PICTURE FILE("c:\\myPhotos\\photo2.png")
    If(OK=1)
       PICTURE TO BLOB($vPict1;$FirstBlob;".png")
       PICTURE TO BLOB($vPict2;$SecondBlob;".png")
 
       $MD5_1:=Generate digest($FirstBlob;MD5 digest)
       $MD5_2:=Generate digest($SecondBlob;MD5 digest)
 
       If($MD5_1#$MD5_2)
          ALERT("Essas duas imagens são diferentes.")
       Else
          ALERT("Essas duas imagens são iguais.")
       End if
    End if
 End if
```

#### Exemplo 2 

Esses exemplos ilustram como recuperar a chave digest de um texto:

```4d
 $key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)
  // $key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"
 $key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)
  // $key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"
```

#### Ver também 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  
[Generate password hash](generate-password-hash.md)  
*Protocolo de segurança*  
[WEB Validate digest](web-validate-digest.md)  