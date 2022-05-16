<svelte:head>
	<style>
		code.hljs {
			display: block;
      overflow: hidden;
			padding: 1em;
		}
		code.hljs {
			padding: 3px 5px;
		}
		.hljs {
			color: #d0d0d0;
			background: transparent;
		}
		.hljs ::selection,
		.hljs::selection {
			background-color: #303030;
			color: #d0d0d0;
		}
		.hljs-comment {
			color: #7C7C7C;
		}
		.hljs-tag {
			color: #b0b0b0;
		}
		.hljs-operator,
		.hljs-punctuation,
		.hljs-subst {
			color: #d0d0d0;
		}
		.hljs-operator {
			opacity: 0.7;
		}
		.hljs-bullet,
		.hljs-deletion,
		.hljs-name,
		.hljs-selector-tag,
		.hljs-template-variable,
		.hljs-variable {
			color: #40B1FF;
		}
		.hljs-attr,
		.hljs-link,
		.hljs-literal,
		.hljs-number,
		.hljs-symbol,
		.hljs-variable.constant_ {
			color: #40B1FF;
		}
		.hljs-class .hljs-title,
		.hljs-title,
		.hljs-title.class_ {
			color: #f4bf75;
		}
		.hljs-strong {
			font-weight: 700;
			color: #f4bf75;
		}
		.hljs-addition,
		.hljs-code,
		.hljs-string,
		.hljs-title.class_.inherited__ {
			color: #ACFD66;
      white-space: pre-wrap;
			word-break: break-all;
		}
		.hljs-built_in,
		.hljs-doctag,
		.hljs-keyword.hljs-atrule,
		.hljs-quote,
		.hljs-regexp {
			color: #75b5aa;
		}
		.hljs-attribute,
		.hljs-function .hljs-title,
		.hljs-section,
		.hljs-title.function_,
		.ruby .hljs-property {
			color: #6a9fb5;
		}
		.diff .hljs-meta,
		.hljs-keyword,
		.hljs-template-tag,
		.hljs-type {
			color: #aa759f;
		}
		.hljs-emphasis {
			color: #aa759f;
			font-style: italic;
		}
		.hljs-meta,
		.hljs-meta .hljs-keyword,
		.hljs-meta .hljs-string {
			color: #8f5536;
		}
		.hljs-meta .hljs-keyword,
		.hljs-meta-keyword {
			font-weight: 700;
		}
	</style>
</svelte:head>


<script lang="ts">
	import Highlight from "svelte-highlight" 
	import yaml from "svelte-highlight/languages/yaml"
	import excel from "svelte-highlight/languages/excel"
	import md from "svelte-highlight/languages/markdown"

	export let language: string = "yaml"
  export let code = `
		#
		# █ █▄░█ ▀█▀ █▀█ █▀█
		# █ █░▀█ ░█░ █▀▄ █▄█
		#
	`
	const languages = new Map([
		["yaml", yaml],
		["csv", excel],
		["md", md],
	])

	const getLaguage = (lang: string ) => {
		if (languages.has(lang)) {
			languages.get(lang)
		} 
		return yaml
	}

</script>


<div class="CodeBox">
	<Highlight language={getLaguage(language)} {code} />
</div>

<style lang="scss">
	@import '../styles/_colors.scss';
	.CodeBox {
		border: solid 1px $gray;
    font-size: 1em;
	}

	@media screen and (min-width: 780px) {
		.CodeBox {
			font-size: 1.1em;
		}
	}

	@media screen and (min-width: 1280px) {
		.CodeBox {
			font-size: 1.2em;
		}
	}
</style>
