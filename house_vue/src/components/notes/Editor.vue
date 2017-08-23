<template>
	<div id="note-editor">
		<textarea :value="activeNote.text" @input="editNote" class="form-control">
    </textarea>
    <!--{{countAnother}}-->
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import * as Types from '../../store/mutation-types';

	export default {
		data() {
			return {}
		},
		computed: {
			...mapState(['activeNote']),
			countAnother() { // 获取state
				return this.$store.getters.countAnother;
			}
		},
		methods: {
			...mapMutations([Types.EDIT_NOTE]),
			editNote(e) {
				this[Types.EDIT_NOTE](e.target.value);
			}
		}
	}
</script>
<style scoped>
  #note-editor {
    height: 100%;
    margin-left: 380px;
  }

  #note-editor textarea {
    height: 100%;
    border: 0;
    border-radius: 0;
    resize: none;
    width: 100%;
    font-size: 18px;
    line-height: 28px;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
