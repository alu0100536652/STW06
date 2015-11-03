(function(){
    "use strict";
    var MeasuresModule = require('./measures.js');
    
    exports.convert = function(valor)
    {
        var regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]|cm)\s*$/i,
            valor     = valor.match(regexp);
        
        if(valor)
        {
          var numero = valor[1],
              tipo   = valor[2].toLowerCase();
          
          numero = parseFloat(numero);
          console.log("Valor: " + numero + ", Tipo: " + tipo);
          
          switch (tipo) {
            case 'c':
              var celsius = new MeasuresModule.Celsius(numero);
              return celsius.toFarenheit().toString();
              break;
            case 'f':
              var farenheit = new MeasuresModule.Farenheit(numero);
              return farenheit.toCelsius().toString();
              break;
            case 'm':
              var metros = new MeasuresModule.Meter(numero);
              return metros.toCentimeter().toString();
              break;
            case 'cm':
              var centimetros = new MeasuresModule.Centimeter(numero);
              return centimetros.toMeter().toString();
              break;
            
            default:
              var medida = new MeasuresModule.Measure(numero,tipo);
              return medida.toString();
          }
        }
        else
          return "";
    }
    
})(this);