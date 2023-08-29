import { defineRule, configure } from 'vee-validate'
import { confirmed, required, email, alpha } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

defineRule('min', (value, [min, input]) => {
    if (value?.length < min) {
        return `${input} should contain not less then ${min} characters`
    }

    return true
})

defineRule('max', (value, [max, input]) => {
    if (value?.length > max) {
        return `${input} shouldn't contain more then ${max} characters`
    }

    return true
})

defineRule('required', required)
defineRule('email', email)
defineRule('confirmed', confirmed)
defineRule('alpha', alpha)

configure({
    generateMessage: localize({
        en: {
            messages: {
                alpha: 'Field should contain only alphabetic characters',
                required: "Field shouldn't be empty",
                email: 'Incorrect email format',
                confirmed: 'This field must match password'
            }
        }
    })
})
