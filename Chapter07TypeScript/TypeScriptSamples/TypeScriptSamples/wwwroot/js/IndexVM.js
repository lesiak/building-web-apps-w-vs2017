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
                    this.loadProducts();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhWTS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmRleFZNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7b0JBRVksb0JBQWUsR0FBYyxJQUFJLHFDQUFpQixFQUFFLENBQUM7b0JBRXJELGdCQUFXLEdBQW9CLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQW9EeEQsQ0FBQztnQkFsREcsNkJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO29CQUM1QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw2QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7b0JBQzVDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDJCQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFVQztvQkFURyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXBCLElBQUksYUFBYSxHQUFXLHFDQUFxQyxDQUFDO29CQUVsRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQzVCLGFBQWEsSUFBSSxhQUFXLE9BQU8sQ0FBQyxJQUFJLGlCQUFZLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFZLENBQUM7b0JBQy9HLENBQUMsQ0FBQyxDQUFDO29CQUVILENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7Z0JBQ3JELENBQUM7Z0JBRU8sOEJBQVksR0FBcEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsK0JBQWEsR0FBYjtvQkFDSSxJQUFJLEdBQUcsR0FBRyxhQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBTSxDQUFDO29CQUNqRCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTCxjQUFDO1lBQUQsQ0FBQyxBQXhERCxJQXdEQzs7WUFFRCw2QkFBVyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsRUFBQztZQUUzQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNkLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbEIsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBSUgsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDdXN0b21lciB9IGZyb20gXCIuL0lDdXN0b21lclwiO1xuaW1wb3J0IHsgQ3VzdG9tZXJCcm9uemUgfSBmcm9tIFwiLi9DdXN0b21lckJyb256ZVwiO1xuaW1wb3J0IHsgQ3VzdG9tZXJHb2xkIH0gZnJvbSBcIi4vQ3VzdG9tZXJHb2xkXCJcbmltcG9ydCB7IEN1c3RvbWVyU2lsdmVyIH0gZnJvbSBcIi4vQ3VzdG9tZXJTaWx2ZXJcIjtcbmltcG9ydCB7IEN1c3RvbWVyQW5vbnltb3VzIH0gZnJvbSBcIi4vQ3VzdG9tZXJBbm9ueW1vdXNcIjtcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4vSVByb2R1Y3RcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9Qcm9kdWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleFZtIHtcblxuICAgIHByaXZhdGUgY3VycmVudEN1c3RvbWVyOiBJQ3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJBbm9ueW1vdXMoKTtcblxuICAgIHByaXZhdGUgcHJvZHVjdExpc3Q6IEFycmF5PElQcm9kdWN0PiA9IG5ldyBBcnJheSgwKTtcblxuICAgIGxvZ2luQnJvbnplKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDdXN0b21lciA9IG5ldyBDdXN0b21lckJyb256ZSgpO1xuICAgICAgICB0aGlzLnNldFdlbGNvbWVNc2coKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBsb2dpblNpbHZlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXJTaWx2ZXIoKTtcbiAgICAgICAgdGhpcy5zZXRXZWxjb21lTXNnKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgbG9naW5Hb2xkKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDdXN0b21lciA9IG5ldyBDdXN0b21lckdvbGQoKTtcbiAgICAgICAgdGhpcy5zZXRXZWxjb21lTXNnKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVByb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2R1Y3RzKCkge1xuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0cygpO1xuXG4gICAgICAgIGxldCBodG1sVG9EaXNwbGF5OiBzdHJpbmcgPSBcIjx0aD5Qcm9kdWN0IE5hbWU8L3RoPjx0aD5QcmljZTwvdGg+XCI7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgaHRtbFRvRGlzcGxheSArPSBgPHRyPjx0ZD4ke3Byb2R1Y3QubmFtZX08L3RkPjx0ZD4ke3Byb2R1Y3QuY3VycmVudFByaWNlKHRoaXMuY3VycmVudEN1c3RvbWVyKX08L3RkPjwvdHI+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNwcm9kdWN0c1RhYmxlXCIpWzBdLmlubmVySFRNTCA9IGh0bWxUb0Rpc3BsYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkUHJvZHVjdHMoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QubGVuZ3RoID0gMDtcblxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDFcIiwgMTAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgMlwiLCAyMDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCAzXCIsIDMwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDRcIiwgNDAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgNVwiLCA1MDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA2XCIsIDYwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDdcIiwgNzAwLjAwKSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChcIlByb2R1Y3QgOFwiLCA4MDAuMDApKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KFwiUHJvZHVjdCA5XCIsIDkwMC4wMCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QoXCJQcm9kdWN0IDEwXCIsIDEwMDAuMDApKTtcbiAgICB9XG5cbiAgICBzZXRXZWxjb21lTXNnKCkge1xuICAgICAgICB2YXIgbXNnID0gYFdlbGNvbWUgJHt0aGlzLmN1cnJlbnRDdXN0b21lci5uYW1lfWA7XG4gICAgICAgICQoXCIjY3VzdG9tZXJOYW1lXCIpWzBdLmlubmVyVGV4dCA9IG1zZztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGxldCBpbmRleFZtSW5zdGFuY2UgPSBuZXcgSW5kZXhWbSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgaW5kZXhWbUluc3RhbmNlLnNldFdlbGNvbWVNc2coKTtcbiAgICBpbmRleFZtSW5zdGFuY2UuZGlzcGxheVByb2R1Y3RzKCk7XG59KTtcblxuJCgnI2xvZ2luQnJvbnplJykuY2xpY2soKCkgPT4ge1xuICAgIGluZGV4Vm1JbnN0YW5jZS5sb2dpbkJyb256ZSgpO1xufSk7XG5cbiQoJyNsb2dpblNpbHZlcicpLmNsaWNrKCgpID0+IHtcbiAgICBpbmRleFZtSW5zdGFuY2UubG9naW5TaWx2ZXIoKTtcbn0pO1xuXG4kKCcjbG9naW5Hb2xkJykuY2xpY2soKCkgPT4ge1xuICAgIGluZGV4Vm1JbnN0YW5jZS5sb2dpbkdvbGQoKTtcbn0pO1xuXG5cblxuIl19