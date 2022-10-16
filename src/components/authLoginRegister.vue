<template>
	<div>

		<q-form @submit.prevent="submit">
			<q-input
				v-if="tab=='register'"
				v-model="formData.name"
				class="q-ma-md"
				dense
				outlined
				label='Name'
				required
			/>
			<q-input
				v-model="formData.email"
				class="q-ma-md"
				dense
				outlined
				label='Email'
				required
			/>
			<q-input
				v-model="formData.password"
				class="q-ma-md"
				dense
				outlined
				type="password"
				label='Password'
				required
			/>
			<div class="q-pa-md">
				<q-btn
					class="q-ma-md full-width"
					color="primary"
					:label="tab"
					type="submit"
				/>
			</div>	
		</q-form>
	</div>
</template>

<script>

export default {
	name: 'AuthLoginRegister',
	props: ['tab'],
	data() {
		return {
			formData: {
				name: '',
				email: '',
				password: '',
			}
		}
	},
	methods: {
		submit() {
			console.log(this.formData, "submeteu")
			this.formData = {
				name: '',
				email: '',
				password: '',
			}
		},
	}
}
</script>
