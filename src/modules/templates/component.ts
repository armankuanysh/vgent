import { scriptLang, styleLang, componentApi } from 'types/config'

export const template = `<template></template>`

export const scriptOptionsApi = (
  lang: scriptLang,
  name: string
) => `<script lang="${lang}">
export default {
  name: '${name}',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>`

export const scriptClass = (
  lang: scriptLang,
  name: string
) => `<script lang="${lang}">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ${name} extends Vue {}
</script>`

export const scriptCompositionApi = (lang: scriptLang) =>
  `<script lang="${lang}" setup></script>`

export const style = (lang: styleLang) =>
  `<style lang="${lang}" scoped></style>`

export const script = {
  compositionApi: (lang: scriptLang, _name: string) =>
    scriptCompositionApi(lang),
  optionsApi: (lang: scriptLang, name: string) => scriptOptionsApi(lang, name),
  class: (lang: scriptLang, name: string) => scriptClass(lang, name),
}

export const component = (
  name: string,
  componentApi: componentApi,
  scriptLang: scriptLang,
  styleLang: styleLang
) => `${template}

${script[componentApi](scriptLang, name)}

${style(styleLang)}
`
