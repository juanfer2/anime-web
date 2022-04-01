const path = require('path');

module.exports = {
  staticDirs: ['@/assets'],
  stories: ['../src/**/**/*.stories.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src/styles')
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    );

    return {
      ...config,
      plugins: [...config.plugins],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src')
        }
      }
    };
  }
  /*
  "core": {
    "builder": "storybook-builder-vite"
  },
  */
  /*
  viteFinal: (config) => {
    config.plugins = [
      ...config.plugins,
      require('@preact/preset-vite').default()
    ]

    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 1200
    }
    return config
  }
  */
};
