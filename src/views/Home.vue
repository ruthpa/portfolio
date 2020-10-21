<template>
  <div class="home">
    <div class="container-fluid" data-aos="fade" data-aos-delay="500">
      <div class="row">
        <div class="col-lg-4" v-for="(img, index) in Object.keys(images)" :key="index">
          <router-link :to="images[img]">
            <div class="image-wrap-2 image-info">
              <img :src="`images/website/home/${img}`" alt="Image" class="img-fluid">
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      images: {
        'home_website_0001.jpg': '/projects/safe_heaven',
        'home_website_0002.jpg': '/projects/safe_heaven',
        'home_website_0003.jpg': '/projects/safe_heaven',
        'home_website_0004.jpg': '/projects/safe_heaven',
        'home_website_0005.jpg': '/projects/safe_heaven',
        'home_website_0006.jpg': '/projects/safe_heaven',
        'home_website_0007.jpg': '/projects/safe_heaven',
        'home_website_0008.jpg': '/projects/safe_heaven',
        'home_website_0009.jpg': '/projects/safe_heaven',
        'home_website_0010.jpg': '/commissioned/dior',
        'home_website_0011.jpg': '/commissioned/dior',
        'home_website_0012.jpg': '/commissioned/dior'
      }
    }
  }
}
</script>
