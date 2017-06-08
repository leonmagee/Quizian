if (this.state.geography_true || this.state.geography_false) {
    if (!this.state.geography_false) {
        let totalPerc = this.state.totalPercents
        totalPerc[4].percent = 100
        this.setState({
            totalPercents: totalPerc
        })
    } else if (this.state.geography_true) {
        let geographyTotal = this.state.geography_true + this.state.geography_false
        let geographyPercent = ( this.state.geography_true / geographyTotal ) * 100
        let geographyPercentFinal = geographyPercent.toFixed(0)
        let totalPerc = this.state.totalPercents
        totalPerc[4].percent = geographyPercentFinal
        this.setState({
            totalPercents: totalPerc
        })
    }
}