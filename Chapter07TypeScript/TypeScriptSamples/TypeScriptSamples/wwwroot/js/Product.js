System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters: [],
        execute: function () {
            Product = (function () {
                function Product(nameValue, basePriceValue) {
                    this.name = "";
                    this.basePrice = 0.0;
                    this.name = nameValue;
                    this.basePrice = basePriceValue;
                }
                Product.prototype.currentPrice = function (customer) {
                    var discount = this.basePrice * customer.discountPercent();
                    return this.basePrice - discount;
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFLSSxpQkFBWSxTQUFpQixFQUFFLGNBQXNCO29CQUhyRCxTQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNGLGNBQVMsR0FBRyxHQUFHLENBQUM7b0JBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCw4QkFBWSxHQUFaLFVBQWEsUUFBbUI7b0JBQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0wsY0FBQztZQUFELENBQUMsQUFkRCxJQWNDOztRQUdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuL0lQcm9kdWN0XCI7XG5pbXBvcnQgeyBJQ3VzdG9tZXIgfSBmcm9tIFwiLi9JQ3VzdG9tZXJcIjtcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3QgaW1wbGVtZW50cyBJUHJvZHVjdCB7XG5cbiAgICBuYW1lID0gXCJcIjtcbiAgICBwcml2YXRlIGJhc2VQcmljZSA9IDAuMDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWVWYWx1ZTogc3RyaW5nLCBiYXNlUHJpY2VWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVWYWx1ZTtcbiAgICAgICAgdGhpcy5iYXNlUHJpY2UgPSBiYXNlUHJpY2VWYWx1ZTtcbiAgICB9XG5cbiAgICBjdXJyZW50UHJpY2UoY3VzdG9tZXI6IElDdXN0b21lcikge1xuICAgICAgICBsZXQgZGlzY291bnQgPSB0aGlzLmJhc2VQcmljZSAqIGN1c3RvbWVyLmRpc2NvdW50UGVyY2VudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUHJpY2UgLSBkaXNjb3VudDtcbiAgICB9XG59XG5cblxuIl19