export const template = `<template></template>`;
export const scriptOptionsApi = (lang, name) => `<script lang="${lang}">
${lang === 'ts' && `import Vue from 'vue'`}
export default ${lang === 'ts' && `Vue.extend(`}{
  name: '${name}',
	components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}${lang === 'ts' && `)`}
</script>`;
export const scriptClass = (lang, name) => `<script lang="${lang}">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ${name} extends Vue {}
</script>`;
export const scriptCompositionApi = (lang) => `<script lang="${lang}" setup></script>`;
export const style = (lang) => `<style lang="${lang}" scoped></style>`;
export const script = {
  compositionApi: (lang, _name) => scriptCompositionApi(lang),
  optionsApi: (lang, name) => scriptOptionsApi(lang, name),
  class: (lang, name) => scriptClass(lang, name) };

export const component = (name, componentApi, scriptLang, styleLang) => `${template}

${script[componentApi](scriptLang, name)}

${style(styleLang)}
`;
//# sourceMappingURL=component.js.map