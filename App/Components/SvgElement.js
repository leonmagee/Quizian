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
    svg_height: 70,
    svg_width: 100,
    //svg_scale: 0.04,
    svg_scale: 0.14,
};

export default class SvgElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            svg_data: props.svg_data,
            svg_height: props.svg_height,
            svg_width: props.svg_width,
            svg_scale: props.svg_scale,
        }
    }

    render() {
        var svg_paths = this.state.svg_data.map((item, index) => {
            return (
                <Path key={index} x="3" y="3" fill="#FFF" scale={this.state.svg_scale} d={item} />
            )
        });
        return (
            <Svg
                height={this.state.svg_height}
                width={this.state.svg_width}
                style={[defaultStyles.detailSvg, {backgroundColor: 'red'}]}
            >
                {svg_paths}
            </Svg>
        )
    }
}

SvgElement.defaultProps = defaultProps;

//module.exports = SvgElement;