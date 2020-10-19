<template>
  <carousel :images="images" :big-image-prefix="bigImagePrefix" :image-prefix="imagePrefix" :title="title"/>
</template>
<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'Dior',
  components: { Carousel },
  data () {
    return {
      title: 'Dior',
      imagePrefix: '/images/website/commissioned/dior/',
      bigImagePrefix: '/images/website/commissioned/dior/',
      images: [
        { alt: 'dior', imageName: 'ruthprieto_dior_0001.jpg', bigImageName: 'ruthprieto_dior_0001.jpg', text: 'text' },
        { alt: 'dior', imageName: 'ruthprieto_dior_0002.jpg', bigImageName: 'ruthprieto_dior_0002.jpg', text: 'text' },
        { alt: 'dior', imageName: 'ruthprieto_dior_0003.jpg', bigImageName: 'ruthprieto_dior_0003.jpg', text: 'text' },
        { alt: 'dior', imageName: 'ruthprieto_dior_0004.jpg', bigImageName: 'ruthprieto_dior_0004.jpg', text: 'text' },
        { alt: 'dior', imageName: 'ruthprieto_dior_0005.jpg', bigImageName: 'ruthprieto_dior_0005.jpg', text: 'text' },
        { alt: 'dior', imageName: 'ruthprieto_dior_0006.jpg', bigImageName: 'ruthprieto_dior_0006.jpg', text: 'text' }
      ]
    }
  }
}
</script>
