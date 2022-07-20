<script setup>
import { computed, reactive } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from '~swiper/vue/swiper-vue.js'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const reasons = reactive([
  {
    id: 1,
    title: 'В описании контактные данные',
    active: false,
  },
  {
    id: 2,
    title: 'Загружает чужие фото',
    active: false,
  },
  {
    id: 3,
    title: 'Слишком много фейстюна',
    active: false,
  },
  {
    id: 4,
    title: 'Мошеничество',
    active: false,
  },
  {
    id: 6,
    title: 'Загрузка контента 18+',
    active: false,
  },
])

// const slides = computed(() => {
//   const size = 8
//   const subArray = []

//   for (let i = 0; i < Math.ceil(props.item.photos.length / size); i++) {
//     subArray[i] = props.item.photos.slice(i * size, i * size + size)
//   }

//   return subArray
// })

const slides = computed(() => props.item.photos)

const clickHandler = (id) => {
  reasons.forEach((reason) => {
    if (reason.id === id) {
      reason.active = !reason.active
    }
  })
}
</script>

<template>
  <div class="moderation-list-item">
    <div class="moderation-list-item__left">
      <div class="moderation-list-item__images">
        <img
          :src="item.avatar"
          :alt="`Аватар пользователя ID${item.userId}`"
          class="moderation-list-item__image"
        />
        <img
          :src="item.verificationPhoto"
          :alt="`Фото для верификации пользователя ID${item.userId}`"
          class="moderation-list-item__image"
        />
      </div>
      <div class="moderation-list-item__info">
        <div class="moderation-list-item__header">
          <router-link
            class="moderation-list-item__user-id"
            :to="`/search/${item.userId}`"
          >
            ID{{ item.userId }}
          </router-link>
          <div class="moderation-list-item__place">
            {{ item.country }}, {{ item.city }}
          </div>
          <div class="moderation-list-item__age">{{ item.age }} лет</div>
        </div>
        <div class="moderation-list-item__slider">
          <div class="moderation-list-item__slider-wrapper">
            <div class="moderation-list-item__slider-title">Новые фото:</div>
            <div class="moderation-list-item__slider-swiper">
              <Swiper
                :modules="[Navigation]"
                :space-between="0"
                slides-per-view="3"
                :class="{ [`test${id}`]: true }"
                :navigation="{
                  prevEl:
                    '.moderation-list-item__slider-wrapper .moderation-list-item__prev',
                  nextEl:
                    '.moderation-list-item__slider-wrapper .moderation-list-item__next',
                }"
              >
                <SwiperSlide v-for="(slide, i) in slides" :key="i">
                  <div class="moderation-list-item__slide-item">
                    <img :src="slide" alt="slide" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div class="moderation-list-item__message">
          <span>О себе:</span> {{ item.about }}
        </div>
      </div>
    </div>
    <div class="moderation-list-item__button">
      <div class="moderation-list-item__success"></div>
    </div>
    <div class="moderation-list-item__right">
      <div class="moderation-list-item__title">Отклонить по причине:</div>
      <div
        v-for="(reason, idx) in reasons"
        :key="idx"
        class="moderation-list-item__reason"
        :class="{ active: reason.active }"
        @click="clickHandler(reason.id)"
      >
        <div class="moderation-list-item__reason-icon"></div>
        {{ reason.title }}
      </div>
      <div class="moderation-list-item__input">
        <input type="text" placeholder="Опишите причину" />
        <div class="moderation-list-item__input-button"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.moderation-list-item {
  display: flex;

  &__left {
    display: flex;
    align-items: flex-start;
    width: calc(100% - 316px - 64px);
    padding: 16px 47px 16px 16px;
    border-radius: 23px 0 0 23px;
    background: $dark-gray;
  }

  &__images {
    display: flex;
    align-items: center;
    width: 378px;
  }

  &__image {
    width: 185px;
    height: 262px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 14px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__info {
    width: calc(100% - 378px - 16px);
    margin-left: 16px;
  }

  &__header {
    display: flex;
    align-items: center;
    padding: 8px 0;
  }

  &__user-id {
    display: inline-block;
    color: $white;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
  }

  &__place {
    position: relative;
    margin-left: 29px;
    color: rgba($white, 0.45);
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-weight: 700;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translate(0, -50%);
      width: 2px;
      height: 14px;
      background: rgba($white, 0.33);
    }
  }

  &__age {
    position: relative;
    margin-left: 29px;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-weight: 700;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translate(0, -50%);
      width: 2px;
      height: 14px;
      background: rgba($white, 0.33);
    }
  }

  &__slider {
    margin-top: 8px;
    padding: 8px 0;
    border: 1px solid rgba($white, 0.33);
    border-radius: 14px;
    overflow: hidden;
  }

  &__slider-title {
    width: 100px;
    margin-right: 8px;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.303rem;
    font-weight: 700;
  }

  &__slider-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 290px;
    margin: 0 auto;
  }

  &__slider-swiper {
    width: calc(100% - 108px);
  }

  &__slide-item {
    width: 52px;
    height: 52px;
    margin-right: 8px;

    &:nth-child(4n) {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .moderation-list-item__slider-wrapper .moderation-list-item__prev {
    position: absolute;
    top: calc(50% + 5px);
    left: -20px;
    transform: translate(0, -50%);
    width: 12px;
    height: 12px;
    z-index: 100;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 2px;
      background: white;
      z-index: 100;
    }

    &::after {
      transform: rotate(-45deg);
    }

    &::before {
      top: 7px;
      transform: rotate(45deg);
    }
  }

  .swiper-button-lock {
    display: block;
  }

  .swiper-button-disabled {
    &::after,
    &::before {
      opacity: 0.2;
    }
  }

  .moderation-list-item__slider-wrapper .moderation-list-item__next {
    position: absolute;
    top: calc(50% + 5px);
    right: -20px;
    transform: translate(0, -50%) rotate(180deg);
    width: 12px;
    height: 12px;
    z-index: 100;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 2px;
      background: white;
      z-index: 100;
    }

    &::after {
      transform: rotate(-45deg);
    }

    &::before {
      top: 7px;
      transform: rotate(45deg);
    }
  }

  &__message {
    height: 136px;
    padding: 8px 16px 11px 16px;
    margin-top: 8px;
    border: 1px solid rgba($black, 0.33);
    border-radius: 14px;
    background: rgba($black, 0.5);
    color: $white;
    font-size: 1.4rem;
    line-height: 2.149rem;
    font-weight: 600;

    span {
      color: #626264;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    background: $button-background;
    cursor: pointer;
  }

  &__success {
    width: 16px;
    height: 12px;
    background: url('@/assets/icons/success.svg');
  }

  &__right {
    width: 316px;
  }

  &__title {
    padding: 2.5px 24px;
    border: 1px solid $button-background-cancel;
    border-radius: 0 23px 0 0;
    background: $dark-gray;
    color: $white;
    font-size: 1.4rem;
    line-height: 2.149rem;
    font-weight: 700;
  }

  &__reason {
    display: flex;
    align-items: center;
    padding: 7px 16px;
    border: 1px solid $dark-gray;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-weight: 600;
    transition: 0.25s linear background, border;
    cursor: pointer;

    &:hover {
      border-color: transparent;
      background: rgba($accent-2, 0.25);
    }

    &:active {
      border-color: transparent;
      background: rgba($accent-2, 0.5);

      .moderation-list-item__reason-icon {
        width: 16px;
        height: 12px;
        margin-right: 16px;
        border: none;
        border-radius: 0;
        background: url('@/assets/icons/success.svg');
      }
    }

    &.active {
      border-color: transparent;
      background: rgba($accent-2, 0.5);

      .moderation-list-item__reason-icon {
        width: 16px;
        height: 12px;
        margin-right: 16px;
        border: none;
        border-radius: 0;
        background: url('@/assets/icons/success.svg');
      }
    }
  }

  &__reason-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    border: 1px solid $white;
    border-radius: 4px;
  }

  &__input {
    display: flex;
    align-items: center;

    input {
      width: calc(100% - 71px);
      height: 71px;
      padding: 0 16px;
      border: 1px solid rgba($white, 0.33);
      background: rgba($black, 0.5);
      outline: none;
      appearance: none;
      color: $white;
      font-size: 1.4rem;
      line-height: 2.149rem;
      font-weight: 600;

      &::placeholder {
        color: rgba($white, 0.33);
      }
    }
  }

  &__input-button {
    position: relative;
    width: 71px;
    height: 71px;
    border-radius: 0 0 23px 0;
    background: $button-background-cancel;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 9px;
      height: 2px;
      background: $white;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
