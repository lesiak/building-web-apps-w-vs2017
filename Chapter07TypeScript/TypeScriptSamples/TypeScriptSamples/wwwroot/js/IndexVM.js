System.register(["./CustomerBronze", "./CustomerGold", "./CustomerSilver", "./CustomerAnonymous", "./Product"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerBronze_1, CustomerGold_1, CustomerSilver_1, CustomerAnonymous_1, Product_1, IndexVm, indexVmInstance;
    return {
        setters: [
            function (CustomerBronze_1_1) {
                CustomerBronze_1 = CustomerBronze_1_1;
            },
            function (CustomerGold_1_1) {
                CustomerGold_1 = CustomerGold_1_1;
            },
            function (CustomerSilver_1_1) {
                CustomerSilver_1 = CustomerSilver_1_1;
            },
            function (CustomerAnonymous_1_1) {
                CustomerAnonymous_1 = CustomerAnonymous_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            }
        ],
        execute: function () {
            IndexVm = (function () {
                function IndexVm() {
                    this.currentCustomer = new CustomerAnonymous_1.CustomerAnonymous();
                    this.productList = new Array(0);
                    this.loadProducts();
                }
                IndexVm.prototype.loginBronze = function () {
                    this.currentCustomer = new CustomerBronze_1.CustomerBronze();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.loginSilver = function () {
                    this.currentCustomer = new CustomerSilver_1.CustomerSilver();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.loginGold = function () {
                    this.currentCustomer = new CustomerGold_1.CustomerGold();
                    this.setWelcomeMsg();
                    this.displayProducts();
                };
                IndexVm.prototype.displayProducts = function () {
                    var _this = this;
                    var htmlToDisplay = "<th>Product Name</th><th>Price</th>";
                    this.productList.forEach(function (product) {
                        htmlToDisplay += "<tr><td>" + product.name + "</td><td>" + product.currentPrice(_this.currentCustomer) + "</td></tr>";
                    });
                    $("#productsTable")[0].innerHTML = htmlToDisplay;
                };
                IndexVm.prototype.loadProducts = function () {
                    this.productList.length = 0;
                    this.productList.push(new Product_1.Product("Product 1", 100.00));
                    this.productList.push(new Product_1.Product("Product 2", 200.00));
                    this.productList.push(new Product_1.Product("Product 3", 300.00));
                    this.productList.push(new Product_1.Product("Product 4", 400.00));
                    this.productList.push(new Product_1.Product("Product 5", 500.00));
                    this.productList.push(new Product_1.Product("Product 6", 600.00));
                    this.productList.push(new Product_1.Product("Product 7", 700.00));
                    this.productList.push(new Product_1.Product("Product 8", 800.00));
                    this.productList.push(new Product_1.Product("Product 9", 900.00));
                    this.productList.push(new Product_1.Product("Product 10", 1000.00));
                };
                IndexVm.prototype.setWelcomeMsg = function () {
                    var msg = "Welcome " + this.currentCustomer.name;
                    $("#customerName")[0].innerText = msg;
                };
                return IndexVm;
            }());
            exports_1("IndexVm", IndexVm);
            exports_1("indexVmInstance", indexVmInstance = new IndexVm());
            $(document).ready(function () {
                indexVmInstance.setWelcomeMsg();
                indexVmInstance.displayProducts();
            });
            $('#loginBronze').click(function () {
                indexVmInstance.loginBronze();
            });
            $('#loginSilver').click(function () {
                indexVmInstance.loginSilver();
            });
            $('#loginGold').click(function () {
                indexVmInstance.loginGold();
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhWTS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmRleFZNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBTUk7b0JBSlEsb0JBQWUsR0FBYyxJQUFJLHFDQUFpQixFQUFFLENBQUM7b0JBRXJELGdCQUFXLEdBQW9CLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUdoRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsNkJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO29CQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw2QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7b0JBQzVDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDJCQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFTQztvQkFQRyxJQUFJLGFBQWEsR0FBVyxxQ0FBcUMsQ0FBQztvQkFFbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUM1QixhQUFhLElBQUksYUFBVyxPQUFPLENBQUMsSUFBSSxpQkFBWSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBWSxDQUFDO29CQUMvRyxDQUFDLENBQUMsQ0FBQztvQkFFSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVPLDhCQUFZLEdBQXBCO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELCtCQUFhLEdBQWI7b0JBQ0ksSUFBSSxHQUFHLEdBQUcsYUFBVyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQU0sQ0FBQztvQkFDakQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUwsY0FBQztZQUFELENBQUMsQUEzREQsSUEyREM7O1lBRUQsNkJBQVcsZUFBZSxHQUFHLElBQUksT0FBTyxFQUFFLEVBQUM7WUFFM0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDZCxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUVILENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUVILENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUVILENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUlILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ3VzdG9tZXIgfSBmcm9tIFwiLi9JQ3VzdG9tZXJcIjtcbmltcG9ydCB7IEN1c3RvbWVyQnJvbnplIH0gZnJvbSBcIi4vQ3VzdG9tZXJCcm9uemVcIjtcbmltcG9ydCB7IEN1c3RvbWVyR29sZCB9IGZyb20gXCIuL0N1c3RvbWVyR29sZFwiXG5pbXBvcnQgeyBDdXN0b21lclNpbHZlciB9IGZyb20gXCIuL0N1c3RvbWVyU2lsdmVyXCI7XG5pbXBvcnQgeyBDdXN0b21lckFub255bW91cyB9IGZyb20gXCIuL0N1c3RvbWVyQW5vbnltb3VzXCI7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuL0lQcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vUHJvZHVjdFwiO1xuXG5leHBvcnQgY2xhc3MgSW5kZXhWbSB7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRDdXN0b21lcjogSUN1c3RvbWVyID0gbmV3IEN1c3RvbWVyQW5vbnltb3VzKCk7XG5cbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0OiBBcnJheTxJUHJvZHVjdD4gPSBuZXcgQXJyYXkoMCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBsb2dpbkJyb256ZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJCcm9uemUoKTtcbiAgICAgICAgdGhpcy5zZXRXZWxjb21lTXNnKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgbG9naW5TaWx2ZXIoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEN1c3RvbWVyID0gbmV3IEN1c3RvbWVyU2lsdmVyKCk7XG4gICAgICAgIHRoaXMuc2V0V2VsY29tZU1zZygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGxvZ2luR29sZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJHb2xkKCk7XG4gICAgICAgIHRoaXMuc2V0V2VsY29tZU1zZygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9kdWN0cygpIHtcblxuICAgICAgICBsZXQgaHRtbFRvRGlzcGxheTogc3RyaW5nID0gXCI8dGg+UHJvZHVjdCBOYW1lPC90aD48dGg+UHJpY2U8L3RoPlwiO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGh0bWxUb0Rpc3BsYXkgKz0gYDx0cj48dGQ+JHtwcm9kdWN0Lm5hbWV9PC90ZD48dGQ+JHtwcm9kdWN0LmN1cnJlbnRQcmljZSh0aGlzLmN1cnJlbnRDdXN0b21lcil9PC90ZD48L3RyPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjcHJvZHVjdHNUYWJsZVwiKVswXS5pbm5lckhUTUwgPSBodG1sVG9EaXNwbGF5O1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFByb2R1Y3RzKCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0Lmxlbmd0aCA9IDA7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCAxXCIsIDEwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDJcIiwgMjAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgM1wiLCAzMDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA0XCIsIDQwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDVcIiwgNTAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgNlwiLCA2MDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA3XCIsIDcwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDhcIiwgODAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgOVwiLCA5MDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCAxMFwiLCAxMDAwLjAwKSk7XG4gICAgfVxuXG4gICAgc2V0V2VsY29tZU1zZygpIHtcbiAgICAgICAgdmFyIG1zZyA9IGBXZWxjb21lICR7dGhpcy5jdXJyZW50Q3VzdG9tZXIubmFtZX1gO1xuICAgICAgICAkKFwiI2N1c3RvbWVyTmFtZVwiKVswXS5pbm5lclRleHQgPSBtc2c7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBsZXQgaW5kZXhWbUluc3RhbmNlID0gbmV3IEluZGV4Vm0oKTtcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgIGluZGV4Vm1JbnN0YW5jZS5zZXRXZWxjb21lTXNnKCk7XG4gICAgaW5kZXhWbUluc3RhbmNlLmRpc3BsYXlQcm9kdWN0cygpO1xufSk7XG5cbiQoJyNsb2dpbkJyb256ZScpLmNsaWNrKCgpID0+IHtcbiAgICBpbmRleFZtSW5zdGFuY2UubG9naW5Ccm9uemUoKTtcbn0pO1xuXG4kKCcjbG9naW5TaWx2ZXInKS5jbGljaygoKSA9PiB7XG4gICAgaW5kZXhWbUluc3RhbmNlLmxvZ2luU2lsdmVyKCk7XG59KTtcblxuJCgnI2xvZ2luR29sZCcpLmNsaWNrKCgpID0+IHtcbiAgICBpbmRleFZtSW5zdGFuY2UubG9naW5Hb2xkKCk7XG59KTtcblxuXG5cbiJdfQ==