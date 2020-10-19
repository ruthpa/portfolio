<template>
  <carousel :images="images" :big-image-prefix="bigImagePrefix" :image-prefix="imagePrefix" :title="title"/>
</template>
<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'MomentsOfSuspension',
  components: { Carousel },
  data () {
    return {
      title: 'Moments of Suspension',
      imagePrefix: '/images/website/projects/moments_of_suspension/',
      bigImagePrefix: '/images/website/projects/moments_of_suspension/',
      images: [
        { alt: 'moments-of-suspension', imageName: 'personal_0001.jpg', bigImageName: 'personal_0001.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0002.jpg', bigImageName: 'personal_0002.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0003.jpg', bigImageName: 'personal_0003.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0004.jpg', bigImageName: 'personal_0004.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0005.jpg', bigImageName: 'personal_0005.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0006.jpg', bigImageName: 'personal_0006.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0007.jpg', bigImageName: 'personal_0007.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0008.jpg', bigImageName: 'personal_0008.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0009.jpg', bigImageName: 'personal_0009.jpg', text: 'text' },
        { alt: 'moments-of-suspension', imageName: 'personal_0010.jpg', bigImageName: 'personal_0010.jpg', text: 'text' }
      ]
    }
  }
}
</script>
