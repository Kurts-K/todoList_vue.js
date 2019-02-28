var todoList = new Vue({
	el: '#todoList',
	data: {
		todoArr: [],
		todoModel: '',
		todoId: 0,
		invalidactive: 0,
	},

	methods: {
		read: function() {
			if (this.todoModel.length != 0) {
			this.todoArr.push({
				id: this.todoId ++,
				title: this.todoModel,
				style: 'alert-light',
				status: 'task set',
			});
			this.todoModel = '';
			this.invalidactive = 0;
			} else {
				this.invalidactive = 1;
			}
		},

		deleteItem: function(index) {
			this.todoArr.splice(index, 1);
		},

		checkItem: function(index) {
			var varstyle = (this.todoArr[index].style == 'alert-light') ? 'alert-success' : 'alert-light';
			this.todoArr[index].style = varstyle;

			var varstatus = (this.todoArr[index].status == 'task set') ? 'task done' : 'task set';
			this.todoArr[index].status = varstatus;
		}

	},

})

