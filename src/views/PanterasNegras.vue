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
        { alt: 'panterasNegras', imageName: 'panteras_negras_0001.jpg', bigImageName: 'panteras_negras_0001.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0002.jpg', bigImageName: 'panteras_negras_0002.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0003.jpg', bigImageName: 'panteras_negras_0003.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0004.jpg', bigImageName: 'panteras_negras_0004.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0005.jpg', bigImageName: 'panteras_negras_0005.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0006.jpg', bigImageName: 'panteras_negras_0006.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0007.jpg', bigImageName: 'panteras_negras_0007.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0008.jpg', bigImageName: 'panteras_negras_0008.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0009.jpg', bigImageName: 'panteras_negras_0009.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0010.jpg', bigImageName: 'panteras_negras_0010.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0011.jpg', bigImageName: 'panteras_negras_0011.jpg', text: 'text' },
        { alt: 'panterasNegras', imageName: 'panteras_negras_0012.jpg', bigImageName: 'panteras_negras_0012.jpg', text: 'text' }
      ]
    }
  }
}
</script>
