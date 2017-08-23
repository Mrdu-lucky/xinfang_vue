import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from './mutation-types'
Vue.use(Vuex)
const mutations = {

  [Types.ADD_NOTE] (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  [Types.EDIT_NOTE] (state, text) {
    state.activeNote.text = text
  },

  [Types.DELETE_NOTE] (state) {
  	if(state.notes.length == 0) return;
  	for(let i=0;i<state.notes.length;i++){
  		if(state.notes[i]==state.activeNote){
  			state.notes.splice(i,1); //删除下标为i的元素
  		}
  	}
//  state.notes.remove(state.activeNote)
    state.activeNote = state.notes[0]?state.notes[0]:{};
  },

  [Types.TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  [Types.SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  },




  [Types.TAB_BT](state){
    state.tabBt =!state.tabBt;
    state.tabUser = !state.tabBt;
  },

  [Types.CHA_LOGIN](state){
    state.testLogin = true;
  },
  [Types.CAL_LOGIN](state){
    state.testLogin =false
  },
  [Types.CAL_SIGN](state){
    state.testSign =false
  },
  [Types.CHA_SIGN](state){
    state.testSign=true;
  },

  [Types.UPDATA_IMG](state, img){
    if (img){
      state.userImg=img;
    }else {
      state.userImg=require('../assets/images/per_img.png')
    }
  },

  [Types.UPDATA_INFO](state, obj){
    state.user = obj;
  },



  [Types.TRU_STA](state){
    state.starred = true;
  },
  [Types.FAL_STA](state){
    state.starred = false;
  }

};
export default mutations
