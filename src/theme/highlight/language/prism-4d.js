
Prism.languages["4d"] = {
  'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},

	'keyword': [
		{
      pattern: /\b(?:Begin SQL|This|End SQL|For each|Class extends|Class constructor|End for each|If|Else|End if|Case of|End case|DECLARE|For|End for|Use|End use|While|End while|Repeat|Until|Function|var)\b/,
		},
	],
  'builtin': [
    {
      pattern: /(: )(4D|Integer|Text|Real|Picture|Pointer|Boolean|Tile|Date|Blob|Object|Collection|Variant|cs)/,
      lookbehind : true
    }
  ],
  	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    // allows space
	'memberFunction': {
    pattern : /(\.)#?[_$a-zA-Z\xA0-\uFFFF](?:[$\w\xA0-\uFFFF\s])+(?=\()/,
    greedy: true,
    alias: 'function'
  },
  // allows space
  'command': {
    pattern : /[_$a-zA-Z\xA0-\uFFFF](?:[$\w\xA0-\uFFFF\s])+(?=\()/,
    alias: 'function'
  },
  'constant': {
    pattern: /\b(?:Null)\b/,
  },
  'property': {
    pattern : /(\.)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
    lookbehind: true,
  },
  'parameter' :[
    {
    pattern:/\$[0-9]{1,3}/
    },
    {
      pattern:/\${[0-9]{1,3}}/
    }
  ],
  'variable': 
  {
    pattern:/\$([_$a-zA-Z\xA0-\uFFFF](?:[$\w\xA0-\uFFFF])*)/
  },
  'interprocess-variable' :{
    pattern:/<>([_$a-zA-Z\xA0-\uFFFF](?:[$\w\xA0-\uFFFF])*)/,
    alias:'variable'
  },
  'boolean': /\b(?:True|False)\b/,

	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?(?!D)/,
	'operator': /:=|->|[!?:#\-+*\/%&|^!=<>]=?|\?\?=?|\?\.?|[~:]|\*\|/,

  'punctuation': /[{}[\];(),.:]/
};



Prism.languages.code4d = Prism.languages["4d"]

