<script setup>
defineProps({
  mailing: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="mailings-rejected-list-item">
    <div class="mailings-rejected-list-item__left">
      <div class="mailings-rejected-list-item__info">
        <div class="mailings-rejected-list-item__icon"></div>
        <div class="mailings-rejected-list-item__user">
          <router-link
            class="mailings-rejected-list-item__link"
            :to="`/search/${mailing.userId}`"
          >
            ID{{ mailing.userId }}
          </router-link>
          <div class="mailings-rejected-list-item__place">
            {{ mailing.country }}, {{ mailing.city }}
          </div>
        </div>
      </div>
      <div class="mailings-rejected-list-item__message">
        {{ mailing.message }}
      </div>
    </div>
    <div class="mailings-rejected-list-item__right">
      <div class="mailings-rejected-list-item__title">
        Отклонить по причине:
      </div>
      <div class="mailings-rejected-list-item__reason">
        <div class="mailings-rejected-list-item__reason-icon"></div>
        {{ mailing.reason }}
      </div>
      <div class="mailings-rejected-list-item__reason-info">
        <div class="mailings-rejected-list-item__moderator">
          {{ mailing.moderatorName }}
        </div>
        <div class="mailings-rejected-list-item__date">
          ({{ mailing.date }})
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mailings-rejected-list-item {
  display: flex;

  &__left {
    width: calc(100% - 536px);
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

  &__right {
    width: 536px;
    border: 1px solid rgba($white, 0.2);
  }

  &__moderator {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: $white;
    font-size: 1.4rem;
    line-height: 2.149rem;
    font-weight: 700;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -7px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: $offline;
    }
  }

  &__date {
    margin-top: 4px;
    color: $white;
    color: $white;
    font-size: 1.4rem;
    line-height: 2.149rem;
    font-weight: 700;
  }

  &__title {
    padding: 2.5px 24px;
    border-bottom: 1px solid rgba($white, 0.2);
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
    padding: 51px 26px;
    border-bottom: 1px solid rgba($white, 0.2);
    color: $white;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  &__reason-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 29.5px 20px;
    background: $dark-gray;
  }
}
</style>
