//import FeaturesVariousChannelPage from '@/pages/features/various-channel'

// dynamic import: need to test with ExtractTextWebpackPlugin
const FeaturesVariousChannelPage = () => import(/* webpackChunkName: "features" */ '@/pages/features/various-channel')

const featureSubPages = [
  {
    path: 'features/various-channel',
    name: 'feature-01',
    component: FeaturesVariousChannelPage,
  },
  /*
  {
    path: 'features/search',
    name: 'feature-02',
    component: FeaturesSearchPage,
  },
  */
]

export default featureSubPages
