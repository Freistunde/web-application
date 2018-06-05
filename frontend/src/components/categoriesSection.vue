<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters popup-gallery">
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img class="img-fluid" src="./../assets/category1.jpg" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-faded">
                Kategorie 1
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img class="img-fluid" src="./../assets/category2.jpg" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-faded">
                Kategorie 2
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img class="img-fluid" src="./../assets/category3.jpg" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-faded">
                Kategorie 3
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img class="img-fluid" src="./../assets/category4.jpg" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-faded">
                Kategorie 4
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img class="img-fluid" src="./../assets/category5.jpg" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-faded">
                Kategorie 5
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 col-sm-6">
        <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img class="img-fluid" src="./../assets/category6.jpg" alt="">
          <div class="portfolio-box-caption">
            <div class="portfolio-box-caption-content">
              <div class="project-category text-faded">
                Kategorie 6
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Kategorie 1",
          imgUrl: "./../assets/category1.jpg"
        },
        {
          title: "Kategorie 2",
          imgUrl: "./../assets/category2.jpg"
        },
        {
          title: "Kategorie 3",
          imgUrl: "./../assets/category3.jpg"
        },
        {
          title: "Kategorie 4",
          imgUrl: "./../assets/category4.jpg"
        },
        {
          title: "Kategorie 5",
          imgUrl: "./../assets/category5.jpg"
        },
        {
          title: "Kategorie 6",
          imgUrl: "./../assets/category6.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.portfolio-box {
  position: relative;
  display: block;
  max-width: 650px;
  margin: 0 auto;
}

.portfolio-box .portfolio-box-caption {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0;
  color: #fff;
  background: rgba(0,91,150, 0.8);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
}

.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-category,
.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-name {
  padding: 0 15px;
  font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
}

.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-category {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-name {
  font-size: 18px;
}

.portfolio-box:hover .portfolio-box-caption {
  opacity: 1;
}

.portfolio-box:focus {
  outline: none;
}

@media (min-width: 768px) {
  .portfolio-box
    .portfolio-box-caption
    .portfolio-box-caption-content
    .project-category {
    font-size: 16px;
  }
  .portfolio-box
    .portfolio-box-caption
    .portfolio-box-caption-content
    .project-name {
    font-size: 22px;
  }
}
</style>
