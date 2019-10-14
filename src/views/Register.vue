<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                        id="email"
                        type="text"
                        v-model.trim="email"
                        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small
                        class="helper-text invalid"
                        v-if="($v.email.$dirty && !$v.email.required)"
                >Поле Email не должно быть пустым
                </small>
                <small
                        class="helper-text invalid"
                        v-else-if="($v.email.$dirty && !$v.email.email)"
                >Некорректный Email
                </small>
            </div>
            <div class="input-field">
                <input
                        id="password"
                        type="password"
                        class="validate"
                        autocomplete="on"
                        v-model.trim="password"
                        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small
                        class="helper-text invalid"
                        v-if="($v.password.$dirty && !$v.password.required)"
                >Поле Пароль не должно быть пустым
                </small>
                <small
                        class="helper-text invalid"
                        v-else-if="($v.password.$dirty && !$v.password.minLength)"
                >
                    Короткий Пароль. Сейчас его длина {{password.length}}. Длина должна быть {{$v.password.$params.minLength.min}}
                </small>
            </div>
            <div class="input-field">
                <input
                        id="name"
                        type="text"
                        :class="{invalid: $v.name.$dirty && !$v.name.required}"
                        v-model.trim="name"
                >
                <label for="name">Имя</label>
                <small
                        class="helper-text invalid"
                        v-if="($v.name.$dirty && !$v.name.required)"
                >Поле Имя не должно быть пустым
                </small>
                <small
                        class="helper-text invalid"
                        v-else-if="($v.name.$dirty && !$v.name.minLength)"
                >
                    Короткое имя. Сейчас его длина {{name.length}}. Длина должна быть не меньше {{$v.name.$params.minLength.min}} символов.
                </small>
            </div>
            <p>
                <label>
                    <input type="checkbox" v-model="agree"/>
                    <span>С правилами согласен</span>
                </label>
            </p>
        </div>
        <div class="card-action">
            <div>
                <button
                        class="btn waves-effect waves-light auth-submit"
                        type="submit"
                >
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
                <router-link to="/login" href="/">Войти!</router-link>
            </p>
        </div>
    </form>
</template>
<script>
    import {email, required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: 'register',
        data: () => ({
            email: '',
            password: '',
            name: '',
            agree: false
        }),
        validations: {
            email: {email, required},
            password: {required, minLength: minLength(6)},
            name: {required, minLength: minLength(4)},
            agree: {checked: v => v}
        },
        methods: {
            submitHandler() {
                if(this.$v.$invalid){
                    this.$v.$touch()
                    return
                }
                const formData = {
                    email: this.email,
                    password: this.password,
                    name: this.name
                };
                console.log(`formData`, formData);
                this.$router.push('/');
            }
        }
    }

</script>
<style scoped></style>