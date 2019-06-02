<template>
    <div class="all_map">
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            mapList:[
                {name:'新手基地',value:'1-6',class:'ml1'},
                {name:'妖精森林',value:'7-13',class:'ml2'},
                {name:'潮汐海崖',value:'14-20',class:'ml3'},
                {name:'巨石山脉',value:'21-26',class:'ml4'},
                {name:'黄金陵',value:'27-33',class:'ml5'},
                {name:'炽热沙滩',value:'34-40',class:'ml6'},
                {name:'尤玛火山',value:'41-50',class:'ml7'},
                {name:'死亡沙漠',value:'51-60',class:'ml8'},
                {name:'海市蜃楼',value:'61-70',class:'ml9'},
                {name:'冰滩',value:'71-80',class:'ml10'},
                {name:'海底世界',value:'81-90',class:'ml11'},
                {name:'火龙王的宫殿',value:'',class:'ml12'},
                {name:'斯芬克斯密穴',value:'',class:'ml13'},
                {name:'伊苏王的神墓',value:'',class:'ml14'},
                {name:'玲珑城',value:'',class:'ml15'},
                {name:'神圣战场',value:'',class:'ml16'},
                {name:'女神要塞',value:'',class:'ml17'},
            ]
        }
    }
}
</script>

<style lang='scss'>
    .all_map{
        width: 800px;
        height: 320px;
        overflow: hidden;
        background-image: url('../../assets/map/map.jpg');
        background-repeat: no-repeat;
        
    }
    
</style>
