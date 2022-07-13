<script setup>
defineProps({
  complaint: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="complaints-list-item">
    <div class="complaints-list-item__content">
      <div class="complaints-list-item__header">
        <div class="complaints-list-item__left">
          <div class="complaints-list-item__cause">
            Причина: <span>{{ complaint.cause }}</span>
          </div>
        </div>
        <div class="complaints-list-item__right">
          <div class="complaints-list-item__complaint-from">
            Жалоба от:
            <router-link :to="`/search/${complaint.fromId}`"
              >ID{{ complaint.fromId }}</router-link
            >
            {{ complaint.date }}
          </div>
        </div>
      </div>
      <div class="complaints-list-item__body">
        <div class="complaints-list-item__user">
          <div class="complaints-list-item__icon"></div>
          <router-link
            :to="`/search/${complaint.userId}`"
            class="complaints-list-item__link"
          >
            ID{{ complaint.userId }}
          </router-link>
        </div>
        <div class="complaints-list-item__message">{{ complaint.message }}</div>
      </div>
    </div>
    <div class="complaints-list-item__button">х</div>
  </div>
</template>

<style lang="scss">
.complaints-list-item {
  display: flex;
  border-radius: 8px 0px 0px 8px;
  background: rgba($white, 0.05);

  &__content {
    width: calc(100% - 64px);
    padding: 16px 24px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    background: $button-background;
    color: $white;
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 600;
    cursor: pointer;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__cause {
    color: rgba($white, 0.3);
    font-size: 1.5rem;
    line-height: 2.3025rem;
    font-weight: 600;

    span {
      display: inline-block;
      margin-left: 10px;
      color: $white;
    }
  }

  &__complaint-from {
    color: rgba($white, 0.3);
    font-size: 1.5rem;
    line-height: 2.3025rem;
    font-weight: 600;

    a {
      display: inline-block;
      margin: 0 4px;
      color: $accent-3;
      font-size: 1.6rem;
      line-height: 2.456rem;
      font-weight: 600;
    }
  }

  &__body {
    display: flex;
    align-items: flex-start;
    padding-top: 8px;
    margin-top: 8px;
    border-top: 1px solid $border-black;
  }

  &__user {
    display: flex;
    align-items: center;
    width: 166px;
    padding: 7px 0;
  }

  &__icon {
    width: 20px;
    height: 23px;
    background: url('@/assets/icons/sex-woman.svg');
  }

  &__link {
    display: inline-block;
    margin-left: 16px;
    color: $white;
    font-size: 1.6rem;
    line-height: 2.456rem;
    font-weight: 600;
  }

  &__message {
    width: calc(100% - 174px);
    padding: 7px 0;
    margin-left: 8px;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.3025rem;
    font-weight: 600;
  }
}
</style>
