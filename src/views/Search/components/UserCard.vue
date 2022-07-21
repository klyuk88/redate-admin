<script setup>
import ReportList from './ReportList.vue'
import NoteList from './NoteList.vue'
import { ref, computed } from 'vue'
import PopupBan from './PopupBan.vue'
import PopupUnban from './PopupUnban.vue'
import PopupDiamond from './PopupDiamond.vue'
import { useUserCardStore } from '../store/UserCard'

const noteStore = useUserCardStore()
const noteFullData = computed(()=> noteStore.noteData)
const reportsFullData = computed(() => noteStore.reportsData)
const isBanned = ref(true)
const isDiamond = ref(true)
const femalePage = ref(false)
const showBanModal = ref(false)
const showUnbanModal = ref(false)
const showDiamondModal = ref(false)
const visibleBbtn = ref(false)
</script>

<template>
  <PopupBan v-if="showBanModal" @close-ban-modal="showBanModal = false" />
  <PopupUnban
    v-if="showUnbanModal"
    @close-unban-modal="showUnbanModal = false"
  />
  <PopupDiamond
    v-if="showDiamondModal"
    @close-diamond-modal="showDiamondModal = false"
  />
  <div class="background__male__card">
    <div class="left__side">
      <div class="card__info">
        <div class="profile__photo" :class="{ femaleStyle: femalePage }">
          <img src="@/assets/search__logos/Rectangle 580.png" alt="" />
          <div v-if="femalePage" class="btn female">Верификация</div>
          <div
            v-if="femalePage"
            class="btn female"
            @click="showDiamondModal = true"
          >
            Дать даймонд
          </div>
        </div>
        <div class="info__list">
          <div class="info__header">
            <span class="id">ID454543</span>
            <div class="status__block">
              <div v-if="femalePage && !isDiamond" class="btn standard">
                Обычный
              </div>
              <div v-if="isDiamond && femalePage" class="diamond__title">
                <p>Diamond</p>
              </div>
              <div v-if="isBanned" class="btn ban">
                <img src="@/assets/search__logos/ban.svg" alt="" />
                <p>Заблокирован</p>
              </div>
              <div v-if="!isBanned" class="btn active">
                <img src="@/assets/search__logos/hearth.svg" alt="" />
                <p>Активный</p>
              </div>
            </div>
          </div>
          <h1>Владимир</h1>
          <div class="info__subtitle">
            <span class="city">Москва</span>
            <span class="age">31 лет</span>
            <span class="online__status">Онлайн</span>
          </div>
          <div class="horizontal__line"></div>
          <div class="full__info">
            <div class="info__desc">
              <p>E-Mail</p>
              <span>vlad.dracula@gmail.com</span>
            </div>
            <div class="info__desc">
              <p>Дата регистрации</p>
              <span>08.06.22, 12:36</span>
            </div>
            <div class="info__desc">
              <p>Последний раз в сети</p>
              <span>08.06.22, 12:36</span>
            </div>
            <div class="info__desc">
              <p>Баланс</p>
              <span>3 226 ₽</span>
            </div>
            <div class="info__desc">
              <p>Потратил на сайте</p>
              <span>8 300 ₽</span>
            </div>
            <div class="info__desc">
              <p>Подсписка</p>
              <span>Премиум до 12.09.22</span>
            </div>
            <div class="info__desc">
              <p>Жалоб на пользователя</p>
              <span>2</span>
            </div>
          </div>
          <div class="about" name=""><span>О себе:</span></div>
        </div>
      </div>
      <div class="buttons__block">
        <router-link to="/chat/test">
          <div class="btn">
            <img src="@/assets/search__logos/chat.svg" alt="" />
          </div>
        </router-link>
        <div v-if="isBanned" class="btn unban" @click="showUnbanModal = true">
          Разблокировать
        </div>
        <div
          v-if="!isBanned"
          class="btn unban banned"
          @click="showBanModal = true"
        >
          <img src="@/assets/search__logos/ban__icon.svg" alt="" />
          <p>Заблокировать</p>
        </div>
        <router-link class="link" to="/user-chats">
          <div class="btn chat">Перейти в диалоги</div>
        </router-link>
        <div class="money__input">
          <input type="text" placeholder="Сумма  ₽" maxlength="7" />
          <div class="btn">
            <img src="@/assets/search__logos/money.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel" style="color: aliceblue; margin-bottom: 32px">
        carousel
      </div>
      <div class="report__archive">
        <h1>Архив жалоб</h1>
        <div class="horizontal__line"></div>
      </div>
      <ReportList :reports-full-data="reportsFullData"/>
    </div>
    <div class="right__side">
      <div class="note__title">
        <h1>Комментарии модераторов</h1>
      </div>
      <div class="note__list">
        <NoteList :note-full-data="noteFullData" />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Введите свой текст заметки тут..."
          @focus="visibleBbtn = true"
        ></textarea>
        <div class="btn add__note" :class="{ visible: visibleBbtn }">
          <img src="@/assets/search__logos/add__note.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
.diamond__title {
  font-family: 'Palatino';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 132.5%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.19em;
  text-transform: uppercase;
  background: linear-gradient(
    132.27deg,
    #f9ae3f -0.77%,
    #ffdba5 36.67%,
    #ad6902 96.37%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 0px 10px rgba(255, 187, 84, 0.3);
  margin-right: 8px;
  p {
    margin: 2px 0 0 2px;
  }
}
.diamond__title:before {
  background: linear-gradient(
    103.31deg,
    #f9ae3f 100%,
    #ffdba5 100%,
    #ad6902 100%
  );
}
.diamond__title:before {
  content: '';
  width: 101px;
  height: 27px;
  position: absolute;
  border-radius: 16px;
  padding: 1px;
  -webkit-mask: linear-gradient(#fff, #fff 0) content-box,
    linear-gradient(#fff, #fff 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.btn {
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  line-height: 153.5%;
  border-radius: 14px;
  font-size: 16px;
  height: 57px;
  width: 57px;
  color: #ffffff;
  background: #2b66fe;

  &.ban {
    cursor: pointer;
    width: 156px;
    height: 27px;
    font-size: 15px;
    gap: 10px;
    background: #ffffff;
    border-radius: 16px;
    color: #2965ff;
    margin-left: 8px;
    p {
      margin: 0;
    }
  }
  &.unban {
    width: 159px;
    background: #ffffff;
    color: #2b66fe;
    margin: 0 32px 0 16px;
    &.banned {
      background: #2b66fe;
      color: #ffffff;
      img {
        margin-right: 4px;
      }
    }
  }

  &.chat {
    width: 231px;
    margin-right: 24px;
  }
  &.active {
    width: unset;
    height: 27px;
    border: 1px solid #2965ff;
    border-radius: 16px;
    padding: 2px 10px;
    gap: 10px;
    margin-left: 8px;
  }
  &.standard {
    padding: 2px 10px;
    gap: 10px;
    width: unset;
    height: 27px;
    border: 1px solid #2965ff;
    border-radius: 16px;
    color: #2965ff;
    background: none;
  }
  &.female {
    margin-top: 16px;
    gap: 10px;
    width: 231px;
    height: 57px;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.33);
    backdrop-filter: blur(16px);
    border-radius: 16px;
  }
  &.add__note {
    display: none;
    width: 40px;
    height: 63px;
    border-radius: 13px;
    position: absolute;
    right: 50px;
    bottom: 380px;
    &.visible {
      display: flex;
    }
  }
}
.background__male__card {
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  width: 1226px;
    // width: 100%;
  height: calc(100vh - 175px);
  .left__side {
    width: 684px;
    margin: 50px 0 0 50px;
    .card__info {
      display: flex;
      .profile__photo {
        width: 231px;
        height: 476px;
        filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
        margin-right: 32px;
        &.femaleStyle {
          height: 332px;
        }
        img {
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.33);
          // width: 100%;
          height: 100%;
          margin-bottom: 8px;
        }
      }
      .info__list {
        width: 421px;
        h1 {
          font-weight: 500;
          font-size: 48px;
          line-height: 153.5%;
          color: #ffffff;
          margin: 0;
        }
        .info__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .id {
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            display: flex;
            align-items: center;
            color: #ffffff;
          }
          .status__block {
            display: flex;
          }
        }
        .info__subtitle {
          display: flex;
          .city {
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            color: rgba(255, 255, 255, 0.45);
          }
          .age {
            text-align: center;
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            color: #ffffff;
            border-left: 1px solid #27282c;
            border-right: 1px solid #27282c;
            height: 21px;
            width: 73px;
            margin: 0 12px 0 12px;
          }
          .online__status {
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            color: #3e74ff;
          }
        }
        .horizontal__line {
          width: 421px;
          height: 0px;
          border: 1px solid rgba(255, 255, 255, 0.33);
          margin: 10px 0 16px 0;
        }
        .full__info {
          .info__desc {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            font-size: 15px;
            line-height: 153.5%;
            margin-bottom: 8px;
            p {
              margin: 0;
              color: rgba(255, 255, 255, 0.33);
            }
            span {
              color: #ffffff;
            }
          }
        }
        .about {
          margin: 24px 0 24px 0;
          padding: 8px 16px;
          gap: 8px;
          width: 421px;
          height: 86px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.33);
          border-radius: 14px;
          outline: none;
          resize: none;
          font-family: 'Mulish';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 153.5%;
          color: #ffffff;
          span {
            color: rgba(255, 255, 255, 0.33);
          }
        }
      }
    }
    .buttons__block {
      display: flex;
      margin: 8px 0 53px 0;
      .money__input {
        display: flex;
        align-items: center;
        input {
          position: absolute;
          z-index: 1;
          width: 166px;
          height: 57px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.33);
          border-radius: 14px;
          padding-left: 16px;
          outline: none;
          color: #ffffff;
          &:focus {
            border: 1px solid #ffffff;
          }
          &::placeholder {
            font-weight: 600;
            font-size: 14px;
            line-height: 153.5%;
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.33);
          }
        }
        .btn {
          position: relative;
          left: 108px;
          z-index: 2;
        }
      }
    }
    .report__archive {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      h1 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 600;
        font-size: 34px;
        line-height: 43px;
        color: #ffffff;
      }
      .horizontal__line {
        width: 418px;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.33);
      }
    }
  }
  .right__side {
    width: 440px;
    // height: 100vh;
    background: #27282c;
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-top: none;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    .note__title {
      width: 376px;
      h1 {
        font-weight: 600;
        font-size: 34px;
        line-height: 43px;
        width: 238px;
      }
    }
    .note__list {
    }
    textarea {
      outline: none;
      padding: 18px 70px 18px 16px;
      gap: 8px;
      width: 376px;
      min-height: 57px;
      resize: none;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.33);
      border-radius: 11px;
      color: #ffffff;
      overflow: hidden;
      &:focus {
        border: 1px solid #ffffff;
      }
      &::placeholder {
        font-weight: 600;
        font-size: 14px;
        line-height: 153.5%;
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.33);
      }
    }
  }
}
</style>
