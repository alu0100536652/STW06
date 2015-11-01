var expect = chai.expect,
    should = chai.should();
    

  var sandbox;  
  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create(); 
    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  }); 
  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

describe("TEST: Converter Lib", function() {
    
  describe("Constructor", function() {
    it("Measure instance - Default value of Measure",function() {
      var measure = new Measure();
      expect(measure.value).to.equal(0);
    });
    
    it("Temperature instance - Value of Temperature is 12C",function() {
      var temperature = new Temperature(12,"C");
      expect(temperature.value).to.equal(12);
    });
     
    it("Distance instance - Type of distance should be String", function() {
      var distance = new Distance(3,"M");
      expect(distance.type).to.be.a('string');
    });
    
    it("Celsius instance - Value of Temperature is 0C",function() {
      var celsius = new Celsius(0);
      expect(celsius.value).to.equal(0);
    });
    
    it("Farenheit instance - Type of Farenheit should be Number", function() {
      var farenheit = new Farenheit(32);
      expect(farenheit.value).to.be.a('number');
    });
    
    it("Meter instance - 12 Meter should be 12", function() {
      var meter = new Meter(12);
      expect(meter.value).to.equal(12);
    });
    
    it("Centimeter instance - 21 Centimeter should be 21", function() {
      var centimeter = new Centimeter(21);
      expect(centimeter.value).to.equal(21);
    });
  });
  
  describe("Methods", function() {
    it("Celsius toString() - ", function() {
        var celsius = new Celsius(23);
        expect(celsius.toString()).to.equal("23.00 Celsius")
    });
    
    it("Farenheit toString() - ", function() {
        var farenheit = new Farenheit(25);
        expect(farenheit.toString()).to.equal("25.00 Farenheit")
    });
    
    it("Celsius toFarenheit() - ",function(){
        var celsius = new Celsius(0);
        celsius.toFarenheit().toString().should.equal(new Farenheit(32).toString());
    });
    
    it("Farenheit toCelsius() - ",function(){
        var farenheit = new Farenheit(32);
        farenheit.toCelsius().toString().should.equal(new Celsius(0).toString());
    });
    
    it("Measure toString() - ", function() {
        var measure = new Measure(10,'v');
        measure.toString().should.equal("10.00v");
    });
    
    it("Meter toCentimeter() - ",function(){
        var meter = new Meter(21);
        meter.toCentimeter().toString().should.equal(new Centimeter(2100).toString());
    });
    
    it("Meter toString() - ", function() {
        var meter = new Meter(10);
        meter.toString().should.equal("10.00 Metros");
    });
    
    it("Meter toCentimeter() - ",function(){
        var centimeter = new Centimeter(100);
        centimeter.toMeter().toString().should.equal(new Meter(1).toString());
    });
    
    it("Meter toString() - ", function() {
        var centimeter = new Centimeter(10);
        centimeter.toString().should.equal("10.00 Centimetros");
    });
      
  });
  
});