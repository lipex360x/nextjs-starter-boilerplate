import type { PlopGeneratorConfig } from 'plop'

export default <Partial<PlopGeneratorConfig>>{
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name',
      validate: (value: string) => (!value ? 'name is required' : true),
    },
  ],

  actions: (data: any) => {
    const { componentName } = data
    const fileData = { componentName }

    return [
      {
        type: 'add',
        path: `../src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx`,
        templateFile: `modules/components/templates/component.hbs`,
        data: fileData,
      },

      {
        type: 'add',
        path: `../src/components/{{pascalCase componentName}}/index.ts`,
        templateFile: `modules/components/templates/index.hbs`,
        data: fileData,
      },

      {
        type: 'add',
        path: `../src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.styles.ts`,
        templateFile: `modules/components/templates/styles.hbs`,
        data: fileData,
      },

      {
        type: 'add',
        path: `../src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.tsx`,
        templateFile: `modules/components/templates/stories.hbs`,
        data: fileData,
      },

      {
        type: 'add',
        path: `../src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.spec.tsx`,
        templateFile: `modules/components/templates/spec.hbs`,
        data: fileData,
      },
    ]
  },
}
