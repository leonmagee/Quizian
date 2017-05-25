import React, {Component} from 'react';
var defaultStyles = require('../Styles/DefaultStyles');
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop,
} from 'react-native-svg';

const defaultProps = {
    svg_size: 30,
    svg_scale: 0.04,
};

class SvgElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            svg_data: props.svg_data,
            svg_size: props.svg_size,
            svg_scale: props.svg_scale,
        }
    }

    render() {
        var svg_paths = this.state.svg_data.map((item, index) => {
            return (
                <Path key={index} x="3" y="3" fill="#555" scale={this.state.svg_scale} height="100" width="100" d={item} />
            )
        });
        return (
            <Svg
                height={this.state.svg_size}
                width={this.state.svg_size}
                style={defaultStyles.detailSvg}
            >
                {svg_paths}
            </Svg>
        )
    }
}

SvgElement.defaultProps = defaultProps;

module.exports = SvgElement;