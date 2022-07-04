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
	@import '../styles/settings/_colors.scss';
	.CodeBox {
		border: solid 1px $gray;
    font-size: 0.8em;
	}

	@media screen and (min-width: 377px) {
		.CodeBox {
			font-size: 1em;
		}
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

	@media print {
    .CodeBox {
			font-size: 0.95em;
    }
  }
</style>
