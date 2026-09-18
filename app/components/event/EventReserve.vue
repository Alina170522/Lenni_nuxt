<template>
  <form class="event-reserve" @submit="onSubmit">
    <div class="event-reserve__checks">
      <h3 class="event-reserve__section-title">Забронировать столик</h3>

      <FieldCheck
        v-for="(val, key) in checks"
        :key="key"
        :checkedValue="+key"
        name="table"
        :label="`${key} стол`"
        :disabled="val.disabled || false"
        :red="val.red || false"
        class="event-reserve__check"
      />
    </div>
    <div class="event-reserve__scheme">
      <div class="event-reserve__scheme-container">
        <span class="event-reserve__scheme-title section-title">Сцена</span>

        <div class="event-reserve__scheme-wrapper">
          <EventScene
            :checks="checks"
            :values="values"
            class="event-reserve__scene"
          />
        </div>
      </div>
    </div>

    <div class="event-reserve__order">
      <h3 class="event-reserve__section-title">Ваши пригласительные билеты</h3>

      <div class="event-reserve__tickets-list">
        <div class="event-reserve__tickets" id="red-tables">
          <div
            class="event-reserve__qty"
            data-caption="шт."
            :data-price="price.red"
          >
            {{ red }}
          </div>
          <div class="event-reserve__sum" data-currency="₽">{{ redCost }}</div>
        </div>
        <div class="event-reserve__tickets">
          <div
            class="event-reserve__qty"
            data-caption="шт."
            :data-price="price.black"
          >
            {{ black }}
          </div>
          <div class="event-reserve__sum" data-currency="₽">
            {{ blackCost }}
          </div>
        </div>

        <div
          class="event-reserve__total"
          data-caption="Сумма"
          data-currency="₽"
        >
          {{ redCost + blackCost }}
        </div>
      </div>

      <button type="submit" class="btn--red btn event-reserve__submit">
        Купить билеты
      </button>
    </div>

    <div class="event-reserve__legend">
      <h3 class="event-reserve__section-title">
        Стоимость пригласительного билета
      </h3>

      <div class="event-reserve__legend-list">
        <label class="event-reserve__check legend-red check check--red">
          <input type="checkbox" class="check__input" disabled />
          <span class="check__mark"></span>
          <div class="legend__qty" data-caption="₽ | 1 персона">
            {{ price.red }}
          </div>
        </label>

        <label class="event-reserve__check legend-black check">
          <input type="checkbox" class="check__input" disabled />
          <span class="check__mark"></span>
          <div class="legend__qty" data-caption="₽ | 1 персона">
            {{ price.black }}
          </div>
        </label>

        <h3 class="event-reserve__section-title">Примечание</h3>

        <label class="radio__item">
          <span class="radio__mark-black"></span>

          <span class="radio__mark-red"></span>
          <span class="radio__label"> доступные места </span>
        </label>

        <label class="radio__item">
          <span class="radio__mark-sold"></span>
          <span class="radio__label">забронировано</span>
        </label>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";
import { computed, ref } from "vue";

const checks = ref({
  1: { red: true },
  2: {},
  3: {},
  4: { red: true },
  5: { disabled: true },
  6: {},
  7: { red: true },
  8: { red: true },
  9: { red: true },
  10: {},
  11: {},
});

const price = ref({ red: 1400, black: 1250 });

const { values, handleSubmit, submitCount } = useForm({
  initialValues: {
    table: [],
  },
});

const black = computed(() => {
  return Array.isArray(values.table)
    ? values.table.reduce((sum, current) => {
        return sum + (checks.value[current]?.red ? 0 : 1);
      }, 0)
    : 0;
});

const blackCost = computed(() => black.value * price.value.black);

const red = computed(() => {
  return Array.isArray(values.table)
    ? values.table.reduce((sum, current) => {
        return sum + (checks.value[current]?.red ? 1 : 0);
      }, 0)
    : 0;
});

const redCost = computed(() => red.value * price.value.red);

const onSubmit = handleSubmit((submitValue) => {
  console.log(submitValue);
});
</script>

<style lang="less">
.event-reserve {
  display: grid;
  grid-template-columns: 405px 1fr;
  gap: 65px 60px;
  margin-bottom: 80px;
  padding-bottom: 65px;

  grid-template-areas:
    "checks scheme"
    "order legend";
  align-items: start;
  @media @bw1340 {
    grid-template-columns: 340px 1fr;
    gap: 65px 6.5%;
  }
  @media @bw1020 {
    gap: 60px;
    grid-template-columns: 1fr 390px;
    grid-template-areas:
      "scheme scheme"
      "checks legend "
      "checks  order";
  }
  @media @bw768 {
    gap: 60px;
    align-items: flex-start;
    width: 100%;
    grid-template-columns: 100%;
    grid-template-areas:
      "scheme"
      "legend"
      "checks"
      "order";
  }

  &__checks {
    grid-area: checks;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    .event-reserve__section-title {
      margin-bottom: 15px;
      margin-top: 40px;
      @media @bw400 {
        font-size: 16px;
        white-space: normal;
        overflow-wrap: break-word;
        word-break: break-word;
      }
    }
  }

  &__scheme {
    grid-area: scheme;
    display: flex;
    flex-direction: column;
  }
  &__scheme-container {
    position: relative;
  }

  &__scheme-title {
    width: 162px;
    margin-top: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.375;
    color: @white;
    text-align: center;
    text-transform: none;
  }
  &__scheme-wrapper {
    position: relative;
    width: 100%;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 51.15384%;
    }
  }

  &__scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__tickets-layout {
    display: contents;
  }

  &__order {
    grid-area: order;
    padding-top: 10px;
    text-align: left;
    justify-content: center;
    width: 100%;
    max-width: 405px;
    @media @bw768 {
      justify-self: center;
      width: 100%;
    }
  }
  &__legend {
    grid-area: legend;
    width: 100%;
    justify-self: end;
    text-align: end;
    width: 405px;
    padding-top: 10px;

    @media @bw768 {
      margin-top: 35px;
      justify-self: left;
      text-align: start;
      width: 100%;
      max-width: 100%;
    }
  }

  &__tickets-list {
    margin-top: 20px;
  }

  &__tickets {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    margin-top: 18px;
    gap: 20px;
  }

  &__qty {
    flex: 1;
    white-space: nowrap;
    &::after {
      content: " " attr(data-caption) " | " attr(data-price);
    }
  }

  &__sum {
    flex-shrink: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.388;
    text-align: right;
    white-space: nowrap;
    &::after {
      content: attr(data-currency);
      margin-left: 4px;
      font-size: 0.95em;
    }
  }
  &__total {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;

    align-items: center;

    &::before {
      content: attr(data-caption) ": ";
      margin-right: 33px;
    }

    &::after {
      content: attr(data-currency);
      margin-left: 4px;
    }
  }
  &__submit {
    width: 100%;
  }
  &__legend-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 18px;
    margin-top: 20px;
  }
  .radio__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
