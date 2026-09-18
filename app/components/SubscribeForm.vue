<template>
  <form class="subscribe-form" novalidate @submit.prevent="onSubmit">
    <h4 class="subscribe-form__title">
      Подпишись и будь в курсе происходящего
    </h4>
    <div class="footer-form__field">
      <div class="subscribe-form__field-wrapper">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="subscribe-form__input"
          required
        />

        <button class="footer-form__button btn" type="submit">
          Подписаться
        </button>
      </div>
      <span
        v-if="submitCount && (!email || !emailIsValid)"
        class="subscribe-form__error field-error"
      >
        {{
          email && !emailIsValid
            ? "Email указан неверно"
            : "Это поле обязательно"
        }}
      </span>
    </div>

    <label class="check form__check">
      <input
        v-model="agreement"
        :true-value="1"
        :false-value="0"
        type="checkbox"
        class="check__input"
        required
      />
      <span class="check__mark"></span>
      <span class="check__label check__label--fz14"
        >Согласен на обработку персональных данных
      </span>
    </label>
    <span
      v-if="submitCount && !agreement"
      class="subscribe-form__error field-error"
    >
      Это поле обязательно
    </span>
  </form>
</template>
<script setup>
const submitCount = ref(0);

const email = ref("");
const agreement = ref(0);
const emailIsValid = computed(() => {
  return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(email.value);
});

const onSubmit = () => {
  submitCount.value += 1;
  if (!email.value || !emailIsValid.value || !agreement.value) return;

  console.log({ email: email.value, agreement: agreement.value });
  alert("Подписка оформлена");
};
</script>

<style lang="less">
.subscribe-form {
  width: 405px;
  max-width: 100%;
  &__field-wrapper {
    display: flex;
    margin-bottom: 15px;
    align-items: stretch;
  }

  &__title {
    margin: 0 0 25px;
    font-size: 16px;
    line-height: 22px;
    @media @bw500 {
      margin: 0 0 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }
  }
  &__input,
  &__textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: none;
    background-color: @white;
    padding: 17px 20px 16px;
  }
  &__input {
    height: 55px;
  }
  &__error {
    order: 3;

    flex: 0 0 100%;
    margin-top: 6px;
    font-size: 12px;
    line-height: 1.2;
    color: @red;
    display: block;
  }

  .btn {
    color: @white;
    background-color: @black;
    &:active {
      background-color: @red;
      color: @white;
      border: @red;
    }
  }
}
</style>
