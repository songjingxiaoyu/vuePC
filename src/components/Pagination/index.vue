<template>
  <div class="pagination"> 
      <button :disabled="myCurrentPage===1" @click='setCurrentPage(myCurrentPage-1)'>上一页</button>
      <button v-if="startEnd.start>1" @click='setCurrentPage(1)'>1</button>
      <button disabled v-if="startEnd.start>2">···</button>

      <button 
          v-if="num>=startEnd.start"
          v-for="num in startEnd.end" :key="num.id" 
          :class="{active:num===myCurrentPage}" 
          @click='setCurrentPage(num)'
          >{{num}}</button>

      <button disabled v-if="startEnd.end<totalPages-1">···</button>
      <button v-if="startEnd.end<totalPages" @click='setCurrentPage(totalPages)'>{{totalPages}}</button>
      <button :disabled="myCurrentPage===totalPages" @click='setCurrentPage(myCurrentPage+1)'>下一页</button>

      <button style="margin-left:30px" disabled>共{{total}}条</button>
  </div>
</template>

<script>
export default {
    name:"Pagination",
    props:{
        //当前页码
        currentPage:{
            type:Number,
            default:1
        },
        //每页数量
        pageSize:{
            type:Number,
            default: 10
        },
        //总数量
        total:{
            type:Number,
            default:0
        },
        //连续数码数
        showPageNo:{
            type:Number,
            default: 5//最好指定为奇数
        },
    },
    data() {
        return {
            myCurrentPage:this.currentPage
        }
    },
    computed: {
        totalPages(){
            const { total,pageSize } = this
            return Math.ceil(total/pageSize)
        },
        //计算出连续页码的start和end
        startEnd(){
            let start,end
            //取出依赖数据
            const {myCurrentPage,showPageNo,totalPages} = this
            start = myCurrentPage - Math.floor(showPageNo/2)
            if(start<1){
                start=1
            }
            end = start + showPageNo - 1
            if(end > totalPages){
                end = totalPages
                start = end - showPageNo + 1
                if(start < 1){
                    start = 1
                }
            }
            return{start,end}
        }
    },
    watch: {
        currentPage(value){
            //更新内部的当前页码
            this.myCurrentPage = value
        }
    },
    methods: {
        //设置新的当前页码
        setCurrentPage(currentPage){
            if(currentPage===this.myCurrentPage) return
            this.myCurrentPage = currentPage
            this.$emit('currentChange', currentPage)
        }
    },
}
</script>

<style lang='less' scoped>
.pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>