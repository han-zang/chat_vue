<script>
import { computed, nextTick } from 'vue';
import { useUserStore, useSessionStore } from '/src/store.js'
import lib from "/src/lib.js"

export default {
    setup() {
        const store_session = useSessionStore();
        const store_user = useUserStore()
        const user = computed(() => {
            return store_user;
        });

        const session = computed(() => {
            return store_session.sessions.find(session => session.id === store_session.cur_session);
        });

        return {
            user,
            session
        };
    },

    mounted() {
    },
    methods: {
      is_self(role) {
        return lib.is_self(role)
      },
      parseTime(date) {
            if (typeof date === 'string') {
                date = new Date(date);
            }
            return date.getHours() + ':' + date.getMinutes();
        },
    },
    directives: {
      'scroll-bottom' (el) {
        // console.log(el, binding)
        nextTick(() => {
          el.scrollTop = el.scrollHeight - el.clientHeight;
        });
      }
    }
};
</script>


<template>
<div class="message" v-scroll-bottom="session.messages">
    <ul v-if="session">
        <li v-for="item in session.messages" :key="item.index">
            <p class="time">
                <span v-text="parseTime(item.date)"></span>
            </p>
            <div class="main" :class="{ self: is_self(item.role) }">
                <img class="avatar" width="30" height="30" :src="is_self(item.role) ? user.img : session.user.img" />
                <div class="text">{{ item.context }}</div>
            </div>
        </li>
    </ul>
</div>
</template>

<style scoped>
.message {
  padding: 10px 15px;
  overflow-y: scroll;
}

.message li {
  margin-bottom: 15px;
}

.message .time {
  margin: 7px 0;
  text-align: center;
}

.message .time > span {
  display: inline-block;
  padding: 0 18px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background-color: #dcdcdc;
}

.message .avatar {
  float: left;
  margin: 0 10px 0 0;
  border-radius: 3px;
}

.message .text {
  display: inline-block;
  position: relative;
  padding: 0 10px;
  max-width: calc(100% - 40px);
  min-height: 30px;
  line-height: 2.5;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  background-color: #fafafa;
  border-radius: 4px;
}

.message .text:before {
  content: " ";
  position: absolute;
  top: 9px;
  right: 100%;
  border: 6px solid transparent;
  border-right-color: #fafafa;
}

.message .self {
  text-align: right;
}

.message .self .avatar {
  float: right;
  margin: 0 0 0 10px;
}

.message .self .text {
  background-color: #b2e281;
}

.message .self .text:before {
  right: inherit;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #b2e281;
}
</style>
