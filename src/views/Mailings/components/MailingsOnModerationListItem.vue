<script setup>
import { reactive } from 'vue'

defineProps({
  mailing: {
    type: Object,
    required: true,
  },
})

const reasons = reactive([
  'Склонение к проституции',
  'Размещение сторонней рекламы',
  'Указание личных контактов в рассылке',
  'Неуважительное отношение к противоположному полу',
  'Нарушение правил',
])
</script>

<template>
  <div class="mailings-on-moderation-list-item">
    <div class="mailings-on-moderation-list-item__left">
      <div class="mailings-on-moderation-list-item__info">
        <div class="mailings-on-moderation-list-item__icon"></div>
        <div class="mailings-on-moderation-list-item__user">
          <router-link
            class="mailings-on-moderation-list-item__link"
            :to="`/search/${mailing.userId}`"
          >
            ID{{ mailing.userId }}
          </router-link>
          <div class="mailings-on-moderation-list-item__place">
            {{ mailing.country }}, {{ mailing.city }}
          </div>
        </div>
      </div>
      <div class="mailings-on-moderation-list-item__message">
        {{ mailing.message }}
      </div>
    </div>
    <div class="mailings-on-moderation-list-item__button">
      <div class="mailings-on-moderation-list-item__success"></div>
    </div>
    <div class="mailings-on-moderation-list-item__right">
      <div class="mailings-on-moderation-list-item__title">
        Отклонить по причине:
      </div>
      <div
        v-for="(reason, idx) in reasons"
        :key="idx"
        class="mailings-on-moderation-list-item__reason"
      >
        <div class="mailings-on-moderation-list-item__reason-icon"></div>
        {{ reason }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-on-moderation-list-item {
  display: flex;

  &__left {
    width: calc(100% - 472px - 64px);
    padding: 24px;
    border-radius: 10px 0 0 10px;
    background: $dark-gray;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__icon {
    width: 20px;
    height: 23px;
    background: url('@/assets/icons/sex-woman.svg');
  }

  &__user {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
  }

  &__link {
    display: inline-block;
    color: $white;
    font-size: 1.6rem;
    line-height: 2.456rem;
    font-weight: 600;
  }

  &__place {
    color: rgba($white, 0.3);
    font-size: 1.5rem;
    line-height: 2.3025rem;
    font-weight: 600;
  }

  &__message {
    margin-top: 8px;
    color: rgba($white, 0.6);
    font-size: 1.4rem;
    line-height: 2.149rem;
    font-weight: 500;
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
    width: 472px;
  }

  &__title {
    padding: 2.5px 24px;
    border: 1px solid $accent-2;
    background: $dark-gray;
    color: $white;
    font-size: 1.4rem;
    line-height: 2.149rem;
    font-weight: 700;
  }

  &__reason-icon {
    width: 11px;
    height: 12px;
    margin-right: 10px;
    background: url('@/assets/icons/cancel.svg');
  }

  &__reason {
    display: flex;
    align-items: center;
    padding: 11px 26px;
    border: 1px solid $accent-2;
    border-top: none;
    background: transparent;
    color: $white;
    font-size: 1.4rem;
    line-height: 1.8rem;
    transition: 0.25s linear background;
    cursor: pointer;

    &:hover {
      background: rgba($accent-2, 0.25);
    }

    &:active {
      background: rgba($accent-2, 0.5);
    }
  }
}
</style>
