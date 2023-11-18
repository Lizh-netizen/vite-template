import { defineConfig } from 'unocss'
import { presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block'
        // ...
      }
    })
  ]
})
