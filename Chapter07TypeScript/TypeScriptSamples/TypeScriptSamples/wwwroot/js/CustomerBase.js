System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerBase;
    return {
        setters: [],
        execute: function () {
            CustomerBase = (function () {
                function CustomerBase() {
                    this.name = "Customer Base";
                    this.numberOfYearsCustomer = 0;
                }
                CustomerBase.prototype.discountPercent = function () {
                    return .01 * this.numberOfYearsCustomer;
                };
                return CustomerBase;
            }());
            exports_1("CustomerBase", CustomerBase);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXJCYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0N1c3RvbWVyQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLGVBQWUsQ0FBQztvQkFDdkIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO2dCQUk5QixDQUFDO2dCQUhHLHNDQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0wsbUJBQUM7WUFBRCxDQUFDLEFBTkQsSUFNQzs7UUFHRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUN1c3RvbWVyIH0gZnJvbSBcIi4vSUN1c3RvbWVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXN0b21lckJhc2UgaW1wbGVtZW50cyBJQ3VzdG9tZXIge1xuICAgIG5hbWUgPSBcIkN1c3RvbWVyIEJhc2VcIjtcbiAgICBudW1iZXJPZlllYXJzQ3VzdG9tZXIgPSAwO1xuICAgIGRpc2NvdW50UGVyY2VudCgpIHtcbiAgICAgICAgcmV0dXJuIC4wMSAqIHRoaXMubnVtYmVyT2ZZZWFyc0N1c3RvbWVyO1xuICAgIH1cbn1cblxuXG4iXX0=