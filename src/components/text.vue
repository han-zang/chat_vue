<script>

import { useSessionStore } from '/src/store.js'
import { ref, inject } from 'vue'; // 导入 Vue 3 中的 ref 函数
import lib from "/src/lib.js"

export default {
    setup() {
        const store_session = useSessionStore(); 
        const content = ref(''); 
        const axios = inject('axios')  
        const onKeyup = (e) => {
            if (e.keyCode === 13 && content.value.length) {
                sendMessage(content.value);
                content.value = '';

            }
        };

        // 定义发送消息的方法
        const sendMessage = (content) => {
            store_session.send(lib.RoleUser, content);
            axios.post("/chat/talk", {
                messages: store_session.last_messages,
            }).then((response) => {
                var data = response.data
                console.log(response)
                if(data.Status == 1) {
                    store_session.send(lib.RoleAss, data.Context);
                }else{
                    store_session.send(null, "抱歉，我刚才开小差了，还需要聊些什么呢");
                }
            })
        };

        // 返回需要绑定到组件实例的数据和方法
        return {
            content,
            onKeyup
        };
    }
};
</script>


<template>
<div class="text">
    <textarea placeholder="按 Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
</div>
</template>

<style scoped>
.text {
    height: 160px;
    border-top: solid 1px #ddd;
}

.text textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
}
</style>
