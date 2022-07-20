<script setup>
defineProps({
  mailing: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="mailings-active-list-item">
    <div class="mailings-active-list-item__left">
      <div class="mailings-active-list-item__info">
        <div class="mailings-active-list-item__icon"></div>
        <div class="mailings-active-list-item__user">
          <router-link
            class="mailings-active-list-item__link"
            :to="`/search/${mailing.userId}`"
          >
            ID{{ mailing.userId }}
          </router-link>
          <div class="mailings-active-list-item__place">
            {{ mailing.country }}, {{ mailing.city }}
          </div>
        </div>
      </div>
      <div class="mailings-active-list-item__message">
        {{ mailing.message }}
      </div>
    </div>
    <div class="mailings-active-list-item__center">
      <div class="mailings-active-list-item__end-date">
        {{ mailing.endDate }} <br />до окончания
      </div>
      <div class="mailings-active-list-item__moderator">
        <div class="mailings-active-list-item__success"></div>
        {{ mailing.moderatorName }}
      </div>
      <div class="mailings-active-list-item__date">({{ mailing.date }})</div>
    </div>
    <div class="mailings-active-list-item__button"></div>
  </div>
</template>

<style lang="scss">
.mailings-active-list-item {
  display: flex;

  &__left {
    width: calc(100% - 492px - 43px);
    padding: 24px;
    border-radius: 10px 0 0 10px;
    border: 1px solid $accent-3;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    background: $button-background-cancel;
    cursor: pointer;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.303rem;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 17px;
      height: 17px;
      background: $white;
    }
  }

  &__center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 492px;
    padding: 7px 26px;
    border: 2px solid $gray-1;
  }

  &__end-date {
    color: $accent-4;
    font-size: 2.4rem;
    line-height: 2.88rem;
    font-weight: 600;
    text-align: center;
  }

  &__moderator {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.303rem;
    font-weight: 600;

    &::after {
      content: '';
      position: absolute;
      top: 7px;
      right: -16px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: $offline;
    }
  }

  &__success {
    width: 16px;
    height: 12px;
    margin-right: 8px;
    background: url('@/assets/icons/success.svg');
  }

  &__date {
    margin-top: 4px;
    color: $white;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
}
</style>
