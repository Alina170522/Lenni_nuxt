
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@/json/vee-validate/ru.json";
import { defineRule, configure } from "vee-validate";
import { email,  required } from "@vee-validate/rules";

const rules = {
  email,
  required,
 phone: (value) => {
    if (!value) {
      return true;
    }

    return (
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value) ||
      "Введите корректный номер телефона"
    );
  },
};
export default defineNuxtPlugin(() => {
  Object.keys(rules).forEach((rule) => {
    defineRule(rule, rules[rule]
  
    );configure({
    generateMessage: localize({
      ru,
    }),
  });

  setLocale("ru");
    
  });
});
 


