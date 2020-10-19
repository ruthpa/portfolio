<template>
  <div class="site-section"  data-aos="fade">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="row mb-5">
            <div class="col-12 ">
              <h2 class="site-section-heading text-center">{{ title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="lightgallery">
        <div v-for="(img, index) in images" :key="index"
             class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade"
             :data-src="`${bigImagePrefix}${img.bigImageName}`"
             :data-sub-html="img.text">
          <a href=""><img :src="`${imagePrefix}${img.imageName}`" :alt="img.alt" class="img-fluid"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    title: String,
    images: Array,
    bigImagePrefix: String,
    imagePrefix: String
  }
}
</script>
