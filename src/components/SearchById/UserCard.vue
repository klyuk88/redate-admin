<script setup>
import ReportList from './ReportList.vue'
import NoteList from './NoteList.vue'
</script>

<template>
  <div class="background__male__card">
    <div class="left__side">
      <div class="card__info">
        <div class="profile__photo">
          <img src="@/assets/search__logos/Rectangle 580.png" alt="" />
        </div>
        <div class="info__list">
          <div class="info__header">
            <span class="id">ID454543</span>
            <div class="btn ban">
              <img src="@/assets/search__logos/ban.svg" alt="" />
              <p>Заблокирован</p>
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
          <textarea class="about" name=""></textarea>
        </div>
      </div>
      <div class="buttons__block">
        <div class="btn">
          <img src="@/assets/search__logos/chat.svg" alt="" />
        </div>
        <div class="btn unban">Разблокировать</div>
        <div class="btn chat">Перейти в диалоги</div>
        <div class="money__input">
          <input type="text" placeholder="Сумма  ₽" />
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
      <ReportList />
    </div>
    <div class="right__side">
      <div class="note__title">
        <h1>Комментарии модераторов</h1>
      </div>
      <div class="note__list">
        <NoteList />
      </div>
      <input type="text" placeholder="Введите свой текст заметки тут..." />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    p {
      margin: 0;
    }
  }
  &.unban {
    width: 159px;
    background: #ffffff;
    color: #2b66fe;
    margin: 0 32px 0 16px;
  }
  &.chat {
    width: 231px;
    margin-right: 24px;
  }
}
.background__male__card {
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  width: 1226px;
  .left__side {
    width: 684px;
    margin: 50px 0 0 50px;
    .card__info {
      display: flex;
      align-items: center;
      .profile__photo {
        width: 231px;
        height: 476px;
        border: 1px solid rgba(255, 255, 255, 0.33);
        filter: drop-shadow(12px 12px 40px rgba(30, 29, 31, 0.16));
        border-radius: 16px;
        margin-right: 32px;
        img {
          width: 100%;
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
          display: flex;
          align-items: center;
          color: #ffffff;
        }
      }
    }
    .buttons__block {
      display: flex;
      margin: 24px 0 53px 0;
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
          left: 110px;
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
    height: 100vh;
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
    input {
      outline: none;
      padding: 18px 16px;
      gap: 8px;
      width: 376px;
      height: 57px;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.33);
      border-radius: 11px;
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
  }
}
</style>
