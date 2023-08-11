const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['@mercadopago/sdk-react']);

const nextConfig = {
  restrictMode: true,
  esModule: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.prismic.io'],
    disableStaticImages: true,
    path: '',
    loader: 'imgix',
  },
  async redirects() {
    return [
      {
        source: '/assessoria/:slug*',
        destination: '/business/:slug*',
        permanent: false,
      },
    ];
  },
};

// module.exports = nextConfig;
module.exports = withPlugins(
  [withImages, { esModule: true }, withTM],
  nextConfig
);
