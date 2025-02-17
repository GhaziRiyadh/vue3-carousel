# Examples

## [Basic Example](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleBasic.vue)

<ExampleBasic></ExampleBasic>

```vue
<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
```
## [Wrap Around](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleWrapAround.vue)

<ExampleWrapAround></ExampleWrapAround>

```vue
<template>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>
```

## [Breakpoints](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleBreakpoints.vue)

<ExampleBreakpoints></ExampleBreakpoints>

```vue
<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
});
</script>
```

## [HiddenArrows](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleHiddenArrows.vue)

<ExampleHiddenArrows></ExampleHiddenArrows>

```vue
<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
```

## [Pagination](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleBreakpoints.vue)

<ExamplePagination></ExamplePagination>

```vue

<template>
  <Carousel :settings='settings' :breakpoints='breakpoints'>
    <Slide v-for='slide in 10' :key='slide'>
      <div class='carousel__item'>{{ slide }}</div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default defineComponent({
  name: 'ExamplePagination',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
});
</script>
```

## [Autoplay Example](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleAutoplay.vue)

<ExampleAutoplay></ExampleAutoplay>

```vue
<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
```

## [Active Classes](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleActiveClasses.vue)

<ExampleActiveClasses></ExampleActiveClasses>

```vue
<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>

```


## [Custom Navigation](https://github.com/ismail9k/vue3-carousel/blob/master/docs/examples/ExampleCustomNavigation.vue)

<ExampleCustomNavigation></ExampleCustomNavigation>

```vue
<template>
  <Carousel ref="carousel" v-model="currentSlide">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide - 1 }}</div>
    </Slide>

    ...
  </Carousel>

  <div>
    <button @click="next">Next</button>
    <input type="number" min="0" max="9" v-model="currentSlide" />
    <button @click="prev">Prev</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
})
</script>
```

<script>
import ExampleBasic from './examples/ExampleBasic.vue';
import ExampleWrapAround from './examples/ExampleWrapAround.vue';
import ExampleBreakpoints from './examples/ExampleBreakpoints.vue';
import ExampleHiddenArrows from './examples/ExampleHiddenArrows.vue';
import ExamplePagination from './examples/ExamplePagination.vue';
import ExampleAutoplay from './examples/ExampleAutoplay.vue';
import ExampleActiveClasses from './examples/ExampleActiveClasses.vue';
import ExampleCustomNavigation from './examples/ExampleCustomNavigation.vue';

export default {
  components: {
    ExampleBasic,
    ExampleWrapAround,
    ExampleBreakpoints,
    ExampleHiddenArrows,
    ExampleAutoplay,
    ExamplePagination,
    ExampleActiveClasses,
    ExampleCustomNavigation,
  }
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
