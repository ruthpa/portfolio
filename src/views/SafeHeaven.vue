<template>
  <div >
    <div v-for="key in Object.keys(catalogue)" :key="key">
    <carousel :images="catalogue[key].images"
              :big-image-prefix="catalogue[key].bigImagePrefix"
              :image-prefix="catalogue[key].imagePrefix"
              :title="catalogue[key].title"/>
    </div>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'SafeHeaven',
  components: { Carousel },
  data () {
    return {
      catalogue: {
        blue: {
          title: 'Blue - Delia',
          imagePrefix: '/images/website/projects/safe_heaven/blue_delia/',
          bigImagePrefix: '/images/website/projects/safe_heaven/blue_delia/',
          images: [
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0001.jpg', bigImageName: 'safeheaven_blue_0001.jpg', text: 'text' },
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0002.jpg', bigImageName: 'safeheaven_blue_0002.jpg', text: 'text' },
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0003.jpg', bigImageName: 'safeheaven_blue_0003.jpg', text: 'text' },
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0004.jpg', bigImageName: 'safeheaven_blue_0004.jpg', text: 'text' },
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0005.jpg', bigImageName: 'safeheaven_blue_0005.jpg', text: 'text' },
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0006.jpg', bigImageName: 'safeheaven_blue_0006.jpg', text: 'text' },
            { alt: 'safe-heaven-blue', imageName: 'safeheaven_blue_0007.jpg', bigImageName: 'safeheaven_blue_0007.jpg', text: 'text' }
          ]
        },
        green: {
          title: 'Green - Sabel',
          imagePrefix: '/images/website/projects/safe_heaven/green_sabel/',
          bigImagePrefix: '/images/website/projects/safe_heaven/green_sabel/',
          images: [
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0001.jpg', bigImageName: 'safeheaven_green_0001.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0002.jpg', bigImageName: 'safeheaven_green_0002.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0003.jpg', bigImageName: 'safeheaven_green_0003.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0004.jpg', bigImageName: 'safeheaven_green_0004.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0005.jpg', bigImageName: 'safeheaven_green_0005.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0006.jpg', bigImageName: 'safeheaven_green_0006.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0007.jpg', bigImageName: 'safeheaven_green_0007.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0008.jpg', bigImageName: 'safeheaven_green_0008.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0009.jpg', bigImageName: 'safeheaven_green_0009.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0010.jpg', bigImageName: 'safeheaven_green_0010.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0011.jpg', bigImageName: 'safeheaven_green_0011.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0012.jpg', bigImageName: 'safeheaven_green_0012.jpg', text: 'text' },
            { alt: 'safe-heaven-green', imageName: 'safeheaven_green_0013.jpg', bigImageName: 'safeheaven_green_0013.jpg', text: 'text' }
          ]
        },
        purple: {
          title: 'Purple - Maribel',
          imagePrefix: '/images/website/projects/safe_heaven/purple_maribel/',
          bigImagePrefix: '/images/website/projects/safe_heaven/purple_maribel/',
          images: [
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0001.jpg', bigImageName: 'safeheaven_purple_0001.jpg', text: 'text' },
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0002.jpg', bigImageName: 'safeheaven_purple_0002.jpg', text: 'text' },
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0003.jpg', bigImageName: 'safeheaven_purple_0003.jpg', text: 'text' },
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0004.jpg', bigImageName: 'safeheaven_purple_0004.jpg', text: 'text' },
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0005.jpg', bigImageName: 'safeheaven_purple_0005.jpg', text: 'text' },
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0006.jpg', bigImageName: 'safeheaven_purple_0006.jpg', text: 'text' },
            { alt: 'safe-heaven-purple', imageName: 'safeheaven_purple_0007.jpg', bigImageName: 'safeheaven_purple_0007.jpg', text: 'text' }
          ]
        },
        yellow: {
          title: 'Yellow - Juanita',
          imagePrefix: '/images/website/projects/safe_heaven/yellow_juanita/',
          bigImagePrefix: '/images/website/projects/safe_heaven/yellow_juanita/',
          images: [
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0001.jpg', bigImageName: 'safeheaven_yellow_0001.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0002.jpg', bigImageName: 'safeheaven_yellow_0002.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0003.jpg', bigImageName: 'safeheaven_yellow_0003.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0004.jpg', bigImageName: 'safeheaven_yellow_0004.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0005.jpg', bigImageName: 'safeheaven_yellow_0005.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0006.jpg', bigImageName: 'safeheaven_yellow_0006.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0007.jpg', bigImageName: 'safeheaven_yellow_0007.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0008.jpg', bigImageName: 'safeheaven_yellow_0008.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0009.jpg', bigImageName: 'safeheaven_yellow_0009.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0010.jpg', bigImageName: 'safeheaven_yellow_0010.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0011.jpg', bigImageName: 'safeheaven_yellow_0011.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0012.jpg', bigImageName: 'safeheaven_yellow_0012.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0013.jpg', bigImageName: 'safeheaven_yellow_0013.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0014.jpg', bigImageName: 'safeheaven_yellow_0014.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0014.jpg', bigImageName: 'safeheaven_yellow_0014.jpg', text: 'text' },
            { alt: 'safe-heaven-yellow', imageName: 'safeheaven_yellow_0016.jpg', bigImageName: 'safeheaven_yellow_0015.jpg', text: 'text' }
          ]
        }
      }
    }
  }
}
</script>
