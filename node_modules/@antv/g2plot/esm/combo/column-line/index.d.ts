import BasePlot, { PlotConfig } from '../../base/plot';
import ColumnLineLayer, { ColumnLineViewConfig } from './layer';
export interface ColumnLineConfig extends ColumnLineViewConfig, PlotConfig {
}
export default class ColumnLine extends BasePlot<ColumnLineConfig> {
    static getDefaultOptions: typeof ColumnLineLayer.getDefaultOptions;
    createLayers(props: any): void;
}
