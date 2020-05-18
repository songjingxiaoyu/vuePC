export const cpMixin = {
    methods: {
        pullMoney(count){
            this.money -= count
        },
        giveMoney(count){
            this.money -= count
            this.$parent.money += count
        }
    },
}