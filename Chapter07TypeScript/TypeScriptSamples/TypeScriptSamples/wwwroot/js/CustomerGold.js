System.register(["./CustomerBase"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var CustomerBase_1, CustomerGold;
    return {
        setters: [
            function (CustomerBase_1_1) {
                CustomerBase_1 = CustomerBase_1_1;
            }
        ],
        execute: function () {
            CustomerGold = (function (_super) {
                __extends(CustomerGold, _super);
                function CustomerGold() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = "Gold Customer";
                    _this.numberOfYearsCustomer = 15;
                    return _this;
                }
                CustomerGold.prototype.discountPercent = function () {
                    return .20;
                };
                return CustomerGold;
            }(CustomerBase_1.CustomerBase));
            exports_1("CustomerGold", CustomerGold);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJHb2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbWVyR29sZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBa0MsZ0NBQVk7Z0JBQTlDO29CQUFBLHFFQU1DO29CQUxHLFVBQUksR0FBRyxlQUFlLENBQUM7b0JBQ3ZCLDJCQUFxQixHQUFHLEVBQUUsQ0FBQzs7Z0JBSS9CLENBQUM7Z0JBSEcsc0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0wsbUJBQUM7WUFBRCxDQUFDLEFBTkQsQ0FBa0MsMkJBQVksR0FNN0M7O1FBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbWVyQmFzZSB9IGZyb20gXCIuL0N1c3RvbWVyQmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJHb2xkIGV4dGVuZHMgQ3VzdG9tZXJCYXNlIHtcbiAgICBuYW1lID0gXCJHb2xkIEN1c3RvbWVyXCI7XG4gICAgbnVtYmVyT2ZZZWFyc0N1c3RvbWVyID0gMTU7XG4gICAgZGlzY291bnRQZXJjZW50KCkge1xuICAgICAgICByZXR1cm4gLjIwO1xuICAgIH1cbn1cbiJdfQ==