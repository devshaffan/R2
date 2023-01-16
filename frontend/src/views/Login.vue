<template>
    <div>
        <label> Name </label>
        <input v-model="userName" placeholder="edit me" />
    </div>
    <div>
        <label> Password </label>
        <input v-model="password" placeholder="edit me" />
    </div>
    <br />
    <button @click="handleClick">Submit</button>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
            password: ""
        }
    },
    mounted() {
        console.log("hehe")
    },
    methods: {
        handleClick(e) {
            const payload = {
                userName: this.userName,
                password: this.password
            }
            this.$store.dispatch('login/submit',payload)
            console.log(this.$store.getters['login/getUserName'])
        }
    }

}
</script>

<style>

</style>