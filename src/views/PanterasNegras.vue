<template>
  <div class="site-section"  data-aos="fade">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="row mb-5">
            <div class="col-12 ">
              <h2 class="site-section-heading text-center">Panteras Negras</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="lightgallery">
        <div v-for="(img, index) in images" :key="index"
             class="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade"
             :data-src="`/images/website/projects/panteras_negras/${img}`"
             data-sub-html="<h4>Fading Light</h4><p>Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
          <a href="#"><img :src="`/images/website/projects/panteras_negras/${img}`" alt="IMage" class="img-fluid"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PanterasNegras',
  components: {},
  data () {
    return {
      images: [
        'panterasnegras_0001.jpg',
        'panterasnegras_0002.jpg',
        'panterasnegras_0003.jpg',
        'panterasnegras_0004.jpg',
        'panterasnegras_0005.jpg',
        'panterasnegras_0006.jpg',
        'panterasnegras_0007.jpg',
        'panterasnegras_0008.jpg',
        'panterasnegras_0009.jpg',
        'panterasnegras_0010.jpg',
        'panterasnegras_0011.jpg',
        'panterasnegras_0012.jpg'
      ]
    }
  }
}
</script>
