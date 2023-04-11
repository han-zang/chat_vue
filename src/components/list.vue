<script>
import { computed } from 'vue'; // 导入 Vue 3 中的 computed 函数
import { useSessionStore } from '/src/store.js'

export default {
    setup() {
        // const store_global = useGlobalStore()
        const store_session = useSessionStore()

        const sessions = computed(() => {
            return store_session.sessions;
        });

        const currentId = computed(() => {
            return store_session.cur_session;
        });

        // 返回需要绑定到组件实例的数据和方法
        return {
            sessions,
            currentId
        };
    }
};
</script>


<template>
<div class="list">
    <ul>
        <li v-for="item in sessions" :class="{ active: item.id === currentId }" >
            <img class="avatar"  width="30" height="30" :alt="item.user.name" :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
        </li>
    </ul>
</div>
</template>

<style scoped>
.list li {
  padding: 12px 15px;
  border-bottom: 1px solid #292C33;
  cursor: pointer;
  transition: background-color .1s;
}

.list li:hover {
  background-color: rgba(255, 255, 255, 0.03);
}

.list li.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.list .avatar, .list .name {
  vertical-align: middle;
}

.list .avatar {
  border-radius: 2px;
}

.list .name {
  display: inline-block;
  margin: 0 0 0 15px;
}
</style>
