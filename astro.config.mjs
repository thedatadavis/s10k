import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Slender Stack Development',
			social: {
				github: 'https://github.com/thedatadavis/s10k',
				linkedin: 'https://linkedin.com/in/thedatadavis'
			},
			sidebar: [
				{
					label: 'Intro',
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Start Small',
					autogenerate: { directory: 'small' },
				},
				{
					label: 'Use Leverage',
					autogenerate: { directory: 'leveraged' },
				},
				{
					label: 'Model Your Unit Economics',
					autogenerate: { directory: 'economical' },
				},
				{
					label: 'Niche Down',
					autogenerate: { directory: 'niche' },
				},
				{
					label: 'De-risk, De-risk, De-risk',
					autogenerate: { directory: 'derisked' },
				},
				{
					label: 'Efficiency is Key',
					autogenerate: { directory: 'effiencient' },
				},
				{
					label: 'Make it Repeatable',
					autogenerate: { directory: 'repeatable' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
		}),
	],
});
