/* TODO: ONCE WE WORK OUT PLUGIN WEIGHTING / ORDERING WE CAN LOAD ALPHABETICALLY
const s_LOADERS = [
   require('@typhonjs-node-rollup/plugin-alias'),
   require('@typhonjs-node-rollup/plugin-babel'),
   require('@typhonjs-node-rollup/plugin-json'),
   require('@typhonjs-node-rollup/plugin-node-resolve'),
   require('@typhonjs-node-rollup/plugin-postcss'),
   require('@typhonjs-node-rollup/plugin-replace'),
   require('@typhonjs-node-rollup/plugin-sourcemaps'),
   require('@typhonjs-node-rollup/plugin-string'),
   require('@typhonjs-node-rollup/plugin-terser'),
   require('@typhonjs-node-rollup/plugin-typescript'),
];
*/

const s_LOADERS = [
   require('@typhonjs-node-rollup/plugin-replace'),
   require('@typhonjs-node-rollup/plugin-alias'),
   require('@typhonjs-node-rollup/plugin-babel'),
   require('@typhonjs-node-rollup/plugin-json'),
   require('@typhonjs-node-rollup/plugin-node-resolve'),
   require('@typhonjs-node-rollup/plugin-postcss'),
   require('@typhonjs-node-rollup/plugin-string'),
   require('@typhonjs-node-rollup/plugin-typescript'),
   require('@typhonjs-node-rollup/plugin-sourcemaps'),
   require('@typhonjs-node-rollup/plugin-terser')
];

/**
 * Oclif init hook to add PluginHandler to plugin manager.
 *
 * @param {object} options - options of the CLI action.
 *
 * @returns {Promise<void>}
 */
module.exports = async function(options)
{
   try
   {
      global.$$eventbus.trigger('log:debug', `plugin-bundle-core init hook running '${options.id}'.`);

      let message = 'plugin-bundle-core - Attempting to load the following Oclif Rollup plugins:\n';
      for (const loader of s_LOADERS)
      {
         message += `${loader.pluginName} - ${JSON.stringify(loader.rollupPlugins)}\n`;
      }
      global.$$eventbus.trigger('log:verbose', message);

      // global.$$pluginManager.add({ name: '@typhonjs-node-rollup/plugin-alias', instance: PluginHandler });

   }
   catch (error)
   {
      this.error(error);
   }
};