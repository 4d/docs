const fs = require("fs")

const PREPROCESSING_TARGET_SYNTAX = process.env.PREPROCESSING_TARGET_SYNTAX
let target_syntax = "docs"
let target_syntax_translate = "current"

if(PREPROCESSING_TARGET_SYNTAX) {
    const versionDir = "versioned_docs/" + PREPROCESSING_TARGET_SYNTAX
    if (!fs.existsSync(versionDir)) {
        const available = fs.existsSync("versioned_docs")
            ? fs.readdirSync("versioned_docs").filter(n => n.startsWith("version-"))
            : []
        console.error(
            `\x1b[31mERROR\x1b[0m: PREPROCESSING_TARGET_SYNTAX="${PREPROCESSING_TARGET_SYNTAX}" ` +
            `but folder "${versionDir}" does not exist.\n` +
            `Available versions: ${available.join(", ") || "(none)"}\n` +
            `Leave PREPROCESSING_TARGET_SYNTAX unset to build the current (docs/) version.`
        )
        process.exit(1)
    }
    target_syntax = versionDir
    target_syntax_translate = PREPROCESSING_TARGET_SYNTAX
}

module.exports = {
    default: 
    {
        path:"./docs/",
        config:"preprocessing.conf",
        syntax_escape_list: [
            {
                from: "&rarr;",
                to: "->"
            },
            {
                from: "<div class=\"no-index\">",
                to: ""
            },
            {
                from: "</div>",
                to: ""
            },
            {
                from: "&larr;",
                to: "<-"
            },
            {
                from: "&harr;",
                to: "<->"
            },
            {
                from: "&#8594;",
                to: "->"
            },
            {
                from: "&#8592;",
                to: "<-"
            },
            {
                from: "&#8596;",
                to: "<->"
            },
            {
                from: "&#8596;",
                to: "<->"
            }
        ],
        include_escape_list: [
            {
                from: "<br/>\n",
                to: "<br/>"
            }
        ]
    },
    build_versioned_docs: {
        path:"./versioned_docs/*/"
    },
    start_watch : {
        watch:true,
        output:"./docsPostProcessed/"
    },
    build_translate: {
        path:"./i18n/%language%/docusaurus-plugin-content-docs/*/",
        languages:["de", "es", "fr", "ja", "pt"]
    },
    build_syntax: {
        path:`./${target_syntax}/`,
        exclude_list:["ViewPro"],
        syntax_output:"./syntax/en.lproj/syntaxEN.json",
        config:"preprocessing.conf",
        syntax_only:true,
        syntax_pretty:true
    },
    build_syntax_translated: {
        path:`./i18n/%language%/docusaurus-plugin-content-docs/${target_syntax_translate}/`,
        languages:["de", "es", "fr", "ja", "pt"],
        exclude_list:["ViewPro"],
        syntax_output:"./syntax/%language%.lproj/syntax%LANGUAGE%.json",
        config:"../../../../docs/preprocessing.conf",
        syntax_only:true,
        syntax_pretty:true
    },
    build_syntax_viewPro: {
        path:`./${target_syntax}/ViewPro/`,
        syntax_output:"./syntax_viewPro/en.lproj/syntaxEN.json",
        config:"../preprocessing.conf",
        syntax_only:true,
        syntax_pretty:true
    },
    build_syntax_viewPro_translated: {
        path:`./i18n/%language%/docusaurus-plugin-content-docs/${target_syntax_translate}/ViewPro/`,
        languages:["de", "es", "fr", "ja", "pt"],
        syntax_output:"./syntax_viewPro/%language%.lproj/syntax%LANGUAGE%.json",
        config:"../../../../../docs/preprocessing.conf",
        syntax_only:true,
        syntax_pretty:true
    },

}
