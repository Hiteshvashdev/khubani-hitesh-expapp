(function() {
    'use strict';

    expApp.controller("expenseCtrl", ['dataService', expenseCtrl]);

    function expenseCtrl(dataService) {
		
        var vm = this;

        // Variables
        vm.expenseDatasource = [];
        vm.isAddFormVisible = false;
        vm.isEditFlow = false;
        vm.expenseForm = {};

        // Method declarations
        vm.createExpense = createExpense;
        vm.resetExpense = resetExpense;
        vm.saveExpense = saveExpense;
        vm.editExpense = editExpense;
        vm.deleteExpense = deleteExpense;

        // Method implementations

        // Creating the default expense Object 
        function createExpense() {
            vm.isAddFormVisible = true;
            vm.expenseForm = dataService.getDefaultExpense();
        };

        // Reseting the form elements
        function resetExpense(form) {
            if (form) {
                form.$setPristine();
                form.$setValidity();
            }
            vm.expenseForm = {};
            vm.isAddFormVisible = false;
        }

        // Saving the New Record / Updating the Selected Data
        function saveExpense(form) {
            if (!form.$invalid) {
                var itemData = getDataById(vm.expenseDatasource, vm.expenseForm['id']);
                vm.isEditFlow = false;

                // if data is Edit mode
                if (itemData) {
                    var _index = vm.expenseDatasource.indexOf(itemData);
                    vm.expenseDatasource.splice(_index, 1);
                    vm.expenseDatasource.splice(_index, 0, vm.expenseForm);

                    dataService.getExpenseData().splice(_index, 1);
                    dataService.getExpenseData().splice(_index, 0, vm.expenseForm);
                } else {
                    vm.expenseDatasource.push(vm.expenseForm);
                    dataService.setExpenseData(vm.expenseForm);
                }
                vm.isAddFormVisible = false;
                vm.resetExpense(form);
            }

        }
        // Modifing the selected Item 
        function editExpense(itemData) {
            if (itemData['ExpenseStatus'] != 'Reimbursed') {
                itemData = angular.copy(itemData);
                vm.isAddFormVisible = true;
                vm.isEditFlow = true;
                vm.expenseForm = itemData;
            }
        }
        // Removing the selected Item from the expenseDatasource
        function deleteExpense(itemData) {
            if (itemData['ExpenseStatus'] != 'Reimbursed') {
                var _index = vm.expenseDatasource.indexOf(itemData);
                vm.expenseDatasource.splice(_index, 1);
                dataService.getExpenseData().splice(_index, 1);
            }
        }
        // Geting the ItemData from the Array based on 'ID'
        function getDataById(list, id) {
            var obj = null;
            for (var i = list.length - 1; i >= 0; i--) {
                if (list[i]['id'] == id) {
                    obj = list[i];
                    break;
                }
            }
            return obj;
        }
    }
})();
