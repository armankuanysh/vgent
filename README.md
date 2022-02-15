![VGENT](/assets/vgent-github-cover.png)

---

VGENT – Vue Agent, that helps you to develop in a more effective way.

VGENT is a CLI tool that generates boilerplate files for components, pages. You can easily customize the generator for your project and save it in the configuration file:

- provide directories, where to generate your components
- choose the language of the component: JavaScript or TypeScript
- choose which component API to use such as Options API, Composition API, or Class components
- choose CSS preprocessor
- choose the component saving option: `<component_name>.vue` or `<component_name>/index.vue`
- enable Atomic Design methodology structure of the components directory

## How to use

**Note**: if your project doesn’t have Nuxt.js or Vue.js you can’t use this tool.

First of all, you need to initialize VGENT and configure it in your project running the next command:

```bash
vgent init
```

Then, you need to provide some information about your project structure, finally, VGENT will create a configuration file: .vgentrc

```json
{
  "src": "/",
  "dir": {
    "components": "/components",
    "pages": "/pages"
  },
  "components": {
    "atomicDesign": true,
    "styleLang": "scss",
    "scriptLang": "ts",
    "componentApi": "optionsApi",
    "useIndex": true
  },
  "pages": {
    "useIndex": true
  }
}
```

### Configuration glossary

- **src** – is a source directory of your project.
- **dir** – is an object where:
  - **components** – is a directory of the components
  - **pages** – is a directory of the pages or views
- **components** – is an object of the component generation configurations where:
  - **atomicDesign** – is a flag to define Atomic Design structure
  - **styleLang** – is a name of your CSS preprocessor or just CSS
  - **scriptLang** – is the name of programming language to use in the components
  - **componentsApi** – is a script block type of your component. It could be `optionsApi`, `compositionApi` or `class`. Class type is available if you are using TypeScript.
  - **useIndex** – is a flag to provide format of component saving: `<component_name>/index.vue` or `<component_name>.vue`.
- pages – is an object of the pages generation configuration where:
  - **useIndex** – is a flag to provide format of component saving: `<component_name>/index.vue` or `<component_name>.vue`.

### Component generation

To generate a component you need to run the next command:

```bash
vgent make -c <component_name>
```

This command will generate the component in the components directory provided in the configuration with other options

If you are using the Atomic Design directory structure you can provide the component type:

```bash
# to generate an atom component
vgent make -c <component_name> -a

# to generate a molecule component
vgent make -c <component_name> -m

# to generate an organism component
vgent make -c <component_name> -o

# to generate a template component
vgent make -c <component_name> -t
```

### Page component generation

To generate a page component you need to run the next command:

```bash
vgent make -p <page_name>
```

This command will generate the page component in the pages directory provided in the configuration with other component options

If you need to generate a dynamic page (slug or id) you can provide the page type:

```bash
# to generate a slug page
vgent make -p <page_name> --slug

# to generate an id page
vgent make -p <page_name> --id
```

## Authors

Arman Kuanysh – [@armankuanysh](https://github.com/armankuanysh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/armankuanysh/vgent/blob/main/LICENSE)
 file for details
