import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        deps: {
            inline: [/@nuxt\/test-utils-edge/],
        },
    }
})