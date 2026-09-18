<template>
  <section class="app-about">
    <h2 class="app-about__section-title section-title">О нас</h2>
    <div class="app-about__container">
      <div class="app-about__block">
        <h3 class="app-about__block-title">Проект «Millennials»</h3>
        <p class="app-about__block-text">
          Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями
          и желанием сделать мир лучше, проявить себя. У них есть талант и
          стремление, у нас возможность помочь им воплотить их мечту в
          реальность.
        </p>
      </div>

      <div class="app-about__block1">
        <picture class="app-about__block1-picture">
          <img
            src="@/assets/images/about/pic.jpg"
            class="main__img"
            alt="pic"
          />
        </picture>

        <picture class="app-about__block1-picture2">
          <img
            src="@/assets/images/about/pic_2.png"
            class="main__img"
            alt="pic2"
          />
        </picture>

        <h3 class="app-about__block1-title">
          Мы предоставляем площади для вашего мероприятия
        </h3>
        <p class="app-about__block1-text">
          И оказываем помощь с организацией, если вам это нужно.<br />
          Наша цель: вовлечь в культурную жизнь города как можно больше людей,
          помочь молодым ребятам сделать первые шаги к своей мечте и рассказать
          всем о том, что их волнует.
        </p>
      </div>

      <div class="app-about__block2">
        <picture class="app-about__block2-picture">
          <img src="@/assets/images/about/pic_3.png" alt="pic3" />
        </picture>
        <div class="app-about__block2-content">
          <p class="app-about__block2-text">
            Мы уже успешно организовали и провели более 100 проектов.
            Посмотрите, как это было классно.
          </p>
          <a href="#" class="app-about__listing-link link">
            Смотреть
            <span class="app-about__arrow arrow">
              <SvgIcon
                name="arrow"
                class="arrow__icon"
                width="91"
                height="60"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less">
.app-about {
  &__container {
    .container();
  }
  &__section-title {
    @media @bw500 {
      width: 280px !important;
    }
  }
  &__block {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-areas:
      "title"
      "text";
    row-gap: 16px;
  }

  &__block-title {
    grid-area: title;
    margin-top: 0;
    padding-top: 30px;
    font-size: 44px;
    @media @bw1340 {
      font-size: 26px;
      max-width: 419px;
    }
  }

  &__block-text {
    grid-area: text;
    max-width: 870px;
    width: 100%;
    justify-self: end;
    font-size: 18px;
    padding: 0 0 50px 0;
    @media @bw1170 {
      width: 100%;
      justify-self: center;
      font-size: 16px;
    }
  }

  &__block1 {
    display: grid;
    grid-template-columns: 1fr 406px;
    gap: 90px 60px;

    grid-template-areas:
      "pic pic2"
      "title pic2"
      "text text";
    @media @bw1170 {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "pic pic"
        "title pic2"
        "text pic2";
      gap: 30px 50px;
    }

    @media @bw768 {
      display: flex;
      flex-direction: column;
      max-width: 708px;
    }
  }

  &__block1-picture {
    grid-area: pic;
    @media @bw1170 {
      max-width: 708px;
      width: 100%;
      justify-self: center;
    }
  }

  &__block1-picture2 {
    grid-area: pic2;
    align-self: flex-end;
    margin-bottom: 8em;
    max-width: 570px;
    @media @bw1170 {
      max-width: 393px;

      margin-bottom: 50px;
    }
    @media @bw500 {
      padding-left: 9vw;
    }
  }

  &__block1-title {
    grid-area: title;
    margin: 10px 0 0 0;
    padding-top: 40px;
    align-items: center;
    font-size: 44px;
    @media @bw1340 {
      font-size: 26px;
      max-width: 419px;
    }
  }

  &__block1-text {
    grid-area: text;
    margin: 0;
    max-width: 830px;
    width: 100%;
    align-items: center;
    font-size: 18px;
    padding-left: 22em;
    @media @bw1170 {
      font-size: 16px;
      max-width: 348px;
      align-items: flex-start;
      padding: 0;
    }
  }

  .app-about__block2 {
    display: grid;
    grid-template-columns: 1fr 344px;
    grid-template-areas:
      "pic3 text"
      "pic3 link";

    margin-top: 70px;
    padding-top: 20px;
    padding-bottom: 40px;
    gap: 70px;
    position: relative;

    @media @bw1170 {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "pic3 pic3"
        "text link";

      gap: 40px;
      align-items: start;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 65.5vw;
      height: 15vw;
      background-color: @red;

      @media @bw1340 {
        width: calc(70% + 10px);
        margin-top: 12px;
        @media @bw1170 {
          width: 100% !important;
          left: 0 !important;
          height: 25vw;
        }
      }
    }
  }

  .app-about__block2-text {
    grid-area: text;
    display: block;
    max-width: 340px;
    width: 100%;
    margin-top: 16px;
    padding-left: 63px;
    padding-bottom: 60px;
    @media @bw1170 {
      align-self: flex-start;
      @media @bw500 {
        align-self: center;
      }
    }
  }

  &_picture.pic3 {
    grid-area: pic3;
    justify-self: center;
    width: 100%;
    max-width: 870px;

    @media @bw1340 {
      max-width: 100%;
      width: 100%;
      margin-bottom: 16px;
    }
    @media @bw1170 {
      display: flex;
      margin: 0 auto;
      justify-self: center;
    }

    @media @bw500 {
      margin-bottom: 30px;
    }
  }
  .app-about__block2-picture img {
    display: block;
    width: 100%;
    height: auto;
    padding-left: 30px;
    @media @bw768 {
      max-width: 672px;
    }
    @media @bw500 {
      width: 100%;
    }
    @media @bw400 {
      max-width: 267px;
      padding-left: 10px;
    }
  }
  &__block2-content {
    grid-area: text;
    position: relative;
    z-index: 2;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    font-size: 18px;
    line-height: 1.562;
    @media @bw1170 {
      flex-direction: row;

      max-width: 100%;
    }
    @media @bw500 {
      display: flex;
      flex-direction: column;
    }
  }
}

.app-about__listing-link {
  grid-area: link;
  display: inline-flex;
  justify-self: end;
  align-self: flex-end;
  align-items: center;
  gap: 6em;

  @media @bw1170 {
    position: relative;
    left: 12vw;
    align-items: center;
    gap: 120px;
    font-size: 16px;
  }
}

.app-about__arrow {
  display: inline-flex;
  align-items: center;
  justify-content: end;

  svg {
    display: block;
  }
}
</style>
