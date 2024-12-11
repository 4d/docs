---
id: convert-picture
title: CONVERT PICTURE
slug: /commands/convert-picture
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT PICTURE.Syntax-->**CONVERT PICTURE** ( *imagem* ; *codec* {; *compressao*} )<!-- END REF-->
<!--REF #_command_.CONVERT PICTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Imagem a ser convertida |
| &#8592; | Imagem convertida |
| codec | Text | &#8594;  | Codec de identificação de Imagem |
| compressao | Real | &#8594;  | Qualidade da compressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CONVERT PICTURE.Summary-->O comando CONVERT PICTURE converte *imagem* em um novo tipo.<!-- END REF--> 

O parâmetro *codec* indica o tipo de imagem a gerar. Um codec pode ser uma extensão (por exemplo, “.gif”), um tipo Mime (por exemplo, “image/jpeg”).   
Pode obter uma lista de codecs disponíveis utilizando o comando [PICTURE CODEC LIST](picture-codec-list.md).

Se o campo ou variável *imagem* é de tipo composto (se por exemplo for o resultado da ação copiar -pegar), só a informação correspondente ao tipo codec se conserva na imagem resultante.

**Nota:** Se o tipo de *codec* solicitado é o mesmo que o tipo original da *imagem*, não se realiza nenhuna conversão e a imagem se devolve "tal qual" (exceto quando se utiliza o parâmetro *compressao*, ver a continuação). 

O parâmetro opcional *compressao*, se for passada, permite definir a qualidade de compressão a aplicar a imagem resultante quando se utiliza um Codec compatível. Em *compressao*, passe um valor entre 0 e 1 para especificar a qualidade da compressão, onde 0 é a qualidade mais medíocre (alta compressão) e 1 a melhor qualidade (compressão baixa). Este parâmetro só é considerado quando o codec for compatível com a compressão (por exemplo JPEG o HDPhoto) e for compatível com os APIs WIC e ImageIO. Portanto, não pode ser utilizado com Codecs administrados por QuickTime unicamente. Para maior informação sobre os APIs de gestão de imagem em 4D, consulte a seção *Imagens*. Por padrão, se omitir o parâmetro *compressao*, se aplica a melhor qualidade (compressão =1). 

**Nota:** Se quiser chamar **CONVERT PICTURE** com o tipo de imagem que não for compatível em versões 4D de 64-bits (tais como PICT), tenha certeza de que a conversão é realizada em uma versão 4D de 32-bits, na qual o tipo original é compatível. Para saber mais, veja a página *Mudar de versões 32-bits a versões 64-bits*. 

#### Exemplo 1 

Conversão da imagem vpFoto ao formato jpeg: 

```4d
 CONVERT PICTURE(vpFoto;".jpg")
```

#### Exemplo 2 

Conversão de uma imagem com qualidade de 60%:

```4d
 CONVERT PICTURE(vPicture;".JPG";0.6)
```

#### Ver também 

[PICTURE CODEC LIST](picture-codec-list.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1002 |
| Thread-seguro | &check; |
| Proibido no servidor ||


