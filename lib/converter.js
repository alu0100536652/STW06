(function(exports) {
    "use strict";
    
    function Measure(value,type) {
        this.value = value || 0;
        this.type = type || "Undefined";
        this.toString = function()
        {
            return this.value.toFixed(2) + this.type;
        }
    }
    
    function Temperature(value,type) {
        Measure.call(this,value,type);
    }
    
    function Distance(value,type) {
        Measure.call(this,value,type);
    }
    
    function Celsius(value) {
        this.tipo = 'c';
        Temperature.call(this, value, this.type);
        this.toFarenheit = function()
        {
            return new Farenheit((this.value * 9/5) + 32);
        }
        this.toString = function()
        {
            return this.value.toFixed(2)  + " Celsius";
        }
    }
    
    function Farenheit(value) {
        this.tipo = 'f';
        Temperature.call(this, value, this.type);
        this.toCelsius = function()
        {
            return new Celsius((this.value - 32)  * (5/9));
        }
        this.toString = function()
        {
            return this.value.toFixed(2)  + " Farenheit";
        }
    }
    
    exports.Measure = Measure;
    exports.Temperature = Temperature;
    exports.Celsius = Celsius;
    exports.Farenheit = Farenheit;
    exports.Distance = Distance;
    
})(this);