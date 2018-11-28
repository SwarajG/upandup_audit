const usersController = require('./controller/usersController');
const outletsController = require('./controller/outletsController');
const rowMaterialsController = require('./controller/rowMaterialsController');
const preProcessMaterialsController = require('./controller/preProcessMaterialsController');
const packagingMaterialsController = require('./controller/packagingMaterialsController');
const stockTransferEntriesController = require('./controller/stockTransferEntriesController');
const purchaseEntriesController = require('./controller/purchaseEntriesController');
const inventoryCoutingController = require('./controller/inventoryCoutingController');
const stockItemsController = require('./controller/stockItemController');
const attendanceEntriesController = require('./controller/attendanceEntriesController');
const staffFoodEntriesController = require('./controller/staffFoodEntriesController');


// routes
const routes = (route) => {
	route.get('/', (req, res) => {
		res.send(`App server in running (${new Date()})`);
	});

	route.route('/users')
		.get(usersController.getAll)
		.post(usersController.create);

	route.route('/users/:id')
		.get(usersController.getOne)
		.put(usersController.update)
		.delete(usersController.delete);

	route.route('/outlets')
		.get(outletsController.getAll)
		.post(outletsController.create);

	route.route('/rowMaterials')
		.get(rowMaterialsController.getAll)
		.post(rowMaterialsController.create);
	
	route.route('/preProcessMaterials')
		.get(preProcessMaterialsController.getAll)
		.post(preProcessMaterialsController.create);

	route.route('/packagingMaterials')
		.get(packagingMaterialsController.getAll)
		.post(packagingMaterialsController.create);
	
	route.route('/stockTransferEntries')
		.get(stockTransferEntriesController.getAll)
		.post(stockTransferEntriesController.create);

	route.route('/stockTransferEntries/:id')
		.get(stockTransferEntriesController.getOne)
		.put(stockTransferEntriesController.update)
		.delete(stockTransferEntriesController.delete);
	
	route.route('/stockTransferEntries/on-date')
		.post(stockTransferEntriesController.getForDate)

	route.route('/purchaseEntries')
		.get(purchaseEntriesController.getAll)
		.post(purchaseEntriesController.create);

	route.route('/purchaseEntries/:id')
		.get(purchaseEntriesController.getOne)
		.put(purchaseEntriesController.update)
		.delete(purchaseEntriesController.delete);
	
	route.route('/purchaseEntries/on-date')
		.post(purchaseEntriesController.getForDate)
		
	route.route('/inventoryCouting')
		.get(inventoryCoutingController.getAll)
		.post(inventoryCoutingController.create);

	route.route('/inventoryCouting/:id')
		.get(inventoryCoutingController.getOne)
		.put(inventoryCoutingController.update)
		.delete(inventoryCoutingController.delete);
	
	route.route('/inventoryCouting/on-date')
		.post(inventoryCoutingController.getForDate)

	route.route('/attendanceEntries')
		.get(attendanceEntriesController.getAll)
		.post(attendanceEntriesController.create);

	route.route('/attendanceEntries/:id')
		.get(attendanceEntriesController.getOne)
		.put(attendanceEntriesController.update)
		.delete(attendanceEntriesController.delete);
	
	route.route('/attendanceEntries/on-date')
		.post(attendanceEntriesController.getForDate);

	route.route('/staffFoodEntries')
		.get(staffFoodEntriesController.getAll)
		.post(staffFoodEntriesController.create);

	route.route('/staffFoodEntries/:id')
		.get(staffFoodEntriesController.getOne)
		.put(staffFoodEntriesController.update)
		.delete(staffFoodEntriesController.delete);
	
	route.route('/staffFoodEntries/on-date')
		.post(staffFoodEntriesController.getForDate)
	
	route.route('/stockItems')
		.get(stockItemsController.getAll)
		.post(stockItemsController.create);
};

module.exports = routes;