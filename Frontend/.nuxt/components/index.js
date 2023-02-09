export { default as Adicionar } from '../..\\components\\Adicionar.vue'
export { default as Atualizar } from '../..\\components\\Atualizar.vue'
export { default as BotaoAdicionar } from '../..\\components\\BotaoAdicionar.vue'
export { default as Excluir } from '../..\\components\\Excluir.vue'
export { default as Lista } from '../..\\components\\Lista.vue'
export { default as Titulo } from '../..\\components\\Titulo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
