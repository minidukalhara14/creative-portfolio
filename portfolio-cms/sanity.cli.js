import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '6xwfm015',
    dataset: 'production'
  },
  deployment: {
    appId: 'uwdkw7fwj8fi7zbcsuflze6e',
    autoUpdates: true,
  }
})
