<script lang="ts">
	import CodeBox from './CodeBox.svelte';

	type Data = {
		code: string;
		language: string;
	};

	export let data: Array<Data>;
</script>

{#each data as section, i}
	<div class={`Box Box-${i}`}>
		<CodeBox language={section.language} code={section.code} />
	</div>
{/each}

<style lang="scss">
	@import '../styles/_colors.scss';
	@import '../styles/global.scss';

	@media screen and (min-width: 780px) and (max-width: 1299px) {
		.Box-2 {
			grid-column-start: 2;
			grid-row-start: 1;
			grid-row-end: 4;
		}

		.Box-6 {
			grid-column-start: 2;
			grid-row-start: 4;
			grid-row-end: 6;
		}
	}

	@media screen and (min-width: 1300px) {
		// Column 1
		.Box-1 {
			grid-column-start: 1;
			grid-row-start: 2;
		}
		.Box-3 {
			grid-column-start: 1;
			grid-row-start: 3;
		}
		.Box-4 {
			grid-column-start: 1;
			grid-row-start: 4;
		}

		// Column 2
		.Box-2 {
			grid-column-start: 2;
			grid-row-start: 1;
			grid-row-end: 4;
		}

		.Box-5 {
			grid-row-start: 4;
			grid-column-start: 3;
			// grid-column-end: 3;
		}

		// Column 3
		.Box-6 {
			grid-column-start: 3;
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}
</style>
