(function() {
    'use strict';

    expApp.service('dataService', [dataService]);

    function dataService() {
        var dataSource = [];

        function getDefaultExpense() {
            var obj = {};
            obj['id'] = Math.floor(Math.random() * 200);//randomNumberBetween 0 and 200
            obj['Name'] = '';
            obj['Total_Expense'] = '';
            obj['Expense_Date'] = '';
            obj['Message'] = '';
            obj['ExpenseStatus'] = 'New';           
            return obj;
        }

        function setExpenseData(item) {
            dataSource.push(item);
        }

        function getExpenseData() {
            return dataSource;
        }
        return {
            getExpenseData: getExpenseData,
            setExpenseData: setExpenseData,
            getDefaultExpense: getDefaultExpense
        };
    }
})();
