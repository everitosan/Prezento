<script lang="ts">
	import CodeBox from './CodeBox.svelte';

	type Data = {
		code: string;
		language: string;
	};

	export let data: Array<Data>;
</script>

<div class="cvWrapper">
	{#each data as section, i}
	<div class={`Box Box-${i}`}>
		<CodeBox language={section.language} code={section.code} />
	</div>
	{/each}
</div>

<style lang="scss">
	@import '../styles/settings/_colors.scss';

	.cvWrapper {
    align-items: flex-start;
    display: grid;
    grid-gap: 1em;
    justify-content: center;
	}

	@media screen and (min-width: 780px) and (max-width: 1299px) {
		.cvWrapper {
      grid-template-columns: 1fr 1fr;
		}
		.Box-2 {
			grid-column-start: 2;
			grid-row-start: 1;
			grid-row-end: 5;
		}

		.Box-6 {
			grid-column-start: 2;
			grid-row-start: 5;
		}
	}

	@media screen and (min-width: 1300px) {
		.cvWrapper {
			grid-template-columns: 1fr 1fr 1fr;
		}
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
			grid-row-end: 5;
		}

		.Box-5 {
			grid-row-start: 4;
			grid-column-start: 3;
		}

		// Column 3
		.Box-6 {
			grid-column-start: 3;
			grid-row-start: 1;
			grid-row-end: 4;
		}
	}

	@media print {
    .cvWrapper {
			grid-gap: 0em;
			grid-template-columns: 1fr 1fr;
    }
		.Box-0, .Box-1, .Box-2, .Box-3, .Box-4 {
			grid-column: 1 / span 2;
		}
		.Box-5 {
			grid-column-start: 2;
		}
		.Box-6 {
			grid-column-start: 1;
			grid-row-start: 6;
		}

		// // Column 3
		// .Box-6 {
		// 	grid-column-start: 3;
		// 	grid-row-start: 1;
		// 	grid-row-end: 4;
		// }
  }
</style>
