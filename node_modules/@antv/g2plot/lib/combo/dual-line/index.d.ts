import BasePlot, { PlotConfig } from '../../base/plot';
import DualLineLayer, { DualLineViewConfig } from './layer';
export interface DualLineConfig extends DualLineViewConfig, PlotConfig {
}
export default class DualLine extends BasePlot<DualLineConfig> {
    static getDefaultOptions: typeof DualLineLayer.getDefaultOptions;
    createLayers(props: any): void;
}
