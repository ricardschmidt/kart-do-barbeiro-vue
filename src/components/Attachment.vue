<template>
	<div class="container">
    <div class="attachment">
    	<div class="attachment-file">
			<label id="file-label" for="file">
				<input type="file" id="file" @change="handleFileUpload( $event )"/>
			</label>
			<h4>{{file ? file.name : 'Selecione seu Arquivo'}}</h4>
    	</div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'attachment',
	data() {
		return {
			file: null,
			content: "Teste"
		}
	},
	methods: {
		handleFileUpload(event) {
			this.file = event.target.files[0];
			this.$emit("change", this.file)
		},
	}
}
</script>
