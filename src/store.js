import { defineStore } from 'pinia'
import lib from "/src/lib"
// import axios from 'axios';

const now = new Date();

export const useUserStore = defineStore('user', {
    state: () => ({ name: "zh", img: "/resource/images/1.jpg"}),
    getters: {
      user: (state) => state,
    }
})

export const useSessionStore = defineStore('session', {
    state: () => ({ cur_session: 1,
        sessions: [
        {
            id: 1,
            user: {
                name: 'chat',
                img: '/resource/images/2.jpeg'
            },
            messages: [
                {
                    context: '请问有什么可以帮你',
                    date: now,
                    index: 1,
                    role: null,
                }
            ]
        },],
    }),
    getters:{
        last_messages: (state)=>{
            const session = state.sessions.find(session => session.id === state.cur_session)
            const arr = []
            const min = Math.max(0, session.messages.length - 10)
            for (let index = min; index < session.messages.length; index++) {
                const element = session.messages[index]
                if (element.role) {
                    arr.push({
                        context: element.context,
                        index: element.index,
                        role: element.role
                    })
                } 
            }
            return arr
        }
    },
    actions:{
        send(role, msg) {
            // console.log(role, msg)
            const session = this.sessions.find(session => session.id === this.cur_session)
            const i = session.messages.length + 1
            session.messages.push({
                context: msg,
                date: new Date(),
                role: role,
                index: i
            })
        }
    }
})