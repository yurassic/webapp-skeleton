(function (w) {
	w.menuService = {
		get: function (date) {
			if (!date || !(typeof (date) === 'string' || date instanceof Date)) throw new Error('Date is not defined.');


			return {
				date: new Date(date),

				salads: [
					{
						id: window.idService.id('meal'),
						name: 'Морква по корейськи'
					},
					{
						id: window.idService.id('meal'),
						name: 'Дністер'
					}
				],
				firstDishes: [
					{
						id: window.idService.id('meal'),
						name: 'Бульйон'
					},
					{
						id: window.idService.id('meal'),
						name: 'Борщ'
					}
				],
				secondDishes: [
					{
						id: window.idService.id('meal'),
						name: 'Плов з гранатом і рисом'
					},
					{
						id: window.idService.id('meal'),
						name: 'Куряча відбивна з катртопляним пюре'
					}
				],
			};
		}
	};
})(window);