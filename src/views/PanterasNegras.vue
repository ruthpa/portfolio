<template>
<carousel :images="images" :big-image-prefix="bigImagePrefix" :image-prefix="imagePrefix" :title="title"/>
</template>
<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'PanterasNegras',
  components: { Carousel },
  data () {
    return {
      title: 'Panteras Negras',
      imagePrefix: '/images/website/projects/panteras_negras/',
      bigImagePrefix: '/images/website/projects/panteras_negras/',
      images: [
        { alt: 'panterasNegras', imageName: 'panterasnegras_0001.jpg', bigImageName: 'panterasnegras_0001.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0002.jpg', bigImageName: 'panterasnegras_0002.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0003.jpg', bigImageName: 'panterasnegras_0003.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0004.jpg', bigImageName: 'panterasnegras_0004.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0005.jpg', bigImageName: 'panterasnegras_0005.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0006.jpg', bigImageName: 'panterasnegras_0006.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0007.jpg', bigImageName: 'panterasnegras_0007.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0008.jpg', bigImageName: 'panterasnegras_0008.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0009.jpg', bigImageName: 'panterasnegras_0009.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0010.jpg', bigImageName: 'panterasnegras_0010.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0011.jpg', bigImageName: 'panterasnegras_0011.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panterasnegras_0012.jpg', bigImageName: 'panterasnegras_0012.jpg', text: 'text' }
      ]
    }
  }
}
</script>
