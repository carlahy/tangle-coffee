function setUpTangle () {

	var tangle = new Tangle(document.getElementById("carbon-calculator-coffee"), {

		initialize: function() {
			this.customerPercent = 50;
		},

		update: function() {
			this.custPercent = this.customerPercent/100;
			this.moneySavedCollective = 1968 * this.custPercent * 0.25;
			this.landfillSaved = 1968 * 25.5 * this.custPercent;
			this.carbonSaved = (0.569*1968) * this.custPercent;
			this.carbonEquivalent = this.carbonSaved / 0.078;
		}
	});

}
