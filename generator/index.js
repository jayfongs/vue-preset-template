/**
 * @author: YouJie
 * @date: 2019-10-23 16:58:22
 */

const getUiFramework = require('../ui/index')

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      axios: '^0.19.0',
      lodash: '^4.17.15',
      vuex: '^3.1.1',
      dayjs: '^1.8.16',
      'normalize.css': '^8.0.1',
      'vue-router': '^3.1.3'
    },

    devDependencies: {
      'compression-webpack-plugin': '^3.0.0'
    }
  })

  getUiFramework(api, options)
  api.render('./template')
}