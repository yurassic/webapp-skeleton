(function (w) {

	function IdService () {
		var container = {};

		this.id = function (entity) {
			if (typeof (entity) !== 'string') throw new Error('The "entity" parameter should be defined and should be a string');
			if (!container.hasOwnProperty(entity)) container[entity] = 0;
			return ++container[entity];
		};
	}

	w.idService = new IdService();
})(window);